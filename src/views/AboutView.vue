<template>
  <div class="flex-col gap-5 items-center">
    <div class="flex flex-grow flex-col lg:flex-row items-center gap-3">
      <v-lazy-image
        :src="getImage('Karol')"
        :src-placeholder="getImage('Karol_small')"
        class="w-[18rem] h-[18rem] mr-3 grayImage rounded-xl"
        width="1500"
        height="1500"
        alt="Karol Skrzymowski's picture"
      />
      <div class="flex flex-col items-center">
        <div class="text-3xl font-bold my-0">Karol Skrzymowski</div>
        <div class="text-base font-semibold mb-2">Enterprise / Integration Architect</div>
        <div class="flex clex-col">
          <article class="article hyphens-auto">
            <p class="indent-6">
              I'm an Enterprise and Integration Architect with a passion for application integration
              and over a decade of specialized experience in the field. My journey began as a junior
              developer, who stumbled onto Application Integration by pure chance and stayed for the
              joy of learning.
            </p>
            <p class="indent-6">
              My expertise lies primarily in orchestration driven service-oriented architecture
              (ODSOA), although I've also delved into the realm of event-driven architecture (EDA)
              to broaden my professional toolkit. I've worked extensively with a myriad of
              integration platforms, including Tibco BusinessWorks 5.x and 6.x, Boomi, WebMethods,
              Mulesoft, Azure Integration Services, and WSO2, constantly adapting to the evolving
              landscape of integration technologies.
            </p>
            <p class="indent-6">
              I see the world of Application Integration as not just a profession but a passion. I
              believe it to be one of the most fascinating fields in IT, with endless possibilities
              for innovation and problem-solving. To further this belief, I actively try to
              contribute to helping others understand this field by creating whitepapers and
              training materials that explain complex integration concepts, empowering others to
              navigate this exciting domain with confidence.
            </p>
          </article>
        </div>
      </div>
    </div>
    <div class="flex flex-grow flex-col lg:flex-row items-center gap-3 mt-4">
      <v-lazy-image
        :src="getImage('Radek')"
        :src-placeholder="getImage('Radek_small')"
        class="w-[18rem] h-[18rem] mr-3 grayImage rounded-xl"
        alt="Radoslaw Przewuski's picture"
        width="2014"
        height="2014"
      />
      <div class="flex flex-col items-center">
        <div class="text-3xl font-bold my-0">Radosław Przewuski</div>
        <div class="text-base font-semibold mb-2">Integration Platforms Expert</div>
        <article class="article hyphens-auto">
          <p class="indent-6">
            Greetings, tech aficionados! I'm the Integration Whisperer, boasting over a decade of
            experience in the mystical arts of integration platforms. Picture me as the Gandalf of
            your digital realm, wielding my staff of code with the wisdom of a thousand sages. From
            the humble beginnings of coding in caves to now surfing the binary waves of innovation,
            I've journeyed through the ages of technology. It's like I've embarked on an epic quest
            through the realms of integration, slaying dragons of data inconsistency and forging
            alliances between disparate systems.
          </p>
          <p class="indent-6">
            With extensive experience in Tibco BusinessWorks, WebMethods, Mulesoft, and more, I'm
            equipped to cast spells of integration magic like no other. So, whether you're lost in
            the labyrinth of legacy systems or venturing into the unknown territories of modern
            APIs, fear not! I'm here to help.
          </p>
        </article>
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
        <span
          >Content of this webpage, including it's code, can be found on our
          <a
            href="https://github.com/BridgingTheGapEuCom/BridgingTheGap"
            class="link text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            target="_blank"
            ><b>GitHub</b></a
          >
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
import VLazyImage from 'v-lazy-image'

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

const getImage = (image) => {
  return `/bridgingTheGap/${image}.webp`
}

watch(route, (current) => {
  showMore.value = current.query.reviewed
})
</script>

<style scoped>
.grayImage {
  filter: grayscale(100%);
}
</style>
