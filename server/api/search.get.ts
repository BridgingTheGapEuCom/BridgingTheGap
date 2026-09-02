import Fuse from 'fuse.js'
import type { Article, ArticleContentRaw } from '~/Types/Article'
import type { Event as StreamEvent, EventDetailsDate } from '~/Types/Event'
import { EventType } from '~/Types/Event'
import articlesData from '~/articles.json'
import articlesContentData from '~/articlesContent.json'
import eventsData from '~/events.json'
import type { SearchContentType, SearchResponse, SearchResultItem } from '~/utils/search'

interface SearchDocument extends SearchResultItem {
  searchableDescription: string
  searchableTopics: string
  searchablePeople: string
  searchableBody: string
}

const articles = articlesData as Article[]
const articleContent = new Map(
  (articlesContentData as ArticleContentRaw[]).map((article) => [article.title, article.raw])
)
const events = eventsData as StreamEvent[]

const articleReadingMinutes = (article: Article) => {
  if (article.readingMinutes) return article.readingMinutes
  const text = articleContent.get(article.title)?.trim() || article.short.trim()
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200))
}

const streamDurationMinutes = (event: StreamEvent) => {
  if (event.durationMinutes) return event.durationMinutes
  const dateDetails = Object.values(event.details).find(
    (detail): detail is EventDetailsDate =>
      typeof detail === 'object' && detail !== null && 'startTime' in detail && 'endTime' in detail
  )
  if (!dateDetails?.startTime || !dateDetails.endTime) return 120

  const minutesFromTime = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 60 + minutes
  }
  let duration = minutesFromTime(dateDetails.endTime) - minutesFromTime(dateDetails.startTime)
  if (duration <= 0) duration += 24 * 60
  return duration
}

const streamLink = (event: StreamEvent) => {
  if (event.YT) return `/streams/${event.YT.replace(/.*\//, '')}`
  const slug = event.name.replaceAll(' ', '_').replace(/[()?"'‘’]/g, '')
  return `/streams/${slug}`
}

const documents: SearchDocument[] = [
  ...articles.map((article) => {
    const people = article.authors.map((author) => author.author)
    return {
      id: `article-${article.name}`,
      type: 'article' as const,
      title: article.title,
      description: article.short,
      topics: article.tags,
      people,
      primaryPerson: people[0],
      to: `/articles/${article.name}`,
      readingMinutes: articleReadingMinutes(article),
      searchableDescription: article.short,
      searchableTopics: article.tags.join(' '),
      searchablePeople: people.join(' '),
      searchableBody: articleContent.get(article.title) ?? ''
    }
  }),
  ...events
    .filter((event) => event.eventType === EventType.Stream && new Date(event.date) < new Date())
    .map((event) => {
      const speakers = event.speakers ?? []
      const people = speakers.map((speaker) => speaker.name)
      const guest = speakers.find((speaker) => !speaker.isHost) ?? speakers[0]
      const topics = [...new Set([...(event.topics ?? []), ...event.tags])]
      return {
        id: `stream-${event.id ?? event.name}`,
        type: 'stream' as const,
        title: event.name,
        description: event.summary ?? event.description,
        topics,
        people,
        primaryPerson: guest?.name,
        to: streamLink(event),
        durationMinutes: streamDurationMinutes(event),
        searchableDescription: `${event.summary ?? ''} ${event.description}`,
        searchableTopics: topics.join(' '),
        searchablePeople: speakers
          .map(
            (speaker) =>
              `${speaker.name} ${speaker.role ?? ''} ${speaker.isHost ? 'host' : 'guest'}`
          )
          .join(' '),
        searchableBody: ''
      }
    })
]

const searchIndex = new Fuse(documents, {
  keys: [
    { name: 'title', weight: 0.42 },
    { name: 'searchableTopics', weight: 0.2 },
    { name: 'searchablePeople', weight: 0.16 },
    { name: 'searchableDescription', weight: 0.14 },
    { name: 'searchableBody', weight: 0.08 }
  ],
  threshold: 0.32,
  ignoreLocation: true,
  minMatchCharLength: 2
})

const toPublicResult = (document: SearchDocument): SearchResultItem => ({
  id: document.id,
  type: document.type,
  title: document.title,
  topics: document.topics,
  people: document.people,
  primaryPerson: document.primaryPerson,
  to: document.to,
  readingMinutes: document.readingMinutes,
  durationMinutes: document.durationMinutes
})

export default defineEventHandler((event): SearchResponse => {
  const rawQuery = getQuery(event).q
  const query = String(Array.isArray(rawQuery) ? (rawQuery[0] ?? '') : (rawQuery ?? '')).trim()
  const emptyCounts: Record<SearchContentType, number> = { article: 0, stream: 0 }

  if (query.length < 2) return { query, total: 0, counts: emptyCounts, groups: [] }

  const matches = searchIndex.search(query).map((result) => result.item)
  const articles = matches.filter((result) => result.type === 'article')
  const streams = matches.filter((result) => result.type === 'stream')
  const counts = { article: articles.length, stream: streams.length }

  return {
    query,
    total: matches.length,
    counts,
    groups: [
      ...(articles.length
        ? [
            {
              type: 'article' as const,
              label: 'Articles',
              count: articles.length,
              items: articles.slice(0, 3).map(toPublicResult)
            }
          ]
        : []),
      ...(streams.length
        ? [
            {
              type: 'stream' as const,
              label: 'Streams',
              count: streams.length,
              items: streams.slice(0, 2).map(toPublicResult)
            }
          ]
        : [])
    ]
  }
})
