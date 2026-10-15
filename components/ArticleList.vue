<template>
  <section id="articleList" aria-labelledby="catalogue-results-heading" class="catalogue">
    <h2 id="catalogue-results-heading" class="sr-only">Knowledge catalogue</h2>

    <div class="catalogue-toolbar">
      <label class="catalogue-search">
        <span class="catalogue-field-label">Search the knowledge base</span>
        <span class="catalogue-search-control">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="m16.5 16.5 4 4" />
          </svg>
          <input
            v-model="searchDraft"
            type="search"
            placeholder="Title, topic, or keyword…"
            autocomplete="off"
          />
        </span>
      </label>

      <div class="catalogue-selectors">
        <details ref="topicFilter" class="topic-filter" @keydown.esc="closeTopicFilter">
          <summary>
            <span>Topic:</span> {{ topicSummary }}
            <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m5 7.5 5 5 5-5" /></svg>
          </summary>
          <fieldset>
            <legend class="sr-only">Filter by topic</legend>
            <label v-for="tag in allTags" :key="tag">
              <input
                type="checkbox"
                :checked="selectedTags.includes(tag)"
                @change="toggleTag(tag)"
              />
              <span>{{ tag }}</span>
            </label>
            <button v-if="selectedTags.length" type="button" @click="clearTags">
              Clear topics
            </button>
          </fieldset>
        </details>

        <label class="catalogue-select">
          <span>Sort:</span>
          <select :value="sortOrder" aria-label="Sort results" @change="changeSort">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="title">Title A–Z</option>
          </select>
          <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m5 7.5 5 5 5-5" /></svg>
        </label>
      </div>
    </div>

    <div class="catalogue-type-filter" role="group" aria-label="Filter by content type">
      <button
        v-for="option in typeOptions"
        :key="option.value"
        type="button"
        :aria-pressed="contentType === option.value"
        @click="setContentType(option.value)"
      >
        {{ option.label }} <span>{{ optionCount(option.value) }}</span>
      </button>
    </div>

    <div v-if="searchTerm" class="catalogue-query-summary" aria-live="polite" aria-atomic="true">
      <h2>Results for “{{ queryValue(route.query.q).trim() }}”</h2>
      <p>{{ matchingItems.length }} {{ matchingItems.length === 1 ? 'result' : 'results' }}</p>
    </div>

    <div v-if="selectedTags.length" class="selected-topics" aria-label="Selected topics">
      <span>Topics</span>
      <button v-for="tag in selectedTags" :key="tag" type="button" @click="toggleTag(tag)">
        {{ tag }}
        <span aria-hidden="true">×</span>
        <span class="sr-only">Remove {{ tag }}</span>
      </button>
    </div>

    <div class="catalogue-table-shell">
      <table class="catalogue-table">
        <caption class="sr-only">
          Filtered articles and streams
        </caption>
        <colgroup>
          <col class="catalogue-title-column" />
          <col class="catalogue-topics-column" />
          <col class="catalogue-people-column" />
          <col class="catalogue-duration-column" />
          <col class="catalogue-date-column" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Topics</th>
            <th scope="col">By / with</th>
            <th scope="col">Length</th>
            <th scope="col">Published</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in pagedItems" :key="item.key">
            <td class="result-title-cell" data-label="Title">
              <div :class="['result-icon', `result-icon--${item.kind}`]" aria-hidden="true">
                <svg v-if="item.kind === 'article'" viewBox="0 0 24 24">
                  <path d="M6 3h12v18H6zM9 8h6M9 12h6M9 16h4" />
                </svg>
                <svg v-else viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z" /></svg>
              </div>
              <div class="result-copy">
                <span class="result-kind">
                  {{ item.kind === 'article' ? 'Article' : 'Stream' }}
                </span>
                <NuxtLink :to="item.to">{{ item.title }}</NuxtLink>
                <p>{{ item.description }}</p>
              </div>
            </td>
            <td data-label="Topics">
              <div class="result-topics">
                <button
                  v-for="tag in item.tags"
                  :key="tag"
                  type="button"
                  :aria-pressed="selectedTags.includes(tag)"
                  @click="toggleTag(tag)"
                >
                  {{ tag }}
                </button>
              </div>
            </td>
            <td data-label="By / with">
              <div v-if="item.people.length" class="result-people">
                <div class="result-people-avatars" aria-hidden="true">
                  <span v-for="person in item.people" :key="person.name">
                    <img v-if="person.photo" :src="person.photo" alt="" loading="lazy" />
                    <span v-else class="result-person-initials">{{
                      getInitials(person.name)
                    }}</span>
                  </span>
                </div>
                <span class="result-people-names">
                  <span v-for="(person, index) in item.people" :key="person.name">
                    {{ person.name }}{{ index < item.people.length - 1 ? ', ' : '' }}
                  </span>
                </span>
              </div>
              <span v-else class="result-people-empty">Guest information unavailable</span>
            </td>
            <td data-label="Length">
              <div class="result-duration">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <span v-if="item.kind === 'article'">{{ item.readingMinutes }} min read</span>
                <span v-else>{{ item.durationMinutes }} min</span>
              </div>
            </td>
            <td data-label="Published">
              <time :datetime="item.date">{{ formatDate(item.date) }}</time>
            </td>
          </tr>
          <tr v-if="!pagedItems.length" class="catalogue-empty-row">
            <td colspan="5">
              <strong>No results found.</strong>
              <span>Try a broader search or clear one of the filters.</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <footer class="catalogue-pagination">
      <p aria-live="polite">{{ resultSummary }}</p>
      <nav v-if="totalPages > 1" aria-label="Results pages">
        <button type="button" :disabled="currentPage === 1" @click="setPage(currentPage - 1)">
          <span aria-hidden="true">‹</span> Prev
        </button>
        <template v-for="(page, index) in visiblePages" :key="`${page}-${index}`">
          <span v-if="page === 'ellipsis'" aria-hidden="true">…</span>
          <button
            v-else
            type="button"
            :aria-current="page === currentPage ? 'page' : undefined"
            @click="setPage(page)"
          >
            {{ page }}
          </button>
        </template>
        <button
          type="button"
          :disabled="currentPage === totalPages"
          @click="setPage(currentPage + 1)"
        >
          Next <span aria-hidden="true">›</span>
        </button>
      </nav>
      <label class="page-size">
        <span>Results per page</span>
        <select :value="pageSize" @change="changePageSize">
          <option :value="10">10 per page</option>
          <option :value="20">20 per page</option>
          <option :value="50">50 per page</option>
        </select>
        <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m5 7.5 5 5 5-5" /></svg>
      </label>
    </footer>
  </section>
