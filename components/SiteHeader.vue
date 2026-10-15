<template>
  <header ref="header" class="site-header">
    <div class="site-header-inner">
      <NuxtLink class="site-brand" to="/" aria-label="BridgingTheGap.eu.com home">
        <img src="~/assets/logo_low_poly.webp" alt="" />
        <span>
          <div class="font-bold">BridgingTheGap.eu.com</div>
          <small>Connecting Systems, Ideas, and People</small>
        </span>
      </NuxtLink>

      <nav class="desktop-navigation" aria-label="Primary navigation">
        <NuxtLink to="/articles?type=articles">Articles</NuxtLink>
        <NuxtLink to="/articles?type=streams">Streams</NuxtLink>
        <NuxtLink to="/events">Events</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>

      <HeaderSearch class="header-search" variant="desktop" />

      <div class="header-utilities">
        <button
          v-if="showFocusHelper"
          type="button"
          class="header-icon-button desktop-utility"
          aria-label="Toggle reading helper"
          @click="$emit('toggle-focus')"
        >
          <SvgIcon :path="mdiEyeMinus" :size="23" type="mdi" />
        </button>
        <button
          type="button"
          class="header-icon-button desktop-utility"
          :aria-label="darkTheme ? 'Use light theme' : 'Use dark theme'"
          @click="$emit('toggle-theme')"
        >
          <SvgIcon
            :path="darkTheme ? mdiWhiteBalanceSunny : mdiWeatherNight"
            :size="22"
            type="mdi"
          />
        </button>
        <button
          type="button"
          class="header-icon-button"
          :aria-expanded="menuOpen"
          aria-controls="site-menu"
          aria-label="Open site menu"
          @click="toggleMenu"
        >
          <SvgIcon :path="menuOpen ? mdiClose : mdiMenu" :size="25" type="mdi" />
        </button>
      </div>
    </div>

    <div v-if="menuOpen" id="site-menu" class="site-menu">
      <HeaderSearch
        class="mobile-search"
        variant="mobile"
        @active-change="mobileSearchActive = $event"
        @navigate="menuOpen = false"
      />

      <nav v-if="!mobileSearchActive" class="mobile-navigation" aria-label="Site navigation">
        <NuxtLink class="compact-menu-only" to="/about">About us</NuxtLink>
        <NuxtLink class="compact-menu-only" to="/articles?type=articles">Articles</NuxtLink>
        <NuxtLink to="/badgesList">Badges</NuxtLink>
        <NuxtLink to="/contactUs">Contact us</NuxtLink>
        <NuxtLink to="/aboutOurReviewers">Our reviewers</NuxtLink>
        <NuxtLink to="/privacyPolicy">Privacy policy</NuxtLink>
        <NuxtLink class="compact-menu-only" to="/articles?type=streams">Streams</NuxtLink>
        <NuxtLink class="compact-menu-only" to="/events">Upcoming events</NuxtLink>
      </nav>

      <div v-if="!mobileSearchActive" class="mobile-utilities">
        <button type="button" @click="$emit('toggle-theme')">
          <SvgIcon
            :path="darkTheme ? mdiWhiteBalanceSunny : mdiWeatherNight"
            :size="21"
            type="mdi"
          />
          {{ darkTheme ? 'Light theme' : 'Dark theme' }}
        </button>
        <button v-if="showFocusHelper" type="button" @click="$emit('toggle-focus')">
          <SvgIcon :path="mdiEyeMinus" :size="21" type="mdi" />
          Reading helper
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose, mdiEyeMinus, mdiMenu, mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js'
import { onClickOutside } from '@vueuse/core'

defineProps<{
  darkTheme: boolean
  showFocusHelper: boolean
}>()

defineEmits<{
  'toggle-theme': []
  'toggle-focus': []
}>()

const route = useRoute()
const header = useTemplateRef('header')
const menuOpen = ref(false)
const mobileSearchActive = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

onClickOutside(header, () => {
  menuOpen.value = false
})

watch(menuOpen, (open) => {
  if (!open) mobileSearchActive.value = false
})

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
  { immediate: true }
)

const closeMenuOnEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') menuOpen.value = false
}

onMounted(() => window.addEventListener('keydown', closeMenuOnEscape))
onBeforeUnmount(() => window.removeEventListener('keydown', closeMenuOnEscape))
</script>
