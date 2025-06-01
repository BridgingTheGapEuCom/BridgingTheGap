<template>
  <div
    id="body"
    ref="body"
    :class="{ dark: darkTheme }"
    @click="hamburgerOpened = false"
  >
    <div
      v-if="readingHelper"
      class="absolute h-full bottom-0 w-full pointer-events-none"
    >
      <div class="readingLine">
        <div v-if="isMobile">
          <SvgIcon
            class="pointer-events-auto absolute right-2 top-6 z-20 bg-neutral-200 rounded-full p-1 text-gray-800"
            type="mdi"
            :path="mdiHandBackLeftOutline"
            :size="48"
            @touchmove.prevent="moveDragFocusHelper"
          />
        </div>
      </div>
    </div>
    <nav
      class="z-10 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-neutral-800 shadow-neutral-200 sticky top-0"
    >
      <div class="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto p-1">
        <NuxtLink to="/">
          <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="~/assets/logo_low_poly.webp"
              class="h-7 w-7 m-1 dark:invert"
              alt="Bridging the Gap logo"
            >
            <div
              class="text-base mt-1 font-semibold whitespace-nowrap hidden xs:block text-black dark:text-gray-50 tracking-wide"
            >
              Bridging the Gap
            </div>
          </div>
        </NuxtLink>
        <div>
          <button
            v-show="
              route && route.name && route.name !== 'index' && !route.name.startsWith('about')
            "
            class="inline-flex items-center navigation-button p-2 w-10 h-10 justify-end text-sm text-black rounded-lg hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-label="Focus helper"
            type="button"
            @click="focusHelper"
          >
            <SvgIcon
              type="mdi"
              :path="mdiEyeMinus"
              :size="26"
            />
          </button>
          <button
            type="button"
            class="inline-flex items-center navigation-button p-2 w-10 h-10 justify-end text-sm text-black rounded-lg hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            :aria-expanded="hamburgerOpened"
            @click.stop="expandNavigation"
          >
            <span class="sr-only">Open main menu</span>
            <SvgIcon
              :path="mdiMenu"
              type="mdi"
              size="26"
            />
          </button>
        </div>
        <transition
          name="scale-navigation"
          mode="in-out"
        >
          <div
            v-if="hamburgerOpened"
            id="navbar-default"
            tabindex="-1"
            class="absolute h-32 bg-neutral-200 shadow-md dark:bg-neutral-800 right-0"
            :class="{
              border: !smallWidth,
              'border-gray-300': !smallWidth,
              'dark:border-gray-700': !smallWidth,
              'rounded-lg': !smallWidth,
              'rounded-b-lg': smallWidth,
              'dark:shadow-none': !smallWidth,
              'dark:shadow-neutral-800': smallWidth,
              'w-full': smallWidth,
              'top-12': smallWidth,
              'top-14': !smallWidth
            }"
            @click="stopPropagation"
          >
            <ul
              class="flex flex-col gap-1 p-2 m-2 bg-transparent border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse"
              :class="{ 'items-end': !smallWidth, 'items-center': smallWidth }"
            >
              <li>
                <NuxtLink
                  to="/about"
                  class="text-black dark:text-white navigation-button p-1"
                  aria-current="page"
                >
                  About us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/aboutTheProject"
                  class="text-black dark:text-white navigation-button p-1"
                  aria-current="page"
                >
                  About the project
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/aboutOurReviewers"
                  class="text-black dark:text-white navigation-button p-1"
                  aria-current="page"
                >
                  About our reviewers
                </NuxtLink>
              </li>
              <li class="flex items-center">
                <button
                  aria-label="Change theme"
                  type="button"
                  @click="changeTheme"
                >
                  <SvgIcon
                    class="text-black dark:text-gray-100 hover:text-black dark:hover:text-white card"
                    type="mdi"
                    :path="mdiThemeLightDark"
                    :size="32"
                  />
                </button>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </nav>
    <main
      class="text-black dark:text-gray-50 w-full px-4 py-4 flex justify-center items-stretch flex-grow"
    >
      <div class="max-w-screen-xl flex flex-grow justify-center">
        <slot :dark="darkTheme" />
      </div>
    </main>
    <footer
      class="sticky bottom-0 w-full shadow-up dark:shadow-none pr-4 pt-1 hidden md:flex bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white"
    >
      <div class="flex mx-2 justify-start max-w-screen-xl w-full text-[0.65rem]">
        <a
          href="/"
          property="dct:title"
          rel="cc:attributionURL"
          target="_blank"
        ><b>Bridging the Gap</b></a>
        &nbsp;© {{ new Date().getFullYear() }} by&nbsp;
        <NuxtLink
          class="link text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white font-bold"
          href="/about"
        >
          Bridging the Gap team
        </NuxtLink>
        &nbsp;is licensed under
        <a
          href="https://creativecommons.org/licenses/by/4.0"
          target="_blank"
          class="flex"
        >
          &nbsp;CC BY 4.0
          <cc class="mx-0.5" />
          <cc_person />
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiEyeMinus, mdiHandBackLeftOutline, mdiMenu, mdiThemeLightDark } from '@mdi/js'
import { useMouse, useWindowFocus, useWindowSize } from '@vueuse/core'
import '@fontsource/atkinson-hyperlegible'
import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/400-italic.css'
import '@fontsource/atkinson-hyperlegible/700.css'
import '@fontsource/atkinson-hyperlegible/700-italic.css'
import Cc_person from '~/components/cc_person.vue'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

