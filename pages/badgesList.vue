<template>
  <div class="badges-page">
    <section class="badge-lookup" :aria-busy="collectingData">
      <header class="badge-lookup-heading">
        <img src="~/assets/logo_low_poly.webp" alt="" aria-hidden="true" />
        <h1>Your badges</h1>
        <p v-if="!hasResults">
          Enter your email address and we’ll find any badges issued to you by BridgingTheGap.eu.com.
        </p>
      </header>

      <form v-if="!hasResults" class="badge-form" novalidate @submit.prevent="submit">
        <div class="email-field">
          <label for="badge-email">Email address</label>
          <div class="email-control" :class="{ 'has-error': invalidEmailAddress }">
            <SvgIcon :path="mdiEmailOutline" :size="20" type="mdi" aria-hidden="true" />
            <input
              id="badge-email"
              v-model="email"
              type="email"
              inputmode="email"
              autocomplete="email"
              placeholder="you@example.com"
              :aria-invalid="invalidEmailAddress"
              :aria-describedby="emailDescription"
              @blur="emailTouched = true"
              @input="clearLookupMessage"
            />
          </div>
          <p v-if="invalidEmailAddress" id="badge-email-error" class="field-error" role="alert">
            Enter a valid email address.
          </p>
        </div>

        <p
          v-if="lookupMessage"
          id="badge-lookup-status"
          class="lookup-status"
          :class="`is-${lookupMessageType}`"
          role="status"
        >
          {{ lookupMessage }}
        </p>

        <button
          class="lookup-submit"
          type="submit"
          :disabled="submitDisabled"
          :aria-describedby="lookupMessage ? 'badge-lookup-status' : undefined"
        >
          <span v-if="collectingData" class="loading-indicator" aria-hidden="true" />
          {{ collectingData ? 'Finding your badges…' : 'Find my badges' }}
        </button>

        <p class="privacy-note">
          <SvgIcon :path="mdiLockOutline" :size="19" type="mdi" aria-hidden="true" />
          <span>We’ll only use your email address to find badges issued to you.</span>
        </p>
      </form>

      <div v-else id="results" ref="resultsSection" class="badge-results">
        <div class="result-identity">
          <span>{{ submittedEmail }}</span>
        </div>

        <p class="result-count" aria-live="polite">
          {{ badgesList.length }} {{ badgesList.length === 1 ? 'result' : 'results' }} found
        </p>

        <h2 ref="resultsHeading" class="sr-only" tabindex="-1">
          Badges issued to {{ submittedEmail }}
        </h2>

        <ul class="badge-list">
          <li v-for="badge in badgesList" :key="badge.id" class="badge-result">
            <img :src="badge.image" :alt="`Artwork for ${badge.name}`" />
            <div class="badge-result-content">
              <h3>{{ badge.name }}</h3>
              <p>Badge</p>
              <time :datetime="badge.issuedOn">
                <SvgIcon :path="mdiCalendarBlankOutline" :size="17" type="mdi" aria-hidden="true" />
                Earned {{ formatDate(badge.issuedOn) }}
              </time>
            </div>
            <NuxtLink
              class="badge-action"
              :to="{ path: '/issuedBadge', query: { id: badge.id } }"
              target="_blank"
              :aria-label="`View ${badge.name} badge in a new tab`"
            >
              View badge
            </NuxtLink>
          </li>
        </ul>

        <p class="results-help">
          <SvgIcon :path="mdiHelpCircleOutline" :size="20" type="mdi" aria-hidden="true" />
          <span>
            Can’t find your badge? Make sure you’re using the email address you used when you
            registered or attended the event.
          </span>
        </p>
      </div>
    </section>

    <p v-if="!hasResults" class="recaptcha-notice">
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
        >Privacy Policy</a
      >
      and
      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"
        >Terms of Service</a
      >
      apply.
    </p>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiCalendarBlankOutline,
  mdiEmailOutline,
  mdiHelpCircleOutline,
  mdiLockOutline
} from '@mdi/js'
import { DateTime } from 'luxon'
import { type IReCaptchaComposition, useReCaptcha } from 'vue-recaptcha-v3'
import type { BadgeContent } from '~/Types/OpenBadges.20'
import type { OpenBadgesDescription20 } from '~/Types/OpenBadgesDescription.20'
import { extractBadgeId } from '~/utils/badges'

usePageSeo({
  title: 'Open Badges',
  description:
    'Look up and showcase your Open Badges earned through BridgingTheGap.eu.com workshops and educational events.',
  path: '/badgesList'
})

interface BadgeResult {
  id: string
  issuedOn: string
  description: string
  image: string
  name: string
}

type LookupMessageType = 'error' | 'not-found'

const email = ref('')
const submittedEmail = ref('')
const emailTouched = ref(false)
const collectingData = ref(false)
const recaptchaReady = ref(false)
const lookupMessage = ref('')
const lookupMessageType = ref<LookupMessageType>('error')
const badgesList = ref<BadgeResult[]>([])
const resultsSection = useTemplateRef<HTMLElement>('resultsSection')
const resultsHeading = useTemplateRef<HTMLElement>('resultsHeading')

