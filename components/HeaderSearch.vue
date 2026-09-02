<template>
  <form
    ref="searchRoot"
    :class="['global-search', `global-search--${variant}`]"
    role="search"
    @focusout="handleFocusOut"
    @submit.prevent="submitSearch"
  >
    <div class="global-search-control">
      <label :for="inputId">Search articles and streams</label>
      <SvgIcon class="global-search-leading-icon" :path="mdiMagnify" :size="19" type="mdi" />
      <input
        :id="inputId"
        ref="searchInput"
        v-model="searchQuery"
        :aria-activedescendant="activeOptionId"
        :aria-controls="listboxId"
        :aria-expanded="popupVisible"
        :placeholder="variant === 'desktop' ? 'Title, topic, or keyword…' : 'Search…'"
        aria-autocomplete="list"
        autocomplete="off"
        role="combobox"
        type="search"
        @focus="openSearch"
        @keydown="handleKeydown"
      />
      <button
        v-if="searchQuery"
        class="global-search-clear"
        type="button"
        aria-label="Clear search"
        @click="clearSearch"
      >
        <SvgIcon :path="mdiCloseCircleOutline" :size="19" type="mdi" />
      </button>
      <button v-else class="global-search-submit" type="submit" aria-label="Search">
        <SvgIcon :path="mdiMagnify" :size="21" type="mdi" />
      </button>
    </div>

    <div class="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {{ announcement }}
    </div>

    <section
      v-if="popupVisible"
      class="global-search-popup"
      aria-label="Search suggestions"
      :aria-busy="loading"
    >
      <div v-if="loading" class="global-search-state">
        <span class="global-search-spinner" aria-hidden="true" />
        Searching…
      </div>

      <template v-else-if="results?.total">
        <header class="global-search-summary">
          <strong>{{ results.total }} {{ results.total === 1 ? 'result' : 'results' }}</strong>
          <span>{{ countSummary }}</span>
        </header>

        <div :id="listboxId" role="listbox" aria-label="Search results">
          <section
            v-for="group in displayedGroups"
            :key="group.type"
            class="global-search-group"
            :aria-labelledby="`${inputId}-${group.type}-heading`"
            role="group"
          >
            <h2 :id="`${inputId}-${group.type}-heading`">{{ group.label }}</h2>
            <NuxtLink
              v-for="item in group.items"
              :id="optionId(item.id)"
              :key="item.id"
              :class="['global-search-result', { 'is-active': isActive(item.id) }]"
              :to="item.to"
              :aria-selected="isActive(item.id)"
              role="option"
              tabindex="-1"
              @click="selectResult"
              @mouseenter="selectOption(item.id)"
            >
              <span class="global-search-result-icon" aria-hidden="true">
                <svg v-if="item.type === 'article'" viewBox="0 0 24 24">
                  <path d="M6 3h9l3 3v15H6zM15 3v4h4M9 11h6M9 15h6M9 19h4" />
                </svg>
                <svg v-else viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m10 8 6 4-6 4z" />
                </svg>
              </span>
              <span class="global-search-result-copy">
                <strong>
                  <span class="sr-only">{{ item.type === 'article' ? 'Article' : 'Stream' }}:</span>
                  {{ item.title }}
                </strong>
                <span v-if="metadataParts(item).length">
                  <template v-for="(part, index) in metadataParts(item)" :key="part">
                    <span v-if="index" aria-hidden="true"> · </span>{{ part }}
                  </template>
                </span>
              </span>
              <svg class="global-search-arrow" aria-hidden="true" viewBox="0 0 20 20">
                <path d="m7 4 6 6-6 6" />
              </svg>
            </NuxtLink>
          </section>

          <NuxtLink
            :id="viewAllId"
            :class="['global-search-view-all', { 'is-active': selectedId === viewAllKey }]"
            :to="allResultsLocation"
            :aria-selected="selectedId === viewAllKey"
            role="option"
            tabindex="-1"
            @click="selectResult"
            @mouseenter="selectOption(viewAllKey)"
          >
            <strong>View all {{ results.total }} results for “{{ trimmedQuery }}”</strong>
            <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M3 10h14m-5-5 5 5-5 5" /></svg>
          </NuxtLink>
        </div>

        <footer v-if="variant === 'desktop'" class="global-search-hints" aria-hidden="true">
          <span>↑ ↓ to navigate</span><span>Enter to open</span><span>Esc to close</span>
        </footer>
      </template>

      <div v-else-if="results" class="global-search-empty">
        <strong>No results for “{{ trimmedQuery }}”</strong>
        <span>Try another title, topic, speaker or keyword.</span>
      </div>
    </section>
  </form>
