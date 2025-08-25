<template>
  <!-- Main container for the article card with responsive styling -->
  <div
    class="card bg-neutral-50 dark:bg-neutral-900 dark:text-gray-50 text-black grid md:flex md:grid-cols-2 border-gray-400 rounded-md border dark:border-gray-800 md:hover:shadow-lg relative"
  >
    <!-- Link wrapping the article image, navigates to the article's page -->
    <NuxtLink :to="`/articles/${name}`">
      <!-- Intersection observer for lazy loading the image -->
      <div
        v-intersection-observer="onImageInView"
        class="md:min-w-[12rem] max-h-[14rem] overflow-hidden"
      >
        <!-- The article image, shown only when visible in the viewport -->
        <img
          v-show="imageVisible"
          :alt="`${title} image`"
          :src="`/articles/${name}/image.webp`"
          class="md:max-w-[12rem] md:max-h-[12rem] w-full md:rounded-l-md md:rounded-r-none rounded-t-md"
          loading="lazy"
        />
      </div>
    </NuxtLink>
    <!-- Container for the article's textual content -->
    <div class="my-2 mx-3 flex flex-col justify-between">
      <!-- Article Title -->
      <NuxtLink :to="`/articles/${name}`">
        <div class="text-left text-xl md:text-2xl my-0 font-semibold hover:underline">
          {{ title }}
        </div>
      </NuxtLink>
      <!-- Author and Publication Date -->
      <div class="text-gray-600 dark:text-gray-400 text-left">
        <!-- Loop through and display authors -->
        <span v-for="(author, key) of authors" :key="author.author">
          {{ author.author }}{{ key < authors.length - 1 ? ', ' : '' }}
        </span>
        <SvgIcon :path="mdiCircleSmall" class="pb-1 w-4 m-0 inline-block text" type="mdi" />
        {{ new Date(Date.parse(publicationDate)).toLocaleDateString() }}
      </div>
      <!-- Short Description -->
      <div class="cutAfterFourRows my-0 font-thin">{{ short }}</div>
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
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import type { Author } from '~/Types/Article'
import { mdiCircleSmall } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import { vIntersectionObserver } from '@vueuse/components'

// Defines the props that this component accepts.
defineProps({
  name: { type: String, required: true }, // The unique name/slug of the article.
  title: { type: String, required: true }, // The title of the article.
  short: { type: String, required: true }, // A short description of the article.
  tags: { type: Array<string>, required: false, default: [] }, // A list of tags associated with the article.
  currentTags: { type: Array<string>, required: true }, // A list of currently active tags for filtering.
  publicationDate: { type: String, required: true }, // The publication date of the article.
  authors: { type: Array<Author>, required: true } // A list of authors of the article.
})

const route = useRoute()

// A reactive reference to control the visibility of the article image for lazy loading.
const imageVisible = ref(false)

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
