<template>
  <LandingPageLandingLayout :page-id="8" :last-page="true">
    <div class="text-center flex flex-col items-center justify-center mt-5">
      <div style="font-size: min(5dvh, 10dvw)">Join our Newsletter</div>
      <div style="font-size: min(5dvh, 10dvw)">and Get Notified!</div>
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
        icon="mdi:at"
      />
      <button
        class="bg-gray-200 border border-gray-500 p-3 mt-4 rounded-lg dark:text-black min-w-28"
        :class="{
          'opacity-50': notValid || subscribing,
          'cursor-not-allowed': notValid || subscribing
        }"
        :disabled="notValid || subscribing"
        @click="subscribe"
      >
        {{ subscribing ? 'Subscribing...' : 'Subscribe' }}
      </button>
    </div>
    <div v-else class="text-center font-bold" style="font-size: min(3vh, 5dvw)">
      {{ SubscribeMessage }}
    </div>
    <div class="text-center flex flex-col items-center justify-center">
      <img src="~/assets/logo.webp" class="dark:invert" style="width: 20dvh" />
      <b>BridgingTheGap.eu.com</b>
    </div>
  </LandingPageLandingLayout>
</template>

<script lang="ts" setup>
import BTGInput from '~/components/helpers/BTGInput.vue'
import { type IReCaptchaComposition, useReCaptcha } from 'vue-recaptcha-v3'

const email = ref('')
const SubscribeMessage = ref('')
const subscribing = ref(false)

let recaptcha: IReCaptchaComposition | undefined = undefined

if (import.meta.client) {
  recaptcha = useReCaptcha()
}

onMounted(async () => {
  if (recaptcha) {
    try {
      await recaptcha.recaptchaLoaded()
    } catch (error) {
      console.error('reCAPTCHA failed to load:', error)
    }
  }
})

const invalidEmailAddress = computed(() => {
  return email.value !== '' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)
})

const notValid = computed(() => {
  return email.value === '' || invalidEmailAddress.value
})

const subscribe = async () => {
  if (notValid.value || subscribing.value || !recaptcha) {
    return
  }

  subscribing.value = true

  try {
    await recaptcha.recaptchaLoaded()

    const token = await recaptcha.executeRecaptcha('submit_message')

    const response = await $fetch('/api/addSubscriber', {
      method: 'POST',
      body: {
        email: email.value,
        token
      }
    })

    if (response.status === 409) {
      SubscribeMessage.value = 'You are already subscribed!'
    } else if (response.status === 500) {
      SubscribeMessage.value = 'Something went wrong. Please try again later.'
    } else {
      SubscribeMessage.value = 'Thank you for subscribing!'
    }
  } catch (error) {
    console.error('Subscription failed:', error)
    SubscribeMessage.value = 'Something went wrong. Please try again later.'
  } finally {
    subscribing.value = false
  }
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
