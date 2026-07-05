<template>
  <div class="w-full">
    <StreamLayout :transcript="transcript" :name="name" :video-id="videoId" />
  </div>
</template>

<script setup lang="ts">
import {
  extractYoutubeVideoId,
  findStreamEvent,
  getStreamDescription
} from '~/utils/streamEvent'
import { DEFAULT_OG_IMAGE, getYoutubeThumbnail, SITE_NAME, SITE_URL } from '~/utils/seo'

const route = useRoute()
const routeParam = route.params.yt_id as string
const event = findStreamEvent(routeParam)

const videoId = ref(event?.YT ? extractYoutubeVideoId(event.YT) : routeParam)
const name = ref(event?.name ?? '')
const transcript = ref([])

const pageTitle = event?.name ?? 'Stream'
const pageDescription = event ? getStreamDescription(event) : undefined
const canonicalUrl = `${SITE_URL}/streams/${videoId.value}`
const ogImage = getYoutubeThumbnail(videoId.value)

useHead({
  title: pageTitle,
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: event
    ? [
        {
          key: 'video-schema',
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: event.name,
            description: getStreamDescription(event, 500),
            thumbnailUrl: ogImage,
            uploadDate: event.date,
            embedUrl: `https://www.youtube.com/embed/${videoId.value}`,
            contentUrl: `https://www.youtube.com/watch?v=${videoId.value}`,
            url: canonicalUrl,
            publisher: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
              logo: {
                '@type': 'ImageObject',
                url: DEFAULT_OG_IMAGE
              }
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
  ogType: 'video.other',
  ogUrl: canonicalUrl,
  ogImage,
  twitterImage: ogImage,
  twitterCard: 'summary_large_image'
})

try {
  const response = await fetch(`/transcripts/${videoId.value}.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch transcript')
  }

  transcript.value = await response.json()
} catch (error) {
  console.error(error)
}
</script>
