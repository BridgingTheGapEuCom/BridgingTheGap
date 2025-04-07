<template>
  <div class="flex flex-col w-full justify-start items-start">
    <div id="articleList" class="flex flex-col w-full">
      <div class="mb-3 w-full">
        <div
          class="w-full border rounded-md px-3 dark:border-neutral-800 dark:bg-neutral-900 border-neutral-400 bg-neutral-100"
        >
          <BTGInput v-model="articleFilter" class="mt-7 mb-5" />
          <div class="flex flex-wrap justify-center gap-2 mb-5 tab line-clamp-1">
            <span
              v-for="(tag, i) of allTags"
              :key="tag"
              class="inline-flex items-center px-2 py-1 font-medium mainTransition md:block"
              :class="{
                'cursor-pointer': !tags.includes(tag as string),
                tag: !tags.includes(tag),
                taggedTag: tags.includes(tag),
                hidden: i > 2 && tags.length == 0 && !showAllTags
              }"
              @click="addTag(tag)"
            >
              <span>
                #{{ tag }}
                <button
                  v-if="tags.includes(tag)"
                  type="button"
                  class="inline-flex items-center p-1 ms-2 text-sm text-neutral-300 dark:text-neutral-400 bg-transparent rounded-sm hover:bg-neutral-600 hover:text-neutral-100 dark:hover:bg-neutral-200 dark:hover:text-neutral-950"
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
            </span>
            <span
              class="inline-flex items-center px-2 py-1 font-medium mainTransition cursor-pointer md:hidden taggedTag"
              :class="{
                hidden: tags.length > 0
              }"
              @click="showAllTags = !showAllTags"
            >
              <span>{{
                showAllTags ? 'Hide Tags' : `Show Hidden Tags (${allTags.length - 3})`
              }}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="w-full px-3 pb-3 flex items-center justify-center">
        <div>
          Showing <span class="font-bold">{{ filteredArticles?.length }}</span> of
          <span class="font-bold">{{ props?.articles?.length }}</span> articles
        </div>
      </div>
      <div
        v-if="filteredArticles?.length === 0"
        class="w-full border rounded-md px-3 dark:border-neutral-800 dark:bg-neutral-900 border-neutral-400 bg-neutral-100 min-h-32 flex items-center justify-center"
      >
        <div class="font-bold">
          Oops! We couldn't find any articles matching your current search. Try broadening your
          search terms.
        </div>
      </div>
      <transition-group name="scale-card">
        <div
          v-for="(article, index) of filteredArticles"
          :id="`article-${index}`"
          :key="article.name"
          v-resize-observer="onResizeOne"
          class="flex md:flex-row flex-col text-justify"
        >
          <ArticleCard
            class="mb-4"
            :name="article.name"
            :short="article.short"
            :title="article.title"
            :tags="article.tags"
            :current-tags="tags"
            :publication-date="article.publishDate"
            :authors="article.authors"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { vResizeObserver } from '@vueuse/components'
import BTGInput from '~/components/helpers/BTGInput.vue'
import type { Article, ArticleContentRaw } from '~/Types/Article'
import fuse from 'fuse.js'

const tags: Ref<Array<string>> = ref([])
const route = useRoute()
const router = useRouter()

const articleFilter = ref('')
const articlesFilteredByName: Ref<Array<Article>> = ref([])
const articlesContent: Ref<Array<ArticleContentRaw>> = ref([])

const maxHeight = ref(0)
const showAllTags = ref(false)

let debounceWait: Ref<NodeJS.Timeout | null> = ref(null)

const props = defineProps({
  articles: Array<Article>
})

props.articles?.sort((a, b) => {
  return Date.parse(a.publishDate) > Date.parse(b.publishDate) ? -1 : 1
})

onMounted(async () => {
  articlesFilteredByName.value = props.articles as Article[]
  window.addEventListener('resize', onResize)

  if (route.query && route.query.tags) {
    tags.value = (route.query.tags as string).split(',')
  } else {
    tags.value = []
  }

  articlesContent.value = (await import('../articlesContent.json')).default
})

/**
 * onResizeOne
 *
 * @param resizeEvent
 */
