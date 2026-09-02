<template>
  <div class="credential-page">
    <section v-if="pageState === 'loading'" class="credential-state" aria-live="polite">
      <span class="credential-state-icon credential-loading-icon" aria-hidden="true" />
      <p class="credential-eyebrow">Open Badge credential</p>
      <h1>Loading credential</h1>
      <p>We’re retrieving and verifying the published badge details.</p>
    </section>

    <section v-else-if="pageState !== 'ready'" class="credential-state" role="alert">
      <SvgIcon :path="mdiAlertCircleOutline" :size="42" aria-hidden="true" type="mdi" />
      <p class="credential-eyebrow">Open Badge credential</p>
      <h1>{{ errorContent.title }}</h1>
      <p>{{ errorContent.message }}</p>
      <NuxtLink class="credential-button credential-button-secondary" to="/badgesList">
        Return to badge lookup
      </NuxtLink>
    </section>

    <template v-else-if="credential">
      <header class="credential-hero">
        <div class="credential-artwork-wrap">
          <img
            class="credential-artwork"
            :src="credential.artworkUrl"
            :alt="`${credential.achievement.name} badge artwork`"
          />
        </div>

        <div class="credential-summary">
          <div class="credential-status">
            <SvgIcon :path="mdiCheckDecagramOutline" :size="20" aria-hidden="true" type="mdi" />
            Verified Open Badge
          </div>
          <p class="credential-eyebrow">Credential awarded by {{ credential.issuer.name }}</p>
          <h1>{{ credential.achievement.name }}</h1>

          <dl class="credential-metadata">
            <div>
              <dt>Issued to</dt>
              <dd>{{ credential.recipientName }}</dd>
            </div>
            <div>
              <dt>Issued on</dt>
              <dd>{{ formattedIssueDate }}</dd>
            </div>
            <div>
              <dt>Verification</dt>
              <dd>{{ credential.verificationLabel }}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Valid Open Badge</dd>
            </div>
          </dl>

          <div class="credential-actions">
            <a
              class="credential-button credential-button-primary"
              :href="linkedInLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon :path="mdiLinkedin" :size="21" aria-hidden="true" type="mdi" />
              Add to LinkedIn
              <span class="sr-only">(opens in a new tab)</span>
            </a>
            <button
              class="credential-button credential-button-secondary"
              type="button"
              @click="openJsonDialog"
            >
              <SvgIcon :path="mdiCodeJson" :size="21" aria-hidden="true" type="mdi" />
              View badge JSON
            </button>
          </div>

          <div class="credential-id">
            <span>Credential ID</span>
            <code>{{ credential.credentialId }}</code>
          </div>
        </div>
      </header>

      <main class="credential-content">
        <div class="credential-panel-grid">
          <section class="credential-panel" aria-labelledby="about-badge-heading">
            <div class="credential-panel-icon" aria-hidden="true">
              <SvgIcon :path="mdiCertificateOutline" :size="25" type="mdi" />
            </div>
            <p class="credential-eyebrow">The achievement</p>
            <h2 id="about-badge-heading">About this badge</h2>
            <p>{{ credential.achievement.description }}</p>
          </section>

          <section class="credential-panel" aria-labelledby="criteria-heading">
            <div class="credential-panel-icon" aria-hidden="true">
              <SvgIcon :path="mdiCheckAll" :size="25" type="mdi" />
            </div>
            <p class="credential-eyebrow">Requirements met</p>
            <h2 id="criteria-heading">Earning criteria</h2>
            <ul v-if="credential.criteria.items.length" class="credential-criteria">
              <li v-for="item in credential.criteria.items" :key="item">{{ item }}</li>
            </ul>
            <p v-else>{{ credential.criteria.narrative }}</p>
          </section>
        </div>

        <section class="credential-panel credential-issuer" aria-labelledby="issuer-heading">
          <div class="credential-issuer-identity">
            <img
              v-if="credential.issuerLogoUrl"
              class="credential-issuer-logo"
              :src="credential.issuerLogoUrl"
              alt=""
            />
            <div>
              <p class="credential-eyebrow">Credential authority</p>
              <h2 id="issuer-heading">Issued by {{ credential.issuer.name }}</h2>
            </div>
          </div>
          <p v-if="credential.issuer.description" class="credential-issuer-description">
            {{ credential.issuer.description }}
          </p>
          <a
            class="credential-text-link"
            :href="credential.issuer.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit issuer website
            <SvgIcon :path="mdiOpenInNew" :size="17" aria-hidden="true" type="mdi" />
            <span class="sr-only">(opens in a new tab)</span>
          </a>
        </section>

        <footer class="credential-verification-footer">
          <div>
            <SvgIcon :path="mdiShieldCheckOutline" :size="26" aria-hidden="true" type="mdi" />
            <span>
              <strong>Independently verifiable</strong>
              This credential is published as an Open Badges assertion.
            </span>
          </div>
          <div class="credential-footer-links">
            <a
              :href="credential.credentialUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="credential-text-link"
            >
              View verification data
              <SvgIcon :path="mdiOpenInNew" :size="17" aria-hidden="true" type="mdi" />
              <span class="sr-only">(opens in a new tab)</span>
            </a>
            <a class="credential-text-link" :href="`mailto:${credential.issuer.email}`">
              Contact issuer
            </a>
          </div>
        </footer>
      </main>

      <dialog
        ref="jsonDialog"
        class="credential-dialog"
        aria-labelledby="json-dialog-title"
        aria-describedby="json-dialog-description"
        @cancel="handleDialogCancel"
        @close="resetCopyStatus"
      >
        <div class="credential-dialog-header">
          <div>
            <p class="credential-eyebrow">Open Badges 2.0</p>
            <h2 id="json-dialog-title">Badge assertion JSON</h2>
          </div>
          <button
            class="credential-icon-button"
            type="button"
            aria-label="Close badge JSON"
            @click="closeJsonDialog"
          >
            <SvgIcon :path="mdiClose" :size="24" aria-hidden="true" type="mdi" />
          </button>
        </div>
        <p id="json-dialog-description" class="credential-dialog-description">
          This is the public, standards-compliant assertion used to verify this credential.
        </p>
        <div class="credential-json-wrap">
          <pre><code>{{ formattedJson }}</code></pre>
        </div>
        <div class="credential-dialog-actions">
          <p class="credential-copy-status" aria-live="polite">{{ copyStatus }}</p>
          <button
            ref="copyButton"
            class="credential-button credential-button-primary"
            type="button"
            @click="copyJson"
          >
            <SvgIcon
              :path="copySucceeded ? mdiCheck : mdiContentCopy"
              :size="20"
              aria-hidden="true"
              type="mdi"
            />
            {{ copySucceeded ? 'Copied' : 'Copy JSON' }}
          </button>
          <button
            class="credential-button credential-button-secondary"
            type="button"
            @click="closeJsonDialog"
          >
            Close
          </button>
        </div>
      </dialog>
    </template>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiAlertCircleOutline,
  mdiCertificateOutline,
  mdiCheck,
  mdiCheckAll,
  mdiCheckDecagramOutline,
  mdiClose,
  mdiCodeJson,
  mdiContentCopy,
  mdiLinkedin,
  mdiOpenInNew,
  mdiShieldCheckOutline
} from '@mdi/js'
import type { BadgeCredentialViewModel, OpenBadgesIssuer20 } from '~/Types/BadgeCredential'
import type { OpenBadges20 } from '~/Types/OpenBadges.20'
import type { OpenBadgesDescription20 } from '~/Types/OpenBadgesDescription.20'
import { extractBadgeId, getBadgeCriteria } from '~/utils/badges'

