<template>
  <div id="body" ref="body" :class="{ dark: darkTheme }">
    <div v-if="readingHelper && showFocusHelper" class="reading-helper-overlay">
      <div class="readingLine">
        <SvgIcon
          v-if="isMobile"
          :path="mdiHandBackLeftOutline"
          :size="48"
          class="reading-helper-handle"
          type="mdi"
          @touchmove.prevent="moveDragFocusHelper"
        />
      </div>
    </div>

    <SiteHeader
      :dark-theme="darkTheme"
      :show-focus-helper="showFocusHelper"
      @toggle-focus="focusHelper"
      @toggle-theme="changeTheme"
    />

    <main class="site-main">
      <div class="site-main-inner">
        <slot />
      </div>
    </main>

    <footer class="site-footer">
      <div>
        <span><strong>BridgingTheGap.eu.com</strong> © {{ new Date().getFullYear() }}</span>
        <span>
          Created by the
          <NuxtLink to="/about">BridgingTheGap.eu.com team</NuxtLink>
          and licensed under
          <a href="https://creativecommons.org/licenses/by/4.0" target="_blank" rel="license">
            CC BY 4.0 <CreativeCommonsIcon class="inline-license-icon" /><CreativeCommonsByIcon
              class="inline-license-icon"
            />
          </a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHandBackLeftOutline } from '@mdi/js'
import { useMouse, useWindowFocus, useWindowSize } from '@vueuse/core'
import '@fontsource/atkinson-hyperlegible'
import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/400-italic.css'
import '@fontsource/atkinson-hyperlegible/700.css'
import '@fontsource/atkinson-hyperlegible/700-italic.css'

const route = useRoute()
const body = useTemplateRef('body')
const themeCookie = useCookie<boolean | string>('theme', {
  maxAge: 31556926,
  default: () => 'unset'
})
const storedTheme = readStoredTheme(themeCookie.value)
const darkTheme = useState<boolean>('dark', () => storedTheme ?? false)
const readingHelper = ref(false)
const focused = useWindowFocus()
const { y: pointerY } = useMouse({ target: body, touch: false, type: 'client' })
const { height } = useWindowSize()

if (storedTheme !== undefined) darkTheme.value = storedTheme

useHead(() => ({
  htmlAttrs: {
    class: darkTheme.value ? 'dark' : undefined
  }
}))

const isMobile = computed(() => {
  if (!import.meta.client) return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
})

const showFocusHelper = computed(() => {
  const name = String(route.name ?? '')
  return name.startsWith('articles-')
})

provide(
  'darkTheme',
  computed(() => darkTheme.value)
)

const updateThemeColor = () => {
  const metaThemeColor = document.querySelector('meta[name=theme-color]')
  metaThemeColor?.setAttribute(
    'content',
    darkTheme.value ? 'rgb(10, 10, 10)' : 'rgb(250, 249, 247)'
  )
}

onMounted(() => {
  if (readStoredTheme(themeCookie.value) === undefined) {
    darkTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateThemeColor()
})

const changeTheme = () => {
  darkTheme.value = !darkTheme.value
  themeCookie.value = darkTheme.value
  updateThemeColor()
}

function readStoredTheme(value: boolean | string | null | undefined) {
  if (value === true || value === 'true') return true
  if (value === false || value === 'false') return false
  return undefined
}

const updateReadingHelperPosition = (clientY: number) => {
  const boundedY = Math.max(0, Math.min(clientY, height.value))
  document.documentElement.style.setProperty('--mouseY', `${boundedY - 80}px`)
}

const focusHelper = () => {
  if (!showFocusHelper.value) {
    readingHelper.value = false
    return
  }

  const enabling = !readingHelper.value
  readingHelper.value = enabling

  if (enabling) {
    const initialY = !isMobile.value && pointerY.value > 0 ? pointerY.value : height.value / 2
    updateReadingHelperPosition(initialY)
  }
}

const moveDragFocusHelper = (event: TouchEvent) => {
  const touch = event.targetTouches[0]
  if (touch) updateReadingHelperPosition(touch.clientY)
}

watch(
  () => route.fullPath,
  () => {
    readingHelper.value = false
  }
)

watch(pointerY, (currentY) => {
  if (
    !isMobile.value &&
    focused.value &&
    readingHelper.value &&
    body.value &&
    currentY < body.value.clientHeight
  ) {
    updateReadingHelperPosition(currentY)
  }
})
</script>
