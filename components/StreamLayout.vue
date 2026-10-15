<template>
  <div class="stream-page" :class="{ 'transcript-mode': transcriptMode }">
    <NuxtLink class="back-link" to="/articles?type=streams">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
      Back to streams
    </NuxtLink>

    <header class="stream-header">
      <span class="stream-kind">Stream</span>
      <h1>{{ title }}</h1>
      <p v-if="byline" class="byline">{{ byline }}</p>

      <div v-if="event" class="stream-meta">
        <span>{{ formattedDate }}</span>
        <span v-if="dateDetails?.startTime">{{ dateDetails.startTime }}</span>
        <span v-if="dateDetails?.timezone">{{ dateDetails.timezone }}</span>
        <a v-if="linkedInUrl" :href="linkedInUrl" rel="noopener noreferrer" target="_blank">
          <SvgIcon :path="mdiLinkedin" :size="19" type="mdi" />
          LinkedIn
          <span class="sr-only">(opens in a new tab)</span>
        </a>
        <a v-if="youtubeUrl" :href="youtubeUrl" rel="noopener noreferrer" target="_blank">
          <SvgIcon :path="mdiYoutube" :size="20" type="mdi" />
          YouTube
          <span class="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </header>

    <div class="video-block">
      <div v-if="transcriptMode" class="mode-toolbar">
        <strong>Watch + transcript</strong>
        <button
          ref="exitTranscriptButton"
          class="text-button"
          type="button"
          @click="exitTranscriptMode"
        >
          Exit transcript mode
        </button>
      </div>

      <div class="video-frame">
        <ClientOnly>
          <ScriptYouTubePlayer
            v-if="playerActivated && videoId"
            ref="youtube"
            :video-id="videoId"
            trigger="immediate"
            @ready="onPlayerReady"
          />
          <button
            v-else-if="videoId && !invalidCredential"
            class="video-poster"
            type="button"
            :aria-label="`Play ${title}`"
            @click="activateVideo()"
          >
            <img v-if="event?.img" :alt="''" :src="event.img" />
            <img v-else :alt="''" class="fallback-artwork" src="/logo.webp" />
            <span class="poster-shade" />
            <span class="play-button" aria-hidden="true"><span /></span>
            <span class="play-label">Play stream</span>
          </button>
          <div v-else class="video-message">
            <img v-if="event?.img" :alt="''" :src="event.img" />
            <div>
              <strong>{{
                invalidCredential ? 'Stream unavailable' : 'Recording unavailable'
              }}</strong>
              <span>
                {{
                  invalidCredential
                    ? 'This stream link is not valid or is no longer available.'
                    : 'A recording has not been published for this stream.'
                }}
              </span>
            </div>
          </div>
          <template #fallback>
            <div class="video-placeholder" aria-hidden="true" />
          </template>
        </ClientOnly>
      </div>

      <div
        v-if="videoId && (transcript.length || transcriptLoading) && !transcriptMode"
        class="video-actions"
      >
        <button
          ref="watchTranscriptButton"
          class="watch-transcript-button"
          type="button"
          @click="enterTranscriptMode"
        >
          Watch + transcript
        </button>
      </div>
    </div>

    <div v-if="event" class="editorial-grid" :class="{ 'without-speakers': !speakers.length }">
      <section>
        <p class="section-kicker">Overview</p>
        <h2>About this stream</h2>
        <EventsEventDescription class="stream-description" :text="event.description" />

        <ul v-if="event.topics?.length" class="topics" aria-label="Topics covered">
          <li v-for="topic in event.topics" :key="topic">{{ topic }}</li>
        </ul>
      </section>

      <section v-if="speakers.length" class="speakers-section">
        <p class="section-kicker">People</p>
        <h2>Speakers</h2>
        <ul class="speakers-list">
          <li v-for="speaker in speakers" :key="speaker.name">
            <img v-if="speaker.photo" :alt="''" :src="resolveStreamSpeakerPhoto(speaker.photo)" />
            <span v-else class="speaker-initials" aria-hidden="true">
              {{ getInitials(speaker.name) }}
            </span>
            <span>
              <strong>{{ speaker.name }}</strong>
              <small>{{
                speaker.isHost ? `Host${speaker.role ? ` / ${speaker.role}` : ''}` : speaker.role
              }}</small>
            </span>
          </li>
        </ul>
      </section>
    </div>

    <section
      v-if="showTranscriptSection"
      class="transcript-section"
      :class="{ 'follow-paused': autoFollowPaused }"
      aria-labelledby="transcript-title"
    >
      <div class="transcript-heading">
        <div>
          <p class="section-kicker">Watch and read</p>
          <h2 id="transcript-title">Transcript</h2>
        </div>
        <button
          v-if="transcript.length && !transcriptMode"
          class="text-button"
          type="button"
          :aria-expanded="transcriptVisible"
          aria-controls="stream-transcript"
          @click="transcriptVisible = !transcriptVisible"
        >
          {{ transcriptVisible ? 'Hide transcript' : 'Show transcript' }}
        </button>
      </div>

      <p v-if="transcriptLoading" class="transcript-state" role="status">Loading transcript…</p>
      <p v-else-if="transcriptError" class="transcript-state transcript-error" role="alert">
        {{ transcriptError }}
      </p>

      <div v-else-if="transcriptVisible && transcript.length" id="stream-transcript">
        <div class="search-row">
          <label for="transcript-search">Search transcript</label>
          <div class="search-field">
            <SvgIcon :path="mdiMagnify" :size="21" type="mdi" aria-hidden="true" />
            <input
              id="transcript-search"
              v-model="searchQuery"
              autocomplete="off"
              placeholder="Search by speaker or words"
              type="search"
            />
            <button
              v-if="searchQuery"
              type="button"
              aria-label="Clear transcript search"
              @click="searchQuery = ''"
            >
              <SvgIcon :path="mdiClose" :size="19" type="mdi" />
            </button>
          </div>
          <p class="result-count" aria-live="polite">
            {{ resultMessage }}
          </p>
        </div>

        <button
          v-if="transcriptMode && autoFollowPaused && activeLine"
          class="return-to-current"
          type="button"
          @click="returnToCurrentPosition"
        >
          <span aria-hidden="true">↓</span>
          Return to current position
        </button>

        <ol
          v-if="visibleTranscript.length"
          ref="transcriptList"
          class="transcript-list"
          :class="{ synchronized: playerActivated && !searchQuery.trim() }"
          @keydown="onTranscriptKeydown"
          @pointerdown="onTranscriptPointerDown"
          @scroll.passive="onTranscriptScroll"
          @touchmove.passive="pauseAutoFollow"
          @wheel.passive="pauseAutoFollow"
        >
          <li
            v-for="line in visibleTranscript"
            :key="`${line.startTime}-${line.person}-${line.text}`"
            :class="{ active: activeLine === line }"
            :aria-current="activeLine === line ? 'true' : undefined"
          >
            <button
              class="timestamp"
              type="button"
              :aria-label="`Play video at ${formatTimestamp(line.startTime)}`"
              @click="activateVideo(line.startTime)"
            >
              {{ formatTimestamp(line.startTime) }}
            </button>
            <div>
              <strong>{{ line.person }}</strong>
              <p>{{ line.text.trim() }}</p>
            </div>
          </li>
        </ol>
        <p v-else class="no-results">No transcript lines match “{{ searchQuery }}”.</p>

        <button
          v-if="!transcriptMode && visibleCount < filteredTranscript.length"
          class="show-more"
          type="button"
          @click="visibleCount += 20"
        >
          Show more
          <span aria-hidden="true">↓</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose, mdiLinkedin, mdiMagnify, mdiYoutube } from '@mdi/js'