let recaptcha: IReCaptchaComposition | undefined

if (import.meta.client) recaptcha = useReCaptcha()

const hasResults = computed(() => badgesList.value.length > 0)
const emailIsInvalid = computed(
  () => email.value.trim() !== '' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email.value.trim())
)
const invalidEmailAddress = computed(() => emailTouched.value && emailIsInvalid.value)
const submitDisabled = computed(
  () => !email.value.trim() || emailIsInvalid.value || collectingData.value || !recaptchaReady.value
)
const emailDescription = computed(() => {
  const descriptions = []
  if (invalidEmailAddress.value) descriptions.push('badge-email-error')
  if (lookupMessage.value) descriptions.push('badge-lookup-status')
  return descriptions.join(' ') || undefined
})

onMounted(async () => {
  if (!recaptcha) {
    showLookupMessage('Badge lookup is unavailable right now. Please try again later.')
    return
  }

  try {
    await recaptcha.recaptchaLoaded()
    recaptchaReady.value = true
  } catch (error) {
    console.error('reCAPTCHA failed to load:', error)
    showLookupMessage('Badge lookup is unavailable right now. Please try again later.')
  }
})

function clearLookupMessage() {
  if (lookupMessage.value) lookupMessage.value = ''
}

function showLookupMessage(message: string, type: LookupMessageType = 'error') {
  lookupMessage.value = message
  lookupMessageType.value = type
}

function normalizeDevelopmentUrl(url: string) {
  return process.env.NODE_ENV === 'development'
    ? url.replace('https://bridgingthegap.eu.com', 'http://localhost:3000')
    : url
}

async function submit() {
  emailTouched.value = true
  clearLookupMessage()

  if (submitDisabled.value || !recaptcha) return

  collectingData.value = true
  badgesList.value = []

  try {
    await recaptcha.recaptchaLoaded()
    const token = await recaptcha.executeRecaptcha('submit_message')
    const response = await $fetch('/api/getUserBadges', {
      method: 'POST',
      body: { email: email.value.trim(), token }
    })

    if (!Array.isArray(response) || response.length === 0) {
      showLookupMessage(
        `We couldn’t find any badges issued to ${email.value.trim()}. Check the address and try again.`,
        'not-found'
      )
      return
    }

    badgesList.value = await processBadges(response as unknown as BadgeContent[])
    submittedEmail.value = email.value.trim()
    window.history.replaceState(window.history.state, '', `${window.location.pathname}#results`)

    await nextTick()
    resultsHeading.value?.focus({ preventScroll: true })
    resultsSection.value?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    })
  } catch (error) {
    const statusCode = getErrorStatus(error)
    if (statusCode === 404) {
      showLookupMessage(
        `We couldn’t find any badges issued to ${email.value.trim()}. Check the address and try again.`,
        'not-found'
      )
    } else {
      console.error('Badge lookup failed:', error)
      showLookupMessage('Something went wrong while finding your badges. Please try again.')
    }
  } finally {
    collectingData.value = false
  }
}

async function processBadges(badges: BadgeContent[]): Promise<BadgeResult[]> {
  return Promise.all(
    badges.map(async (badge) => {
      const badgeDetails = await $fetch<OpenBadgesDescription20>(
        normalizeDevelopmentUrl(badge.badge)
      )
      const id = extractBadgeId(badge.id)

      if (!id) throw new Error(`Invalid badge assertion ID: ${badge.id}`)

      return {
        id,
        issuedOn: badge.issuedOn,
        description: badgeDetails.description,
        image: normalizeDevelopmentUrl(badge.image),
        name: badgeDetails.name
      }
    })
  )
}

function getErrorStatus(error: unknown) {
  if (!error || typeof error !== 'object') return undefined
  const fetchError = error as { statusCode?: number; response?: { status?: number } }
  return fetchError.statusCode ?? fetchError.response?.status
}

function formatDate(value: string) {
  const locale = import.meta.client ? navigator.language : 'en'
  return DateTime.fromISO(value)
    .setLocale(locale)
    .toLocaleString({ day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<style scoped>
.badges-page {
  display: flex;
  width: min(100%, 58rem);
  min-height: calc(100dvh - 8.5rem);
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) 0 1.5rem;
  flex-direction: column;
  justify-content: center;
}

.badge-lookup {
  width: 100%;
}

.badge-lookup-heading {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.badge-lookup-heading img {
  width: 7rem;
  height: 4.5rem;
  margin-bottom: 0.35rem;
  filter: grayscale(1) brightness(0);
  object-fit: contain;
}

:global(.dark .badge-lookup-heading img) {
  filter: grayscale(1) brightness(0) invert(1);
}

.badge-lookup-heading h1 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.35rem);
  line-height: 1.05;
  letter-spacing: -0.035em;
}

.badge-lookup-heading p {
  max-width: 52ch;
  margin: 0.65rem 0 0;
  color: var(--editorial-muted);
  font-size: 0.95rem;
  line-height: 1.5;
}

.badge-form {
  display: flex;
  width: min(100%, 31rem);
  margin: 1.5rem auto 0;
  flex-direction: column;
}

.email-field label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.82rem;
  font-weight: 700;
}

