<template>
  <div class="contact-page">
    <NuxtLink class="contact-back-link" to="/">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
      Back to home
    </NuxtLink>

    <header class="contact-header">
      <p class="contact-kicker">Contact</p>
      <h1>Get in touch with us</h1>
      <p>Have a question, an idea, or something you’d like to discuss? Send us a message.</p>
    </header>

    <form class="contact-form" @submit.prevent="submit">
      <div class="contact-field">
        <label for="name">
          <span>Name</span>
          <small>Optional</small>
        </label>
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <input id="name" v-model="name" autocomplete="name" name="name" type="text" />
      </div>

      <div class="contact-field">
        <label for="email">
          <span>Email</span>
          <small>Optional</small>
        </label>
        <!-- eslint-disable vue/html-self-closing -->
        <input
          id="email"
          v-model="email"
          aria-describedby="email-help"
          autocomplete="email"
          name="email"
          type="email"
        />
        <!-- eslint-enable vue/html-self-closing -->
        <p id="email-help" class="contact-help">
          We’ll only use your email address to reply to your message.
        </p>
      </div>

      <div class="contact-field">
        <label for="emailMessage">Your message</label>
        <textarea id="emailMessage" v-model="emailMessage" name="message" required rows="10" />
      </div>

      <button
        ref="submitButton"
        class="contact-submit"
        :disabled="!emailMessage.trim() || sendingMessage"
        type="submit"
      >
        <span v-if="sendingMessage" class="contact-spinner" aria-hidden="true" />
        {{ sendingMessage ? 'Sending…' : 'Send message' }}
      </button>
    </form>

    <section class="direct-contact" aria-labelledby="direct-contact-title">
      <span class="direct-contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </span>
      <div>
        <h2 id="direct-contact-title">Prefer to reach out directly?</h2>
        <p>Feel free to email us at</p>
        <a href="mailto:info@bridgingthegap.eu.com">info@bridgingthegap.eu.com</a>
      </div>
    </section>

    <p class="recaptcha-notice">
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
      and
      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
        Terms of Service
      </a>
      apply.
    </p>

    <dialog
      ref="responseDialog"
      class="contact-response-dialog"
      aria-labelledby="contact-response-title"
      aria-describedby="contact-response-message"
      @close="restoreDialogFocus"
    >
      <div>
        <p class="contact-kicker">{{ responseKind === 'success' ? 'Thank you' : 'Try again' }}</p>
        <h2 id="contact-response-title">
          {{ responseKind === 'success' ? 'Message sent' : 'Message not sent' }}
        </h2>
        <p id="contact-response-message">{{ responseMessage }}</p>
        <button ref="dialogCloseButton" type="button" @click="closeResponseDialog">OK</button>
      </div>
    </dialog>
  </div>
</template>

<script lang="ts" setup>
import { type IReCaptchaComposition, useReCaptcha } from 'vue-recaptcha-v3'

usePageSeo({
  title: 'Contact Us',
  description:
    'Get in touch with the BridgingTheGap.eu.com team — questions, ideas, collaboration, or feedback on application integration architecture.',
  path: '/contactUs'
})

type ContactResponse = {
  status: number
  body: string
}

type ResponseKind = 'success' | 'error'

const email = ref('')
const emailMessage = ref('')
const name = ref('')
const sendingMessage = ref(false)
const responseKind = ref<ResponseKind>('success')
const responseMessage = ref('')
const responseDialog = useTemplateRef<HTMLDialogElement>('responseDialog')
const dialogCloseButton = useTemplateRef<HTMLButtonElement>('dialogCloseButton')
const submitButton = useTemplateRef<HTMLButtonElement>('submitButton')

let recaptcha: IReCaptchaComposition | undefined
let dialogTrigger: HTMLElement | null = null

if (import.meta.client) recaptcha = useReCaptcha()

onMounted(async () => {
  if (!recaptcha) return
  try {
    await recaptcha.recaptchaLoaded()
  } catch (error) {
    console.error('reCAPTCHA failed to load:', error)
  }
})

const showResponseDialog = async (kind: ResponseKind, message: string) => {
  responseKind.value = kind
  responseMessage.value = message
  dialogTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null
  await nextTick()

  if (!responseDialog.value?.open) responseDialog.value?.showModal()
  dialogCloseButton.value?.focus()
}

const closeResponseDialog = () => responseDialog.value?.close()

const restoreDialogFocus = () => {
  if (dialogTrigger?.isConnected && !dialogTrigger.hasAttribute('disabled')) {
    dialogTrigger.focus()
  } else {
    submitButton.value?.focus()
  }
  dialogTrigger = null
}

const submit = async () => {
  if (sendingMessage.value || !emailMessage.value.trim()) return

  sendingMessage.value = true
  let kind: ResponseKind = 'success'
  let message =
    'Thanks for reaching out! We’ve received your message and will get back to you soon.'

  try {
    if (!recaptcha) throw new Error('reCAPTCHA is unavailable')

    await recaptcha.recaptchaLoaded()
    const token = await recaptcha.executeRecaptcha('submit_message')
    const response = await $fetch<ContactResponse>('/api/contact', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        message: emailMessage.value,
        token
      }
    })

    if (response.status >= 400) throw new Error(response.body || 'The message could not be sent')
  } catch (error) {
    console.error('Contact form submission failed:', error)
    kind = 'error'
    message = 'Sorry, your message could not be sent. Please try again or email us directly.'
  } finally {
    sendingMessage.value = false
  }

  await showResponseDialog(kind, message)
}
</script>

