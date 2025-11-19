<template>
  <!-- Main container for the article card with responsive styling -->
  <div
    class="card bg-neutral-50 dark:bg-neutral-900 dark:text-gray-50 text-black grid md:flex md:grid-cols-2 w-full border-gray-400 rounded-md border dark:border-gray-800 md:hover:shadow-lg relative"
  >
    <NuxtLink to="upcomingEvents" class="absolute top-0 left-0 w-full h-full z-10"></NuxtLink>
    <!-- Link wrapping the article image, navigates to the article's page -->
    <div v-if="smallWidth" :to="prepareLink" class="opacity-30">
      <!-- Intersection observer for lazy loading the image -->
      <div
        v-intersection-observer="onImageInView"
        class="md:min-w-[20rem] max-h-[18rem] overflow-hidden image-container"
      >
        <!-- The article image, shown only when visible in the viewport -->
        <img
          v-show="imageVisible"
          :alt="`${name} image`"
          :src="img"
          class="md:max-w-[20rem] h-full w-full md:rounded-l-none md:rounded-r-md rounded-t-md original-image"
          loading="lazy"
        />
      </div>
    </div>
    <div class="upcomingEventOverflow">
      <div
        class="flex justify-around border border-neutral-500 bg-neutral-50 dark:bg-neutral-900 dark:text-gray-50 text-black rounded-md p-2 m-2"
      >
        <svg-icon type="mdi" :size="130" :path="mdiCalendarMonth" />
        <div class="text-2xl pl-6 font-bold self-center">Looking for upcoming events?</div>
        <div class="mt-3 sm:mt-0 sm:ml-4 self-center">
          <div
            class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-neutral-800 dark:bg-gray-100 dark:text-black transition-colors duration-200"
          >
            View Events Calendar
          </div>
        </div>
      </div>
      <div
        class="bg-gray-100 border-t border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap"
      >
        <div class="flex items-center">
          <svg
            class="h-8 w-8 text-gray-700 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h.01M7 11h.01M7 15h.01M16 15h.01M17 11h.01M14 7h.01M17 7h.01M12 19h.01M12 15h.01M12 11h.01M7 19h.01M16 19h.01"
            ></path>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          </svg>
          <p class="text-lg text-gray-700 font-medium">Looking for upcoming events?</p>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-4">
          <a
            href="/events"
            class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 transition-colors duration-200"
          >
            View Event Calendar
          </a>
        </div>
      </div>
    </div>
    <!-- Container for the article's textual content -->
    <div class="my-2 mx-3 flex flex-col justify-between opacity-30">
      <!-- Article Title -->
      <div :to="prepareLink">
        <div class="cutAfterOneRow text-left text-xl my-0 font-semibold">
          {{ name }}
        </div>
      </div>
      <!-- Author and Publication Date -->
      <div class="text-gray-600 dark:text-gray-400 text-left">
        {{ new Date(Date.parse(publicationDate)).toLocaleDateString() }}
      </div>
      <!-- Short Description -->
      <div class="cutAfterFourRows my-0 font-thin">{{ description }}</div>
      <!-- Tags Section -->
      <div class="flex flex-wrap gap-1">
        <!-- Loop through and display tags -->
      </div>
    </div>
    <!-- Link wrapping the article image, navigates to the article's page -->
    <div v-if="!smallWidth" :to="prepareLink">
      <!-- Intersection observer for lazy loading the image -->
      <div
        v-intersection-observer="onImageInView"
        class="md:min-w-[20rem] h-full overflow-hidden image-container opacity-30"
      >
        <!-- The article image, shown only when visible in the viewport -->
        <img
          v-show="imageVisible"
          :alt="`${name} image`"
          :src="img"
          class="md:max-w-[20rem] h-full w-full md:rounded-l-none md:rounded-r-md rounded-t-md original-image"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type LocationQueryValue, useRoute } from 'vue-router'
import { vIntersectionObserver } from '@vueuse/components'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
import { useWindowSize } from '@vueuse/core'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCalendarMonth } from '@mdi/js'

// Defines the props that this component accepts.
const props = defineProps({
  name: { type: String, required: true }, // The unique name/slug of the article.
  tags: { type: Array<String>, required: false, default: [] }, // A list of tags associated with the video.
  publicationDate: { type: String, required: true }, // The publication date of the video.

  img: { type: String, required: true },
  description: { type: String, required: true }
})

const route = useRoute()

// A reactive reference to control the visibility of the article image for lazy loading.
const imageVisible = ref(false)

const fullConfig = resolveConfig(tailwindConfig)
const { width } = useWindowSize()

/**
 * Generates a URL for a given tag to enable filtering.
 * It adds or removes the tag from the 'tags' query parameter in the URL.
 *
 * @param {string} tag - The tag to generate the link for.
 * @returns {string} The constructed URL for the tag filter.
 */
const tagLink = (tag: string) => {
  if (route.query && route.query.tags) {
    if (!route.query.tags.includes(tag)) {
      return `/?tags=${route.query.tags + ',' + tag}`
    } else {
      const filter = route.query.tags.filter((el) => {
        return el !== tag
      })
      if (filter.length === 0) {
        return `/`
      } else {
        return `/?tags=${filter}`
      }
    }
  } else {
    return `/?tags=${tag}`
  }
}

/**
 * Computed property to determine if the viewport is small.
 * This is used for responsive styling of the navigation menu.
 * @returns {boolean} - True if on mobile and width is less than the 'xl' breakpoint.
 */
const smallWidth = computed(() => {
  return width.value <= parseInt(fullConfig.theme.screens.md)
})

/**
 * This computed property prepares the link to the stream's video page.
 * @returns {string} The formatted link to the stream's video page.
 */
const prepareLink = computed(() => {
  return `/streams/${props.name.replaceAll(' ', '_').replaceAll('(', '').replaceAll(')', '')}/video`
})

/**
 * Callback for the intersection observer.
 * Sets 'imageVisible' to true when the image enters the viewport.
 *
 * @param {Array<IntersectionObserverEntry>} data - The intersection observer data.
 */
const onImageInView = (data: Array<IntersectionObserverEntry>) => {
  if (data && data.length > 0 && imageVisible.value === false) {
    imageVisible.value = data[0].isIntersecting
  }
}
</script>

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
}

.original-image {
  display: block;
  width: 100%;
}

.watermark-overlay {
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%) rotate(-20deg); /* Center and rotate for classic look */

  /* Appearance */
  pointer-events: none; /* Allows clicks to pass through to the image below */
  z-index: 2;
}

.upcomingEventOverflow {
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 90%;
  height: 80%;
  z-index: 2;
  overflow: hidden;
}
</style>
