<template>
  <div class="flex-grow flex-col flex items-center max-w-screen-lg">
    <!-- Logo display -->
    <div class="flex flex-col mt-10 mb-20">
      <img
        src="~/assets/logo.webp"
        class="m-auto dark:invert"
        alt="Bridging the Gap Logo"
      >
    </div>
    <!-- Page Title -->
    <div>
      <h1 class="text-center">
        Our Reviewers
      </h1>
    </div>
    <!-- Reviewers List Container -->
    <div class="flex flex-col xl:w-[77%] lg:w-[55rem] w-[80%] max-w-[70ch] lg:max-w-[100%]">
      <!-- Loop through each reviewer -->
      <div
        v-for="reviewer of reviewers"
        :key="reviewer.id"
        class="flex flex-col items-stretch"
      >
        <!-- Divider line -->
        <div class="min-w-[60vw] lg:min-w-[0] my-2 border-b dark:border-neutral-800" />
        <!-- Reviewer details and their reviewed articles -->
        <div
          class="flex flex-col lg:items-start items-center lg:grid gap-3 lg:grid-flow-col grid-flow-row"
        >
          <!-- Reviewer's name as a link to their profile -->
          <a
            class="link font-bold text-gray-800 dark:text-gray-200 text-lg hover:text-black dark:hover:text-white"
            target="_blank"
            :href="reviewer.link"
          >{{ reviewer.name }}</a>
          <!-- List of articles reviewed by this person -->
          <div class="flex flex-col lg:items-end items-center justify-self-end gap-1">
            <div class="mb-1 lg:mt-0 mt-3">
              Articles reviewed by {{ reviewer.name }}
            </div>
            <!-- Initially show a limited number of articles -->
            <template v-for="article of reviewer.reviewed.slice(0, reviewMax)">
              <NuxtLink
                class="link text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                :to="`/articles/${article.link}`"
              >
                {{ article.title }}
              </NuxtLink>
            </template>
            <!-- Logic for 'show more'/'show less' functionality -->
            <template v-if="reviewer.reviewed.length > reviewMax">
              <!-- If the reviewer is in the 'showMore' array, display the rest of the articles -->
              <template v-if="showMore.includes(reviewer.name)">
                <NuxtLink
                  v-for="article of reviewer.reviewed.slice(reviewMax)"
                  class="link text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  :to="`/articles/${article.link}`"
                >
                  {{ article.title }}
                </NuxtLink>
                <!-- 'show less' button -->
                <div
                  role="link"
                  class="link cursor-pointer text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-bold"
                  @click="removeFromArray(reviewer.name)"
                >
                  show less
                </div>
              </template>
              <!-- Otherwise, show the 'show more' button -->
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
// This script processes a list of articles to create a sorted list of unique reviewers
// and the articles they have reviewed. It also provides functionality to expand and
// collapse the list of reviewed articles for each reviewer.

import articles from '../articles.json'
import { ref } from 'vue'

// Reactive references for the list of reviewers and for tracking which reviewers' article lists are expanded.
const reviewers = ref([])
const showMore = ref([])

// The maximum number of reviewed articles to show by default.
const reviewMax = 5

/**
 * Processes the raw article data before the component is mounted.
 * It extracts all unique reviewers, their profile links, and the articles they have reviewed.
 */
const beforeMount = () => {
  reviewers.value = []

  const reviewersMap = new Map()
  const reviewerDetails = new Map()

  // Iterate through all articles to build up reviewer data.
  for (const article of articles) {
    if (article.reviewers) {
      for (const reviewer of article.reviewers) {
        // Store reviewer profile link.
        reviewerDetails.set(reviewer.reviewer, reviewer.link)
        // Group reviewed articles under each reviewer's name.
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

  // Format the processed data into the final reviewers array.
  for (const reviewer of reviewersMap.keys()) {
    reviewers.value.push({
      id: i++,
      name: reviewer,
      link: reviewerDetails.get(reviewer),
      reviewed: reviewersMap.get(reviewer)
    })
  }

  // Sort the reviewers alphabetically by name.
  reviewers.value = reviewers.value.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
}

/**
 * Removes a reviewer from the 'showMore' array to collapse their list of articles.
 * @param {string} reviewer - The name of the reviewer to remove.
 */
const removeFromArray = (reviewer) => {
  const index = showMore.value.indexOf(reviewer)
  if (index > -1) {
    showMore.value.splice(index, 1)
  }
}

// Run the data processing logic.
beforeMount()
</script>

<style scoped></style>