<template>
  <div class="h-full w-full flex flex-col">
    <div
      v-if="messageSent"
      class="absolute flex items-center justify-center w-screen h-screen top-0 left-0 bg-gray-500/75 transition-opacity z-10"
    >
      <div
        class="bg-white dark:bg-neutral-950 rounded-lg p-8 flex flex-col justify-center text-center"
      >
        <div>
          {{ emailSentMessage }}
        </div>
        <button
          :class="{
            'hover:bg-neutral-100': emailMessage,
            'dark:hover:bg-neutral-700': emailMessage
          }"
          :tabindex="emailMessage ? '0' : '-1'"
          class="py-2.5 mt-5 self-center cursor-pointer w-32 bg-neutral-50 rounded-lg border border-neutral-200 dark:bg-neutral-800 dark:text-white text-neutral-600 dark:border-neutral-600"
          type="submit"
          @click="messageSent = false"
        >
          OK
        </button>
      </div>
    </div>
    <div class="text-2xl mt-5">Contact Us</div>
    <div class="mt-1">
      Got a question, a bright idea, or just want to say hi? We'd absolutely love to hear from you!
      Simply send us a message using the form below.
    </div>
    <div>
      (Just so you know, we'll protect your info as outlined in our
      <NuxtLink
        class="link text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
        to="privacyPolicy"
        >Privacy Policy</NuxtLink
      >.)
    </div>
    <div class="flex-1 mt-10 flex flex-col justify-between">
      <ClientOnly>
        <form class="flex flex-col" @submit.prevent="submit">
          <div>
            <label class="block mb-2" for="name">Name (optional)</label>
            <input
              id="name"
              v-model="name"
              aria-describedby="optional name input"
              class="border border-neutral-200 bg-transparent rounded-lg block w-full p-2.5 dark:border-neutral-600 placeholder-neutral-400 dark:placeholder-neutral-400"
            />
          </div>

          <div class="mt-5">
            <label class="block mb-2" for="email">Email (optional)</label>
            <input
              id="email"
              v-model="email"
              aria-describedby="optional email address"
              class="border border-neutral-200 bg-transparent rounded-lg block w-full p-2.5 dark:border-neutral-600 placeholder-neutral-400 dark:placeholder-neutral-400"
              type="email"
            />
          </div>

          <div class="mt-5">
            <label class="block mb-2" for="emailMessage">Your message</label>
            <textarea
              id="emailMessage"
              v-model="emailMessage"
              class="block p-2.5 bg-transparent w-full rounded-lg border border-neutral-200 dark:border-neutral-600 placeholder-neutral-400 dark:placeholder-neutral-400"
              rows="10"
            />
          </div>

          <button
            :class="{
              'hover:bg-neutral-100': emailMessage,
              'dark:hover:bg-neutral-700': emailMessage,
              'cursor-not-allowed': !emailMessage || sendingMessage,
              'opacity-50': !emailMessage || sendingMessage,
              'cursor-pointer': emailMessage && !sendingMessage
            }"
            :disabled="!emailMessage || sendingMessage"
            :tabindex="emailMessage ? '0' : '-1'"
            class="py-2.5 mt-5 self-center w-32 bg-neutral-50 rounded-lg border border-neutral-200 dark:bg-neutral-800 dark:text-white text-neutral-600 dark:border-neutral-600"
            type="submit"
          >
            <template v-if="sendingMessage">
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
            <template v-else> Send</template>
          </button>
        </form>

        <template #fallback>
          <div class="flex justify-center items-center h-64">
            <p>Loading form...</p>
          </div>
        </template>
      </ClientOnly>

      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="my-5 text-center w-full">
            Prefer to reach out directly? Feel free to email us at&nbsp;
            <b
              ><a class="link" href="mailto:info@bridgingthegap.eu.com"
                >info@bridgingthegap.eu.com</a
              ></b
            >
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type IReCaptchaComposition, useReCaptcha } from 'vue-recaptcha-v3'
import { ref } from 'vue'

const email = ref('')
const emailMessage = ref('')
const name = ref('')
const sendingMessage = ref(false)

const messageSent = ref(false)

const emailSentMessage = ref(
  "Thanks for reaching out! We've received your message and will get back to you soon."
)

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
 * Handles the submission of a contact form asynchronously.
 *
 * This function prevents duplicate submissions while a previous one is in progress.
 * It incorporates Google's reCAPTCHA for security purposes to validate the form submission.
 * Once validated, it sends the form data (name, email, message, and reCAPTCHA token)
 * to the server using a POST request.
 *
 * @async
 * @function submit
 * @throws Will log an error to the console if the reCAPTCHA fails to load.
 */
const submit = async () => {
  if (sendingMessage.value || !emailMessage.value || !recaptcha) {
    return
  }

  sendingMessage.value = true
  try {
    await recaptcha.recaptchaLoaded()

    const token = await recaptcha.executeRecaptcha('submit_message')

    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        message: emailMessage.value,
        token
      }
    })

    if (response.status === 500) {
      emailSentMessage.value = 'Sorry, something went wrong. Please try again later.'
    } else {
      emailSentMessage.value =
        "Thanks for reaching out! We've received your message and will get back to you soon."
    }
  } catch (error) {
    console.error('reCAPTCHA failed to load:', error)
  }

  messageSent.value = true
  sendingMessage.value = false
}
</script>

<style scoped></style>
