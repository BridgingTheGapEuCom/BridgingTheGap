<template>
  <div id="body" ref="body" :class="{ dark: darkTheme }">
    <div v-if="readingHelper" class="absolute h-full bottom-0 w-full pointer-events-none">
      <div class="readingLine"></div>
    </div>
    <nav
      class="z-10 antialiased bg-neutral-200 dark:bg-neutral-800 shadow-md dark:shadow-none border-gray-200 sticky top-0"
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <RouterLink to="/">
          <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <logo-s-v-g :dark="darkTheme" class="h-7 w-7 m-1" />
            <div
              class="text-base mt-1 font-semibold whitespace-nowrap hidden xs:block text-black dark:text-gray-50 tracking-wide"
            >
              Bridging the Gap
            </div>
          </div>
        </RouterLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="antialiased hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="flex items-center flex-col gap-1 md:gap-0 p-4 md:p-0 mt-4 border bg-transparent border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0"
          >
            <li>
              <RouterLink
                to="/about"
                class="text-black dark:text-white navigation-button"
                aria-current="page"
                >About us
              </RouterLink>
            </li>
            <li v-if="route.name !== 'home' && route.name !== 'about' && !isMobile">
              <button aria-label="Focus helper" type="button" @click="focusHelper">
                <SvgIcon
                  class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white card"
                  type="mdi"
                  :path="mdiEyeMinus"
                  :size="32"
                />
              </button>
            </li>
            <li class="flex items-center">
              <button aria-label="Change theme" class="mr-1" type="button" @click="changeTheme">
                <SvgIcon
                  class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white card"
                  type="mdi"
                  :path="mdiThemeLightDark"
                  :size="32"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main
      class="antialiased bg-neutral-100 dark:bg-neutral-950 text-black dark:text-gray-50 w-full px-4 py-4 flex justify-center items-stretch flex-grow"
    >
      <RouterView v-slot="{ Component }" class="max-w-screen-xl flex flex-grow">
        <transition name="fade" mode="out-in">
          <component :is="Component" :dark="darkTheme" />
        </transition>
      </RouterView>
    </main>
    <footer
      class="sticky bottom-0 w-full shadow-up dark:shadow-none antialiased pr-4 py-1 hidden md:flex bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white"
    >
      <div class="flex mx-2 justify-start max-w-screen-xl w-full text-[0.65rem]">
        <a
          href="https://github.com/skrzymek/BridgingTheGap"
          property="dct:title"
          rel="cc:attributionURL"
          target="_blank"
          ><b>Bridging the Gap</b></a
        >
        &nbsp;© 2024 by&nbsp;
        <a
          href="https://www.linkedin.com/in/karolskrzymowski/"
          property="cc:attributionName"
          rel="cc:attributionURL dct:creator"
          target="_blank"
          class="link text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
          ><b>Karol Skrzymowski</b></a
        >
        <div>&nbsp;and&nbsp;</div>
        <a
          href="https://www.linkedin.com/in/rados%C5%82aw-przewuski/"
          property="cc:attributionName"
          rel="cc:attributionURL dct:creator"
          target="_blank"
          class="link text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
          ><b>Radosław Przewuski</b></a
        >
        &nbsp;is licensed under
        <a href="https://creativecommons.org/licenses/by/4.0" target="_blank" class="flex">
          &nbsp;CC BY 4.0
          <img
            alt=""
            class="cc_image mx-1 self-center"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
          />
          <img
            alt=""
            class="cc_image"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
          />
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { initFlowbite } from 'flowbite'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiEyeMinus, mdiThemeLightDark } from '@mdi/js'
import { useMouse, useWindowFocus } from '@vueuse/core'
import LogoSVG from '@/components/svg/logoSVG.vue'

const darkTheme = ref(false)

const body = ref()

const mouse = reactive(useMouse({ target: body, touch: false, type: 'client' }))
const readingHelper = ref(true)
const focused = useWindowFocus()

const route = useRoute()

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()

  readingHelper.value = false

  if (localStorage.theme) {
    darkTheme.value = localStorage.theme === 'true'
  } else {
    darkTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  let metaThemeColor = document.querySelector('meta[name=theme-color]')
  if (darkTheme.value === true) {
    metaThemeColor.setAttribute('content', 'rgb(10,10,10)')
  } else {
    metaThemeColor.setAttribute('content', 'rgb(245,245,245)')
  }
})

const changeTheme = () => {
  darkTheme.value = !darkTheme.value
  localStorage.theme = darkTheme.value

  let metaThemeColor = document.querySelector('meta[name=theme-color]')
  if (darkTheme.value === true) {
    metaThemeColor.setAttribute('content', 'rgb(10,10,10)')
  } else {
    metaThemeColor.setAttribute('content', 'rgb(245,245,245)')
  }
}

const focusHelper = () => {
  readingHelper.value = !readingHelper.value
}

const isMobile = computed(() => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true
  } else {
    return false
  }
})

watch(route, (current) => {
  if (current.name === 'home' || current.name === 'about') {
    readingHelper.value = false
  }
})

watch(
  mouse,
  (current) => {
    if (focused && readingHelper.value && current.y < body.value.clientHeight) {
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
