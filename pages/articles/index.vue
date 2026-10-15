<template>
  <div class="catalogue-page w-full">
    <header class="catalogue-heading">
      <p class="home-eyebrow">Knowledge library</p>
      <h1>Articles and expert streams</h1>
      <p>Search practical, vendor-neutral guidance by title, content, format, or topic.</p>
    </header>
    <ArticleList :articles="articles" :events="recordedStreams" />
  </div>
</template>

<script lang="ts" setup>
import type { Article } from '~/Types/Article'
import type { Event } from '~/Types/Event'
import articlesData from '~/articles.json'
import eventsData from '~/events.json'

usePageSeo({
  title: 'Articles and streams',
  description:
    'Search BridgingTheGap.eu.com articles and expert streams about application integration architecture.',
  path: '/articles'
})

const articles = (articlesData as Article[]).map((article) => ({ ...article }))
const events = eventsData as Event[]
const now = new Date()
const recordedStreams = events
  .filter((event) => event.eventType === 'Stream' && new Date(event.date) < now)
  .map((event) => ({ ...event }))
</script>
