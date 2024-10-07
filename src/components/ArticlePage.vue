<template>
  <div class="flex justify-between w-full articleLinkHeight">
    <div class="flex justify-center flex-grow">
      <div class="article">
        <div class="mb-5">
          <router-link
            to="/"
            class="flex link items-end text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            <SvgIcon type="mdi" :path="mdiArrowLeft" :size="24" />
            <div class="ml-1">Back to articles list</div>
          </router-link>
        </div>
        <h1 class="mt-3 mb-2.5">{{ title }}</h1>
        <div class="text-justify hyphens-auto my-2 block">
          <router-link
            class="pr-2 navigation-button text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-50"
            v-for="tag of tags"
            :key="tag"
            :to="tagLink(tag)"
          >
            #{{ tag }}
          </router-link>
        </div>
        <div class="flex flex-col lg:flex-row justify-between border-t dark:border-neutral-800">
          <div>
            <div class="h4 mt-3">Authors</div>
            <div v-for="author of authors" :key="author.author">
              <a
                target="_blank"
                class="link text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-50"
                :href="author.link"
                >{{ author.author }}</a
              >
            </div>
          </div>
          <div v-if="reviewers.length > 0">
            <div class="h4 mt-3">Article Reviewers</div>
            <div v-for="reviewer of sortedReviewers" :key="reviewer.reviewer">
              <a
                target="_blank"
                class="link text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-50"
                :href="reviewer.link"
                >{{ reviewer.reviewer }}</a
              >
            </div>
          </div>
          <div class="text-justify hyphens-auto block">
            <div class="mt-3" />
            <div class="h4">Published</div>
            <div class="text-gray-600 dark:text-gray-400">
              {{ published }}
            </div>
            <div class="h4 mb-1">Last update</div>
            <div class="text-gray-600 dark:text-gray-400">
              {{ lastUpdate }}
            </div>
          </div>
        </div>
        <div class="my-2 border-b dark:border-neutral-800" />
        <component id="article" :is="currentArticle" :dark="props.dark" />
        <div v-if="bibliography.length > 0">
          <div class="mt-3 border-b dark:border-neutral-800" />
          <div class="h4 mt-3">Bibliography</div>
          <div class="articleLinkHeight" v-for="bib of bibliography" :key="bib.title">
            <a class="link" target="_blank" :href="bib.link">{{ bib.title }}</a>
            <span>;&nbsp;{{ bib.author }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[12rem] self-stretch ml-3 hidden lg:block">
      <div class="sticky top-16 dark:border-neutral-900 border-l">
        <div class="flex flex-col justify-between items-stretch pageHeight">
          <div class="text-left">
            <div class="font-bold h3 mb-2 pl-3">Table of contents</div>
            <template v-if="contentElements.length > 0">
              <div
                class="text-gray-500 dark:text-gray-400"
                v-for="(element, i) of contentElements"
                :key="element.id"
              >
                <template v-if="element.localName === 'h2'">
                  <div
                    class="ml-2 pl-1 border-l-2"
                    :class="{
                      'border-black': lowestIntersecting === i,
                      'dark:border-white': lowestIntersecting === i,
                      'border-transparent': lowestIntersecting !== i
                    }"
                  >
                    <a
                      class="articleContentLink hover:underline"
                      :class="{
                        'text-black': lowestIntersecting === i,
                        'dark:text-white': lowestIntersecting === i
                      }"
                      :href="`#${encodeURI(element.id)}`"
                      >{{ element.textContent }}</a
                    >
                  </div>
                </template>
                <template v-if="element.localName === 'h3'">
                  <div
                    class="ml-2 pl-4 border-l-2"
                    :class="{
                      'border-black': lowestIntersecting === i,
                      'dark:border-white': lowestIntersecting === i,
                      'border-transparent': lowestIntersecting !== i
                    }"
                  >
                    <a
                      class="articleContentLink hover:underline"
                      :class="{
                        'text-black': lowestIntersecting === i,
                        'dark:text-white': lowestIntersecting === i
                      }"
                      :href="`#${encodeURI(element.id)}`"
                      >{{ element.textContent }}</a
                    >
                  </div>
                </template>
                <template v-if="element.localName === 'h4'">
                  <div
                    class="ml-2 pl-7 border-l-2"
                    :class="{
                      'border-black': lowestIntersecting === i,
                      'dark:border-white': lowestIntersecting === i,
                      'border-transparent': lowestIntersecting !== i
                    }"
                  >
                    <a
                      class="articleContentLink hover:underline"
                      :class="{
                        'text-black': lowestIntersecting === i,
                        'dark:text-white': lowestIntersecting === i
                      }"
                      :href="`#${encodeURI(element.id)}`"
                      >{{ element.textContent }}</a
                    >
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeMount, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import articles from '../../articles.json'
import { mdiArrowLeft } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

import What_is_Application_Integration from '../../public/articles/What_is_Application_Integration/html/What_is_Application_Integration.vue'
import Data_Integration_vs_Application_Integration from '../../public/articles/Data_Integration_vs_Application_Integration/html/Data_Integration_vs_Application_Integration.vue'
import Modern_Application_Integration_Principles from '../../public/articles/Modern_Application_Integration_Principles/html/Modern_Application_Integration_Principles.vue'