</template>

<script lang="ts" setup>
import Fuse from 'fuse.js'
import type { LocationQueryRaw } from 'vue-router'
import type { Article, ArticleContentRaw } from '~/Types/Article'
import type { Event as StreamEvent, EventDetailsDate } from '~/Types/Event'
import articlesContentData from '~/articlesContent.json'
import { resolveStreamSpeakerPhoto } from '~/utils/streamEvent'

type ContentType = 'all' | 'articles' | 'streams'
type SortOrder = 'newest' | 'oldest' | 'title'
type PageEntry = number | 'ellipsis'

interface CatalogueItem {
  key: string
  kind: 'article' | 'stream'
  title: string
  description: string
  date: string
  tags: string[]
  to: string
  people: CataloguePerson[]
  searchPeople: string[]
  searchText: string
  readingMinutes?: number
  durationMinutes?: number
}

interface CataloguePerson {
  name: string
  photo?: string
}

const props = withDefaults(
  defineProps<{
    articles?: Article[]
    events?: StreamEvent[]
  }>(),
  {
    articles: () => [],
    events: () => []
  }
)

const route = useRoute()
const router = useRouter()
const topicFilter = useTemplateRef<HTMLDetailsElement>('topicFilter')
const typeOptions: Array<{ label: string; value: ContentType }> = [
  { label: 'All', value: 'all' },
  { label: 'Articles', value: 'articles' },
  { label: 'Streams', value: 'streams' }
]
const validPageSizes = [10, 20, 50]
const contentByTitle = new Map(
  (articlesContentData as ArticleContentRaw[]).map((article) => [article.title, article.raw])
)

const queryValue = (value: unknown) =>
  Array.isArray(value) ? String(value[0] ?? '') : String(value ?? '')
