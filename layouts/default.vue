<template>
  <div id="body" ref="body" :class="{ dark: darkTheme }" @click="hamburgerOpened = false">
    <transition name="fade">
      <div
        v-if="hamburgerOpened"
        class="bg-neutral-800/75 absolute top-0 left-0 w-full h-full z-20"
      />
    </transition>
    <transition :name="!smallWidth ? 'appearFromLeft' : 'appearFromTop'">
      <div
        v-if="hamburgerOpened"
        id="navbar-default"
        ref="navbarHamburgerMenu"
        :class="{
          'h-screen': !smallWidth,
          border: !smallWidth,
          'border-gray-300': !smallWidth,
          'dark:border-gray-700': !smallWidth,
          'rounded-b-lg': smallWidth,
          'w-full': smallWidth
        }"
        class="absolute w-56 bg-neutral-200 dark:bg-neutral-800 right-0 z-20 flex flex-col overflow-hidden shadow-white"
        tabindex="-1"
        @click="stopPropagation"
      >
        <img
          v-if="!smallWidth"
          alt="Bridging the Gap Logo"
          class="mx-auto min-w-44 w-44 my-4 dark:invert"
          src="~/assets/logo.webp"
        />
        <div :class="{ 'my-7': !smallWidth, 'my-4': smallWidth }" class="flex justify-center">
          <div
            :class="{ darkTheme: darkTheme }"
            class="flex relative border themeGradient border-neutral-500 dark:border-neutral-500 rounded-3xl py-0.5 px-1 cursor-pointer"
            tabindex="0"
            @click="changeTheme"
            @keydown="atKeyDownThemeToggle"
          >
            <SvgIcon
              :path="mdiWeatherNight"
              :size="20"
              class="text-neutral-300 dark:text-gray-100 m-1"
              type="mdi"
            />
            <SvgIcon
              :path="mdiWhiteBalanceSunny"
              :size="20"
              class="text-neutral-800 dark:text-gray-100 m-1"
              type="mdi"
            />
            <div
              :class="{ darkTheme: darkTheme }"
              class="self-center absolute rounded-full h-6 w-6 bg-neutral-900 dark:bg-white themeToggle"
            />
          </div>
        </div>
        <div class="flex flex-col flex-1">
          <div>
            <ul
              class="flex flex-col gap-2 p-2 m-2 bg-transparent border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse items-center"
            >
              <!-- Navigation links -->
              <li>
                <NuxtLink
                  aria-current="page"
                  class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-nowrap link overflow-hidden"
                  to="/about"
                >
                  About us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  aria-current="page"
                  class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-nowrap link overflow-hidden"
                  to="/aboutTheProject"
                >
                  About the project
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  aria-current="page"
                  class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-nowrap link overflow-hidden"
                  to="/aboutOurReviewers"
                >
                  About our reviewers
                </NuxtLink>
              </li>
            </ul>
            <div class="h-0.5 w-14 mx-auto my-3 dark:bg-neutral-700 bg-neutral-300" />
            <ul
              class="flex flex-col gap-2 p-2 m-2 bg-transparent border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse items-center"
            >
              <li>
                <NuxtLink
                  aria-current="page"
                  class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-nowrap link overflow-hidden"
                  to="/badgesList"
                >
                  Badges
                </NuxtLink>
              </li>
            </ul>
            <div class="h-0.5 w-14 mx-auto my-3 dark:bg-neutral-700 bg-neutral-300" />
            <ul
              class="flex flex-col gap-2 p-2 m-2 bg-transparent border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse items-center"
            >
              <li>
                <NuxtLink
                  aria-current="page"
                  class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-nowrap link overflow-hidden"
                  to="/upcomingEvents"
                >
                  Upcoming Events
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  aria-current="page"
                  class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-nowrap link overflow-hidden"
                  to="/contactUs"
                >
                  Contact Us
                </NuxtLink>
              </li>
            </ul>
            <div class="h-0.5 w-14 mx-auto my-3 dark:bg-neutral-700 bg-neutral-300" />
            <ul
              class="flex flex-col gap-2 p-2 m-2 bg-transparent border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse items-center"
            >
              <li>
                <NuxtLink
                  aria-current="page"
                  class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-nowrap link overflow-hidden"
                  to="/privacyPolicy"
                >
                  Privacy Policy
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
    <!-- Reading helper overlay -->
    <div v-if="readingHelper" class="absolute h-full bottom-0 w-full pointer-events-none">
      <div class="readingLine">
        <div v-if="isMobile">
          <!-- Draggable handle for reading helper on mobile -->
          <SvgIcon
            :path="mdiHandBackLeftOutline"
            :size="48"
            class="pointer-events-auto absolute right-2 top-6 z-20 bg-neutral-200 rounded-full p-1 text-gray-800"
            type="mdi"
            @touchmove.prevent="moveDragFocusHelper"
          />
        </div>
      </div>
    </div>
    <!-- Navigation bar -->
    <nav
      class="z-10 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-neutral-800 shadow-neutral-200 sticky top-0"
    >
      <div class="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto p-1">
        <!-- Logo and site title -->
        <NuxtLink tabindex="1" to="/" @focus="hamburgerOpened = false">
          <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              alt="Bridging the Gap logo"
              class="h-7 w-7 m-1 dark:invert"
              src="~/assets/logo_low_poly.webp"
            />
            <div
              class="text-base mt-1 font-semibold whitespace-nowrap hidden xs:block text-black dark:text-gray-50 tracking-wide"
            >
              Bridging the Gap
            </div>
          </div>
        </NuxtLink>
        <!-- Navigation buttons -->
        <div>
          <!-- Focus helper button -->
          <button
            v-show="
              route &&
              route.name &&
              route.name !== 'index' &&
              !route.name.startsWith('about') &&
              route.name !== 'contactUs' &&
              route.name !== 'upcomingEvents'
            "
            aria-label="Focus helper"
            class="inline-flex items-center navigation-button p-2 w-10 h-10 justify-end text-sm text-black rounded-lg hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            tabindex="2"
            type="button"
            @click="focusHelper"
          >
            <SvgIcon :path="mdiEyeMinus" :size="26" type="mdi" />
          </button>
          <!-- Hamburger menu button -->
          <button
            :aria-expanded="hamburgerOpened"
            aria-controls="navbar-default"
            class="inline-flex items-center navigation-button p-2 w-10 h-10 justify-end text-sm text-black rounded-lg hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
            @focus="hamburgerOpened = false"
            @click.stop="expandNavigation"
          >
            <span class="sr-only">Open main menu</span>
            <SvgIcon :path="mdiMenu" size="26" type="mdi" />
          </button>
        </div>
      </div>
    </nav>
    <!-- Main content -->
    <main
      class="text-black dark:text-gray-50 w-full px-4 py-4 flex justify-center items-stretch flex-grow"
    >
      <div class="max-w-screen-xl flex flex-grow justify-center">
        <!-- Slot for page content -->
        <slot />
      </div>
    </main>
    <!-- Footer -->
    <footer
      class="sticky bottom-0 w-full shadow-up dark:shadow-none pr-4 pt-1 hidden md:flex bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white"
    >
      <div class="flex mx-2 justify-start max-w-screen-xl w-full text-[0.65rem]">
        <!-- Copyright and licensing information -->
        <a href="/" property="dct:title" rel="cc:attributionURL" target="_blank"
          ><b>Bridging the Gap</b></a
        >
        &nbsp;© {{ new Date().getFullYear() }} by&nbsp;
        <NuxtLink
          class="link text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white font-bold"
          href="/about"
        >
          Bridging the Gap team
        </NuxtLink>
        &nbsp;is licensed under
        <a class="flex" href="https://creativecommons.org/licenses/by/4.0" target="_blank">
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
import {
  mdiEyeMinus,
  mdiHandBackLeftOutline,
  mdiMenu,
  mdiWeatherNight,
  mdiWhiteBalanceSunny
} from '@mdi/js'
import { useMouse, useWindowFocus, useWindowSize } from '@vueuse/core'
import '@fontsource/atkinson-hyperlegible'
import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/400-italic.css'
import '@fontsource/atkinson-hyperlegible/700.css'
import '@fontsource/atkinson-hyperlegible/700-italic.css'
import Cc_person from '~/components/cc_person.vue'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

