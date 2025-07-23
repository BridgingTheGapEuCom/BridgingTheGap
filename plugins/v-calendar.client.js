// plugins/v-calendar.client.js
import VCalendar from 'v-calendar'
import 'v-calendar/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VCalendar, {})
})