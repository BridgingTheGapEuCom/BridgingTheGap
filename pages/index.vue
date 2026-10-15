<template>
  <div class="home-page w-full">
    <section class="home-hero" aria-labelledby="home-title">
      <div class="home-hero-copy">
        <p class="home-eyebrow">Knowledge for integration architects</p>
        <h1 id="home-title">Practical knowledge for integration architects</h1>
        <p class="home-hero-intro">
          In-depth articles, expert streams, and real-world insights on integration architecture,
          patterns, and technologies.
        </p>
        <NuxtLink class="primary-action" to="/articles">Browse latest articles</NuxtLink>
      </div>
      <div class="home-hero-art" aria-hidden="true">
        <img src="~/assets/logo.webp" alt="" />
      </div>
    </section>

    <section id="topics" class="home-section" aria-labelledby="topics-title">
      <div class="section-heading-row">
        <h2 id="topics-title">Explore topics</h2>
        <NuxtLink class="text-action" to="/articles">View all topics <span>→</span></NuxtLink>
      </div>
      <div class="topic-grid">
        <NuxtLink
          v-for="(topic, index) in featuredTopics"
          :key="topic.name"
          class="topic-card"
          :to="{ path: '/articles', query: { tags: topic.name } }"
        >
          <SvgIcon :path="topicIcons[index % topicIcons.length]" :size="42" type="mdi" />
          <span class="topic-copy">
            <strong>{{ topic.name }}</strong>
            <span>{{ topic.count }} {{ topic.count === 1 ? 'item' : 'items' }}</span>
          </span>
        </NuxtLink>
      </div>
    </section>

    <section class="home-section" aria-labelledby="latest-title">
      <div class="section-heading-row">
        <h2 id="latest-title">Latest knowledge</h2>
        <NuxtLink class="text-action" to="/articles">View all content <span>→</span></NuxtLink>
      </div>
      <div class="latest-layout">
        <div class="latest-grid">
          <article v-for="item in latestContent" :key="item.key" class="knowledge-card">
            <NuxtLink class="knowledge-card-link" :to="item.to">
              <span class="content-label">{{ item.type }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <span class="knowledge-meta">
                <span v-if="item.people.length" class="knowledge-avatars" aria-hidden="true">
                  <span v-for="person in item.people" :key="person.name">
                    <img v-if="person.photo" :src="person.photo" alt="" />
                    <span v-else>{{ getInitials(person.name) }}</span>
                  </span>
                </span>
                <span class="knowledge-meta-copy">
                  <strong>{{ item.byline }}</strong>
                  <span>{{ formatDate(item.date) }}</span>
                </span>
              </span>
            </NuxtLink>
          </article>
        </div>

        <aside v-if="upcomingEvent" class="upcoming-panel" aria-labelledby="upcoming-title">
          <p class="content-label">Upcoming event</p>
          <div class="upcoming-content">
            <span class="date-tile" aria-hidden="true">
              <span>{{ formatMonth(upcomingEvent.date) }}</span>
              <strong>{{ formatDay(upcomingEvent.date) }}</strong>
            </span>
            <div>
              <h3 id="upcoming-title">{{ upcomingEvent.name }}</h3>
              <p>{{ upcomingEvent.eventType }}</p>
              <p class="event-time">
                <SvgIcon :path="mdiClockOutline" :size="17" type="mdi" />
                {{ formatEventTime(upcomingEvent) }}
              </p>
            </div>
          </div>
          <NuxtLink
            class="upcoming-link"
            :to="{ path: '/events', hash: `#${eventAnchor(upcomingEvent)}` }"
          >
            View event details <span>→</span>
          </NuxtLink>
        </aside>
      </div>
    </section>

    <section class="home-statement" aria-label="About BridgingTheGap.eu.com">
      <span class="quote-mark" aria-hidden="true">“</span>
      <p>
        <strong>Vendor-neutral. Architect-focused. Community-driven.</strong>
        <span>BridgingTheGap.eu.com in Enterprise Application Integration.</span>
      </p>
      <NuxtLink class="text-action" to="/aboutTheProject"
        >Learn more about us <span>→</span></NuxtLink
      >
    </section>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiApi,
  mdiClockOutline,
  mdiCloudOutline,
  mdiDatabaseOutline,
  mdiMessageTextOutline,
  mdiPuzzleOutline,
  mdiSourceBranch
} from '@mdi/js'
import type { Article } from '~/Types/Article'
import type { Event } from '~/Types/Event'
import articlesData from '~/articles.json'
import eventsData from '~/events.json'
import { eventAnchor } from '~/utils/events'
import { resolveStreamSpeakerPhoto } from '~/utils/streamEvent'