import type { ComponentPublicInstance } from 'vue'
import type { Event, EventDetailsDate, EventSpeaker, TranscriptLine } from '~/Types/Event'
import { resolveStreamSpeakerPhoto } from '~/utils/streamEvent'

const props = defineProps<{
  event?: Event
  videoId?: string
  transcript: TranscriptLine[]
  transcriptLoading?: boolean
  transcriptError?: string
  invalidCredential?: boolean
}>()

type YouTubePlayer = {
  getCurrentTime?: () => number
  playVideo?: () => void
  seekTo?: (seconds: number, allowSeekAhead: boolean) => void
}

type YouTubeComponent = ComponentPublicInstance & { player?: YouTubePlayer }

const youtube = ref<YouTubeComponent | null>(null)
const transcriptList = useTemplateRef<HTMLOListElement>('transcriptList')
const watchTranscriptButton = useTemplateRef<HTMLButtonElement>('watchTranscriptButton')
const exitTranscriptButton = useTemplateRef<HTMLButtonElement>('exitTranscriptButton')
const player = ref<YouTubePlayer | null>(null)
const playerActivated = ref(false)
const pendingSeek = ref<number | null>(null)
const currentTime = ref(0)
const transcriptVisible = ref(true)
const transcriptMode = ref(false)
const autoFollowPaused = ref(false)
const searchQuery = ref('')
const visibleCount = ref(8)
let progressInterval: ReturnType<typeof setInterval> | undefined
let manualScrollTimer: ReturnType<typeof setTimeout> | undefined