<style lang="scss" scoped>
.contact-page {
  width: min(100%, 38rem);
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 3.75rem) 0 clamp(3rem, 7vw, 6rem);
  color: var(--editorial-text);
}

.contact-back-link {
  display: inline-flex;
  align-items: center;
  margin-bottom: clamp(3rem, 7vw, 4.5rem);
  color: var(--editorial-text);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  gap: 0.4rem;
}

.contact-back-link:hover {
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

.contact-back-link svg {
  width: 1.1rem;
  height: 1.1rem;
  fill: none;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.contact-header {
  margin-bottom: clamp(3rem, 7vw, 4.5rem);
}

.contact-kicker {
  margin: 0 0 0.75rem;
  color: var(--editorial-muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.contact-header h1 {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 3rem);
  letter-spacing: -0.035em;
  line-height: 1.08;
}

.contact-header > p:last-child {
  max-width: 30rem;
  margin: 1.7rem 0 0;
  color: var(--editorial-text);
  font-size: 1rem;
  line-height: 1.65;
}

.contact-form {
  display: grid;
  gap: 2rem;
}

.contact-field {
  display: grid;
  gap: 0.65rem;
}

.contact-field label {
  display: flex;
  align-items: baseline;
  color: var(--editorial-text);
  font-size: 0.9rem;
  font-weight: 700;
  gap: 1rem;
}

.contact-field label small {
  color: var(--editorial-muted);
  font-size: 0.78rem;
  font-weight: 400;
}

.contact-field input,
.contact-field textarea {
  width: 100%;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.4rem;
  color: var(--editorial-text);
  background: var(--editorial-surface);
  font: inherit;
}

.contact-field input {
  min-height: 3.35rem;
  padding: 0.7rem 0.85rem;
}

.contact-field textarea {
  min-height: 15rem;
  padding: 0.85rem;
  line-height: 1.5;
  resize: vertical;
}

.contact-field input:focus-visible,
.contact-field textarea:focus-visible {
  border-color: var(--editorial-focus);
  outline: 3px solid var(--editorial-focus);
  outline-offset: 3px;
}

.contact-help {
  margin: -0.05rem 0 0;
  color: var(--editorial-muted);
  font-size: 0.78rem;
  line-height: 1.45;
}

.contact-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 3.4rem;
  margin-top: 0.25rem;
  border: 1px solid var(--editorial-text);
  border-radius: 0.35rem;
  color: var(--editorial-bg);
  background: var(--editorial-text);
  font: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  gap: 0.55rem;
  cursor: pointer;
}

.contact-submit:hover:not(:disabled) {
  background: var(--editorial-accent-hover);
}

.contact-submit:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.contact-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid color-mix(in srgb, var(--editorial-bg) 35%, transparent);
  border-top-color: var(--editorial-bg);
  border-radius: 50%;
  animation: contact-spin 700ms linear infinite;
}

.direct-contact {
  display: flex;
  align-items: center;
  margin-top: 3.25rem;
  padding-top: 2.75rem;
  border-top: 1px solid var(--editorial-border);
  gap: 1.4rem;
}

.direct-contact-icon {
  display: grid;
  flex: 0 0 3.35rem;
  width: 3.35rem;
  height: 3.35rem;
  place-items: center;
  border-radius: 50%;
  background: var(--editorial-surface-muted);
}

.direct-contact-icon svg {
  width: 1.55rem;
  height: 1.55rem;
  fill: none;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}

.direct-contact h2 {
  margin: 0;
  font-size: 0.92rem;
}

.direct-contact p {
  margin: 0.5rem 0 0.15rem;
  color: var(--editorial-muted);
  font-size: 0.8rem;
}

.direct-contact a,
.recaptcha-notice a {
  color: var(--editorial-text);
  text-decoration: underline;
  text-underline-offset: 0.18rem;
}

.direct-contact a {
  font-size: 0.86rem;
  font-weight: 700;
}

.recaptcha-notice {
  margin: 2.7rem 0 0;
  color: var(--editorial-muted);
  font-size: 0.7rem;
  line-height: 1.55;
}

.contact-response-dialog {
  position: fixed;
  inset: 0;
  width: min(calc(100% - 2rem), 30rem);
  max-height: calc(100dvh - 2rem);
  margin: auto;
  padding: 0;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.55rem;
  color: var(--editorial-text);
  background: var(--editorial-surface);
  box-shadow: var(--editorial-shadow);
}

.contact-response-dialog::backdrop {
  background: rgb(0 0 0 / 55%);
}

.contact-response-dialog > div {
  padding: 2rem;
}

.contact-response-dialog h2 {
  margin: 0;
  font-size: 1.55rem;
}

.contact-response-dialog #contact-response-message {
  margin: 1rem 0 1.5rem;
  color: var(--editorial-muted);
  line-height: 1.55;
}

.contact-response-dialog button {
  width: 100%;
  min-height: 2.8rem;
  border: 1px solid var(--editorial-text);
  border-radius: 0.35rem;
  color: var(--editorial-bg);
  background: var(--editorial-text);
  font-weight: 700;
  cursor: pointer;
}

@keyframes contact-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 45rem) {
  .contact-page {
    padding-top: 1.5rem;
  }

  .contact-back-link {
    margin-bottom: 2.75rem;
  }

  .contact-header {
    margin-bottom: 2.75rem;
  }

  .contact-header h1 {
    font-size: clamp(2rem, 10vw, 2.65rem);
  }

  .contact-field textarea {
    min-height: 12rem;
  }

  .direct-contact {
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-spinner {
    animation: none;
  }
}
</style>