/**
 * This is the default layout for the application.
 * It includes the header, navigation, main content slot, and footer.
 * It also manages global state like the theme and reading helper.
 */

// Resolves the full Tailwind CSS configuration.
const fullConfig = resolveConfig(tailwindConfig)

// Cookie to store the user's theme preference.
const themeCookie = useCookie('theme', { maxAge: 31556926, default: () => ref(false) })
// Reactive state for the dark theme, synchronized with the cookie.
const darkTheme = useState('dark', () => ref(false))

// Template ref for the main body element.
const body = ref()

// Reactive state for mouse position.
const mouse = reactive(useMouse({ target: body, touch: false, type: 'client' }))
// Reactive state for window dimensions.
const { height, width } = useWindowSize()
// Reactive state for the reading helper feature.
const readingHelper = ref(true)
// Reactive state for window focus.
const focused = useWindowFocus()

// Reactive state for the hamburger menu's open/closed state.
const hamburgerOpened = ref(false)

// The current route object.
const route = useRoute()

provide(
  'darkTheme',
  computed(() => darkTheme.value)
)

const navbarHamburgerMenu = useTemplateRef('navbarHamburgerMenu')

/**
 * Lifecycle hook that runs after the component is mounted.
 * Initializes the reading helper and theme.
 */
onMounted(() => {
  // Disable the reading helper by default on mount.
  readingHelper.value = false

  // Set the theme based on the cookie or system preference.
  if (themeCookie.value !== undefined && themeCookie.value !== 'unset') {
    darkTheme.value = themeCookie.value === true
  } else {
    darkTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    themeCookie.value = `${darkTheme.value}`
  }

  // Set the meta theme color for the browser UI.
  const metaThemeColor = document.querySelector('meta[name=theme-color]')
  if (metaThemeColor) {
    if (darkTheme.value !== true) {
      metaThemeColor.setAttribute('content', 'rgb(10,10,10)')
    } else {
      metaThemeColor.setAttribute('content', 'rgb(245,245,245)')
    }
  }
})