const title = computed(
  () => props.event?.name.replace(/^Loosely Coupled\s*-\s*/i, '') || 'Stream recording'
)
const speakers = computed<EventSpeaker[]>(() => props.event?.speakers ?? [])
const hosts = computed(() => speakers.value.filter((speaker) => speaker.isHost))
const guests = computed(() => speakers.value.filter((speaker) => !speaker.isHost))
const byline = computed(() => {
  const parts = []
  if (guests.value.length) parts.push(`With ${formatNames(guests.value.map(({ name }) => name))}`)
  if (hosts.value.length)
    parts.push(`Hosted by ${formatNames(hosts.value.map(({ name }) => name))}`)
  return parts.join(' · ')
})
const dateDetails = computed<EventDetailsDate | undefined>(() => {
  const detail = props.event?.details.date
  if (detail && typeof detail === 'object' && 'startTime' in detail) return detail
  return undefined
})
const formattedDate = computed(() => {
  if (!props.event?.date) return ''
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(new Date(props.event.date))
})
const linkedInUrl = computed(() => normalizeUrl(props.event?.LN))
const youtubeUrl = computed(() =>
  props.videoId ? `https://www.youtube.com/watch?v=${props.videoId}` : normalizeUrl(props.event?.YT)
)
const showTranscriptSection = computed(
  () => props.transcriptLoading || Boolean(props.transcriptError) || props.transcript.length > 0
)
const filteredTranscript = computed(() => {
  const query = searchQuery.value.trim().toLocaleLowerCase()
  if (!query) return props.transcript
  return props.transcript.filter((line) =>
    `${line.person} ${line.text}`.toLocaleLowerCase().includes(query)
  )
})
const visibleTranscript = computed(() =>
  transcriptMode.value
    ? filteredTranscript.value
    : filteredTranscript.value.slice(0, visibleCount.value)
)
const resultMessage = computed(() => {
  if (!searchQuery.value.trim()) return `${props.transcript.length} transcript lines`
  const count = filteredTranscript.value.length
  return `${count} ${count === 1 ? 'result' : 'results'}`
})
const activeLineIndex = computed(() =>
  props.transcript.findIndex((line, lineIndex) => {
    const nextLine = props.transcript[lineIndex + 1]
    return (
      currentTime.value >= line.startTime && (!nextLine || currentTime.value < nextLine.startTime)
    )
  })
)
const activeLine = computed(() => props.transcript[activeLineIndex.value])

watch(searchQuery, () => {
  visibleCount.value = 8
  autoFollowPaused.value = false
})

watch(activeLineIndex, async (index) => {
  if (index < 0 || !playerActivated.value || searchQuery.value.trim()) return

  visibleCount.value = Math.max(visibleCount.value, Math.min(props.transcript.length, index + 8))
  await nextTick()
  if (!autoFollowPaused.value) keepActiveLineVisible()
})

