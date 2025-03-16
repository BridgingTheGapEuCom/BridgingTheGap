<template>
  <div class="justify-between w-full articleLinkHeight max-w-screen-xl flex flex-grow">
    <div class="flex justify-center flex-grow">
      <div class="article">
        <div class="mb-5">
          <NuxtLink
            to="/"
            class="flex link items-end text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            <SvgIcon
              type="mdi"
              :path="mdiArrowLeft"
              :size="24"
            />
            <div class="ml-1">
              Back to articles list
            </div>
          </NuxtLink>
        </div>
        <h1 class="mt-3 mb-2.5">
          {{ title }}
        </h1>
        <div class="text-justify hyphens-auto my-2 sm:block flex flex-col">
          <NuxtLink
            v-for="tag of tags"
            :key="tag"
            class="pr-2 navigation-button text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-50"
            :to="tagLink(tag)"
          >
            #{{ tag }}
          </NuxtLink>
        </div>
        <div class="border-t dark:border-neutral-800">
          <div class="my-2 pb-1 flex lg:flex-row flex-col flex-1 justify-between">
            <div
              v-for="author of authors"
              :key="author.author"
              class="flex flex-row"
            >
              <img
                :alt="`${author.author}s photo`"
                :src="author.photo"
                width="90"
                height="90"
                class="grayscale rounded-md max-h-20"
              >
              <div
                id="article_authors"
                class="ml-3 flex flex-col justify-end"
              >
                <div>Author</div>
                <div>
                  <div class="font-bold h2">
                    {{ author.author }}
                  </div>
                  <div>{{ author.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-between border-t dark:border-neutral-800">
          <div v-if="coAuthors.length > 0">
            <div class="h4 mt-3">
              Co-authors
            </div>
            <div
              v-for="author of coAuthors"
              :key="author.author"
            >
              <a
                target="_blank"
                class="link text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-50"
                :href="author.link"
              >{{ author.author }}</a>
            </div>
          </div>
          <div v-if="reviewers.length > 0">
            <div class="h4 mt-3">
              Article Reviewers
            </div>
            <div
              v-for="reviewer of sortedReviewers"
              :key="reviewer.reviewer"
            >
              <a
                target="_blank"
                class="link text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-50"
                :href="reviewer.link"
              >{{ reviewer.reviewer }}</a>
            </div>
          </div>
          <div class="text-justify hyphens-auto block">
            <div class="mt-3" />
            <div class="h4">
              Published
            </div>
            <div class="text-gray-600 dark:text-gray-400">
              {{ published }}
            </div>
            <div class="h4 mb-1">
              Last update
            </div>
            <div class="text-gray-600 dark:text-gray-400">
              {{ lastUpdate }}
            </div>
          </div>
        </div>
        <div class="my-2 border-b dark:border-neutral-800" />
        <div class="max-w-screen-xl flex flex-grow">
          <slot :dark="props.dark" />
        </div>
        <div v-if="relatedArticles.length > 0">
          <div class="mt-3 border-b dark:border-neutral-800" />
          <div class="h4 mt-3">
            Related articles
          </div>
          <div
            v-for="related of relatedArticles"
            :key="related.title"
            class="articleLinkHeight"
          >
            <NuxtLink
              class="link text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
              :href="`/articles/${related.name}`"
            >
              {{ related.title }}
            </NuxtLink>
          </div>
        </div>
        <div v-if="bibliography.length > 0">
          <div class="mt-3 border-b dark:border-neutral-800" />
          <div class="h4 mt-3">
            Bibliography
          </div>
          <div
            v-for="bib of bibliography"
            :key="bib.title"
            class="articleLinkHeight break-all"
          >
            <a
              class="link text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
              target="_blank"
              :href="bib.link"
            >{{ bib.title }}</a>
            <span v-if="bib.ISBN">;&nbsp;ISBN {{ bib.ISBN }}</span>
            <span>;&nbsp;{{ bib.author }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[12rem] self-stretch ml-3 hidden lg:block">
      <div class="sticky top-16 dark:border-neutral-900 border-l overflow-auto">
        <div class="flex flex-col justify-between items-stretch pageHeight">
          <div class="text-left">
            <div class="font-bold h3 mb-2 pl-3">
              Table of contents
            </div>
            <template v-if="contentElements.length > 0">
              <div
                v-for="(element, i) of contentElements"
                :key="element.id"
                class="text-gray-500 dark:text-gray-400"
              >
                <template v-if="element.localName === 'h2'">
                  <div
                    class="ml-2 pl-1 border-l-2 py-0.5"
                    :class="{
                      'border-black': lowestIntersecting === i,
                      'dark:border-white': lowestIntersecting === i,
                      'border-transparent': lowestIntersecting !== i
                    }"
                  >
                    <a
                      :id="`${encodeURI(element.id)}_anchor`"
                      class="articleContentLink hover:underline"
                      :class="{
                        'text-black': lowestIntersecting === i,
                        'dark:text-white': lowestIntersecting === i
                      }"
                      :href="`#${encodeURI(element.id)}`"
                    >{{ element.textContent }}</a>
                  </div>
                </template>
                <template v-if="element.localName === 'h3'">
                  <div
                    class="ml-2 pl-4 border-l-2 py-0.5"
                    :class="{
                      'border-black': lowestIntersecting === i,
                      'dark:border-white': lowestIntersecting === i,
                      'border-transparent': lowestIntersecting !== i
                    }"
                  >
                    <a
                      :id="`${encodeURI(element.id)}_anchor`"
                      class="articleContentLink hover:underline"
                      :class="{
                        'text-black': lowestIntersecting === i,
                        'dark:text-white': lowestIntersecting === i
                      }"
                      :href="`#${encodeURI(element.id)}`"
                    >{{ element.textContent }}</a>
                  </div>
                </template>
                <template v-if="element.localName === 'h4'">
                  <div
                    class="ml-2 pl-7 border-l-2 py-0.5"
                    :class="{
                      'border-black': lowestIntersecting === i,
                      'dark:border-white': lowestIntersecting === i,
                      'border-transparent': lowestIntersecting !== i
                    }"
                  >
                    <a
                      :id="`${encodeURI(element.id)}_anchor`"
                      class="articleContentLink hover:underline"
                      :class="{
                        'text-black': lowestIntersecting === i,
                        'dark:text-white': lowestIntersecting === i
                      }"
                      :href="`#${encodeURI(element.id)}`"
                    >{{ element.textContent }}</a>
                  </div>
                </template>
                <template v-if="element.localName === 'h5'">
                  <div
                    class="ml-2 pl-10 border-l-2 py-0.5"
                    :class="{
                      'border-black': lowestIntersecting === i,
                      'dark:border-white': lowestIntersecting === i,
                      'border-transparent': lowestIntersecting !== i
                    }"
                  >
                    <a
                      :id="`${encodeURI(element.id)}_anchor`"
                      class="articleContentLink hover:underline"
                      :class="{
                        'text-black': lowestIntersecting === i,
                        'dark:text-white': lowestIntersecting === i
                      }"
                      :href="`#${encodeURI(element.id)}`"
                    >{{ element.textContent }}</a>
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
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import articles from '../articles.json'
import { mdiArrowLeft } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