const props = defineProps(['dark'])

const route = useRoute()
const router = useRouter()

const articleName = ref('')
const title = ref('')
const published = ref('')
const lastUpdate = ref('')
const bibliography = ref([])
const reviewers = ref([])
const authors = ref([])
const contents = ref([])
const lowestIntersecting = ref(-1)
const contentElements = ref([])

const tags = ref([])

const allArticles = [
  What_is_Application_Integration,
  Data_Integration_vs_Application_Integration,
  Modern_Application_Integration_Principles
]
let currentArticle = What_is_Application_Integration

onBeforeMount(async () => {
  await updateData()
})

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

watch(route, async () => {
  await updateData()
})

/**
 * sortedReviewers
 *
 * @type {ComputedRef<Array<UnwrapRefSimple<*>>|[]>}
 */
const sortedReviewers = computed(() => {
  if (reviewers.value) {
    return reviewers.value.sort((a, b) => {
      return a.reviewer.localeCompare(b.reviewer)
    })
  }

  return []
})

/**
 * onScroll
 */
const onScroll = () => {
  let last = null
  if (contentElements.value.length > 0) {
    last = contentElements.value[0].intersectionId
  }
  const scrollValue = window.top.scrollY + 80
  for (let i = 0; i < contentElements.value.length; i++) {
    if (contentElements.value[i].offsetTop > scrollValue) {
      if (contentElements.value[i - 1]) {
        router.replace({ hash: `#${decodeURI(contentElements.value[i - 1].id)}` })
      } else {
        router.replace({ hash: null })
      }
      i = contentElements.value.length
      lowestIntersecting.value = last
      return
    }
    last = contentElements.value[i].intersectionId
  }
}

/**
 * updateData
 *
 * @returns {Promise<void>}
 */
const updateData = async () => {
  if (articleName.value === route.params.article) {
    onScroll()
    return
  }

  articleName.value = route.params.article

  bibliography.value = []

  const articleMeta = articles.find((el) => {
    return el.name === articleName.value
  })

  if (articleMeta) {
    title.value = articleMeta.title
    published.value = new Date(articleMeta.publishDate).toLocaleDateString()
    lastUpdate.value = new Date(articleMeta.lastUpdate).toLocaleDateString()
    tags.value = articleMeta.tags ? articleMeta.tags : []
    bibliography.value = articleMeta.bibliography ? articleMeta.bibliography : []
    reviewers.value = articleMeta.reviewers ? articleMeta.reviewers : []
    authors.value = articleMeta.authors ? articleMeta.authors : []
  }

  currentArticle = allArticles.find((el) => {
    return el.__name === articleName.value
  })

  await nextTick(() => {
    createContents()
    onScroll()
  })
}

/**
 * createContents
 */
const createContents = () => {
  const article = document.getElementById('article')

  if (article && article.children) {
    let intersectionId = -1
    const allIds = []
    Object.keys(article.children).forEach((childKey) => {
      const child = article.children[childKey]
      if (['h2', 'h3', 'h4'].includes(child.localName)) {
        contentElements.value.push(child)
        intersectionId++
        child.intersectionId = intersectionId
        if (child.localName === 'h2') {
          child.id = `${encodeURI(child.textContent)}`
          if (allIds.includes(child.id)) {
            let count = 0
            allIds.forEach((el) => {
              if (el === child.id) {
                count++
              }
            })
            child.id = `${encodeURI(child.textContent)}_${count}`
          }
          allIds.push(child.id)
          contents.value.push({
            title: child.textContent,
            id: child.id,
            intersectionId: intersectionId,
            children: []
          })
        } else if (child.localName === 'h3') {
          child.id = `${encodeURI(child.textContent)}`
          if (allIds.includes(child.id)) {
            let count = 0
            allIds.forEach((el) => {
              if (el === child.id) {
                count++
              }
            })
            child.id = `${encodeURI(child.textContent)}_${count}`
          }
          allIds.push(child.id)

          contents.value[contents.value.length - 1].children.push({
            title: child.textContent,
            id: child.id,
            intersectionId: intersectionId,
            children: []
          })
        } else if (child.localName === 'h4') {
          const h2Length = contents.value.length
          const h3Length = contents.value[h2Length - 1].children.length

          child.id = `${encodeURI(child.textContent)}`
          if (allIds.includes(child.id)) {
            let count = 0
            allIds.forEach((el) => {
              if (el === child.id) {
                count++
              }
            })
            child.id = `${encodeURI(child.textContent)}_${count}`
          }
          allIds.push(child.id)

          contents.value[h2Length - 1].children[h3Length - 1].children.push({
            title: child.textContent,
            intersectionId: intersectionId,
            id: child.id
          })
        }
      }
    })

    nextTick(() => {
      let hash = route.hash
      if (hash) {
        hash = encodeURI(hash).substring(1)
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    })
  }
}

/**
 * tagLink
 *
 * @param tag
 * @returns {string}
 */
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

<style scoped>
.pageHeight {
  height: calc(100svh - 6.5rem);
}
</style>
