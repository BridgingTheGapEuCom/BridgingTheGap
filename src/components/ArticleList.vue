<template>
  <div class="flex flex-col w-full justify-start items-start">
    <div class="mb-3">
      <transition name="scale">
        <div v-if="tags.length > 0" class="flex gap-2">
          <div class="text-base pt-0.5 pl-5">Filtered tags</div>
          <span
            id="badge-dismiss-default"
            class="inline-flex items-center px-2 py-1 font-medium text-neutral-800 bg-neutral-300 rounded dark:bg-neutral-700 dark:text-neutral-300"
            v-for="tag of tags"
            :key="tag"
          >
            {{ tag }}
            <button
              type="button"
              class="inline-flex items-center p-1 ms-2 text-sm text-neutral-400 bg-transparent rounded-sm hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
              data-dismiss-target="#badge-dismiss-default"
              aria-label="Remove Tag"
              @click="removeTag(tag)"
            >
              <svg
                class="w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
        </div>
      </transition>
    </div>
    <div class="flex flex-col">
      <transition-group name="scale-card">
        <div
          class="flex md:flex-row flex-col text-justify"
          v-for="article of filteredArticles"
          :key="article.name"
        >
          <article-card
            class="mb-4"
            :name="article.name"
            :short="article.short"
            :title="article.title"
            :tags="article.tags"
            :currentTags="tags"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import ArticleCard from '@/components/ArticleCard.vue'
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const tags = ref([])
const route = useRoute()
const router = useRouter()

const props = defineProps({
  articles: Array
})

onBeforeMount(() => {
  if (route.query && route.query.tags) {
    tags.value = route.query.tags.split(',')
  }
})

watch(route, (current) => {
  tags.value = []
  if (current.query && current.query.tags) {
    tags.value = current.query.tags.split(',')
  }
})

/**
 * removeTag
 * @param tag
 */
const removeTag = (tag) => {
  const tempArray = [...tags.value].filter((el) => {
    return el !== tag
  })

  if (tempArray.length > 0) {
    router.push(`/?tags=${tempArray.join(',')}`)
  } else {
    router.push(`/`)
  }
}

const filteredArticles = computed(() => {
  if (tags.value.length === 0) {
    return props.articles
  }

  return props.articles.filter((article) => {
    for (let i = 0; i < tags.value.length; i++) {
      if (article.tags.includes(tags.value[i])) {
        return true
      }
    }

    return false
  })
})
</script>

<style scoped></style>
