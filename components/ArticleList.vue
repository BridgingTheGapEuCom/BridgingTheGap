<template>
  <div class="flex flex-col w-full justify-start items-start">
    <div id="articleList" class="flex flex-col w-full">
      <div class="mb-3 w-full">
        <div
          class="w-full border rounded-md px-3 dark:border-neutral-800 dark:bg-neutral-900 border-neutral-400 bg-neutral-100"
        >
          <BTGInput v-model="articleFilter" class="mt-7 mb-5" />
          <div class="flex justify-center gap-2 mb-5 tab line-clamp-1">
            <div
              class="px-4 text-white bg-neutral-600 rounded-xl cursor-pointer flex justify-center items-center"
              :class="{
                'opacity-100':
                  currentContentType.length === 0 ||
                  currentContentType.length === contentTypes.length,
                'opacity-50':
                  currentContentType.length > 0 && currentContentType.length !== contentTypes.length
              }"
              @click="currentContentType = ['Articles', 'Streams']"
            >
              <div class="text-lg">All</div>
              <SvgIcon
                v-if="currentContentType.length === contentTypes.length"
                :path="mdiCheck"
                class="ml-2 inline-block"
                type="mdi"
              />
            </div>
            <div class="border border-r-0 h-8 border-neutral-300 dark:border-neutral-700"></div>
            <template v-for="(type, index) of contentTypes" :key="`content-type-${index}`">
              <div
                class="px-4 bg-neutral-300 dark:bg-neutral-700 border border-neutral-500 rounded-xl cursor-pointer flex justify-center items-center hover:opacity-100"
                :class="{
                  'opacity-100':
                    currentContentType.includes(type) &&
                    currentContentType.length !== contentTypes.length,
                  'opacity-50':
                    !currentContentType.includes(type) ||
                    currentContentType.length === 0 ||
                    currentContentType.length === contentTypes.length
                }"
                @click="toggleContentType(type)"
              >
                <div class="text-lg">{{ type }}</div>
                <SvgIcon
                  v-if="
                    currentContentType.includes(type) &&
                    currentContentType.length !== contentTypes.length
                  "
                  :path="mdiCheck"
                  class="ml-2 inline-block"
                  type="mdi"
                />
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-2 mb-3 w-full px-3">
        <span
          v-for="(tag, i) of allTags"
          :key="tag"
          :class="{
            'cursor-pointer': !tags.includes(tag as string),
            tag: !tags.includes(tag),
            taggedTag: tags.includes(tag),
            hidden: i > 2 && tags.length == 0 && !showAllTags
          }"
          class="inline-flex items-center px-2 py-1 font-medium mainTransition md:block"
          @click="addTag(tag)"
        >
          <span>
            #{{ tag }}
            <button
              v-if="tags.includes(tag)"
              aria-label="Remove Tag"
              class="inline-flex items-center p-1 ms-2 text-sm text-neutral-300 dark:text-neutral-400 bg-transparent rounded-sm hover:bg-neutral-600 hover:text-neutral-100 dark:hover:bg-neutral-200 dark:hover:text-neutral-950"
              data-dismiss-target="#badge-dismiss-default"
              type="button"
              @click="removeTag(tag)"
            >
              <svg
                aria-hidden="true"
                class="w-2 h-2"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
        </span>
        <span
          :class="{
            hidden: tags.length > 0
          }"
          class="inline-flex items-center px-2 py-1 font-medium mainTransition cursor-pointer md:hidden taggedTag"
          @click="showAllTags = !showAllTags"
        >
          <span>{{ showAllTags ? 'Hide Tags' : `Show Hidden Tags (${allTags.length - 3})` }}</span>
        </span>
      </div>

      <div class="w-full px-3 pb-3 flex items-center justify-center">
        <div>
          Showing <span class="font-bold">{{ filteredArticles?.length }}</span> of
          <span class="font-bold">{{
            (props?.articles ? props?.articles?.length : 0) +
            (props?.events ? props?.events?.length : 0)
          }}</span>
          articles/events
        </div>
      </div>
      <div
        v-if="filteredArticles?.length === 0"
        class="w-full border rounded-md px-3 mb-3 dark:border-neutral-800 dark:bg-neutral-900 border-neutral-400 bg-neutral-100 min-h-32 flex items-center justify-center"
      >
        <div class="font-bold">
          Oops! We couldn't find any articles matching your current search. Try broadening your
          search terms.
        </div>
      </div>
      <div>
        <transition-group name="scale-card">
          <upcoming-event-card
            v-if="newestEvent && filteredArticles.length > 0"
            :name="newestEvent?.name as string"
            :img="newestEvent?.img as string"
            :publication-date="newestEvent?.date as string"
            :description="newestEvent?.description as string"
            :tags="newestEvent?.tags"
            :key="`upcoming-event-${newestEvent?.description}`"
            class="mb-4"
          />
          <div
            v-for="(article, index) of filteredArticles"
            :id="`article-${index}`"
            :key="article.name"
            v-resize-observer="onResizeOne"
            class="flex md:flex-row flex-col text-justify"
          >
            <template v-if="(article as Event).eventType">
              <EventCard
                :current-tags="tags"
                :description="(article as Event).description"
                :img="(article as Event).img"
                :name="(article as Event).name"
                :publication-date="(article as Event).date as string"
                :tags="(article as Event).tags"
                class="mb-4"
              ></EventCard>
            </template>
            <template v-else
              ><ArticleCard
                :authors="(article as Article).authors"
                :current-tags="tags"
                :name="(article as Article).name"
                :publication-date="(article as Article).publishDate"
                :short="(article as Article).short"
                :tags="(article as Article).tags"
                :title="(article as Article).title"
                class="mb-4"
            /></template>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { type LocationQueryValue, useRoute, useRouter } from 'vue-router'
