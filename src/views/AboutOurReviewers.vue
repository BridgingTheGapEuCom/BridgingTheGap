<template>
  <div class="flex-col items-center">
    <div class="flex items-center">
      <h1>Our Reviewers</h1>
    </div>
    <div class="flex flex-col xl:w-[77%] lg:w-[55rem] w-[80%] max-w-[70ch] lg:max-w-[100%]">
      <div v-for="reviewer of reviewers" :key="reviewer.id" class="flex flex-col items-stretch">
        <div class="min-w-[60vw] lg:min-w-[0] my-2 border-b dark:border-neutral-800" />
        <div
          class="flex flex-col lg:items-start items-center lg:grid gap-3 lg:grid-flow-col grid-flow-row"
        >
          <a
            class="link font-bold text-gray-800 dark:text-gray-200 text-lg hover:text-black dark:hover:text-white"
            target="_blank"
            :href="reviewer.link"
            >{{ reviewer.name }}</a
          >
          <div class="flex flex-col lg:items-end items-center justify-self-end gap-1">
            <div class="mb-1 lg:mt-0 mt-3">Articles reviewed by {{ reviewer.name }}</div>
            <template v-for="article of reviewer.reviewed.slice(0, reviewMax)">
              <router-link
                class="link text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                :to="`/articles/${article.link}`"
                >{{ article.title }}
              </router-link>
            </template>
            <template v-if="reviewer.reviewed.length > reviewMax">
              <template v-if="showMore === reviewer.name">
                <router-link
                  v-for="article of reviewer.reviewed.slice(reviewMax)"
                  class="link text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  :to="`/articles/${article.link}`"
                  >{{ article.title }}
                </router-link>
                <router-link
                  class="link text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-bold"
                  to="about"
                  >show less
                </router-link>
              </template>
              <template v-else>
                <router-link
                  class="link text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-bold"
                  :to="{ name: 'about', query: { reviewed: reviewer.name } }"
                  >show more
                </router-link>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import articles from '../../articles.json' with { type: 'json' }
import { onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const reviewers = ref([])
const showMore = ref('')

const reviewMax = 2

onBeforeMount(() => {
  reviewers.value = []

  showMore.value = route.query.reviewed

  const reviewersMap = new Map()
  const reviewerDetails = new Map()

  for (const article of articles) {
    if (article.reviewers) {
      for (const reviewer of article.reviewers) {
        reviewerDetails.set(reviewer.reviewer, reviewer.link)
        if (reviewersMap.has(reviewer.reviewer)) {
          const newArray = reviewersMap.get(reviewer.reviewer)
          newArray.push({
            title: article.title,
            link: article.name
          })
          reviewersMap.set(reviewer.reviewer, newArray)
        } else {
          reviewersMap.set(reviewer.reviewer, [
            {
              title: article.title,
              link: article.name
            }
          ])
        }
      }
    }
  }

  let i = 0

  for (const reviewer of reviewersMap.keys()) {
    reviewers.value.push({
      id: i++,
      name: reviewer,
      link: reviewerDetails.get(reviewer),
      reviewed: reviewersMap.get(reviewer)
    })
  }

  reviewers.value = reviewers.value.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
})

watch(route, (current) => {
  showMore.value = current.query.reviewed
})
</script>

<style scoped></style>