onMounted(() => {
  window.addEventListener('scroll', onPageScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (progressInterval) clearInterval(progressInterval)
  if (manualScrollTimer) clearTimeout(manualScrollTimer)
  window.removeEventListener('scroll', onPageScroll)
})

async function enterTranscriptMode() {
  transcriptMode.value = true
  transcriptVisible.value = true
  autoFollowPaused.value = false
  await nextTick()
  exitTranscriptButton.value?.focus()
  if (activeLine.value) keepActiveLineVisible(true)
}

async function exitTranscriptMode() {
  transcriptMode.value = false
  autoFollowPaused.value = false
  await nextTick()
  watchTranscriptButton.value?.focus()
}

function activateVideo(startTime?: number) {
  if (!props.videoId) return
  pendingSeek.value = startTime ?? null
  playerActivated.value = true
  autoFollowPaused.value = false

  if (player.value) playFromPendingTime()
}

function onPlayerReady() {
  player.value = youtube.value?.player ?? null
  playFromPendingTime()
  if (progressInterval) clearInterval(progressInterval)
  progressInterval = setInterval(() => {
    const nextTime = player.value?.getCurrentTime?.()
    if (typeof nextTime === 'number') currentTime.value = nextTime
  }, 250)
}

function playFromPendingTime() {
  if (pendingSeek.value !== null) {
    player.value?.seekTo?.(pendingSeek.value, true)
    currentTime.value = pendingSeek.value
  }
  player.value?.playVideo?.()
  pendingSeek.value = null
}

function pauseAutoFollow() {
  if (!transcriptMode.value || !activeLine.value) return
  autoFollowPaused.value = true

  if (manualScrollTimer) clearTimeout(manualScrollTimer)
  manualScrollTimer = setTimeout(() => {
    if (isActiveLineReasonablyVisible()) autoFollowPaused.value = false
  }, 500)
}

function onTranscriptPointerDown(event: PointerEvent) {
  const target = event.target
  if (target instanceof Element && target.closest('.timestamp')) return
  pauseAutoFollow()
}

function onTranscriptKeydown(event: KeyboardEvent) {
  if (['ArrowDown', 'ArrowUp', 'End', 'Home', 'PageDown', 'PageUp', ' '].includes(event.key)) {
    pauseAutoFollow()
  }
}

function onTranscriptScroll() {
  if (autoFollowPaused.value && isActiveLineReasonablyVisible()) {
    autoFollowPaused.value = false
  }
}

function onPageScroll() {
  if (!transcriptMode.value || isTranscriptPaneScrollable()) return
  if (autoFollowPaused.value && isActiveLineReasonablyVisible()) {
    autoFollowPaused.value = false
  }
}

async function returnToCurrentPosition() {
  autoFollowPaused.value = false
  await nextTick()
  keepActiveLineVisible(true)
}

function keepActiveLineVisible(force = false) {
  const list = transcriptList.value
  const activeElement = list?.querySelector<HTMLElement>('[aria-current="true"]')
  if (!list || !activeElement || (!force && isActiveLineReasonablyVisible())) return

  const behavior = prefersReducedMotion() ? 'auto' : 'smooth'
  if (!isTranscriptPaneScrollable()) {
    activeElement.scrollIntoView({ block: 'center', behavior })
    return
  }

  const listBounds = list.getBoundingClientRect()
  const activeBounds = activeElement.getBoundingClientRect()
  const top =
    list.scrollTop +
    activeBounds.top -
    listBounds.top -
    list.clientHeight / 2 +
    activeBounds.height / 2
  list.scrollTo({ top: Math.max(0, top), behavior })
}

function isTranscriptPaneScrollable() {
  const list = transcriptList.value
  return Boolean(list && list.scrollHeight > list.clientHeight + 1)
}

function isActiveLineReasonablyVisible() {
  const list = transcriptList.value
  const activeElement = list?.querySelector<HTMLElement>('[aria-current="true"]')
  if (!list || !activeElement) return false

  const activeBounds = activeElement.getBoundingClientRect()
  const containerBounds = isTranscriptPaneScrollable()
    ? list.getBoundingClientRect()
    : { top: 0, bottom: window.innerHeight }
  const comfortableTop =
    containerBounds.top + Math.min(96, (containerBounds.bottom - containerBounds.top) * 0.2)
  const comfortableBottom =
    containerBounds.bottom - Math.min(96, (containerBounds.bottom - containerBounds.top) * 0.2)
  return activeBounds.top >= comfortableTop && activeBounds.bottom <= comfortableBottom
}

function formatTimestamp(totalSeconds: number) {
  const seconds = Math.max(0, Math.floor(totalSeconds))
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainder = seconds % 60
  return hours
    ? `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`
    : `${minutes.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`
}

function formatNames(names: string[]) {
  return new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(names)
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function normalizeUrl(url?: string) {
  if (!url) return undefined
  return /^https?:\/\//.test(url) ? url : `https://${url}`
}

function prefersReducedMotion() {
  return import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
</script>

<style lang="scss" scoped>
.stream-page {
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 1.5rem 0 5rem;
  color: var(--editorial-text);
}

.back-link,
.stream-meta a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--editorial-muted);
  text-decoration: none;
}

.back-link {
  margin-bottom: 1.35rem;
  font-size: 0.85rem;
}

.back-link svg {
  width: 1.15rem;
  height: 1.15rem;
  fill: none;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.back-link:hover,
.stream-meta a:hover {
  color: var(--editorial-text);
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

.stream-header {
  padding: 0 0 2rem;
}

.stream-kind {
  display: inline-flex;
  padding: 0.25rem 0.48rem;
  border-radius: 0.3rem;
  color: var(--editorial-text);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  background: var(--editorial-surface-muted);
}

.section-kicker {
  margin: 0 0 0.7rem;
  color: var(--editorial-muted);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0.75rem 0 0.9rem;
  font-size: clamp(2.15rem, 4vw, 3.15rem);
  letter-spacing: -0.035em;
  line-height: 1.08;
  text-wrap: pretty;
}

.byline {
  margin: 0;
  color: var(--editorial-muted);
  font-size: 0.94rem;
}

.stream-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem 1.2rem;
  margin-top: 1.6rem;
  color: var(--editorial-muted);
  font-size: 0.78rem;
}

.video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--editorial-border);
  border-radius: 0.3rem;
  background: #1b1b1b;
}

