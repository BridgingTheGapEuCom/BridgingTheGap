export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    if (window.location.pathname === '/events') return

    const body = window.document.getElementById('body')
    if (body) {
      body.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  })
})