/**
 * Stops event propagation to prevent unintended side effects, like closing the menu.
 * @param {Event} event - The event object.
 */
const stopPropagation = (event) => {
  if (event) {
    event.stopImmediatePropagation()
  }
}

/**
 * Toggles the theme between light and dark mode and updates the theme cookie.
 */
const changeTheme = () => {
  darkTheme.value = !darkTheme.value
  themeCookie.value = `${darkTheme.value}`
}

/**
 * Toggles the reading helper on and off.
 */
const focusHelper = () => {
  readingHelper.value = !readingHelper.value
  hamburgerOpened.value = false

  // Initialize the reading line position for mobile devices.
  if (isMobile.value) {
    document.querySelector(':root').style.setProperty('--mouseY', `${height.value / 2}px`)
  }
}

/**
 * Updates the position of the reading helper line on touch devices.
 * @param {TouchEvent} data - The touch event data.
 */
const moveDragFocusHelper = (data) => {
  if (data.targetTouches[0]) {
    document
      .querySelector(':root')
      .style.setProperty('--mouseY', `${data.targetTouches[0].clientY - 110}px`)
  }
}

/**
 * Expands or collapses the hamburger navigation menu.
 */
const expandNavigation = () => {
  hamburgerOpened.value = !hamburgerOpened.value

  if (hamburgerOpened.value) {
    nextTick(() => {
      navbarHamburgerMenu.value.focus()
    })
  }
}

/**
 * Handles keydown events for the theme toggle.
 * @param {KeyboardEvent} event - The keyboard event object.
 */
const atKeyDownThemeToggle = (event) => {
  if (event.key === 'Enter') {
    changeTheme()
  }
}

/**
 * Computed property to determine if the user is on a mobile device.
 * @returns {boolean} - True if the user agent matches a mobile device.
 */
const isMobile = computed(() => {
  if (navigator) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  }

  return false
})

/**
 * Computed property to determine if the viewport is small.
 * This is used for responsive styling of the navigation menu.
 * @returns {boolean} - True if on mobile and width is less than the 'xl' breakpoint.
 */
const smallWidth = computed(() => {
  return width.value <= parseInt(fullConfig.theme.screens.xl)
})

/**
 * Watcher for route changes.
 * Closes the hamburger menu and disables the reading helper on navigation.
 */
watch(route, (current) => {
  hamburgerOpened.value = false
  if (current && (current.name === 'home' || current.name === 'about')) {
    readingHelper.value = false
  }
})

/**
 * Watcher for mouse movements.
 * Updates the reading helper's line position based on the mouse's Y coordinate.
 */
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

<style lang="scss" scoped>
.darkThemeLogo {
  fill: #f3f4f6;
}

.themeGradient {
  transition: var(--mainTransition);
  background: var(--tw-color-neutral-100);

  &.darkTheme {
    background: var(--tw-color-neutral-900);
  }
}

.themeToggle {
  transition: var(--mainTransition);
  transform: translateX(0);

  &.darkTheme {
    transform: translateX(1.75rem);
  }
}
</style>
