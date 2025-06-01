<template>
  <LandingPageLandingLayout
    :page-id="8"
    :last-page="true"
  >
    <div class="text-center flex flex-col items-center justify-center mt-5">
      <div style="font-size: min(5dvh, 10dvw)">
        Join our Newsletter
      </div>
      <div style="font-size: min(5dvh, 10dvw)">
        and Get Notified!
      </div>
    </div>
    <div class="text-center flex flex-col items-center justify-center mt-4">
      <BTGInput
        class="w-full"
        label="Your Email address"
        :icon="mdiEmail"
      />
      <button class="bg-gray-200 border border-gray-500 p-3 rounded-lg mt-4 dark:text-black">
        Subscribe
      </button>
    </div>
    <div class="text-center flex flex-col items-center justify-center">
      <img
        src="~/assets/logo.webp"
        class="dark:invert"
        style="width: 20dvh"
      >
      <b>Bridging The Gap</b>
    </div>
  </LandingPageLandingLayout>
</template>

<script setup>
import BTGInput from '~/components/helpers/BTGInput.vue'
import { mdiEmail } from '@mdi/js'
</script>

<style scoped></style>
