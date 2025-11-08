<template>
  <div class="h-full w-full flex flex-col">
    <div
      v-if="messageDialog"
      class="absolute flex items-center justify-center w-screen h-screen top-0 left-0 bg-gray-500/75 transition-opacity z-10"
    >
      <div
        class="bg-white dark:bg-neutral-950 rounded-lg p-8 flex flex-col justify-center text-center"
      >
        <div>
          {{ errorMessage }}
        </div>
        <button
          :class="{
            'hover:bg-neutral-100': errorMessage,
            'dark:hover:bg-neutral-700': errorMessage
          }"
          :tabindex="errorMessage ? '0' : '-1'"
          class="py-2.5 mt-5 self-center cursor-pointer w-32 bg-neutral-50 rounded-lg border border-neutral-200 dark:bg-neutral-800 dark:text-white text-neutral-600 dark:border-neutral-600"
          type="submit"
          @click="messageDialog = false"
        >
          OK
        </button>
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-center">
      <div class="mt-8 mb-8">
        <img
          alt="Bridging the Gap Logo"
          class="m-auto w-1/6 min-w-64 dark:invert"
          src="~/assets/logo.webp"
        />
      </div>
      <form
        v-if="badgesList.length === 0"
        class="flex flex-col items-center w-full"
        @submit.prevent="submit"
      >
        <h2 class="text-center">Showcase Your Achievements</h2>
        <div class="my-5 w-80">
          <label
            :class="{ 'text-red-500': invalidEmailAddress }"
            class="block mb-2 text-center"
            for="email"
            >Email address</label
          >
          <input
            id="email"
            v-model="email"
            :class="{ invalidEmail: invalidEmailAddress }"
            aria-describedby="Email address"
            class="border border-neutral-200 bg-transparent rounded-lg block p-2.5 w-full dark:border-neutral-600 placeholder-neutral-400 dark:placeholder-neutral-400"
            type="email"
          />
        </div>
        <div class="flex flex-col">
          <button
            :class="{
              'hover:bg-neutral-100': email,
              'dark:hover:bg-neutral-700': email,
              'cursor-not-allowed': !email || collectingData || invalidEmailAddress,
              'opacity-50': !email || collectingData || invalidEmailAddress,
              'cursor-pointer': email && !collectingData && !invalidEmailAddress
            }"
            :disabled="!email || collectingData"
            :tabindex="email ? '0' : '-1'"
            class="py-2.5 mt-5 self-center w-44 bg-neutral-50 rounded-lg border border-neutral-200 dark:bg-neutral-800 dark:text-white text-neutral-600 dark:border-neutral-600"
            type="submit"
          >
            <template v-if="collectingData">
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
            <template v-else>Show me my badges</template>
          </button>
        </div>
      </form>
      <div v-else id="list" class="flex flex-col">
        <h1 class="text-center mb-1">Congratulations! Here Are Your Achievements</h1>
        <h4 class="text-center mb-3">Showing badges awarded to {{ email }}</h4>
        <div v-for="badge of badgesList" :key="badge.id">
          <NuxtLink
            :to="`/issuedBadge?id=${badge._id}`"
            class="flex md:flex-row flex-col items-center border dark:border-neutral-600 rounded-lg p-4 mb-4 bg-gray-50 dark:bg-neutral-950 hover:shadow-lg dark:shadow-neutral-100"
            target="_blank"
          >
            <img :src="badge.image" alt="Achievement image" class="w-36 dark:invert" />
            <div class="mx-5 md:text-left text-center">
              <h2>{{ badge.name }}</h2>
              <div class="mb-2">{{ badge.description }}</div>
              <div>Issued by <b>BridgingTheGap.eu.com</b> on {{ badge.issuanceDate }}</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-if="badgesList.length === 0" class="text-center w-full">
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
import { useRoute } from 'vue-router'
import { DateTime } from 'luxon'
import type { SignedBadge } from '~/Types/open-badges.d.ts'

interface BadgesList {
  _id: string
  issuanceDate: string
  description: string
  image: string
  name: string
}

const email = ref('')
const collectingData = ref(false)

const messageDialog = ref(false)
const errorMessage = ref('')

const badgesList: Ref<Array<BadgesList>> = ref([])

const router = useRouter()
const route = useRoute()

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
 * A computed property that determines whether the provided email address is invalid.
 * The email address is considered invalid if it is not empty and does not match
 * the standard email format pattern.
 *
 * The validity is evaluated based on the following conditions:
 * - The `email` value must not be empty.
 * - The `email` value must conform to the regular expression pattern for standard email format:
 *   `^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$`.
 *
 * This property is reactive and updates whenever the value of `email` changes.
 */
const invalidEmailAddress = computed(() => {
  return email.value !== '' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)
})

