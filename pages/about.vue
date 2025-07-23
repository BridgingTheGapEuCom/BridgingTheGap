<template>
  <div class="flex-col items-center sm:article">
    <!-- Logo display -->
    <div class="flex flex-col mt-10 mb-10">
      <img
        src="~/assets/logo.webp"
        class="m-auto dark:invert"
        alt="Bridging the Gap Logo"
      >
    </div>
    <!-- Divider line -->
    <div
      class="flex-1 h-[1px] mx-auto max-w-screen-sm my-10 dark:bg-neutral-700 bg-neutral-300 self-center"
    />
    <!-- Profile section for Karol Skrzymowski -->
    <div class="flex flex-col lg:flex-row items-center gap-3">
      <img
        src="/Karol.webp"
        class="w-[18rem] h-[18rem] mr-3 grayImage rounded-xl"
        width="1500"
        height="1500"
        alt="Karol Skrzymowski's picture"
      >
      <div class="flex flex-col items-center">
        <div class="text-3xl font-bold my-0">
          Karol Skrzymowski
        </div>
        <div class="text-base font-semibold mb-2">
          Enterprise / Integration Architect
        </div>
        <div class="flex flex-col">
          <article class="article hyphens-auto">
            <!-- Bio -->
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
            <!-- Social and contact links -->
            <p class="flex items-center justify-center">
              <SvgIcon
                :path="mdiLinkedin"
                type="mdi"
                :size="24"
                class="max-w-8 my-0"
              />
              <a
                class="link ml-2"
                href="https://www.linkedin.com/in/karolskrzymowski/"
              >https://www.linkedin.com/in/karolskrzymowski</a>
            </p>
            <p class="flex items-center justify-center">
              <SvgIcon
                :path="mdiAt"
                type="mdi"
                :size="24"
                class="max-w-6 my-0"
              />
              <a
                class="link ml-2"
                href="mailto:karol@bridgingthegap.eu.com"
              >karol@bridgingthegap.eu.com</a>
            </p>
          </article>
        </div>
      </div>
    </div>
    <!-- Divider line -->
    <div
      class="flex-1 h-[1px] mx-auto max-w-screen-sm my-10 dark:bg-neutral-700 bg-neutral-300 self-center"
    />
    <!-- Profile section for Radosław Przewuski -->
    <div class="flex flex-col lg:flex-row items-center gap-3 mt-10">
      <img
        src="/Radek.webp"
        class="w-[18rem] h-[18rem] mr-3 grayImage rounded-xl"
        width="1500"
        height="1500"
        alt="Radoslaw Przewuski's picture"
      >
      <div class="flex flex-col items-center">
        <div class="text-3xl font-bold my-0">
          Radosław Przewuski
        </div>
        <div class="text-base font-semibold mb-2">
          Integration Platforms Expert
        </div>
        <div class="flex flex-col">
          <article class="article hyphens-auto">
            <!-- Bio -->
            <p class="indent-6">
              Greetings, tech aficionados! I'm the Integration Whisperer, boasting over a decade of
              experience in the mystical arts of integration platforms. Picture me as the Gandalf of
              your digital realm, wielding my staff of code with the wisdom of a thousand sages.
              From the humble beginnings of coding in caves to now surfing the binary waves of
              innovation, I've journeyed through the ages of technology. It's like I've embarked on
              an epic quest through the realms of integration, slaying dragons of data inconsistency
              and forging alliances between disparate systems.
            </p>
            <p class="indent-6">
              With extensive experience in Tibco BusinessWorks, WebMethods, Mulesoft, and more, I'm
              equipped to cast spells of integration magic like no other. So, whether you're lost in
              the labyrinth of legacy systems or venturing into the unknown territories of modern
              APIs, fear not! I'm here to help.
            </p>
            <!-- Social and contact links -->
            <p class="flex items-center justify-center">
              <SvgIcon
                :path="mdiLinkedin"
                type="mdi"
                :size="24"
                class="max-w-8 my-0"
              />
              <a
                class="link ml-2"
                href="https://www.linkedin.com/in/rados%C5%82aw-przewuski/"
              >https://www.linkedin.com/in/radosław-przewuski/</a>
            </p>
            <p class="flex items-center justify-center">
              <SvgIcon
                :path="mdiAt"
                type="mdi"
                :size="24"
                class="max-w-6 my-0"
              />
              <a
                class="link ml-2"
                href="mailto:radek@bridgingthegap.eu.com"
              >radek@bridgingthegap.eu.com</a>
            </p>
          </article>
        </div>
      </div>
    </div>
    <!-- Divider line -->
    <div
      class="flex-1 h-[1px] mx-auto max-w-screen-sm my-10 dark:bg-neutral-700 bg-neutral-300 self-center"
    />
    <!-- Profile section for Hubert Drabczyk -->
    <div class="flex flex-col lg:flex-row items-center gap-3 mt-10">
      <img
        src="/Hubert.webp"
        class="w-[18rem] h-[18rem] mr-3 grayImage rounded-xl"
        width="2014"
        height="2014"
        alt="Hubert Drabczyk's picture"
      >
      <div class="flex flex-col items-center">
        <div class="text-3xl font-bold my-0">
          Hubert Drabczyk
        </div>
        <div class="text-base font-semibold mb-2">
          Business Analyst / Solution Architect
        </div>
        <article class="article hyphens-auto">
          <!-- Bio -->
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
          <!-- Social and contact links -->
          <p class="flex items-center justify-center">
            <SvgIcon
              :path="mdiLinkedin"
              type="mdi"
              :size="24"
              class="max-w-8 my-0"
            />
            <a
              class="link ml-2"
              href="https://www.linkedin.com/in/hubert-drabczyk-63b06628/"
            >https://www.linkedin.com/in/hubert-drabczyk-63b06628</a>
          </p>
          <p class="flex items-center justify-center">
            <SvgIcon
              :path="mdiAt"
              type="mdi"
              :size="24"
              class="max-w-6 my-0"
            />
            <a
              class="link ml-2"
              href="mailto:hubert@bridgingthegap.eu.com"
            >hubert@bridgingthegap.eu.com</a>
          </p>
        </article>
      </div>
    </div>
    <!-- Divider line -->
    <div
      class="flex-1 h-[1px] mx-auto max-w-screen-sm my-10 dark:bg-neutral-700 bg-neutral-300 self-center"
    />
    <!-- Profile section for Dominik Kruszewski -->
    <div class="flex flex-col lg:flex-row items-center gap-3 mt-10">
      <img
        src="/Dominik.webp"
        class="w-[18rem] h-[18rem] mr-3 grayImage rounded-xl"
        width="904"
        height="904"
        alt="Dominik Kruszewski's picture"
      >
      <div class="flex flex-col items-center">
        <div class="text-3xl font-bold my-0">
          Dominik Kruszewski
        </div>
        <div class="text-base font-semibold mb-2">
          DevOps Expert
        </div>
        <article class="article hyphens-auto">
          <!-- Bio -->
          <p class="indent-6">
            For over a decade, I've been roaming the IT landscape, building, breaking, and fixing
            whatever crosses my path. My tools? BASH, CLI, and a steady supply of energy drinks.
            Part caffeine-fueled coding machine, part stay-at-home dad with a secret identity as a
            gym rat.
          </p>
          <p class="indent-6">
            My expertise spans a wide range of technologies, from in-depth details of Linux to the
            lofty heights of cloud computing - Oracle Cloud, Azure, GCP and AWS. I've wrangled
            containers, managed Kubernetes and OpenShift clusters from cradle to grave, and battled
            the complexities of on-premises installations.
          </p>
          <p class="indent-6">
            Integration? Been there, done that. I've stitched together systems with numerous
            providers such as SoftwareAG WebMethods, TIBCO, and MuleSoft to ensure smooth data flow
            between platforms. Need a one-man army? I've got you covered.
          </p>
          <!-- Social and contact links -->
          <p class="flex items-center justify-center">
            <SvgIcon
              :path="mdiLinkedin"
              type="mdi"
              :size="24"
              class="max-w-8 my-0"
            />
            <a
              class="link ml-2"
              href="https://www.linkedin.com/in/dominik-kruszewski-a30829aa/"
            >https://www.linkedin.com/in/dominik-kruszewski-a30829aa</a>
          </p>
          <p class="flex items-center justify-center">
            <SvgIcon
              :path="mdiAt"
              type="mdi"
              :size="24"
              class="max-w-6 my-0"
            />
            <a
              class="link ml-2"
              href="mailto:dominik@bridgingthegap.eu.com"
            >dominik@bridgingthegap.eu.com</a>
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
// This page introduces the core team members.
// The script section contains logic for processing and displaying article reviewers,
// which seems to be intended for the 'About our Reviewers' page and is not used in this component's template.