.email-control {
  display: flex;
  align-items: center;
  min-height: 3.1rem;
  padding: 0 0.85rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.4rem;
  color: var(--editorial-muted);
  background: var(--editorial-surface);
  gap: 0.65rem;
}

.email-control:focus-within {
  border-color: var(--editorial-text);
}

.email-control.has-error {
  border-color: currentColor;
  color: #a52a2a;
}

.email-control input {
  width: 100%;
  min-width: 0;
  padding: 0.8rem 0;
  border: 0;
  outline: 0;
  color: var(--editorial-text);
  background: transparent;
  font: inherit;
}

.email-control input::placeholder {
  color: var(--editorial-muted);
}

.field-error,
.lookup-status {
  margin: 0.45rem 0 0;
  font-size: 0.8rem;
  line-height: 1.4;
}

.field-error,
.lookup-status.is-error {
  color: #a52a2a;
}

:global(.dark .field-error),
:global(.dark .lookup-status.is-error) {
  color: #ffaaaa;
}

.lookup-status.is-not-found {
  color: var(--editorial-muted);
}

.lookup-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: min(100%, 16rem);
  min-height: 3rem;
  margin: 1rem auto 0;
  padding: 0.65rem 1.25rem;
  border: 1px solid var(--editorial-text);
  border-radius: 0.35rem;
  color: var(--editorial-bg);
  background: var(--editorial-text);
  font-weight: 700;
  gap: 0.55rem;
}

.lookup-submit:hover:not(:disabled) {
  background: var(--editorial-accent-hover);
}

.lookup-submit:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.loading-indicator {
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: lookup-spin 0.75s linear infinite;
}

.privacy-note {
  display: flex;
  align-items: flex-start;
  max-width: 25rem;
  margin: 0.85rem auto 0;
  color: var(--editorial-muted);
  font-size: 0.78rem;
  line-height: 1.45;
  gap: 0.55rem;
}

.privacy-note svg {
  flex: 0 0 auto;
}

.recaptcha-notice {
  margin: 1.75rem 0 0;
  color: var(--editorial-muted);
  font-size: 0.7rem;
  text-align: center;
}

.recaptcha-notice a {
  color: var(--editorial-text);
  text-decoration: underline;
  text-underline-offset: 0.16rem;
}

.badge-results {
  margin-top: 0.6rem;
  scroll-margin-top: 6rem;
}

.result-identity {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.65rem;
  color: var(--editorial-muted);
  font-size: 0.85rem;
  gap: 0.9rem;
}

.result-count {
  margin: 0.45rem 0 0.85rem;
  color: var(--editorial-muted);
  font-size: 0.82rem;
  text-align: center;
}

.badge-list {
  display: grid;
  margin: 0;
  padding: 0;
  gap: 0.7rem;
  list-style: none;
}

.badge-result {
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr) auto;
  align-items: center;
  min-height: 6.2rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--editorial-border);
  border-radius: 0.4rem;
  background: var(--editorial-surface);
  gap: 1rem;
}

.badge-result > img {
  width: 4rem;
  height: 4rem;
  filter: grayscale(1);
  object-fit: contain;
}

.badge-result h3 {
  margin: 0;
  font-size: 1rem;
  line-height: 1.25;
}

.badge-result-content > p {
  margin: 0.2rem 0 0;
  color: var(--editorial-muted);
  font-size: 0.76rem;
}

.badge-result time {
  display: flex;
  align-items: center;
  margin-top: 0.45rem;
  color: var(--editorial-muted);
  font-size: 0.76rem;
  gap: 0.35rem;
}

.badge-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 7.5rem;
  min-height: 2.75rem;
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.35rem;
  color: var(--editorial-text);
  background: var(--editorial-bg);
  font-size: 0.8rem;
  font-weight: 700;
}

.badge-action:hover {
  border-color: var(--editorial-text);
  background: var(--editorial-surface-muted);
}

.results-help {
  display: flex;
  align-items: flex-start;
  max-width: 36rem;
  margin: 1.15rem auto 0;
  color: var(--editorial-muted);
  font-size: 0.8rem;
  line-height: 1.45;
  gap: 0.6rem;
}

.results-help svg {
  flex: 0 0 auto;
}

@keyframes lookup-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .loading-indicator {
    animation-duration: 1.5s;
  }
}

@media (max-width: 42rem) {
  .badges-page {
    justify-content: flex-start;
    min-height: 0;
    padding-top: 2.25rem;
  }

  .badge-result {
    grid-template-columns: 3.75rem minmax(0, 1fr);
  }

  .badge-result > img {
    width: 3.5rem;
    height: 3.5rem;
  }

  .badge-action {
    grid-column: 1 / -1;
    width: 100%;
  }
}
</style>
