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
    <div
      v-if="!SubscribeMessage"
      class="text-center flex flex-col items-center justify-center mt-4"
    >
      <BTGInput
        v-model="email"
        style="position: relative"
        class="email w-full"
        :class="{ invalidEmail: invalidEmailAddress, 'mb-4': invalidEmailAddress }"
        label="Your Email address"
        :icon="mdiAt"
      />
      <button
        class="bg-gray-200 border border-gray-500 p-3 mt-4 rounded-lg dark:text-black min-w-28"
        :class="{ 'opacity-50': notValid, 'cursor-not-allowed': notValid }"
        @click="subscribe"
      >
        Subscribe
      </button>
    </div>
    <div
      v-else
      class="text-center font-bold"
      style="font-size: min(3vh, 5dvw)"
    >
      {{ SubscribeMessage }}
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
import { mdiAt } from '@mdi/js'
import axios from 'axios'

const email = ref('')
const SubscribeMessage = ref('')

const invalidEmailAddress = computed(() => {
  return email.value !== '' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)
})

const notValid = computed(() => {
  return email.value === '' || invalidEmailAddress.value
})

const subscribe = async () => {
  if (notValid.value) {
    return
  }

  try {
    await axios.post(
      '/api/addSubscriber',
      JSON.stringify({
        email: email.value
      }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (e) {
    if (e.response?.data?.message) {
      if (e.response.data.message.startsWith('E11000')) {
        SubscribeMessage.value = 'You are already subscribed!'
        return
      }
    }
    SubscribeMessage.value = 'Something went wrong. Please try again later.'
    return
  }

  SubscribeMessage.value = 'Thank you for subscribing!'
}
</script>

<style scoped>
.invalidEmail {
  color: #dc2626;

  &:before {
    content: 'Invalid email address';
    position: absolute;
    bottom: -1.2rem;
    left: 2rem;
    font-size: 0.7rem;
  }
}
</style>