</template>

<script lang="ts" setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCloseCircleOutline, mdiMagnify } from '@mdi/js'
import { onClickOutside, useWindowSize } from '@vueuse/core'
import type { RouteLocationRaw } from 'vue-router'
import type { SearchResponse, SearchResultItem } from '~/utils/search'
import { formatSearchDuration } from '~/utils/search'

const props = withDefaults(
  defineProps<{
    variant?: 'desktop' | 'mobile'
  }>(),
  { variant: 'desktop' }
)

const emit = defineEmits<{
  'active-change': [active: boolean]
  navigate: []
}>()

const route = useRoute()
const router = useRouter()
const instanceId = useId().replaceAll(':', '')
const inputId = `global-search-${props.variant}-${instanceId}`
const listboxId = `${inputId}-listbox`
const viewAllKey = 'view-all'
const viewAllId = `${inputId}-${viewAllKey}`
const searchRoot = useTemplateRef<HTMLFormElement>('searchRoot')
const searchInput = useTemplateRef<HTMLInputElement>('searchInput')
const { height: viewportHeight } = useWindowSize()
const searchQuery = ref('')
const results = ref<SearchResponse>()
const loading = ref(false)
const popupOpen = ref(false)
const selectedIndex = ref(-1)
let searchTimer: ReturnType<typeof setTimeout> | undefined
let requestController: AbortController | undefined
let requestNumber = 0

const routeQuery = () => {
  const value = route.query.q
  return route.path === '/articles'
    ? String(Array.isArray(value) ? (value[0] ?? '') : (value ?? ''))
    : ''
}

searchQuery.value = routeQuery()

const trimmedQuery = computed(() => searchQuery.value.trim())
const popupVisible = computed(() => popupOpen.value && trimmedQuery.value.length >= 2)
const displayedGroups = computed(() => {
  const articleLimit = viewportHeight.value && viewportHeight.value < 760 ? 2 : 3
  const streamLimit = viewportHeight.value && viewportHeight.value < 650 ? 1 : 2
  return (results.value?.groups ?? []).map((group) => ({
    ...group,
    items: group.items.slice(0, group.type === 'article' ? articleLimit : streamLimit)
  }))
})
const previewItems = computed(() => displayedGroups.value.flatMap((group) => group.items))
const optionKeys = computed(() => [
  ...previewItems.value.map((item) => item.id),
  ...(results.value?.total ? [viewAllKey] : [])
])
const selectedId = computed(() => optionKeys.value[selectedIndex.value])
const activeOptionId = computed(() => {
  if (!popupVisible.value || !selectedId.value) return undefined
  return selectedId.value === viewAllKey ? viewAllId : optionId(selectedId.value)
})
const allResultsLocation = computed<RouteLocationRaw>(() => ({
  path: '/articles',
  query: { q: trimmedQuery.value }
}))
const countSummary = computed(() => {
  if (!results.value) return ''
  const parts = []
  if (results.value.counts.article) {
    const count = results.value.counts.article
    parts.push(`${count} ${count === 1 ? 'article' : 'articles'}`)
  }
  if (results.value.counts.stream) {
    const count = results.value.counts.stream
    parts.push(`${count} ${count === 1 ? 'stream' : 'streams'}`)
  }
  return parts.join(' · ')
})
const announcement = computed(() => {
  if (!popupVisible.value) return ''
  if (loading.value) return `Searching for ${trimmedQuery.value}`
  if (!results.value?.total) return `No results for ${trimmedQuery.value}`
  return `${results.value.total} results. ${countSummary.value}`
})

function optionId(id: string) {
  return `${inputId}-option-${id.replace(/[^a-zA-Z0-9_-]/g, '-')}`
}

function isActive(id: string) {
  return selectedId.value === id
}

function selectOption(id: string) {
  selectedIndex.value = optionKeys.value.indexOf(id)
}

function metadataParts(item: SearchResultItem) {
  if (item.type === 'article') {
    return [
      ...item.topics.slice(0, 2),
      ...(item.readingMinutes ? [`${item.readingMinutes} min read`] : [])
    ]
  }
  return [
    ...(item.primaryPerson ? [item.primaryPerson] : []),
    ...(item.durationMinutes ? [formatSearchDuration(item.durationMinutes)] : [])
  ]
}