import { vResizeObserver } from '@vueuse/components'
import BTGInput from '~/components/helpers/BTGInput.vue'
import type { Article, ArticleContentRaw } from '~/Types/Article'
import type { Event } from '~/Types/Event'
import fuse from 'fuse.js'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCheck } from '@mdi/js'

/**
 * Reactive reference to a string or array of LocationQueryValue.
 *
 * @type {Ref<(string | Array<LocationQueryValue>)>}
 * @default ref([])
 */
const tags: Ref<string | Array<LocationQueryValue>> = ref([])
/**
 * Returns the current route object.
 * The route object contains information about the current location in a web application,
 * including the path, query parameters, and other relevant details.
 *
 * @returns {Object} The current route object.
 */
const route = useRoute()
/**
 * Returns a router instance that provides methods for managing navigation between different views or pages in a web application.
 * The returned router can be used to programmatically navigate to new routes, check the current route, and listen for changes in the route.
 */
const router = useRouter()

/**
 * Reactive reference to a filter string used for searching or filtering articles. The value of this reference is a string that represents the current state of the article filter.
 *
 * @type {Ref<string>}
 */
const articleFilter = ref('')
/**
 * Reactive reference to an array of articles and events filtered by name.
 *
 * @type {Ref<Array<Article | Event>>}
 * @description Holds a reactive collection of article and event objects that have been filtered based on their names. This is typically used in data-driven applications where filtering based on user input or other dynamic criteria is required.
 */
const articlesFilteredByName: Ref<Array<Article | Event>> = ref([])
/**
 * Reactive reference to an array of raw article content objects.
 * Used to store and manage the current list of articles fetched or generated within the application.
 * Each ArticleContentRaw object represents a single piece of article data, its structure is not specified here.
 */
const articlesContent: Ref<Array<ArticleContentRaw>> = ref([])

/**
 * maxHeight is a reactive reference that holds the maximum height value.
 * It is typically used to dynamically set the height of elements or containers.
 */
const maxHeight = ref(0)
/**
 * A reactive reference indicating whether all tags should be shown.
 *
 * @type {Ref<boolean>}
 * @default false
 */
const showAllTags: Ref<boolean> = ref(false)

/**
 * An array of content types used for filtering or categorization.
 *
 * @type {Ref<Array<string>>}
 * @default ['Article', 'Stream']
 */
const contentTypes: Ref<Array<string>> = ref(['Articles', 'Streams'])

/**
 * A reactive reference to the current content types being used.
 *
 * @type {Ref<Array<string>>}
 * @default ref([])
 */
const currentContentType: Ref<Array<string>> = ref([])

/**
 * A reactive reference to a Node.js timeout object, used to debounce function calls.
 * This variable is initialized as `null` and can be set to a timeout object when debouncing is required,
 * or reset to `null` when debouncing is not active.
 *
 * @type {Ref<NodeJS.Timeout | null>}
 * @ref
 */
const debounceWait: Ref<NodeJS.Timeout | null> = ref(null)

/**
 * Object containing arrays of data.
 *
 * @property {Array<Article>} articles - List of article objects.
 * @property {Array<Event>} events - List of event objects.
 * @property {Event} newestEvent - The most recent event object.
 */
const props = defineProps({
  articles: Array<Article>,
  events: Array<Event>,
  newestEvent: Object
})

