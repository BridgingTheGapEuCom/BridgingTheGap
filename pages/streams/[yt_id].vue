<template>
  <StreamLayout
    :event="event"
    :invalid-credential="invalidCredential"
    :transcript="transcript"
    :transcript-error="transcriptError"
    :transcript-loading="transcriptLoading"
    :video-id="videoId"
  />
</template>

<script setup lang="ts">
import type { TranscriptLine } from '~/Types/Event'
import {
  extractYoutubeVideoId,
  findStreamEvent,
  getStreamDescription,
  isYoutubeVideoId
} from '~/utils/streamEvent'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '~/utils/seo'

const route = useRoute()
const routeParam = String(route.params.yt_id ?? '')
const queryVideoParam = Array.isArray(route.query.v) ? route.query.v[0] : route.query.v
const requestedVideoId =
  routeParam === 'watch' && isYoutubeVideoId(String(queryVideoParam ?? ''))
    ? String(queryVideoParam)
    : routeParam
const event = findStreamEvent(requestedVideoId)
const eventVideoId = event?.YT ? extractYoutubeVideoId(event.YT) : undefined
const directVideoId = !event && isYoutubeVideoId(requestedVideoId) ? requestedVideoId : undefined
const videoId = eventVideoId && isYoutubeVideoId(eventVideoId) ? eventVideoId : directVideoId
const invalidCredential = Boolean(
  (event?.YT && !videoId) ||
  (!event && !directVideoId) ||
  (routeParam === 'watch' && !queryVideoParam)
)

const transcriptUrl = videoId ? `/transcripts/${videoId}.json` : null
const {
  data: transcriptData,
  error: transcriptFetchError,
  status: transcriptStatus,
  refresh: refreshTranscript
} = await useFetch<TranscriptLine[]>(transcriptUrl, {
  key: `stream-transcript-${videoId ?? requestedVideoId}`,
  default: () => []
})

const transcript = computed(() => transcriptData.value ?? [])
const transcriptLoading = computed(() => transcriptStatus.value === 'pending')
const transcriptError = computed(() => {
  if (!videoId || !transcriptFetchError.value) return ''
  if (transcriptFetchError.value.statusCode === 404) return ''
  return 'The transcript could not be loaded. Please try again later.'
})

onMounted(async () => {
  if (videoId && !transcriptData.value?.length && transcriptStatus.value !== 'pending') {
    await refreshTranscript()
  }
})

const pageTitle = event?.name.replace(/^Loosely Coupled\s*-\s*/i, '') ?? 'Stream recording'
const pageDescription = event
  ? event.summary || getStreamDescription(event)
  : 'Watch a BridgingTheGap.eu.com stream recording.'
const canonicalUrl = `${SITE_URL}/streams/${videoId ?? requestedVideoId}`
const ogImage = event?.img ? `${SITE_URL}${event.img}` : DEFAULT_OG_IMAGE

useHead({
  title: pageTitle,
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script:
    event && videoId
      ? [
          {
            key: 'video-schema',
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: pageTitle,
              description: event.summary || getStreamDescription(event, 500),
              thumbnailUrl: ogImage,
              uploadDate: event.date,
              embedUrl: `https://www.youtube.com/embed/${videoId}`,
              contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
              url: canonicalUrl,
              publisher: {
                '@type': 'Organization',
                name: SITE_NAME,
                url: SITE_URL,
                logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE }
              }
            })
          }
        ]
      : []
})

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogType: videoId ? 'video.other' : 'website',
  ogUrl: canonicalUrl,
  ogImage,
  twitterImage: ogImage,
  twitterCard: 'summary_large_image'
})
</script>
