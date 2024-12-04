<template>
  <div class="flex-grow flex-col flex items-center max-w-screen-lg">
    <div>
      <h1 class="text-center">Our Reviewers</h1>
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
              <NuxtLink
                class="link text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                :to="`/articles/${article.link}`"
                >{{ article.title }}
              </NuxtLink>
            </template>
            <template v-if="reviewer.reviewed.length > reviewMax">
              <template v-if="showMore.includes(reviewer.name)">
                <NuxtLink
                  v-for="article of reviewer.reviewed.slice(reviewMax)"
                  class="link text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  :to="`/articles/${article.link}`"
                  >{{ article.title }}
                </NuxtLink>
                <div
                  role="link"
                  class="link cursor-pointer text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-bold"
                  @click="removeFromArray(reviewer.name)"
                >
                  show less
                </div>
              </template>
              <template v-else>
                <div
                  role="link"
                  class="link cursor-pointer text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-bold"
                  @click="showMore.push(reviewer.name)"
                >
                  show more
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import articles from '../articles.json'
import { ref } from 'vue'

const reviewers = ref([])
const showMore = ref([])

const reviewMax = 5

/**
 * beforeMount
 */
const beforeMount = () => {
  reviewers.value = []

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
}

/**
 * removeFromArray
 * @param reviewer
 */
const removeFromArray = (reviewer) => {
  const index = showMore.value.indexOf(reviewer)
  if (index > -1) {
    showMore.value.splice(index, 1)
  }
}

beforeMount()
</script>

<style scoped></style>