type PageState = 'loading' | 'ready' | 'missing' | 'invalid' | 'incomplete' | 'unavailable'

useSeoMeta({
  title: 'Badge credential',
  description: 'Verify an Open Badge credential issued by BridgingTheGap.eu.com.',
  robots: 'noindex, nofollow'
})

const route = useRoute()
const requestUrl = useRequestURL()
const pageState = ref<PageState>('loading')
const credential = ref<BadgeCredentialViewModel | null>(null)
const jsonDialog = useTemplateRef('jsonDialog')
const copyButton = useTemplateRef('copyButton')
const copyStatus = ref('')
const copySucceeded = ref(false)

const rawCredentialId = computed(() => {
  const value = route.query.id
  return Array.isArray(value) ? value[0] : value
})

function normalizeSiteUrl(value: string): string {
  try {
    const url = new URL(value, requestUrl.origin)
    if (url.hostname === 'bridgingthegap.eu.com' || url.hostname === 'www.bridgingthegap.eu.com') {
      return `${requestUrl.origin}${url.pathname}${url.search}${url.hash}`
    }
    return url.toString()
  } catch {
    return value
  }
}

function verificationLabel(type: string): string {
  return type === 'HostedBadge' ? 'Hosted verification' : type.replace(/([a-z])([A-Z])/g, '$1 $2')
}