const onResizeOne = (resizeEvent: ResizeObserverEntry[]) => {
  if (resizeEvent && resizeEvent[0] && resizeEvent[0].borderBoxSize[0]) {
    if (maxHeight.value < resizeEvent[0].borderBoxSize[0].blockSize) {
      maxHeight.value = resizeEvent[0].borderBoxSize[0].blockSize

      document
        ?.querySelector(':root')
        ?.style.setProperty('--scaleTransitionMaxHeight', `${maxHeight.value}px`)
    }
  }
}

/**
 * onResize
 */
const onResize = () => {
  maxHeight.value = 0
  for (const articleIndex in filteredArticles.value) {
    const el = document.getElementById(`article-${articleIndex}`)
    if (el && el.offsetHeight > maxHeight.value) {
      maxHeight.value = el.offsetHeight
    }
  }

  document
    ?.querySelector(':root')
    ?.style.setProperty('--scaleTransitionMaxHeight', `${maxHeight.value}px`)
}

/**
 * removeTag
 * @param tag
 */
const removeTag = (tag: string) => {
  const tempArray = [...tags.value].filter((el) => {
    return el !== tag
  })

  if (tempArray.length > 0) {
    router.push(`/?tags=${tempArray.join(',')}`)
  } else {
    showAllTags.value = false
    router.push(`/`)
  }
}

/**
 * addTag
 *
 * @param tag
 */
const addTag = (tag: string) => {
  if (tags.value.includes(tag)) {
    return
  }

  const query = { ...route.query }
  if (query.tags) {
    query.tags = query.tags + ',' + tag
  } else {
    query.tags = tag
  }
  router.replace({ query })
}

/**
 * filteredArticles
 *
 * @type {ComputedRef<any[]|*>}
 */
const filteredArticles = computed(() => {
  if (tags.value.length === 0 && articleFilter.value.length === 0) {
    return props.articles
  }

  let tagFiltered = props.articles ? props.articles : []
  if (tags.value.length > 0) {
    tagFiltered = tagFiltered.filter((article) => {
      for (let i = 0; i < tags.value.length; i++) {
        if (article.tags.includes(tags.value[i])) {
          return true
        }
      }

      return false
    })
  }

  return tagFiltered.filter((el) => {
    return articlesFilteredByName.value.some((article) => article.title === el.title)
  })
})

/**
 * allTags
 */
const allTags = computed((): Array<string> => {
  let all = new Set()
  if (props.articles) {
    for (const article of props.articles) {
      for (const tag of article.tags) {
        all.add(tag)
      }
    }
  }

  return [...all].sort() as Array<string>
})

/**
 * debounce
 *
 * @param func
 * @param wait
 * @returns {(function(...[*]): void)|*}
 */
const debounce = (func: () => void, wait: number) => {
  return function executedFunction(...args) {
    if (debounceWait) {
      clearTimeout(debounceWait) // Clear any previous timeout
    }
    debounceWait = setTimeout(() => func.apply(this, args), wait)
  }
}

/**
 * searchForArticles
 */
const searchForArticles = () => {
  if (articlesContent.value.length === 0) {
    const func = debounce(searchForArticles, 300)
    func()
  } else {
    if (articleFilter.value.length > 2) {
      const filterLower = articleFilter.value.toLowerCase().trim()

      const tempArticles = props.articles ? props.articles : []

      const options = {
        isCaseSensitive: true,
        keys: ['title', 'raw'],
        minMatchCharLength: 3,
        distance: 300,
        threshold: 0.2,
        ignoreLocation: true
      }

      const Fuse = new fuse(articlesContent.value, options)
      const fuseSearchResult = Fuse.search(filterLower)

      articlesFilteredByName.value = tempArticles.filter((article) => {
        if (
          fuseSearchResult.some((el) => {
            return el.item.title === article.title
          })
        ) {
          return true
        }
      })
    } else {
      articlesFilteredByName.value = props.articles ? props.articles : []
    }
  }
}

watch(articleFilter, async () => {
  const func = debounce(searchForArticles, 300)
  func()
})

watch(route, (current) => {
  if (current.query && current.query.tags) {
    tags.value = current.query.tags.split(',')
  } else {
    tags.value = []
  }
})
</script>

<style scoped lang="scss">
.tag {
  @apply text-neutral-700 bg-neutral-300 rounded-md dark:bg-neutral-700 dark:text-neutral-300;
}

.taggedTag {
  @apply text-white bg-neutral-900 rounded-md dark:bg-neutral-100 dark:text-black;
}
</style>