.video-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: 0.8rem;
}

.watch-transcript-button {
  padding: 0.45rem 0.7rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.2rem;
  background: transparent;
  color: var(--editorial-text);
  font: inherit;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
}

.watch-transcript-button:hover {
  background: var(--editorial-surface-muted);
}

.mode-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 0;
  background: var(--editorial-bg);
  font-size: 0.82rem;
}

.video-frame :deep(iframe),
.video-frame :deep(iframe + div),
.video-frame :deep(> div),
.video-poster,
.video-message,
.video-placeholder {
  width: 100% !important;
  height: 100% !important;
}

.video-poster {
  position: relative;
  display: block;
  padding: 0;
  overflow: hidden;
  border: 0;
  background: #171717;
  color: white;
  cursor: pointer;
}

.video-poster img,
.video-message > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
}

.video-poster .fallback-artwork {
  object-fit: contain;
  padding: 16%;
}

.poster-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 45%, rgb(0 0 0 / 55%));
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: clamp(4rem, 8vw, 5.5rem);
  aspect-ratio: 1;
  place-items: center;
  border-radius: 50%;
  background: var(--editorial-surface);
  box-shadow: 0 0.5rem 2rem rgb(0 0 0 / 30%);
  transform: translate(-50%, -50%);
  transition: transform 180ms ease;
}

.play-button span {
  width: 0;
  height: 0;
  margin-left: 0.3rem;
  border-top: 0.65rem solid transparent;
  border-bottom: 0.65rem solid transparent;
  border-left: 1rem solid var(--editorial-text);
}

.video-poster:hover .play-button {
  transform: translate(-50%, -50%) scale(1.08);
}

.play-label {
  position: absolute;
  right: 1.25rem;
  bottom: 1rem;
  font-weight: 700;
}

.video-message {
  position: relative;
  display: grid;
  place-items: center;
  color: white;
  text-align: center;
}

