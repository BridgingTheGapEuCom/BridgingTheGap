export default defineNuxtPlugin({
  name: 'themeSelector',
  enforce: 'pre',
  hooks: {
    'app:created'() {
      const cookie = useCookie<boolean | string>('theme', { maxAge: 31556926 })
      if (cookie.value === undefined) {
        cookie.value = 'unset'
        return
      }

      if (cookie.value !== 'unset') {
        useState<boolean>('dark').value = cookie.value === true || cookie.value === 'true'
      }
    }
  }
})
