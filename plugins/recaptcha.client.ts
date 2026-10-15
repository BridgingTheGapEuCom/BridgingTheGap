import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  if (!config.public.recaptchaSiteKey) {
    console.error('NUXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined in runtimeConfig.')
    return
  }

  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: config.public.recaptchaSiteKey,
    loaderOptions: {
      autoHideBadge: true
    }
  })
})