async function loadResults(query: string) {
  const currentRequest = ++requestNumber
  requestController?.abort()
  const controller = new AbortController()
  requestController = controller
  loading.value = true

  try {
    const response = await $fetch<SearchResponse>('/api/search', {
      query: { q: query },
      signal: controller.signal
    })
    if (currentRequest === requestNumber && trimmedQuery.value === query) results.value = response
  } catch (error) {
    if (!controller.signal.aborted) {
      console.error('Search suggestions failed:', error)
      if (currentRequest === requestNumber) results.value = undefined
    }
  } finally {
    if (currentRequest === requestNumber) loading.value = false
  }
}

function scheduleSearch() {
  clearTimeout(searchTimer)
  requestController?.abort()
  selectedIndex.value = -1

  if (trimmedQuery.value.length < 2) {
    loading.value = false
    results.value = undefined
    popupOpen.value = false
    return
  }

  popupOpen.value = document.activeElement === searchInput.value
  loading.value = true
  const query = trimmedQuery.value
  searchTimer = setTimeout(() => void loadResults(query), 250)
}

function openSearch() {
  if (trimmedQuery.value.length < 2) return
  popupOpen.value = true
  if (results.value?.query === trimmedQuery.value) return

  clearTimeout(searchTimer)
  loading.value = true
  const query = trimmedQuery.value
  searchTimer = setTimeout(() => void loadResults(query), 250)
}

function closeSearch() {
  popupOpen.value = false
  selectedIndex.value = -1
}

function clearSearch() {
  searchQuery.value = ''
  results.value = undefined
  closeSearch()
  nextTick(() => searchInput.value?.focus())
}

async function submitSearch() {
  if (!trimmedQuery.value) return
  const selectedKey = selectedId.value
  if (selectedKey && selectedKey !== viewAllKey) {
    const selected = previewItems.value.find((item) => item.id === selectedKey)
    if (selected) {
      closeSearch()
      emit('navigate')
      await router.push(selected.to)
      return
    }
  }

  closeSearch()
  emit('navigate')
  await router.push(allResultsLocation.value)
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    if (popupVisible.value) {
      event.preventDefault()
      event.stopPropagation()
      closeSearch()
    }
    return
  }
  if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
  if (!optionKeys.value.length) return

  event.preventDefault()
  popupOpen.value = true
  if (event.key === 'ArrowDown') {
    selectedIndex.value = (selectedIndex.value + 1) % optionKeys.value.length
  } else {
    selectedIndex.value =
      selectedIndex.value <= 0 ? optionKeys.value.length - 1 : selectedIndex.value - 1
  }
  document.getElementById(activeOptionId.value ?? '')?.scrollIntoView({ block: 'nearest' })
}

function handleFocusOut(event: FocusEvent) {
  if (event.relatedTarget instanceof Node && searchRoot.value?.contains(event.relatedTarget)) return
  closeSearch()
}

function selectResult() {
  closeSearch()
  emit('navigate')
}

watch(searchQuery, scheduleSearch)
watch(popupVisible, (visible) => emit('active-change', visible))
watch(
  () => route.fullPath,
  () => {
    closeSearch()
    const nextQuery = routeQuery()
    if (searchQuery.value !== nextQuery) searchQuery.value = nextQuery
  }
)

onClickOutside(searchRoot, closeSearch)
onBeforeUnmount(() => {
  clearTimeout(searchTimer)
  requestController?.abort()
})
</script>

<style lang="scss" scoped>
.global-search {
  position: relative;
  min-width: 0;
}

.global-search-control {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.45rem;
  background: var(--editorial-surface);
}

.global-search-control label {
  position: absolute;
  z-index: 1;
  top: 0.3rem;
  left: 0.85rem;
  color: var(--editorial-muted);
  font-size: 0.62rem;
  font-weight: 600;
  line-height: 1;
  pointer-events: none;
}

.global-search-control input {
  width: 100%;
  min-width: 0;
  padding: 1.15rem 0.25rem 0.3rem 0.85rem;
  border: 0;
  outline: 0;
  color: var(--editorial-text);
  background: transparent;
  font-size: 0.78rem;
}

.global-search-control input::-webkit-search-cancel-button {
  display: none;
}

.global-search-leading-icon {
  display: none;
  flex: 0 0 auto;
  margin-left: 0.7rem;
  color: var(--editorial-muted);
}

.global-search-submit,
.global-search-clear {
  display: grid;
  flex: 0 0 2.7rem;
  width: 2.7rem;
  height: 2.7rem;
  place-items: center;
  border-radius: 0.35rem;
  color: var(--editorial-muted);
}

