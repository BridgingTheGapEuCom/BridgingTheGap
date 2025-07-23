export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    const body = window.document.getElementById('body')
    if (body) {
      body.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  })
})
