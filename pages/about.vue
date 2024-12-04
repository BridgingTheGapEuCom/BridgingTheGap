<template>
  <div class="flex-col items-center">
    <div class="flex flex-col lg:flex-row items-center gap-3">
      <img
        src="/Karol.webp"
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
              My expertise lies primarily in API-Led Architecture, although I've also delved into
              the realm of Event-Driven Architecture (EDA) to broaden my professional toolkit. I've
              worked extensively with a myriad of integration platforms, including Tibco
              BusinessWorks 5.x and 6.x, Boomi, WebMethods, Mulesoft, Azure Integration Services,
              and WSO2, constantly adapting to the evolving landscape of integration technologies.
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
    <div class="flex flex-col lg:flex-row items-center gap-3 mt-10">
      <img
        src="/Radek.webp"
        class="w-[18rem] h-[18rem] mr-3 grayImage rounded-xl"
        width="2014"
        height="2014"
        alt="Radoslaw Przewuski's picture"
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
    <div class="flex flex-col lg:flex-row items-center gap-3 mt-10">
      <img
        src="/Hubert.webp"
        class="w-[18rem] h-[18rem] mr-3 grayImage rounded-xl"
        width="2014"
        height="2014"
        alt="Hubert Drabczyk's picture"
      />
      <div class="flex flex-col items-center">
        <div class="text-3xl font-bold my-0">Hubert Drabczyk</div>
        <div class="text-base font-semibold mb-2">Business Analyst / Solution Architect</div>
        <article class="article hyphens-auto">
          <p class="indent-6">
            With background in electronics and actual experience in turning an idea into a
            manufactured device, I also studied IT management and most of my career was in IT. I
            worked as developer, project manager, systems analyst, solution and integration
            architect and as a business analyst.
          </p>
          <p class="indent-6">
            Alternating between analyst and architect roles, I worked for telco, banks, insurer,
            airline, goods manufacturers and retailers, utilities and more. I have experience as
            employee, consultant and even as company owner (UBO) - which gives good, multiple points
            of view insight into business around IT.
          </p>
          <p class="indent-6">
            My expertise is in understanding the context of IT projects and figuring out, what has
            to be done, and more importantly, what should not be done. That involves modeling the
            business processes, system-to-system and system-to-user interactions; understanding the
            data and mapping it between domains and systems. I see integration as next level of IT
            systems evolution, the level which brings its own challenges and promises. I&#39;m eager
            to help solving the challenges to take the promised profit.
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import articles from '../articles.json'
import { onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const reviewers = ref([])
const showMore = ref('')

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

/**
 * getImage
 * @param image
 * @returns {`/${string}.webp`}
 */
const getImage = (image) => {
  return `/${image}.webp`
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