const props = defineProps({
  dark: { type: Boolean, default: false }
})

const route = useRoute()
const router = useRouter()

const articleName = ref('')
const title = ref('')
const published = ref('')
const lastUpdate = ref('')
const bibliography = ref([])
const relatedArticles = ref([])
const reviewers = ref([])
const authors = ref([])
const coAuthors = ref([])
const contents = ref([])
const lowestIntersecting = ref(-1)
const contentElements = ref([])

const tags = ref([])

onMounted(async () => {
  await updateData(false)
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

watch(route, async (current, prev) => {
  if (current.fullPath !== prev.fullPath) {
    await updateData(false)
  }
})

/**
 * sortedReviewers
 *
 * @type {ComputedRef<Array<UnwrapRefSimple<*>>|[]>}
 */
const sortedReviewers = computed(() => {
  if (reviewers.value) {
    return [...reviewers.value].sort((a, b) => {
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
        router.replace({
          hash: `#${contentElements.value[i - 1].id}`
        })
      }
      i = contentElements.value.length
      lowestIntersecting.value = last
      return
    }
    last = contentElements.value[i].intersectionId
  }

  if (contentElements.value.length > 0) {
    if (contentElements.value[contentElements.value.length - 1].offsetTop < scrollValue) {
      lowestIntersecting.value =
        contentElements.value[contentElements.value.length - 1].intersectionId
      router.replace({
        hash: `#${contentElements.value[contentElements.value.length - 1].id}`
      })
    }
  }
}

/**
 * updateData
 *
 * @returns {Promise<void>}
 */
const updateData = async (ssr) => {
  if (articleName.value === route.name.replace('articles-', '')) {
    await nextTick(() => {
      onScroll()
    })
    return
  }

  articleName.value = route.name.replace('articles-', '')

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
    coAuthors.value = articleMeta.coAuthors ? articleMeta.coAuthors : []

    const seoAuthors = []
    const articleAuthors = []
    for (let author of authors.value) {
      seoAuthors.push({
        '@type': 'Person',
        name: author.author,
        url: author.link
      })
      articleAuthors.push(author.author)
    }

    relatedArticles.value = []
    if (articleMeta.relatedTags && articleMeta.relatedTags.length > 0) {
      relatedArticles.value = findRelatedArticles(articleMeta.relatedTags)
    }

    useHead(
      {
        title: `Bridging the Gap - ${title.value}`,
        script: [
          {
            key: 'pageMeta',
            type: 'application/ld+json',
            children: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: title.value,
              image: [],
              datePublished: published.value,
              dateModified: lastUpdate.value,
              author: seoAuthors
            })
          }
        ]
      },
      {}
    )

    useSeoMeta({
      ogType: 'article',
      title: `Bridging the Gap - ${title.value}`,
      ogTitle: `Bridging the Gap - ${title.value}`,
      twitterTitle: `Bridging the Gap - ${title.value}`,
      description: articleMeta.short,
      ogDescription: articleMeta.short,
      twitterDescription: articleMeta.short,
      author: articleAuthors
    })
  }

  if (!ssr) {
    await nextTick(() => {
      createContents()
      onScroll()
    })
  } else {
    articleName.value = 'waiting for client mount'
  }
}