.video-message::after {
  position: absolute;
  inset: 0;
  background: rgb(0 0 0 / 65%);
  content: '';
}

.video-message > div {
  position: absolute;
  z-index: 1;
  display: grid;
  max-width: 26rem;
  gap: 0.4rem;
  padding: 1.5rem;
}

.editorial-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(16rem, 0.75fr);
  gap: clamp(3rem, 8vw, 8rem);
  padding: clamp(3rem, 7vw, 6.5rem) 0;
  border-bottom: 1px solid var(--editorial-border);
}

.editorial-grid.without-speakers {
  grid-template-columns: minmax(0, 46rem);
}

h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.75rem);
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.08;
}

.stream-description {
  max-width: 64ch;
  margin: 1.3rem 0 0;
  color: var(--editorial-text);
  font-size: 1.08rem;
  line-height: 1.65;
}

.topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1.7rem 0 0;
  padding: 0;
  list-style: none;
}

.topics li {
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 999px;
  color: var(--editorial-muted);
  font-size: 0.8rem;
}

.speakers-list {
  display: grid;
  gap: 1.35rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.speakers-list li {
  display: grid;
  grid-template-columns: 3.4rem 1fr;
  align-items: center;
  gap: 0.9rem;
}

.speakers-list img,
.speaker-initials {
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  object-fit: cover;
}

.speakers-list img {
  filter: grayscale(1);
}

.speaker-initials {
  display: grid;
  place-items: center;
  color: var(--editorial-text);
  background: var(--editorial-surface-muted);
  font-size: 0.85rem;
  font-weight: 700;
}

.speakers-list strong,
.speakers-list small {
  display: block;
}

.speakers-list small {
  margin-top: 0.15rem;
  color: var(--editorial-muted);
  font-size: 0.78rem;
  line-height: 1.3;
}

.transcript-section {
  padding: clamp(3rem, 7vw, 6rem) 0 0;
}

.transcript-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
}

.text-button,
.show-more {
  border: 0;
  border-bottom: 1px solid currentcolor;
  background: transparent;
  color: var(--editorial-text);
  cursor: pointer;
}

.search-row {
  display: grid;
  grid-template-columns: minmax(15rem, 28rem) 1fr;
  align-items: end;
  gap: 0.35rem 1rem;
  margin-bottom: 1.4rem;
}

.search-row > label {
  grid-column: 1;
  font-size: 0.8rem;
  font-weight: 700;
}

.search-field {
  position: relative;
  grid-column: 1;
}

.search-field > svg {
  position: absolute;
  top: 50%;
  left: 0.75rem;
  color: var(--editorial-muted);
  transform: translateY(-50%);
  pointer-events: none;
}

.search-field input {
  width: 100%;
  min-height: 2.8rem;
  padding: 0.55rem 2.8rem 0.55rem 2.45rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.2rem;
  background: transparent;
}

.search-field button {
  position: absolute;
  top: 50%;
  right: 0.45rem;
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border: 0;
  background: transparent;
  cursor: pointer;
  transform: translateY(-50%);
}

.result-count {
  grid-column: 2;
  grid-row: 2;
  margin: 0 0 0.7rem;
  color: var(--editorial-muted);
  font-size: 0.8rem;
}

.transcript-list {
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--editorial-border);
  list-style: none;
}

.transcript-list.synchronized {
  max-height: min(60vh, 36rem);
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
}

.transcript-list li {
  display: grid;
  grid-template-columns: 5rem minmax(0, 1fr);
  gap: clamp(0.8rem, 3vw, 2.5rem);
  padding: 1.25rem 0.5rem;
  border-bottom: 1px solid var(--editorial-border);
  transition: background 180ms ease;
}

.transcript-list li.active {
  background: var(--editorial-surface-muted);
  box-shadow: inset 3px 0 0 var(--editorial-text);
}

.transcript-list li.active strong {
  font-weight: 700;
}

.timestamp {
  align-self: start;
  justify-self: start;
  padding: 0.25rem 0.4rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.2rem;
  background: transparent;
  color: var(--editorial-text);
  font: inherit;
  font-size: 0.78rem;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
}

