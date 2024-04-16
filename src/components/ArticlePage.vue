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
        <div class="text-justify hyphens-auto my-2 block lg:hidden">
          <router-link
            class="pr-2 navigation-button text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-50"
            v-for="tag of tags"
            :key="tag"
            :to="tagLink(tag)"
          >
            #{{ tag }}
          </router-link>
        </div>
        <div class="text-justify hyphens-auto mb-2 block lg:hidden">
          <div class="my-2 border-b dark:border-neutral-800 lg:hidden" />
          <div class="mb-1 h4">Published</div>
          <div class="text-gray-600 dark:text-gray-400">
            {{ published }}
          </div>
          <div class="h4 mb-1">Last update</div>
          <div class="text-gray-600 dark:text-gray-400">
            {{ lastUpdate }}
          </div>
        </div>
        <div class="lg:hidden">
          <div class="h4">Authors</div>
          <div v-for="author of authors" :key="author.author">
            <a
              target="_blank"
              class="link text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-50"
              :href="author.link"
              >{{ author.author }}</a
            >
          </div>
        </div>
        <div class="my-2 border-b dark:border-neutral-800 lg:hidden" />
        <!--        <div v-html="articleContent" />-->
        <component :is="currentArticle" :dark="props.dark" />
        <div class="lg:hidden" v-if="reviewers.length > 0">
          <div class="mt-3 border-b dark:border-neutral-800" />
          <div class="h4">Article Reviewers</div>
          <div v-for="reviewer of sortedReviewers" :key="reviewer.reviewer">
            <a
              target="_blank"
              class="link text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-50"
              :href="reviewer.link"
              >{{ reviewer.reviewer }}</a
            >
          </div>
        </div>
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
    <div
      class="w-[10rem] self-stretch border-l dark:border-neutral-900 ml-3 text-right hidden lg:block"
    >
      <div class="mx-3 sticky top-24">
        <div class="text-right hyphens-auto mb-2">
          <div class="h4 mt-0 mb-2">Authors</div>
          <div v-for="author of authors" :key="author.author">
            <a target="_blank" class="link" :href="author.link">{{ author.author }}</a>
          </div>
        </div>
        <div class="text-right hyphens-auto mb-2 mt-4" v-if="reviewers.length > 0">
          <div class="h4 mt-0 mb-2">Article Reviewers</div>
          <div v-for="reviewer of sortedReviewers" :key="reviewer.reviewer">
            <a target="_blank" class="link" :href="reviewer.link">{{ reviewer.reviewer }}</a>
          </div>
        </div>
        <div class="text-right hyphens-auto mb-2 mt-4">
          <div class="h4 mb-2">Published</div>
          <div class="mb-2 text-gray-600 dark:text-gray-400">
            {{ published }}
          </div>
          <div class="h4 my-2">Last update</div>
          <div class="text-gray-600 dark:text-gray-400">
            {{ lastUpdate }}
          </div>
        </div>
        <div class="h4 mt-4 mb-2">Tags</div>
        <div>
          <router-link
            class="inline-block pl-2 text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-50"
            v-for="tag of tags"
            :key="tag"
            :to="tagLink(tag)"
            >#{{ tag }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import articles from '../../articles.json'
import { mdiArrowLeft } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

import What_is_Application_Integration from '../../public/articles/What_is_Application_Integration/html/What_is_Application_Integration.vue'
import Data_Integration_vs_Application_Integration from '../../public/articles/Data_Integration_vs_Application_Integration/html/Data_Integration_vs_Application_Integration.vue'
import Modern_Application_Integration_Principles from '../../public/articles/Modern_Application_Integration_Principles/html/Modern_Application_Integration_Principles.vue'

const props = defineProps(['dark'])

const route = useRoute()

const articleName = ref('')
const title = ref('')
const published = ref('')
const lastUpdate = ref('')
const bibliography = ref([])
const reviewers = ref([])
const authors = ref([])

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

watch(route, async () => {
  await updateData()
})

const sortedReviewers = computed(() => {
  if (reviewers.value) {
    return reviewers.value.sort((a, b) => {
      return a.reviewer.localeCompare(b.reviewer)
    })
  }

  return []
})

const updateData = async () => {
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

  // await getArticleContent()
  currentArticle = allArticles.find((el) => {
    return el.__name === articleName.value
  })
}

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
