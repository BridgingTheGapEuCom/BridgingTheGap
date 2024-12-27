export default defineNuxtPlugin({
  name: 'themeSelector',
  enforce: 'pre',
  hooks: {
    'app:created'() {
      const cookie = useCookie('theme')
      if (cookie.value !== undefined) {
        useState('dark', () => cookie.value)
      }
    }
  }
})
