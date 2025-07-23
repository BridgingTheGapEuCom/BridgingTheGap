<template>
  <div class="flex flex-col w-full h-full justify-between items-center">
    <div
      v-if="unsubscribed"
      class="absolute flex items-center justify-center w-screen h-screen top-0 left-0 bg-gray-500/75 transition-opacity z-10"
    >
      <div
        class="bg-white dark:bg-neutral-950 rounded-lg p-8 flex flex-col justify-center text-center"
      >
        <div>
          {{ unsubscribedMessage }}
        </div>
        <button
          :class="{
            'hover:bg-neutral-100': unsubscribed,
            'dark:hover:bg-neutral-700': unsubscribed
          }"
          :tabindex="unsubscribed ? '0' : '-1'"
          class="py-2.5 mt-5 self-center cursor-pointer w-32 bg-neutral-50 rounded-lg border border-neutral-200 dark:bg-neutral-800 dark:text-white text-neutral-600 dark:border-neutral-600"
          type="submit"
          @click="unsubscribed = false"
        >
          OK
        </button>
      </div>
    </div>
    <div class="flex flex-1 h-full justify-center">
      <div class="text-center flex flex-col items-center justify-center">
        <p>We get it, inboxes can be overwhelming.</p>
        <p>
          To unsubscribe from all future emails, just enter your email address below and hit the
          "Unsubscribe" button.
        </p>
        <p>No hard feelings, and you're welcome back anytime!</p>
        <form class="flex flex-col mt-10" @submit.prevent="submit">
          <div class="min-w-80 relative">
            <label class="block mb-2" for="email">Your Email Address</label>
            <input
              id="email"
              v-model="email"
              :class="{ invalidEmail: invalidEmailAddress, 'mb-5': !invalidEmailAddress }"
              aria-describedby="optional name input"
              class="border text-center border-neutral-200 bg-transparent rounded-lg block w-full p-2.5 dark:border-neutral-600 placeholder-neutral-400 dark:placeholder-neutral-400"
            />
            <div v-if="invalidEmailAddress" class="text-red-500">Invalid email address</div>
          </div>
          <button
            :class="{
              'hover:bg-neutral-100': email,
              'dark:hover:bg-neutral-700': email,
              'cursor-not-allowed': !email || invalidEmailAddress,
              'opacity-50': !email || invalidEmailAddress,
              'cursor-pointer': email && !invalidEmailAddress
            }"
            :disabled="!email || invalidEmailAddress"
            :tabindex="email ? '0' : '-1'"
            class="py-2.5 mt-3 self-center w-32 bg-neutral-50 rounded-lg border border-neutral-200 dark:bg-neutral-800 dark:text-white text-neutral-600 dark:border-neutral-600"
            type="submit"
          >
            <template v-if="unsubscribing">
              <div class="flex w-full justify-center">
                <svg
                  class="animate-spin text-black dark:text-gray-100 hover:text-black dark:hover:text-white mr-2 max-h-5 max-w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  />
                </svg>
                <span>Processing...</span>
              </div>
            </template>
            <template v-else>Unsubscribe</template>
          </button>
        </form>
      </div>
    </div>
    <div class="text-center w-full">
      <div class="text-xs text-gray-600 dark:text-gray-400">
        This site is protected by reCAPTCHA and the Google
        <a
          class="link items-end text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          href="https://policies.google.com/privacy"
          target="_blank"
          >Privacy Policy</a
        >
        and
        <a
          class="link items-end text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          href="https://policies.google.com/terms"
          target="_blank"
          >Terms of Service</a
        >
        apply.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type IReCaptchaComposition, useReCaptcha } from 'vue-recaptcha-v3'

interface ApiResponse {
  status: number
  message: string
}

const email = ref('')
const unsubscribed = ref(false)
const unsubscribing = ref(false)
const unsubscribedMessage = ref('')

let recaptcha: IReCaptchaComposition | undefined = undefined

if (import.meta.client) {
  recaptcha = useReCaptcha()
}

/**
 * onMounted
 */
onMounted(async () => {
  if (recaptcha) {
    try {
      await recaptcha.recaptchaLoaded()
    } catch (error) {
      console.error('reCAPTCHA failed to load:', error)
    }
  }
})

/**
 * A computed property that determines if the provided email address is invalid.
 *
 * The property evaluates to `true` if the `email` value is not an empty string
 * and does not match the standard email validation regular expression pattern.
 * Otherwise, it evaluates to `false`.
 *
 * @type {ComputedRef<boolean>}
 */
const invalidEmailAddress: ComputedRef<boolean> = computed(() => {
  return email.value !== '' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)
})

/**
 * An asynchronous function to handle the unsubscribe process for a user.
 *
 * The function performs the following tasks:
 * - Validates the presence of an email address, ensures it is not an invalid format, and verifies that the reCAPTCHA is ready.
 * - Sets a flag to indicate that the unsubscribe process is in progress.
 * - Executes the reCAPTCHA for verification and retrieves a token.
 * - Sends an HTTP POST request to the server endpoint `/api/removeSubscriber` with the email and token payload to remove the subscriber.
 * - Updates the status message based on the server response (either a failure or success message).
 * - Handles reCAPTCHA errors gracefully and logs the exception.
 * - Resets the unsubscribe progress indicator upon completion and updates the state to confirm unsubscription.
 *
 * @async
 * @function submit
 * @throws Will log an error to the console if the reCAPTCHA fails to load or execute.
 */
const submit = async () => {
  if (!email.value || invalidEmailAddress.value || !recaptcha) {
    return
  }

  unsubscribing.value = true

  try {
    await recaptcha.recaptchaLoaded()

    const token = await recaptcha.executeRecaptcha('submit_message')

    const response: ApiResponse = await $fetch('/api/removeSubscriber', {
      method: 'POST',
      body: {
        email: email.value,
        token
      }
    })

    if (response.status === 500) {
      unsubscribedMessage.value = 'Sorry, something went wrong. Please try again later.'
    } else {
      unsubscribedMessage.value =
        "You've been unsubscribed from all future emails. We're sorry to see you go."
    }
  } catch (error) {
    console.error('reCAPTCHA failed to load:', error)
    unsubscribedMessage.value = 'Sorry, something went wrong. Please try again later.'
  }

  unsubscribing.value = false
  unsubscribed.value = true
}
</script>

<style scoped>
.invalidEmail {
  @apply border-red-500 text-red-500 outline-red-500;
}
</style>
