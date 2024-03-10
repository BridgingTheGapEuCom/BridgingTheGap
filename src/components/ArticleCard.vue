<template>
  <div
    class="card bg-neutral-50 dark:bg-neutral-900 dark:text-gray-50 text-black grid md:flex md:grid-cols-2 border-gray-400 rounded-md border dark:border-gray-800 md:hover:shadow-lg"
  >
    <router-link :to="`/articles/${name}`">
      <div class="md:min-w-[12rem] max-h-[14rem] overflow-hidden">
        <v-lazy-image
          class="md:max-w-[12rem] md:max-h-[12rem] w-full rounded-l-md"
          :src-placeholder="`/bridgingTheGap/articles/${name}/img/www/image_small.webp`"
          :alt="`${title} image`"
          :src="`/bridgingTheGap/articles/${name}/img/www/image.webp`"
        />
      </div>
    </router-link>
    <div class="my-2 mx-3 flex flex-col justify-between">
      <router-link :to="`/articles/${name}`">
        <div class="text-xl md:text-2xl my-0 font-semibold hover:underline">{{ title }}</div>
      </router-link>
      <div class="cutAfterFourRows my-0 font-thin">{{ short }}</div>
      <div class="flex flex-wrap gap-1">
        <router-link
          class="md:inline pr-2 hover:text-black hover:dark:text-gray-50 navigation-button"
          :class="{
            'text-gray-600': !currentTags.includes(tag),
            'dark:text-gray-400': !currentTags.includes(tag),
            'text-black': currentTags.includes(tag),
            'dark:text-white': currentTags.includes(tag),
            'font-bold': currentTags.includes(tag)
          }"
          v-for="tag of tags"
          :key="tag"
          :to="tagLink(tag)"
        >
          #{{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import VLazyImage from 'v-lazy-image'

defineProps({
  name: String,
  title: String,
  short: String,
  tags: Array,
  currentTags: Array
})

const route = useRoute()

const tagLink = (tag) => {
  if (route.query && route.query.tags) {
    if (!route.query.tags.split(',').includes(tag)) {
      return `/?tags=${route.query.tags + ',' + tag}`
    } else {
      const filter = route.query.tags.split(',').filter((el) => {
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
</script>

<style scoped></style>
