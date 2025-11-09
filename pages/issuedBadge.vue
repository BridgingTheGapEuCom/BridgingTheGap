<template>
  <div class="article text-center h-full w-full flex flex-col items-center justify-center">
    <div
      v-if="showJSON"
      class="absolute flex items-center justify-center w-screen h-screen top-0 left-0 bg-gray-500/75 transition-opacity z-10"
    >
      <div
        class="bg-white max-w-[90%] max-h-[90%] relative dark:bg-neutral-950 rounded-lg p-8 flex flex-col justify-center text-center"
      >
        <div class="mb-3">
          This code defines your badge award and conforms to the
          <a
            class="link text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            href="https://www.imsglobal.org/spec/ob/v3p0/"
            target="_blank"
            >Open Badges 3.0</a
          >
          Assertion specification.
        </div>

        <div class="relative flex overflow-auto">
          <SvgIcon
            :path="mdiContentCopy"
            class="right-4 z-10 top-4 cursor-pointer text-neutral-600 hover:text-black dark:hover:text-white w-5 m-0 absolute text"
            type="mdi"
            @click="copyToClipboard"
          />
          <h2
            :class="{ invisible: !jsonCopied }"
            class="absolute z-10 self-center w-full m-auto opacity-100"
          >
            JSON copied to clipboard
          </h2>
          <pre
            :class="{ 'opacity-50': jsonCopied }"
            class="overflow-auto max-w-full text-left border bg-gray-50 dark:bg-neutral-800 rounded-lg p-2"
            >{{ JSON.stringify(badgeDetails, null, 4) }}</pre
          >
        </div>
        <button
          :class="{
            'hover:bg-neutral-100': showJSON,
            'dark:hover:bg-neutral-700': showJSON
          }"
          :tabindex="showJSON ? '0' : '-1'"
          class="py-2.5 mt-5 self-center cursor-pointer w-32 bg-neutral-50 rounded-lg border border-neutral-200 dark:bg-neutral-800 dark:text-white text-neutral-600 dark:border-neutral-600"
          type="submit"
          @click="showJSON = false"
        >
          OK
        </button>
      </div>
    </div>
    <div v-if="loading">Please wait, loading badge details...</div>
    <div
      v-else-if="badgeDetails"
      class="h-full max-h-[50rem] flex flex-col items-center justify-between"
    >
      <div class="flex flex-col items-center justify-center">
        <img :src="image" alt="Achievement badge" class="w-[250px] dark:invert" />
        <h2 class="mx-9">{{ achievementDetails.name }}</h2>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="my-3 mx-9">{{ achievementDetails.description }}</div>
        <div class="mt-3">Awarded to</div>
        <h1>{{ badgeDetails.credentialSubject.name }}</h1>
        <div class="font-bold mt-3">Earning Criteria</div>
        <div>{{ achievementDetails.criteria.narrative }}</div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <img alt="Bridging The Gap logo" class="w-16 mx-auto mt-5 dark:invert" src="/logo.webp" />
        <div>Issued by <b>BridgingTheGap.eu.com</b></div>
        <div>
          on
          {{
            new Date(badgeDetails.issuanceDate).toLocaleDateString('en-GB', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })
          }}
        </div>
      </div>
      <div class="flex flex-col items-center justify-center mt-10">
        <div>
          We issue
          <a
            class="link text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            href="https://openbadges.org/"
            target="_blank"
            >Open Badges</a
          >
        </div>
        <div
          class="link cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          @click="showJSON = true"
        >
          View JSON
        </div>
      </div>
    </div>
    <div v-else class="h-full flex flex-col items-center justify-center font-bold text-2xl">
      Invalid badge
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SignedBadge } from '~/Types/open-badges'
import { mdiContentCopy } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

const route = useRoute()

const loading = ref(false)
const badgeDetails: Ref<SignedBadge | null> = ref(null)
const image = ref('')
const achievementDetails = ref({})
const showJSON = ref(false)
const jsonCopied = ref(false)

loading.value = true

/**
 * Fetch badge details from the API using the badge ID from the route query.
 */
try {
  const response = await useFetch(`/api/getBadgeDetails?id=${route.query.id}`)

  badgeDetails.value = response.data.value

  if (
    badgeDetails.value?.credentialSubject?.achievement?.id &&
    badgeDetails.value.credentialSubject.achievement.id.startsWith(
      'https://bridgingthegap.eu.com/badges/achievements'
    )
  ) {
    let url = badgeDetails.value.credentialSubject.achievement.id

    // Development workaround
    if (process.env.NODE_ENV === 'development') {
      url = badgeDetails.value.credentialSubject.achievement.id.replace(
        'https://bridgingthegap.eu.com',
        'http://localhost:3000'
      )
    }

    achievementDetails.value = await useFetch(url)
    achievementDetails.value = achievementDetails.value?.data
    image.value = achievementDetails.value.image?.id ?? ''

    // Development workaround
    if (process.env.NODE_ENV === 'development') {
      image.value = image.value.replace('https://bridgingthegap.eu.com', 'http://localhost:3000')
    }
  }
} catch (error) {
  console.log(error)
}

loading.value = false

const copyToClipboard = () => {
  navigator.clipboard.writeText(JSON.stringify(badgeDetails.value))
  jsonCopied.value = true
  setTimeout(() => {
    jsonCopied.value = false
  }, 2000)
}
</script>

<style scoped></style>