const route = useRoute()
if (route.query.tags || route.query.type || route.query.q) {
  await navigateTo({ path: '/articles', query: route.query }, { redirectCode: 301 })
}

usePageSeo({
  description: 'Practical, vendor-neutral articles and expert streams for integration architects.',
  path: '/'
})

type FeaturedItem = {
  key: string
  type: 'Article' | 'Stream'
  title: string
  description: string
  date: string
  byline: string
  people: FeaturedPerson[]
  to: string
}

type FeaturedPerson = {
  name: string
  photo?: string
}

const articles = articlesData as Article[]
const events = eventsData as Event[]
const eventTypeTags = new Set(['Stream', 'Workshop', 'Meetup', 'Training'])
const now = new Date()

const recordedStreams = events.filter(
  (event) => event.eventType === 'Stream' && new Date(event.date) < now
)

const featuredTopics = computed(() => {
  const counts = new Map<string, number>()

  for (const item of [...articles, ...recordedStreams]) {
    for (const tag of item.tags) {
      if (!eventTypeTags.has(tag)) counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 6)
    .map(([name, count]) => ({ name, count }))
})

const topicIcons = [
  mdiPuzzleOutline,
  mdiSourceBranch,
  mdiCloudOutline,
  mdiMessageTextOutline,
  mdiApi,
  mdiDatabaseOutline
]

const latestArticles = [...articles]
  .sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate))
  .slice(0, 2)

const latestStream = [...recordedStreams].sort(
  (a, b) => Date.parse(b.date as string) - Date.parse(a.date as string)
)[0]

const latestContent = computed<FeaturedItem[]>(() => {
  const featuredArticles: FeaturedItem[] = latestArticles.map((article) => ({
    key: `article-${article.name}`,
    type: 'Article',
    title: article.title,
    description: article.short,
    date: article.publishDate,
    byline: article.authors.map((author) => author.author).join(', '),
    people: article.authors.map((author) => ({ name: author.author, photo: author.photo })),
    to: `/articles/${article.name}`
  }))

  if (!latestStream) return featuredArticles

  const guests = (latestStream.speakers ?? [])
    .filter((speaker) => !speaker.isHost)
    .map((speaker) => ({
      name: speaker.name,
      photo: resolveStreamSpeakerPhoto(speaker.photo)
    }))

  return [
    ...featuredArticles,
    {
      key: `stream-${latestStream.name}`,
      type: 'Stream',
      title: latestStream.name,
      description: latestStream.description,
      date: latestStream.date as string,
      byline: guests.length
        ? guests.map((guest) => guest.name).join(', ')
        : 'BridgingTheGap.eu.com stream',
      people: guests,
      to: streamLink(latestStream)
    }
  ]
})

const upcomingEvent = computed(() => {
  return [...events]
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => Date.parse(a.date as string) - Date.parse(b.date as string))[0]
})

function streamLink(event: Event) {
  if (event.YT) return `/streams/${event.YT.replace(/.*\//, '')}`

  const slug = event.name.replaceAll(' ', '_').replace(/[()?\u2018\u2019']/g, '')
  return `/streams/${slug}`
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
}

function formatMonth(date: string | Date) {
  return new Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(date)).toUpperCase()
}

function formatDay(date: string | Date) {
  return new Intl.DateTimeFormat('en', { day: '2-digit' }).format(new Date(date))
}

function formatEventTime(event: Event) {
  const dateDetails = Object.values(event.details).find(
    (detail) => typeof detail === 'object' && detail !== null && 'startTime' in detail
  )

  if (!dateDetails || !('startTime' in dateDetails)) return formatDate(event.date)

  return `${formatDate(event.date)} · ${dateDetails.startTime}${dateDetails.timezone ? ` ${dateDetails.timezone}` : ''}`
}
</script>