import articles from '../articles.json'
import { onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { mdiAt, mdiLinkedin } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

// Gets the current route object to access route parameters.
const route = useRoute()

// Reactive references for reviewer data and UI state. Note: These are not used by the template above.
const reviewers = ref([])
const showMore = ref('')

/**
 * Lifecycle hook that runs before the component is mounted.
 * It processes the articles.json file to build a list of reviewers and the articles they have reviewed.
 */
onBeforeMount(() => {
  reviewers.value = []

  // Reads a query parameter, likely to highlight a specific reviewer.
  showMore.value = route.query.reviewed

  const reviewersMap = new Map()
  const reviewerDetails = new Map()

  // Loop through all articles to find reviewers.
  for (const article of articles) {
    if (article.reviewers) {
      for (const reviewer of article.reviewers) {
        // Store reviewer details (name and link).
        reviewerDetails.set(reviewer.reviewer, reviewer.link)
        // Group articles by reviewer.
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

  // Create the final, structured list of reviewers.
  for (const reviewer of reviewersMap.keys()) {
    reviewers.value.push({
      id: i++,
      name: reviewer,
      link: reviewerDetails.get(reviewer),
      reviewed: reviewersMap.get(reviewer)
    })
  }

  // Sort reviewers alphabetically by name.
  reviewers.value = reviewers.value.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
})

/**
 * Watches for changes in the route's query parameters.
 * @param {object} current - The new route object.
 */
watch(route, (current) => {
  showMore.value = current.query.reviewed
})
</script>

<style scoped>
/* Applies a grayscale filter to images, typically used for profile pictures. */
.grayImage {
  filter: grayscale(100%);
}
</style>
