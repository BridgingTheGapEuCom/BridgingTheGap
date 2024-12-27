<template>
  <div
    class="card bg-neutral-50 dark:bg-neutral-900 dark:text-gray-50 text-black grid md:flex md:grid-cols-2 border-gray-400 rounded-md border dark:border-gray-800 md:hover:shadow-lg"
  >
    <NuxtLink :to="`/articles/${name}`">
      <div class="md:min-w-[12rem] max-h-[14rem] overflow-hidden">
        <img
          loading="lazy"
          :src="`/articles/${name}/image.webp`"
          class="md:max-w-[12rem] md:max-h-[12rem] w-full rounded-l-md"
          :alt="`${title} image`"
        />
      </div>
    </NuxtLink>
    <div class="my-2 mx-3 flex flex-col justify-between">
      <NuxtLink :to="`/articles/${name}`">
        <div class="text-left text-xl md:text-2xl my-0 font-semibold hover:underline">
          {{ title }}
        </div>
      </NuxtLink>
      <div class="cutAfterFourRows my-0 font-thin">{{ short }}</div>
      <div class="flex flex-wrap gap-1">
        <router-link
          v-for="(tag, index) of tags"
          :key="`${tag}-${index}`"
          class="md:inline pr-2 hover:text-black hover:dark:text-gray-50 navigation-button"
          :class="{
            'text-gray-600': !currentTags?.includes(tag),
            'dark:text-gray-400': !currentTags?.includes(tag),
            'text-black': currentTags?.includes(tag),
            'dark:text-white': currentTags?.includes(tag),
            'font-bold': currentTags?.includes(tag)
          }"
          :to="tagLink(tag as string)"
        >
          #{{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps({
  name: { type: String, required: true },
  title: { type: String, required: true },
  short: { type: String, required: true },
  tags: { type: Array<String>, required: false, default: [] },
  currentTags: { type: Array<String>, required: true }
})

const route = useRoute()

/**
 * tagLink
 *
 * @param tag
 */
const tagLink = (tag: string) => {
  if (route.query && route.query.tags) {
    if (!(route.query.tags as string).split(',').includes(tag)) {
      return `/?tags=${route.query.tags + ',' + tag}`
    } else {
      const filter = (route.query.tags as string).split(',').filter((el) => {
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