.global-search-submit:hover,
.global-search-clear:hover {
  color: var(--editorial-text);
  background: var(--editorial-surface-muted);
}

.global-search-popup {
  position: absolute;
  z-index: 40;
  top: calc(100% + 0.45rem);
  right: 0;
  width: min(32rem, calc(100vw - 2rem));
  overflow: hidden;
  border: 1px solid var(--editorial-border);
  border-radius: 0.55rem;
  color: var(--editorial-text);
  background: var(--editorial-surface);
  box-shadow: var(--editorial-shadow);
}

.global-search-state,
.global-search-empty {
  display: flex;
  min-height: 6rem;
  padding: 1.25rem;
  justify-content: center;
  flex-direction: column;
  color: var(--editorial-muted);
  font-size: 0.82rem;
  gap: 0.55rem;
}

.global-search-state {
  align-items: center;
  flex-direction: row;
}

.global-search-empty strong {
  color: var(--editorial-text);
  font-size: 0.95rem;
}

.global-search-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid var(--editorial-border-strong);
  border-top-color: var(--editorial-text);
  border-radius: 50%;
  animation: search-spin 700ms linear infinite;
}

.global-search-summary {
  display: flex;
  padding: 1.15rem 1.2rem 0.85rem;
  flex-direction: column;
  border-bottom: 1px solid var(--editorial-border);
  gap: 0.2rem;
}

.global-search-summary strong {
  font-size: 1rem;
}

.global-search-summary span {
  color: var(--editorial-muted);
  font-size: 0.78rem;
}

.global-search-group h2 {
  margin: 0;
  padding: 0.8rem 1.2rem 0.45rem;
  color: var(--editorial-muted);
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.global-search-result {
  display: grid;
  align-items: center;
  min-height: 4.25rem;
  margin: 0 1.2rem;
  padding: 0.65rem 0;
  grid-template-columns: 2.3rem minmax(0, 1fr) 1rem;
  border-top: 1px solid var(--editorial-border);
  color: var(--editorial-text);
  gap: 0.75rem;
}

.global-search-result.is-active,
.global-search-result:hover {
  margin-inline: 0.7rem;
  padding-inline: 0.5rem;
  border-left: 3px solid var(--editorial-text);
  background: var(--editorial-surface-muted);
}

.global-search-result-icon {
  display: grid;
  width: 2.3rem;
  height: 2.3rem;
  place-items: center;
  border-radius: 0.45rem;
  background: var(--editorial-surface-muted);
}

.global-search-result-icon svg {
  width: 1.15rem;
  height: 1.15rem;
  fill: none;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
}

.global-search-result-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
}

.global-search-result-copy strong {
  overflow: hidden;
  font-size: 0.79rem;
  line-height: 1.25;
  text-overflow: ellipsis;
}

.global-search-result-copy > span {
  overflow: hidden;
  color: var(--editorial-muted);
  font-size: 0.7rem;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.global-search-arrow {
  width: 1rem;
  height: 1rem;
  fill: none;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}

.global-search-view-all {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 3.25rem;
  margin-top: 0.7rem;
  padding: 0.75rem 1.2rem;
  border-top: 1px solid var(--editorial-border);
  color: var(--editorial-text);
  font-size: 0.76rem;
  gap: 1rem;
}

.global-search-view-all.is-active,
.global-search-view-all:hover {
  border-left: 3px solid var(--editorial-text);
  background: var(--editorial-surface-muted);
}

.global-search-view-all svg {
  flex: 0 0 auto;
  width: 1rem;
  height: 1rem;
  fill: none;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
}

.global-search-hints {
  display: flex;
  justify-content: flex-end;
  padding: 0.55rem 1.2rem;
  border-top: 1px solid var(--editorial-border);
  color: var(--editorial-muted);
  font-size: 0.61rem;
  gap: 0.9rem;
}

.global-search--mobile .global-search-control label {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}

.global-search--mobile .global-search-leading-icon {
  display: block;
}

.global-search--mobile .global-search-control input {
  min-height: 2.8rem;
  padding: 0.65rem 0.25rem;
}

.global-search--mobile .global-search-submit {
  display: none;
}

.global-search--mobile .global-search-popup {
  position: static;
  width: 100%;
  margin-top: 0.45rem;
}

@keyframes search-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 35rem) {
  .global-search-result {
    margin-inline: 0.75rem;
  }

  .global-search-summary,
  .global-search-group h2,
  .global-search-view-all {
    padding-inline: 0.8rem;
  }

  .global-search-hints {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .global-search-spinner {
    animation: none;
  }
}
</style>
