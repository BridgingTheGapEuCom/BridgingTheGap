export default defineNuxtPlugin({
  name: 'themeSelector',
  enforce: 'pre',
  hooks: {
    'app:created'() {
      const cookie = useCookie('theme', { maxAge: 31556926 })
      if (cookie.value !== undefined) {
        useState('dark', () => cookie.value)
      } else {
        cookie.value = 'unset'
      }
    }
  }
})
