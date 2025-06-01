<template>
  <div
    class="flex-col items-center article snap-y overflow-auto snap-mandatory w-full min-w-full scroll-smooth text-black dark:text-white"
    style="max-height: calc(100dvh)"
  >
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
import LandingPage1 from '~/components/landingPage/LandingPage_1.vue'
import LandingPage2 from '~/components/landingPage/LandingPage_2.vue'
import LandingPage3 from '~/components/landingPage/LandingPage_3.vue'
import LandingPage4 from '~/components/landingPage/LandingPage_4.vue'
import LandingPage5 from '~/components/landingPage/LandingPage_5.vue'
import LandingPage6 from '~/components/landingPage/LandingPage_6.vue'
import LandingPage7 from '~/components/landingPage/LandingPage_7.vue'
import LandingPage8 from '~/components/landingPage/LandingPage_8.vue'

definePageMeta({
  layout: 'landingLayout'
})
</script>

<style>
html {
  --tw-scroll-snap-strictness: 0.3;
}
</style>