function errorStatus(error: unknown): number | null {
  if (!error || typeof error !== 'object') return null
  const candidate = error as { status?: unknown; statusCode?: unknown }
  const status = candidate.status ?? candidate.statusCode
  return typeof status === 'number' ? status : null
}

async function loadCredential() {
  pageState.value = 'loading'
  credential.value = null

  if (!rawCredentialId.value) {
    pageState.value = 'missing'
    return
  }

  const id = extractBadgeId(rawCredentialId.value)
  if (!id) {
    pageState.value = 'invalid'
    return
  }

  try {
    const response = await $fetch<OpenBadges20>('/api/getBadgeDetails', { query: { id } })
    const assertion = response.badgeContent

    if (!assertion?.badge || !assertion.id || !response.fullName) {
      pageState.value = 'incomplete'
      return
    }

    let achievement: OpenBadgesDescription20
    let issuer: OpenBadgesIssuer20

    try {
      achievement = await $fetch<OpenBadgesDescription20>(normalizeSiteUrl(assertion.badge))
      if (!achievement?.issuer || !achievement.name || !achievement.description) {
        pageState.value = 'incomplete'
        return
      }
      issuer = await $fetch<OpenBadgesIssuer20>(normalizeSiteUrl(achievement.issuer))
    } catch (error) {
      pageState.value = errorStatus(error) === 404 ? 'incomplete' : 'unavailable'
      return
    }

    if (!issuer?.name || !issuer.email || !issuer.url) {
      pageState.value = 'incomplete'
      return
    }

    credential.value = {
      assertion,
      achievement,
      issuer,
      recipientName: response.fullName,
      credentialId: extractBadgeId(assertion.id) ?? id,
      credentialUrl: assertion.id,
      artworkUrl: normalizeSiteUrl(achievement.image || assertion.image),
      issuerLogoUrl: issuer.image ? normalizeSiteUrl(issuer.image) : null,
      issuedOn: assertion.issuedOn,
      verificationLabel: verificationLabel(assertion.verification.type),
      criteria: getBadgeCriteria(achievement)
    }
    pageState.value = 'ready'
  } catch (error) {
    console.error('Unable to load badge credential:', error)
    pageState.value = 'unavailable'
  }
}

await loadCredential()

watch(rawCredentialId, (value, previousValue) => {
  if (value !== previousValue) void loadCredential()
})

const formattedIssueDate = computed(() => {
  if (!credential.value) return ''
  const date = new Date(credential.value.issuedOn)
  if (Number.isNaN(date.getTime())) return 'Date unavailable'
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
})

const linkedInLink = computed(() => {
  if (!credential.value) return ''
  const issueDate = new Date(credential.value.issuedOn)
  const parameters = new URLSearchParams({
    startTask: 'CERTIFICATION_NAME',
    name: credential.value.achievement.name,
    organizationId: '107412373',
    issueYear: String(issueDate.getFullYear()),
    issueMonth: String(issueDate.getMonth() + 1),
    certUrl: credential.value.credentialUrl,
    certId: credential.value.credentialId
  })
  return `https://www.linkedin.com/profile/add?${parameters.toString()}`
})

const formattedJson = computed(() => JSON.stringify(credential.value?.assertion ?? {}, null, 2))

const errorContent = computed(() => {
  if (pageState.value === 'missing') {
    return {
      title: 'Credential ID required',
      message: 'Use your badge link or enter your credential ID on the badge lookup page.'
    }
  }
  if (pageState.value === 'invalid') {
    return {
      title: 'Credential ID is not valid',
      message: 'Check the badge link and try again with an eight-character ID or UUID.'
    }
  }
  if (pageState.value === 'incomplete') {
    return {
      title: 'Credential details are incomplete',
      message: 'The badge exists, but its published achievement or issuer details are unavailable.'
    }
  }
  return {
    title: 'Credential unavailable',
    message: 'We could not retrieve this badge. Check the credential ID or try again later.'
  }
})

async function openJsonDialog() {
  copyStatus.value = ''
  copySucceeded.value = false
  jsonDialog.value?.showModal()
  await nextTick()
  copyButton.value?.focus()
}

function closeJsonDialog() {
  jsonDialog.value?.close()
}

function handleDialogCancel() {
  copyStatus.value = ''
  copySucceeded.value = false
}

function resetCopyStatus() {
  copyStatus.value = ''
  copySucceeded.value = false
}

async function copyJson() {
  try {
    await navigator.clipboard.writeText(formattedJson.value)
    copySucceeded.value = true
    copyStatus.value = 'Badge JSON copied to clipboard.'
  } catch {
    copySucceeded.value = false
    copyStatus.value = 'Could not copy automatically. Select the JSON and copy it manually.'
  }
}
</script>

