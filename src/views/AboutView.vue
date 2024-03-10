<template>
  <div class="flex-col gap-5 items-center">
    <div class="flex flex-grow flex-col lg:flex-row items-center gap-3">
      <img
        src="https://media.licdn.com/dms/image/C4E03AQFcsizHdNXkfw/profile-displayphoto-shrink_800_800/0/1640981279846?e=1710979200&v=beta&t=OJtu0_INxyRU0PAjyYX9qcJLniBSB0BJBVKj53NEuGg"
        class="w-[15rem] h-[15rem] mr-3 grayImage rounded-xl lg:self-start"
        alt="Karol Skrzymowski's picture"
      />
      <div class="flex flex-col items-center">
        <div class="text-3xl font-bold my-0">Karol Skrzymowski</div>
        <div class="text-base font-semibold mb-2">Enterprise Architect</div>
        <p class="text-justify hyphens-auto article">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor dolore enim et
          ex necessitatibus, quo ratione voluptatibus! Accusantium cumque deserunt id in
          necessitatibus omnis pariatur saepe. Laudantium, nisi, reiciendis?
        </p>
        <p class="text-justify hyphens-auto article">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur expedita
          harum illum laborum, magnam minus perferendis perspiciatis voluptatem! Ab atque fugit
          laudantium minima mollitia quae quam qui quo ut. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus aspernatur dolorum ea ex facere id iste laudantium nobis
          voluptatem voluptates. Deleniti doloremque illum ipsum odit omnis perferendis provident
          quo repellat.
        </p>
      </div>
    </div>
    <div class="flex flex-grow flex-col lg:flex-row items-center gap-3 mt-4">
      <img
        src="https://media.licdn.com/dms/image/C4E03AQGmJe15HxN00A/profile-displayphoto-shrink_800_800/0/1657117114839?e=1710979200&v=beta&t=k3latha8PRddTTDJ9FkEZ3bJJT9DkCyQaLqNC5EWGNA"
        class="w-[15rem] h-[15rem] mr-3 grayImage rounded-xl lg:self-start"
        alt="Radoslaw Przewuski's picture"
      />
      <div class="flex flex-col items-center">
        <div class="text-3xl font-bold my-0">Radosław Przewuski</div>
        <div class="text-base font-semibold mb-2">Integration Platforms Expert</div>
        <p class="text-justify hyphens-auto article">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor dolore enim et
          ex necessitatibus, quo ratione voluptatibus! Accusantium cumque deserunt id in
          necessitatibus omnis pariatur saepe. Laudantium, nisi, reiciendis?
        </p>
        <p class="text-justify hyphens-auto article">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur expedita
          harum illum laborum, magnam minus perferendis perspiciatis voluptatem! Ab atque fugit
          laudantium minima mollitia quae quam qui quo ut. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus aspernatur dolorum ea ex facere id iste laudantium nobis
          voluptatem voluptates. Deleniti doloremque illum ipsum odit omnis perferendis provident
          quo repellat.
        </p>
      </div>
    </div>
    <div class="flex flex-grow items-center gap-3">
      <h3>Our Reviewers</h3>
    </div>
    <div
      class="flex flex-grow flex-col gap-3 xl:w-[77%] lg:w-[55rem] w-[80%] max-w-[70ch] lg:max-w-[100%]"
    >
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
    <div class="flex flex-grow items-center">
      <div class="flex flex-grow flex-col items-center gap-3">
        <h3>Source</h3>
        <span>Content of this webpage, including it's code, can be found on our
          <a
            href="https://github.com/BridgingTheGapEuCom/BridgingTheGap"
            class="link text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            target="_blank"
          ><b>GitHub</b></a>
        </span>
      </div>
    </div>
    <div class="md:hidden flex flex-grow items-center">
      <div class="flex flex-grow flex-col items-center gap-3">
        <div class="min-w-[60vw] lg:min-w-[0] my-2 border-b dark:border-neutral-800" />
        <h3>License</h3>
        <div><b>Bridging the Gap</b> © 2024</div>
        <div>is licensed under</div>
        <div class="flex">
          <a
            href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
            rel="license noopener noreferrer"
            style="display: inline-block"
            target="_blank"
          >
          </a>
          &nbsp;CC BY 4.0
        </div>
        <div class="flex">
          <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank">
            <img
              alt=""
              class="w-[1.5rem] mx-1 self-center"
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            />
          </a>
          <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank">
            <img
              alt=""
              class="w-[1.5rem]"
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            />
          </a>
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

<style scoped>
.grayImage {
  filter: grayscale(100%);
}
</style>