const themeCookie = useCookie('theme', { maxAge: 31556926, default: () => ref(false) })
const darkTheme = useState('dark', () => ref(false))

const body = ref()

const mouse = reactive(useMouse({ target: body, touch: false, type: 'client' }))
const { height, width } = useWindowSize()
const readingHelper = ref(true)
const focused = useWindowFocus()

const hamburgerOpened = ref(false)

const route = useRoute()

/**
 * onMounted
 */
onMounted(() => {
  readingHelper.value = false

  if (themeCookie.value !== undefined && themeCookie.value !== 'unset') {
    darkTheme.value = themeCookie.value === true
  } else {
    darkTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    themeCookie.value = `${darkTheme.value}`
  }

  const metaThemeColor = document.querySelector('meta[name=theme-color]')
  if (darkTheme.value !== true) {
    metaThemeColor.setAttribute('content', 'rgb(10,10,10)')
  } else {
    metaThemeColor.setAttribute('content', 'rgb(245,245,245)')
  }
})

/**
 * stopPropagation
 *
 * @param event
 */
const stopPropagation = (event) => {
  if (event) {
    event.stopImmediatePropagation()
  }
}

/**
 * Changes the page theme
 */
const changeTheme = (event) => {
  darkTheme.value = !darkTheme.value
  themeCookie.value = `${darkTheme.value}`

  event.stopImmediatePropagation()

  const metaThemeColor = document.querySelector('meta[name=theme-color]')
  if (darkTheme.value === true) {
    metaThemeColor.setAttribute('content', 'rgb(10,10,10)')
  } else {
    metaThemeColor.setAttribute('content', 'rgb(250,250,250)')
  }
}

/**
 * Turn on or off the focus helper
 */
const focusHelper = () => {
  readingHelper.value = !readingHelper.value
  hamburgerOpened.value = false

  if (isMobile.value) {
    document.querySelector(':root').style.setProperty('--mouseY', `${height.value / 2}px`)
  }
}

/**
 * Sets the mouseY CSS property for the focus helper lines
 * @param data
 */
const moveDragFocusHelper = (data) => {
  if (data.targetTouches[0]) {
    document
      .querySelector(':root')
      .style.setProperty('--mouseY', `${data.targetTouches[0].clientY - 110}px`)
  }
}

/**
 * Expands or collapses the navigation hamburger menu
 */
const expandNavigation = () => {
  hamburgerOpened.value = !hamburgerOpened.value
}

const isMobile = computed(() => {
  if (navigator) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  }

  return false
})

/**
 * smallWidth
 *
 * @type {ComputedRef<unknown>}
 */
const smallWidth = computed(() => {
  return isMobile.value && width.value <= parseInt(fullConfig.theme.screens.xl)
})

watch(route, (current) => {
  hamburgerOpened.value = false
  if (current && (current.name === 'home' || current.name === 'about')) {
    readingHelper.value = false
  }
})

watch(
  mouse,
  (current) => {
    if (!isMobile.value && focused && readingHelper.value && current.y < body.value.clientHeight) {
      document.querySelector(':root').style.setProperty('--mouseY', `${current.y - 80}px`)
    }
  },
  { deep: true }
)
</script>

<style scoped lang="scss">
.darkThemeLogo {
  fill: #f3f4f6;
}
</style>