props.articles?.sort((a, b) => {
  return Date.parse(a.publishDate) > Date.parse(b.publishDate) ? -1 : 1
})

props.events?.sort((a, b) => {
  return Date.parse(a.date as string) > Date.parse(b.date as string) ? -1 : 1
})

/**
 * Lifecycle hook that is called when the component is mounted.
 * It initializes the articlesFilteredByName with a combination of articles and events,
 * sets up a resize event listener, and loads article content from a JSON file.
 */
onMounted(async () => {
  articlesFilteredByName.value = [...(props.articles as Article[]), ...(props.events as Event[])]
  window.addEventListener('resize', onResize)

  if (route.query && route.query.tags) {
    tags.value = route.query.tags
  } else {
    tags.value = []
  }

  currentContentType.value = [...contentTypes.value]

  articlesContent.value = (await import('../articlesContent.json')).default
})

/**
 * Callback function for handling the resizing of an element.
 * Updates the 'max-height' CSS variable in the :root selector based on the border box size of the resized element, if it exceeds the current max height.
 *
 * @param {ResizeObserverEntry[]} resizeEvent - Array containing one or more ResizeObserverEntry objects representing the elements that have been resized.
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
 * Toggles the current content type based on the provided type.
 *
 * @param {string} type - The content type to toggle.
 */
const toggleContentType = (type: string) => {
  currentContentType.value = [type]
}

/**
 * This function is called when the window size is resized.
 * It updates the maximum height of articles and sets a CSS variable
 * for smooth transition effects based on the new height.
 *
 * @function onResize
 * @type {function}
 * @description Adjusts maxHeight based on article heights and updates CSS variable
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
 * Removes a specified tag from the current list of tags and updates the URL accordingly.
 *
 * @param {string} tag - The tag to be removed.
 */
const removeTag = (tag: string) => {
  const tempArray = [...tags.value].filter((el) => {
    return el !== tag
  })

  if (tag.includes(' ')) {
    tag = tag.replaceAll(' ', '%20')
  }

  if (tempArray.length > 0) {
    router.push(`/?tags=${tempArray.join(',')}`)
  } else {
    showAllTags.value = false
    router.push(`/`)
  }
}

/**
 * Adds a tag to the current route's query parameters.
 *
 * If the specified tag is already present, no action is taken.
 * Otherwise, the tag is appended to the 'tags' parameter in the route's query string,
 * separating multiple tags with commas if necessary.
 *
 * @param {string} tag - The tag to be added.
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
 * A computed property that filters and sorts articles and events based on tags and a filter.
 * It combines both articles and events into one array, then applies the following filters:
 * 1. Tags: Filters articles/events that include any of the specified tags.
 * 2. Name Filter: Filters articles/events whose titles match any item in `articlesFilteredByName`.
 *
 * The resulting array is sorted by date, with more recent items appearing first.
 *
 * @type {ComputedRef<Array<Article | Event>>}
 * @returns {Array<Article | Event>} - An array of filtered and sorted articles and events.
 */
const filteredArticles = computed(() => {
  if (tags.value.length === 0 && articleFilter.value.length === 0) {
    let array = [...(props.articles as Article[]), ...(props.events as Event[])]
    if (currentContentType.value.length === 1) {
      if (currentContentType.value[0] === 'Articles') {
        array = props.articles as Article[]
      } else if (currentContentType.value[0] === 'Streams') {
        array = props.events as Event[]
      }
    }
    return array.sort((a: Article | Event, b: Article | Event) => {
      const ADate = (a as Article).publishDate ? (a as Article).publishDate : (a as Event).date
      const BDate = (b as Article).publishDate ? (b as Article).publishDate : (b as Event).date

      return Date.parse(ADate as string) > Date.parse(BDate as string) ? -1 : 1
    })
  }

  let tagFiltered = [...(props.articles as Article[]), ...(props.events as Event[])]
  if (currentContentType.value.length === 1) {
    if (currentContentType.value[0] === 'Articles') {
      tagFiltered = props.articles as Article[]
    } else if (currentContentType.value[0] === 'Streams') {
      tagFiltered = props.events as Event[]
    }
  }
  if (tags.value.length > 0) {
    tagFiltered = tagFiltered.filter((article) => {
      for (let i = 0; i < tags.value.length; i++) {
        if (article.tags.includes(tags.value[i] as string)) {
          return true
        }
      }

      return false
    })
  }

  const array = tagFiltered.filter((el) => {
    const title = (el as Article).title ? (el as Article).title : el.name
    return articlesFilteredByName.value.some(
      (article) => (article as Article).title === title || (article as Event).name === title
    )
  })

  return array.sort((a: Article | Event, b: Article | Event) => {
    const ADate = (a as Article).publishDate ? (a as Article).publishDate : (a as Event).date
    const BDate = (b as Article).publishDate ? (b as Article).publishDate : (b as Event).date

    return Date.parse(ADate as string) > Date.parse(BDate as string) ? -1 : 1
  })
})

