import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  if (!config.public.RECAPTCHA_SITE_KEY) {
    console.error('RECAPTCHA_SITE_KEY is not defined in public runtimeConfig.')
    return
  }

  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: config.public.RECAPTCHA_SITE_KEY,
    loaderOptions: {
      autoHideBadge: true
    }
  })
})