const queryTags = computed(() =>
  queryValue(route.query.tags)
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)
)
const selectedTags = computed(() => [...new Set(queryTags.value)])
const contentType = computed<ContentType>(() => {
  const value = queryValue(route.query.type)
  return value === 'articles' || value === 'streams' ? value : 'all'
})
const sortOrder = computed<SortOrder>(() => {
  const value = queryValue(route.query.sort)
  return value === 'oldest' || value === 'title' ? value : 'newest'
})
const requestedPage = computed(() => {
  const value = Number.parseInt(queryValue(route.query.page), 10)
  return Number.isFinite(value) && value > 0 ? value : 1
})
const pageSize = computed(() => {
  const value = Number.parseInt(queryValue(route.query.perPage), 10)
  return validPageSizes.includes(value) ? value : 20
})
const searchDraft = ref(queryValue(route.query.q))
let searchTimer: ReturnType<typeof setTimeout> | undefined

const closeTopicFilter = () => {
  topicFilter.value?.removeAttribute('open')
}

const closeTopicFilterFromOutside = (event: PointerEvent) => {
  if (
    topicFilter.value?.open &&
    event.target instanceof Node &&
    !topicFilter.value.contains(event.target)
  ) {
    closeTopicFilter()
  }
}

onMounted(() => document.addEventListener('pointerdown', closeTopicFilterFromOutside))
watch(
  () => route.query.q,
  (value) => {
    const routeSearch = queryValue(value)
    if (routeSearch !== searchDraft.value) searchDraft.value = routeSearch
  }
)
watch(searchDraft, (value) => {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => updateQuery({ q: value.trim() || undefined }, true), 250)
})
onBeforeUnmount(() => {
  clearTimeout(searchTimer)
  document.removeEventListener('pointerdown', closeTopicFilterFromOutside)
})