/**
 * Computed property that retrieves and sorts unique tags from articles.
 *
 * @returns {Array<string>} - A sorted array of unique tags extracted from the `props.articles`.
 */
const allTags = computed((): Array<string> => {
  const all = new Set()
  if (props.articles && props.events) {
    if (currentContentType.value.includes('Articles')) {
      for (const article of props.articles) {
        for (const tag of article.tags) {
          all.add(tag)
        }
      }
    }
    if (currentContentType.value.includes('Streams')) {
      for (const event of props.events) {
        for (const tag of event.tags) {
          all.add(tag)
        }
      }
    }
  }

  return [...all].sort() as Array<string>
})

/**
 * Debounces a given function so it is only called after a specified wait time has elapsed since the last call.
 *
 * @param {Function} func - The function to be debounced.
 * @param {number} wait - The number of milliseconds that must elapse before `func` is invoked again.
 * @returns {Function} A new function that, when invoked, will debounce the original `func`.
 */
const debounce = (func: () => void, wait: number) => {
  return function executedFunction(...args) {
    if (debounceWait.value) {
      clearTimeout(debounceWait) // Clear any previous timeout
    }
    debounceWait.value = setTimeout(() => func.apply(this, args), wait)
  }
}

/**
 * Searches for articles based on user input.
 *
 * This function debounces the search process to avoid excessive calls,
 * filters articles by a given keyword, and updates the filtered list accordingly.
 * If no keyword is provided or the keyword is too short, it displays all available articles.
 *
 * @param {Article[]} props.articles - List of article objects to be searched.
 * @param {Event[]} props.events - List of event objects to be searched.
 * @param {string} articleFilter.value - The current user input used for filtering articles.
 * @param {Article[]} articlesContent.value - Array containing all articles and events.
 * @param {Article[]} articlesFilteredByName.value - Output array displaying filtered articles.
 */
const searchForArticles = () => {
  if (articlesContent.value.length === 0) {
    const func = debounce(searchForArticles, 300)
    func()
  } else {
    if (articleFilter.value.length > 2) {
      const filterLower = articleFilter.value.toLowerCase().trim()

      const tempArticles = [...(props.articles as Article[]), ...(props.events as Event[])]

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
            return (
              el.item.title === (article as Article).title ||
              el.item.title === (article as Event).name
            )
          })
        ) {
          return true
        }

        if ((article as Article).title) {
          if ((article as Article).title.toLocaleLowerCase().includes(filterLower)) {
            return true
          }
        } else {
          if ((article as Event).name.toLocaleLowerCase().includes(filterLower)) {
            return true
          }
        }
      })
    } else {
      articlesFilteredByName.value = [
        ...(props.articles as Article[]),
        ...(props.events as Event[])
      ]
    }
  }
}

/**
 * Watches for changes in the currentContentType and filters tags accordingly.
 */
watch(currentContentType, () => {
  tags.value = tags.value.filter((tag) => {
    if (currentContentType.value.includes('Articles') && props.articles) {
      for (const article of props.articles) {
        if (article.tags.includes(tag as string)) {
          return true
        }
      }
    }

    if (currentContentType.value.includes('Streams') && props.events) {
      for (const event of props.events) {
        if (event.tags.includes(tag as string)) {
          return true
        }
      }
    }

    nextTick(() => {
      removeTag(tag)
    })
    return false
  })
})

/**
 * Watches for changes in the articleFilter and triggers a debounced search for articles.
 */
watch(articleFilter, async () => {
  const func = debounce(searchForArticles, 300)
  func()
})

/**
 * Watches for changes in the route and updates the tags accordingly.
 */
watch(route, (current) => {
  if (current.query && current.query.tags) {
    tags.value = current.query.tags as Array<string>
  } else {
    tags.value = []
  }
})
</script>

<style lang="scss" scoped>
.tag {
  @apply text-neutral-700 bg-neutral-300 rounded-md dark:bg-neutral-700 dark:text-neutral-300;
}

.taggedTag {
  @apply text-white bg-neutral-900 rounded-md dark:bg-neutral-100 dark:text-black;
}
</style>