/**
 * findRelatedArticles
 *
 * @param relatedTags
 * @returns {any[]}
 */
const findRelatedArticles = (relatedTags) => {
  const articleSet = new Set()
  relatedTags.forEach((tag) => {
    articles.forEach((article) => {
      if (article.title !== title.value && article.tags && article.tags.includes(tag)) {
        articleSet.add({ title: article.title, name: article.name })
      }
    })
  })

  return Array.from(articleSet)
}

/**
 * createContents
 */
const createContents = () => {
  const article = document.getElementsByTagName('article')[0]

  contentElements.value = []

  if (article && article.children) {
    let intersectionId = -1
    const allIds = []
    Object.keys(article.children).forEach((childKey) => {
      const child = article.children[childKey]
      if (['h2', 'h3', 'h4', 'h5'].includes(child.localName)) {
        contentElements.value.push(child)
        intersectionId++
        child.intersectionId = intersectionId
        if (child.localName === 'h2') {
          child.id = `${encodeURI(child.textContent.replaceAll(' ', '_'))}`
          if (allIds.includes(child.id)) {
            let count = 0
            allIds.forEach((el) => {
              if (el === child.id) {
                count++
              }
            })
            child.id = `${encodeURI(child.textContent.replaceAll(' ', '_'))}_${count}`
          }
          allIds.push(child.id)
          contents.value.push({
            title: child.textContent,
            id: child.id,
            intersectionId: intersectionId,
            children: []
          })
        } else if (child.localName === 'h3') {
          child.id = `${encodeURI(child.textContent.replaceAll(' ', '_'))}`
          if (allIds.includes(child.id)) {
            let count = 0
            allIds.forEach((el) => {
              if (el === child.id) {
                count++
              }
            })
            child.id = `${encodeURI(child.textContent.replaceAll(' ', '_'))}_${count}`
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

          child.id = `${encodeURI(child.textContent.replaceAll(' ', '_'))}`
          if (allIds.includes(child.id)) {
            let count = 0
            allIds.forEach((el) => {
              if (el === child.id) {
                count++
              }
            })
            child.id = `${encodeURI(child.textContent.replaceAll(' ', '_'))}_${count}`
          }
          allIds.push(child.id)

          contents.value[h2Length - 1].children[h3Length - 1].children.push({
            title: child.textContent,
            intersectionId: intersectionId,
            id: child.id,
            children: []
          })
        } else if (child.localName === 'h5') {
          const h2Length = contents.value.length
          const h3Length = contents.value[h2Length - 1].children.length
          const h4Length = contents.value[h2Length - 1].children[h3Length - 1].children.length

          child.id = `${encodeURI(child.textContent.replaceAll(' ', '_'))}`
          if (allIds.includes(child.id)) {
            let count = 0
            allIds.forEach((el) => {
              if (el === child.id) {
                count++
              }
            })
            child.id = `${encodeURI(child.textContent.replaceAll(' ', '_'))}_${count}`
          }
          allIds.push(child.id)

          contents.value[h2Length - 1].children[h3Length - 1].children[h4Length - 1].children.push({
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
        const el = document.getElementById(`${hash}_anchor`)
        if (el) {
          el.click()
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

updateData(true)
</script>

<style scoped>
.pageHeight {
  height: calc(100svh - 6.5rem);
}
</style>