.transcript-list strong {
  font-size: 0.86rem;
}

.transcript-list p {
  margin: 0.35rem 0 0;
  color: var(--editorial-text);
  line-height: 1.55;
}

.show-more {
  display: flex;
  gap: 0.5rem;
  margin: 2rem auto 0;
  padding: 0.35rem 0;
}

.return-to-current {
  align-self: center;
  margin: 0 0 0.8rem;
  padding: 0.4rem 0.65rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 999px;
  background: var(--editorial-surface);
  color: var(--editorial-text);
  font: inherit;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
}

.transcript-state,
.no-results {
  padding: 2rem;
  border: 1px solid var(--editorial-border);
  color: var(--editorial-muted);
  text-align: center;
}

.transcript-error {
  color: var(--editorial-text);
  font-weight: 700;
}

.stream-page.transcript-mode {
  max-width: 72rem;
  padding-top: 0.75rem;
}

.transcript-mode > .back-link,
.transcript-mode > .stream-header,
.transcript-mode > .editorial-grid {
  display: none;
}

.transcript-mode .video-block {
  position: sticky;
  z-index: 10;
  top: 4.75rem;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  padding-bottom: 0.5rem;
  background: var(--editorial-bg);
}

.transcript-mode .transcript-section {
  padding-top: 2rem;
}

.transcript-mode .transcript-list.synchronized {
  max-height: none;
  overflow: visible;
}

.transcript-mode .transcript-list li,
.transcript-mode .transcript-list .timestamp {
  scroll-margin-top: min(90vw, 31rem);
  scroll-margin-bottom: 5rem;
}

@media (min-width: 72rem) {
  .stream-page.transcript-mode {
    display: grid;
    grid-template-columns: minmax(32rem, 1.35fr) minmax(23rem, 1fr);
    width: 100%;
    max-width: 88rem;
    height: calc(100dvh - 6.75rem);
    min-height: 32rem;
    align-items: start;
    gap: clamp(1.25rem, 2.5vw, 2.5rem);
    padding: 1rem 0 0;
    overflow: hidden;
  }

  .transcript-mode .video-block {
    position: static;
    grid-column: 1;
    width: auto;
    max-width: none;
    margin: 0;
    padding: 0;
  }

  .transcript-mode .transcript-section {
    display: flex;
    grid-column: 2;
    height: 100%;
    min-height: 0;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
  }

  .transcript-mode .transcript-heading {
    flex: 0 0 auto;
    margin: 0 0 1rem;
  }

  .transcript-mode .transcript-heading h2 {
    font-size: clamp(1.8rem, 2.5vw, 2.25rem);
  }

  .transcript-mode #stream-transcript {
    display: flex;
    min-height: 0;
    flex: 1;
    flex-direction: column;
  }

  .transcript-mode .search-row {
    grid-template-columns: 1fr;
    flex: 0 0 auto;
    margin-bottom: 0.8rem;
  }

  .transcript-mode .result-count {
    grid-column: 1;
    grid-row: auto;
    margin: 0.25rem 0 0;
  }

  .transcript-mode .transcript-list,
  .transcript-mode .transcript-list.synchronized {
    min-height: 0;
    max-height: none;
    flex: 1;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-gutter: stable;
  }

  .transcript-mode .transcript-list li,
  .transcript-mode .transcript-list .timestamp {
    scroll-margin-top: 2rem;
    scroll-margin-bottom: 2rem;
  }
}

@media (max-width: 767px) {
  .stream-page {
    padding-top: 0.75rem;
  }

  .stream-header {
    padding: 0 0 1.5rem;
  }

  h1 {
    font-size: clamp(2.15rem, 11vw, 3.15rem);
  }

  .editorial-grid {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .search-row {
    grid-template-columns: 1fr;
  }

  .result-count {
    grid-column: 1;
    grid-row: auto;
    margin: 0.35rem 0 0;
  }

  .transcript-list li {
    grid-template-columns: 4.25rem minmax(0, 1fr);
    padding-inline: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .play-button,
  .transcript-list li {
    transition: none;
  }
}
</style>