<style lang="scss" scoped>
.credential-page {
  width: min(100% - 2rem, 72rem);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 5.5rem) 0 4.5rem;
  color: var(--editorial-text);
}

.credential-hero {
  display: grid;
  grid-template-columns: minmax(16rem, 0.75fr) minmax(0, 1.25fr);
  align-items: center;
  gap: clamp(2.5rem, 7vw, 6.5rem);
  padding-bottom: clamp(3rem, 7vw, 5.5rem);
  border-bottom: 1px solid var(--editorial-border);
}

.credential-artwork-wrap {
  display: grid;
  min-height: 24rem;
  padding: clamp(1.5rem, 4vw, 3.5rem);
  place-items: center;
  border: 1px solid var(--editorial-border);
  background: var(--editorial-surface-muted);
}

.credential-artwork {
  width: 100%;
  max-width: 22rem;
  max-height: 22rem;
  object-fit: contain;
}

.credential-summary h1 {
  max-width: 21ch;
  margin: 0.75rem 0 1.9rem;
  font-size: clamp(2.1rem, 5vw, 3.75rem);
  line-height: 1.04;
  letter-spacing: -0.035em;
}

.credential-eyebrow {
  margin: 0;
  color: var(--editorial-muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.115em;
  text-transform: uppercase;
}

.credential-status {
  display: inline-flex;
  align-items: center;
  margin-bottom: 1.25rem;
  padding: 0.45rem 0.65rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 999px;
  gap: 0.4rem;
  font-size: 0.78rem;
  font-weight: 700;
}

.credential-metadata {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0 0 1.8rem;
  border-top: 1px solid var(--editorial-border);
  border-left: 1px solid var(--editorial-border);

  > div {
    min-width: 0;
    padding: 0.9rem 1rem;
    border-right: 1px solid var(--editorial-border);
    border-bottom: 1px solid var(--editorial-border);
  }

  dt {
    margin-bottom: 0.25rem;
    color: var(--editorial-muted);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    overflow-wrap: anywhere;
    font-size: 0.92rem;
    font-weight: 700;
  }
}

.credential-actions,
.credential-dialog-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.credential-button {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  justify-content: center;
  padding: 0.68rem 1rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.25rem;
  gap: 0.45rem;
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  transition:
    background-color 150ms ease,
    color 150ms ease;
}

.credential-button-primary {
  border-color: var(--editorial-text);
  color: var(--editorial-bg);
  background: var(--editorial-text);

  &:hover {
    color: var(--editorial-surface);
    background: var(--editorial-accent-hover);
  }
}

.credential-button-secondary {
  color: var(--editorial-text);
  background: transparent;

  &:hover {
    background: var(--editorial-surface-muted);
  }
}

.credential-id {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  color: var(--editorial-muted);
  gap: 0.45rem 0.75rem;
  font-size: 0.76rem;

  span {
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  code {
    overflow-wrap: anywhere;
    color: var(--editorial-text);
  }
}

.credential-content {
  padding-top: clamp(2.5rem, 6vw, 4.5rem);
}

.credential-panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.credential-panel {
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border: 1px solid var(--editorial-border);
  background: var(--editorial-surface);

  h2 {
    margin: 0.35rem 0 1rem;
    font-size: clamp(1.35rem, 2.8vw, 1.85rem);
  }

  > p:last-child,
  .credential-issuer-description {
    color: var(--editorial-muted);
    line-height: 1.65;
    white-space: pre-line;
  }
}

.credential-panel-icon {
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 2rem;
  place-items: center;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 999px;
}

.credential-criteria {
  display: grid;
  margin: 0;
  padding: 0;
  gap: 0.85rem;
  list-style: none;

  li {
    position: relative;
    padding-left: 1.6rem;
    color: var(--editorial-muted);
    line-height: 1.5;

    &::before {
      position: absolute;
      top: 0.18rem;
      left: 0;
      content: '✓';
      color: var(--editorial-text);
      font-weight: 700;
    }
  }
}

.credential-issuer {
  margin-top: 1rem;
}

.credential-issuer-identity {
  display: flex;
  align-items: center;
  gap: 1rem;

  h2 {
    margin-bottom: 0;
  }
}

.credential-issuer-logo {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

:global(.dark .credential-issuer-logo) {
  filter: invert(1);
}

.credential-issuer-description {
  max-width: 84ch;
  margin: 1.5rem 0;
}

.credential-text-link {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  color: var(--editorial-text);
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2rem;

  &:hover {
    text-decoration-thickness: 2px;
  }
}

.credential-verification-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 1.35rem 1.5rem;
  border: 1px solid var(--editorial-border);
  gap: 1.5rem;

  > div:first-child {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  span {
    display: flex;
    flex-direction: column;
    color: var(--editorial-muted);
    font-size: 0.78rem;
  }

  strong {
    color: var(--editorial-text);
    font-size: 0.88rem;
  }
}

.credential-footer-links {
  display: flex;
  flex: 0 0 auto;
  gap: 1rem;
}

.credential-state {
  display: flex;
  min-height: min(38rem, 70vh);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  border: 1px solid var(--editorial-border);
  background: var(--editorial-surface);
  text-align: center;

  h1 {
    margin: 0.7rem 0;
    font-size: clamp(1.8rem, 5vw, 3rem);
  }

  > p:not(.credential-eyebrow) {
    max-width: 38rem;
    margin: 0 0 1.5rem;
    color: var(--editorial-muted);
  }

  > svg,
  .credential-state-icon {
    margin-bottom: 1.25rem;
  }
}

.credential-loading-icon {
  width: 2.25rem;
  height: 2.25rem;
  border: 2px solid var(--editorial-border);
  border-top-color: var(--editorial-text);
  border-radius: 999px;
  animation: credential-spin 700ms linear infinite;
}

@keyframes credential-spin {
  to {
    transform: rotate(360deg);
  }
}

.credential-dialog {
  width: min(92vw, 56rem);
  max-height: min(86dvh, 48rem);
  margin: auto;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.35rem;
  color: var(--editorial-text);
  background: var(--editorial-surface);
  box-shadow: var(--editorial-shadow);

  &::backdrop {
    background: rgb(0 0 0 / 68%);
  }
}

.credential-dialog-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.25rem 1.25rem 0.9rem;
  border-bottom: 1px solid var(--editorial-border);
  gap: 1rem;

  h2 {
    margin: 0.2rem 0 0;
  }
}

.credential-icon-button {
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 999px;
  color: var(--editorial-text);

  &:hover {
    background: var(--editorial-surface-muted);
  }
}

.credential-dialog-description {
  margin: 0;
  padding: 1rem 1.25rem;
  color: var(--editorial-muted);
  font-size: 0.85rem;
}

.credential-json-wrap {
  max-height: min(50dvh, 30rem);
  margin: 0 1.25rem;
  overflow: auto;
  overscroll-behavior: contain;
  border: 1px solid var(--editorial-border);
  background: var(--editorial-surface-muted);

  pre {
    min-width: max-content;
    margin: 0;
    padding: 1rem;
    font-size: 0.75rem;
    line-height: 1.55;
    text-align: left;
  }
}

.credential-dialog-actions {
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 1.25rem 1.25rem;
}

.credential-copy-status {
  flex: 1 1 15rem;
  margin: 0;
  color: var(--editorial-muted);
  font-size: 0.78rem;
}

@media (max-width: 800px) {
  .credential-hero {
    grid-template-columns: 1fr;
  }

  .credential-artwork-wrap {
    min-height: 0;
  }

  .credential-artwork {
    max-width: 18rem;
    max-height: 18rem;
  }

  .credential-panel-grid {
    grid-template-columns: 1fr;
  }

  .credential-verification-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .credential-footer-links {
    flex-wrap: wrap;
  }
}

@media (max-width: 520px) {
  .credential-page {
    width: min(100% - 1.25rem, 72rem);
    padding-top: 1.5rem;
  }

  .credential-hero {
    gap: 2rem;
  }

  .credential-summary h1 {
    font-size: clamp(1.9rem, 10vw, 2.7rem);
  }

  .credential-metadata {
    grid-template-columns: 1fr;
  }

  .credential-actions {
    flex-direction: column;

    .credential-button {
      width: 100%;
    }
  }

  .credential-panel,
  .credential-verification-footer {
    padding: 1.25rem;
  }

  .credential-issuer-identity {
    align-items: flex-start;
    flex-direction: column;
  }

  .credential-footer-links {
    align-items: flex-start;
    flex-direction: column;
    gap: 0;
  }

  .credential-dialog-actions {
    align-items: stretch;
    flex-direction: column;

    .credential-button {
      width: 100%;
    }
  }

  .credential-copy-status {
    flex-basis: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .credential-loading-icon {
    animation-duration: 1.5s;
  }

  .credential-button {
    transition: none;
  }
}
</style>
