<template>
  <!-- Main container for the article card with responsive styling -->
  <div
    class="card bg-neutral-50 dark:bg-neutral-900 dark:text-gray-50 text-black grid md:flex md:grid-cols-2 w-full border-gray-400 rounded-md border dark:border-gray-800 md:hover:shadow-lg relative"
  >
    <!-- Link wrapping the article image, navigates to the article's page -->
    <NuxtLink v-if="smallWidth" :to="`/streams/${name}/video`">
      <!-- Intersection observer for lazy loading the image -->
      <div
        v-intersection-observer="onImageInView"
        class="md:min-w-[20rem] max-h-[18rem] overflow-hidden"
      >
        <!-- The article image, shown only when visible in the viewport -->
        <img
          v-show="imageVisible"
          :alt="`${name} image`"
          :src="img"
          class="md:max-w-[30rem] md:max-h-[16rem] w-full md:rounded-l-none md:rounded-r-md rounded-t-md"
          loading="lazy"
        />
      </div>
    </NuxtLink>
    <!-- Container for the article's textual content -->
    <div class="my-2 mx-3 flex flex-col justify-between">
      <!-- Article Title -->
      <NuxtLink
        :to="`/streams/${name.replaceAll(' ', '_').replaceAll('(', '').replaceAll(')', '')}/video`"
      >
        <div class="cutAfterOneRow text-left text-xl my-0 font-semibold hover:underline">
          {{ name }}
        </div>
      </NuxtLink>
      <!-- Author and Publication Date -->
      <div class="text-gray-600 dark:text-gray-400 text-left">
        {{ new Date(Date.parse(publicationDate)).toLocaleDateString() }}
      </div>
      <!-- Short Description -->
      <div class="cutAfterFourRows my-0 font-thin">{{ description }}</div>
      <!-- Tags Section -->
      <div class="flex flex-wrap gap-1">
        <!-- Loop through and display tags -->
        <router-link
          v-for="(tag, index) of tags"
          :key="`${tag}-${index}`"
          :class="{
            'text-gray-600': !currentTags?.includes(tag),
            'dark:text-gray-400': !currentTags?.includes(tag),
            'text-black': currentTags?.includes(tag),
            'dark:text-white': currentTags?.includes(tag),
            'font-bold': currentTags?.includes(tag)
          }"
          :to="tagLink(tag)"
          class="md:inline pr-2 hover:text-black hover:dark:text-gray-50 navigation-button"
        >
          #{{ tag }}
        </router-link>
      </div>
    </div>
    <!-- Link wrapping the article image, navigates to the article's page -->
    <NuxtLink v-if="!smallWidth" :to="`/streams/${name}/video`">
      <!-- Intersection observer for lazy loading the image -->
      <div
        v-intersection-observer="onImageInView"
        class="md:min-w-[20rem] max-h-[18rem] overflow-hidden"
      >
        <!-- The article image, shown only when visible in the viewport -->
        <img
          v-show="imageVisible"
          :alt="`${name} image`"
          :src="img"
          class="md:max-w-[30rem] md:max-h-[16rem] w-full md:rounded-l-none md:rounded-r-md rounded-t-md"
          loading="lazy"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { type LocationQueryValue, useRoute } from 'vue-router'
import { vIntersectionObserver } from '@vueuse/components'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
import { useWindowSize } from '@vueuse/core'

// Defines the props that this component accepts.
defineProps({
  name: { type: String, required: true }, // The unique name/slug of the article.
  tags: { type: Array<String>, required: false, default: [] }, // A list of tags associated with the article.
  currentTags: { type: [String, Array<LocationQueryValue>], required: true }, // A list of currently active tags for filtering.
  publicationDate: { type: String, required: true }, // The publication date of the article.

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

<style scoped></style>