/**
 * Asynchronous function `submit` is responsible for validating the user input, executing reCAPTCHA,
 * and subsequently fetching the user's badge data from the server.
 * It handles different success and failure scenarios and updates the app's state accordingly.
 *
 * Functionality:
 * - Checks for invalid email input or missing reCAPTCHA instance and exits early if found.
 * - Sets up loading indicators and clears existing badge data.
 * - Loads and executes reCAPTCHA to retrieve the verification token.
 * - Sends a POST request to fetch user badge data using the email and reCAPTCHA token.
 * - Handles various response states:
 *   - No response or error -> Displays a generic error message.
 *   - Empty array response -> Displays a message indicating no badges found for the given email.
 *   - Successful response with badges -> Processes badges and navigates to the badge list.
 * - Handles and logs any errors encountered during the reCAPTCHA or fetch operations.
 *
 * Variables:
 * - `invalidEmailAddress.value`: Indicates whether the email input is valid.
 * - `recaptcha`: Represents the reCAPTCHA instance.
 * - `collectingData.value`: Tracks the loading state during data submission.
 * - `badgesList.value`: Holds the list of badges fetched from the server.
 * - `messageDialog.value`: Controls visibility of the error message dialog.
 * - `errorMessage.value`: Stores the error message to be displayed.
 * - `email.value`: Contains the email address entered by the user.
 *
 * Error Handling:
 * - Displays a generic error message if the reCAPTCHA fails or no response is received from the server.
 * - Logs detailed error information to the console for debugging purposes.
 */
const submit = async () => {
  if (invalidEmailAddress.value || collectingData.value || !recaptcha) {
    return
  }

  collectingData.value = true
  badgesList.value = []

  try {
    await recaptcha.recaptchaLoaded()

    const token = await recaptcha.executeRecaptcha('submit_message')

    const response = await $fetch('/api/getUserBadges', {
      method: 'POST',
      body: {
        email: email.value,
        token
      }
    })

    if (!response) {
      messageDialog.value = true
      errorMessage.value = 'Sorry, something went wrong. Please try again later.'
    } else {
      if (Array.isArray(response) && response.length === 0) {
        messageDialog.value = true
        errorMessage.value = `Hmm, We couldn't find any badges here. We searched for badges awarded to ${email.value} but didn't find any.`
      } else {
        await processBadges(response as Array<SignedBadge>)
        await nextTick(async () => {
          await router.push({
            hash: '#list'
          })
        })
      }
    }
  } catch (error) {
    messageDialog.value = true
    errorMessage.value = 'Sorry, something went wrong. Please try again later.'
    console.error('reCAPTCHA failed to load:', error)
  }

  collectingData.value = false
}

/**
 * Asynchronously processes and retrieves badge data and updates the badge list.
 *
 * This function fetches and processes badge data from a given array of `SignedBadge` objects.
 * It constructs a list of data retrieval promises based on the badge URLs, attempts to fetch data
 * for all the badges in parallel, and updates the badge list with retrieved information,
 * including details such as description, issuance date, and image.
 *
 * During development mode, URLs are dynamically replaced to correspond to the local development server.
 * Handles errors by logging them and updating user-facing error messages.
 *
 * @param {Array<SignedBadge>} badges - An array of `SignedBadge` objects to be processed.
 * @returns {Promise<void>} A promise that resolves once all badge information is processed.
 */
const processBadges = async (badges: Array<SignedBadge>) => {
  const allToFetch = []

  for (const badge of badges) {
    let url = badge.credentialSubject.achievement.id

    // Development workaround
    if (process.env.NODE_ENV === 'development') {
      url = url.replace('https://bridgingthegap.eu.com', 'http://localhost:3000')
    }

    allToFetch.push($fetch(url))
  }

  try {
    const allResponses = await Promise.all(allToFetch)
    for (let i = 0; i < allResponses.length; i++) {
      const badge = badges[i]
      const achievement = allResponses[i]

      let imageUrl = achievement.image.id

      // Development workaround
      if (process.env.NODE_ENV === 'development') {
        imageUrl = imageUrl.replace('https://bridgingthegap.eu.com', 'http://localhost:3000')
      }

      if (badge) {
        badgesList.value.push({
          _id: badge._id,
          issuanceDate: DateTime.fromISO(badge.issuanceDate).toJSDate().toLocaleString('en-GB', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }),
          description: achievement.description,
          image: imageUrl,
          name: achievement.name
        })
      }
    }
  } catch (e) {
    console.log(e)
    messageDialog.value = true
    errorMessage.value = 'Sorry, something went wrong. Please try again later.'
  }
}

watch(route, (current) => {
  if (!current.hash || current.hash !== '#list') {
    badgesList.value = []
  }
})
</script>

<style lang="scss" scoped>
.invalidEmail {
  color: theme('colors.red.500');
  border-color: theme('colors.red.500');
  outline-color: theme('colors.red.500');

  &:before {
    content: 'Invalid email address';
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    font-size: 0.7rem;
  }
}
</style>
