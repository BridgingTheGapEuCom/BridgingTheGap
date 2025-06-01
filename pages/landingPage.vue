<template>
  <div class="flex-col items-center article overflowHidden">
    <LandingPage1 />
    <LandingPage2 />
    <LandingPage3 />
    <LandingPage4 />
    <LandingPage5 />
    <LandingPage6 />
    <LandingPage7 />
    <LandingPage8 />
  </div>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'
import LandingPage1 from '~/components/landingPage/LandingPage_1.vue'
import LandingPage2 from '~/components/landingPage/LandingPage_2.vue'
import LandingPage3 from '~/components/landingPage/LandingPage_3.vue'
import LandingPage4 from '~/components/landingPage/LandingPage_4.vue'
import LandingPage5 from '~/components/landingPage/LandingPage_5.vue'
import LandingPage6 from '~/components/landingPage/LandingPage_6.vue'
import LandingPage7 from '~/components/landingPage/LandingPage_7.vue'
import LandingPage8 from '~/components/landingPage/LandingPage_8.vue'

const router = useRouter()
let lastIntersection = null
const { isScrolling } = useScroll(document)

onMounted(() => {
  nextTick(() => {
    const page_1 = document.getElementById('page_1')
    const page_2 = document.getElementById('page_2')
    const page_3 = document.getElementById('page_3')
    const page_4 = document.getElementById('page_4')
    const page_5 = document.getElementById('page_5')
    const page_6 = document.getElementById('page_6')
    const page_7 = document.getElementById('page_7')
    const page_8 = document.getElementById('page_8')

    useIntersectionObserver(
      page_1,
      ([entry]) => {
        if (entry?.isIntersecting) {
          lastIntersection = 'page_1'
        }
      },
      {
        threshold: 0.1
      }
    )
    useIntersectionObserver(
      page_2,
      ([entry]) => {
        if (entry?.isIntersecting) {
          lastIntersection = 'page_2'
        }
      },
      {
        threshold: 0.1
      }
    )
    useIntersectionObserver(
      page_3,
      ([entry]) => {
        if (entry?.isIntersecting) {
          lastIntersection = 'page_3'
        }
      },
      {
        threshold: 0.1
      }
    )
    useIntersectionObserver(
      page_4,
      ([entry]) => {
        if (entry?.isIntersecting) {
          lastIntersection = 'page_4'
        }
      },
      {
        threshold: 0.1
      }
    )
    useIntersectionObserver(
      page_5,
      ([entry]) => {
        if (entry?.isIntersecting) {
          lastIntersection = 'page_5'
        }
      },
      {
        threshold: 0.1
      }
    )
    useIntersectionObserver(
      page_6,
      ([entry]) => {
        if (entry?.isIntersecting) {
          lastIntersection = 'page_6'
        }
      },
      {
        threshold: 0.1
      }
    )
    useIntersectionObserver(
      page_7,
      ([entry]) => {
        if (entry?.isIntersecting) {
          lastIntersection = 'page_7'
        }
      },
      {
        threshold: 0.1
      }
    )
    useIntersectionObserver(
      page_8,
      ([entry]) => {
        if (entry?.isIntersecting) {
          lastIntersection = 'page_8'
        }
      },
      {
        threshold: 0.1
      }
    )
  })
})

watch(isScrolling, (current, previous) => {
  if (current === false && previous === true && lastIntersection) {
    router.replace({ hash: `#${lastIntersection}` })
    if (document.getElementById(lastIntersection)) {
      document.getElementById(lastIntersection).scrollIntoView()
    }
    lastIntersection = null
  }
})
</script>

<style scoped lang="scss"></style>