const articleReadingMinutes = (article: Article) => {
  if (article.readingMinutes) return article.readingMinutes
  const raw = contentByTitle.get(article.title)
  const text = raw?.trim() || article.short.trim()
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

const items = computed<CatalogueItem[]>(() => [
  ...props.articles.map((article) => {
    const people = article.authors.map((author) => ({
      name: author.author,
      photo: author.photo
    }))
    return {
      key: `article-${article.name}`,
      kind: 'article' as const,
      title: article.title,
      description: article.short,
      date: article.publishDate,
      tags: article.tags,
      to: `/articles/${article.name}`,
      people,
      searchPeople: people.map((person) => person.name),
      searchText: [
        article.title,
        article.short,
        article.tags.join(' '),
        people.map((person) => person.name).join(' '),
        contentByTitle.get(article.title) ?? ''
      ].join(' '),
      readingMinutes: articleReadingMinutes(article)
    }
  }),
  ...props.events.map((event) => {
    const speakers = event.speakers ?? []
    const people = speakers
      .filter((speaker) => !speaker.isHost)
      .map((speaker) => ({
        name: speaker.name,
        photo: resolveStreamSpeakerPhoto(speaker.photo)
      }))
    const tags = [...new Set([...(event.topics ?? []), ...event.tags])]
    return {
      key: `stream-${event.id ?? event.name}`,
      kind: 'stream' as const,
      title: event.name,
      description: event.summary ?? event.description,
      date: String(event.date),
      tags,
      to: streamLink(event),
      people,
      searchPeople: speakers.map((speaker) => speaker.name),
      searchText: [
        event.name,
        event.summary ?? '',
        event.description,
        tags.join(' '),
        speakers
          .map(
            (speaker) =>
              `${speaker.name} ${speaker.role ?? ''} ${speaker.isHost ? 'host' : 'guest'}`
          )
          .join(' ')
      ].join(' '),
      durationMinutes: streamDurationMinutes(event)
    }
  })
])

const allTags = computed(() =>
  [...new Set(items.value.flatMap((item) => item.tags))].sort((a, b) => a.localeCompare(b))
)
const topicSummary = computed(() =>
  selectedTags.value.length ? `${selectedTags.value.length} selected` : 'All topics'
)
const fuse = computed(
  () =>
    new Fuse(items.value, {
      keys: [
        { name: 'title', weight: 0.42 },
        { name: 'tags', weight: 0.2 },
        { name: 'searchPeople', weight: 0.16 },
        { name: 'description', weight: 0.14 },
        { name: 'searchText', weight: 0.08 }
      ],
      threshold: 0.32,
      ignoreLocation: true,
      minMatchCharLength: 2
    })
)

const searchTerm = computed(() => queryValue(route.query.q).trim().toLowerCase())
const searchMatches = computed(() => {
  if (!searchTerm.value) return undefined
  const matches = new Set(fuse.value.search(searchTerm.value).map((result) => result.item.key))
  items.value.forEach((item) => {
    if (item.searchText.toLowerCase().includes(searchTerm.value)) matches.add(item.key)
  })
  return matches
})
const matchingItems = computed(() => {
  return items.value.filter((item) => {
    if (
      selectedTags.value.length &&
      !selectedTags.value.some((selectedTag) => item.tags.includes(selectedTag))
    ) {
      return false
    }
    return !searchMatches.value || searchMatches.value.has(item.key)
  })
})
const filteredItems = computed(() =>
  matchingItems.value.filter(
    (item) => contentType.value === 'all' || `${item.kind}s` === contentType.value
  )
)
const typeCounts = computed(() => ({
  all: matchingItems.value.length,
  articles: matchingItems.value.filter((item) => item.kind === 'article').length,
  streams: matchingItems.value.filter((item) => item.kind === 'stream').length
}))

const sortedItems = computed(() =>
  [...filteredItems.value].sort((first, second) => {
    if (sortOrder.value === 'title') return first.title.localeCompare(second.title)
    const difference = Date.parse(first.date) - Date.parse(second.date)
    return sortOrder.value === 'oldest' ? difference : -difference
  })
)
const totalPages = computed(() => Math.max(1, Math.ceil(sortedItems.value.length / pageSize.value)))
const currentPage = computed(() => Math.min(requestedPage.value, totalPages.value))
const pagedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return sortedItems.value.slice(start, start + pageSize.value)
})
const visiblePages = computed<PageEntry[]>(() => {
  if (totalPages.value <= 7)
    return Array.from({ length: totalPages.value }, (_, index) => index + 1)
  const pages = new Set([1, totalPages.value, currentPage.value])
  if (currentPage.value > 1) pages.add(currentPage.value - 1)
  if (currentPage.value < totalPages.value) pages.add(currentPage.value + 1)
  const sorted = [...pages].sort((a, b) => a - b)
  const result: PageEntry[] = []
  sorted.forEach((page, index) => {
    if (index && page - sorted[index - 1] > 1) result.push('ellipsis')
    result.push(page)
  })
  return result
})
const resultSummary = computed(() => {
  const total = sortedItems.value.length
  if (!total) return 'Showing 0 results'
  const start = (currentPage.value - 1) * pageSize.value + 1
  const end = Math.min(currentPage.value * pageSize.value, total)
  return `Showing ${start}–${end} of ${total} results`
})

watch([requestedPage, totalPages], ([requested, total]) => {
  if (requested > total) updateQuery({ page: total === 1 ? undefined : String(total) })
})

function updateQuery(changes: LocationQueryRaw, resetPage = false) {
  const page = Object.prototype.hasOwnProperty.call(changes, 'page')
    ? changes.page
    : route.query.page
  const query: LocationQueryRaw = {
    ...route.query,
    ...changes,
    page: resetPage ? undefined : page
  }
  void router.replace({ path: '/articles', query })
}

function setContentType(value: ContentType) {
  updateQuery({ type: value === 'all' ? undefined : value }, true)
}

function optionCount(value: ContentType) {
  return typeCounts.value[value]
}

function toggleTag(tag: string) {
  const tags = selectedTags.value.includes(tag)
    ? selectedTags.value.filter((selectedTag) => selectedTag !== tag)
    : [...selectedTags.value, tag]
  updateQuery({ tags: tags.length ? tags.join(',') : undefined }, true)
}

function clearTags() {
  updateQuery({ tags: undefined }, true)
}

function changeSort(event: Event) {
  const value = (event.target as HTMLSelectElement).value as SortOrder
  updateQuery({ sort: value === 'newest' ? undefined : value }, true)
}

function changePageSize(event: Event) {
  const value = Number((event.target as HTMLSelectElement).value)
  updateQuery({ perPage: value === 20 ? undefined : String(value) }, true)
}

function setPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  updateQuery({ page: page === 1 ? undefined : String(page) })
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}
</script>
