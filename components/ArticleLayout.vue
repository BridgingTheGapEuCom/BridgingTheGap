<template>
  <div v-if="articleMeta" class="article-layout">
    <main class="article-reading-column">
      <NuxtLink class="article-back-link" to="/articles">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
        Back to articles
      </NuxtLink>

      <header class="article-header">
        <span class="article-kind">Article</span>
        <h1>{{ articleMeta.title }}</h1>

        <nav class="article-tags" aria-label="Article topics">
          <NuxtLink v-for="tag in articleMeta.tags" :key="tag" :to="tagLink(tag)">
            #{{ tag }}
          </NuxtLink>
        </nav>

        <div class="article-primary-authors">
          <div v-for="author in articleMeta.authors" :key="author.author" class="primary-author">
            <img :src="author.photo" :alt="`${author.author} portrait`" />
            <div>
              <span>Author</span>
              <strong>{{ author.author }}</strong>
              <p>{{ author.title }}</p>
            </div>
          </div>
        </div>

        <dl class="article-metadata">
          <div v-if="articleMeta.coAuthors?.length">
            <dt>Co-authors</dt>
            <dd v-for="author in articleMeta.coAuthors" :key="author.author">
              <a :href="author.link" target="_blank" rel="noopener noreferrer">
                {{ author.author }}
              </a>
            </dd>
          </div>
          <div v-if="sortedReviewers.length">
            <dt>Article reviewers</dt>
            <dd v-for="reviewer in sortedReviewers" :key="reviewer.reviewer">
              <a :href="reviewer.link" target="_blank" rel="noopener noreferrer">
                {{ reviewer.reviewer }}
              </a>
            </dd>
          </div>
          <div>
            <dt>Published</dt>
            <dd>
              <time :datetime="articleMeta.publishDate">{{ publishedDate }}</time>
            </dd>
          </div>
          <div>
            <dt>Last update</dt>
            <dd>
              <time :datetime="articleMeta.lastUpdate">{{ updatedDate }}</time>
            </dd>
          </div>
        </dl>

        <div class="article-summary" aria-label="Article details">
          <div>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span v-if="readingMinutes">{{ readingMinutes }} min read</span>
            <span v-else aria-label="Reading time being calculated">—</span>
          </div>
          <div>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <rect x="4" y="5" width="16" height="15" rx="2" />
              <path d="M8 3v4M16 3v4M4 10h16M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
            </svg>
            <time :datetime="articleMeta.publishDate">{{ publishedDate }}</time>
          </div>
        </div>
      </header>

      <details
        v-if="tableOfContents.length"
        ref="mobileToc"
        class="article-mobile-toc"
        @keydown.esc="closeMobileToc"
      >
        <summary>
          On this page
          <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m5 7.5 5 5 5-5" /></svg>
        </summary>
        <nav aria-label="On this page">
          <a
            v-for="heading in tableOfContents"
            :key="heading.id"
            :class="[`toc-level-${heading.level}`, { active: activeHeading === heading.id }]"
            :href="`#${encodeURIComponent(heading.id)}`"
            @click.prevent="navigateToHeading(heading)"
          >
            {{ heading.text }}
          </a>
        </nav>
      </details>

      <div ref="articleContent" class="article-content">
        <slot :dark="props.dark" />
      </div>

      <section v-if="relatedArticles.length" class="article-supporting-section">
        <h2>Related articles</h2>
        <ul>
          <li v-for="related in relatedArticles" :key="related.name">
            <NuxtLink :to="`/articles/${related.name}`">{{ related.title }}</NuxtLink>
          </li>
        </ul>
      </section>

      <section v-if="articleMeta.bibliography?.length" class="article-supporting-section">
        <h2>Bibliography</h2>
        <ul>
          <li v-for="entry in articleMeta.bibliography" :key="entry.title">
            <a :href="entry.link" target="_blank" rel="noopener noreferrer">{{ entry.title }}</a>
            <span v-if="entry.ISBN">; ISBN {{ entry.ISBN }}</span>
            <span v-if="entry.author">; {{ entry.author }}</span>
          </li>
        </ul>
      </section>
    </main>

    <aside v-if="tableOfContents.length" class="article-desktop-toc">
      <nav aria-label="On this page">
        <h2>On this page</h2>
        <a
          v-for="heading in tableOfContents"
          :key="heading.id"
          :class="[`toc-level-${heading.level}`, { active: activeHeading === heading.id }]"
          :href="`#${encodeURIComponent(heading.id)}`"
          @click.prevent="navigateToHeading(heading)"
        >
          {{ heading.text }}
        </a>
      </nav>
    </aside>
  </div>
</template>

<script lang="ts" setup>
import type { Article, Author, Reviewer } from '~/Types/Article'
import articlesData from '~/articles.json'
import { DEFAULT_OG_IMAGE, getArticleOgImage, SITE_NAME, SITE_URL } from '~/utils/seo'

interface LinkedAuthor {
  author: string
  link: string
}

interface ArticleRecord extends Article {
  coAuthors?: LinkedAuthor[]
  relatedTags?: string[]
}

interface TableOfContentsEntry {
  id: string
  text: string
  level: number
  element: HTMLElement
}

const props = withDefaults(defineProps<{ dark?: boolean }>(), { dark: false })
const route = useRoute()
const articleContent = useTemplateRef<HTMLElement>('articleContent')
const mobileToc = useTemplateRef<HTMLDetailsElement>('mobileToc')
const tableOfContents = ref<TableOfContentsEntry[]>([])
const activeHeading = ref('')
const readingMinutes = ref<number>()
const articles = articlesData as ArticleRecord[]

const articleName = computed(() => String(route.name ?? '').replace('articles-', ''))
const articleMeta = computed(() => articles.find((article) => article.name === articleName.value))
const sortedReviewers = computed<Reviewer[]>(() =>
  [...(articleMeta.value?.reviewers ?? [])].sort((first, second) =>
    first.reviewer.localeCompare(second.reviewer)
  )
)
const relatedArticles = computed(() => {
  const relatedTags = articleMeta.value?.relatedTags ?? []
  if (!relatedTags.length) return []
  return articles.filter(
    (article) =>
      article.name !== articleMeta.value?.name &&
      relatedTags.some((tag) => article.tags?.includes(tag))
  )
})

const acceptLanguage = import.meta.server ? useRequestHeader('accept-language') : undefined
const userLocale = import.meta.client
  ? navigator.language
  : acceptLanguage?.split(',')[0]?.trim() || 'en'
const dateFormatter = new Intl.DateTimeFormat(userLocale, { dateStyle: 'long' })
const formatDate = (value: string) => dateFormatter.format(new Date(`${value}T00:00:00`))
const publishedDate = computed(() =>
  articleMeta.value ? formatDate(articleMeta.value.publishDate) : ''
)
const updatedDate = computed(() =>
  articleMeta.value ? formatDate(articleMeta.value.lastUpdate) : ''
)

const tagLink = (tag: string) => ({ path: '/articles', query: { tags: tag } })

const headingId = (text: string, usedIds: Map<string, number>) => {
  const base = text.trim().replace(/\s+/g, '_') || 'section'
  const occurrence = usedIds.get(base) ?? 0
  usedIds.set(base, occurrence + 1)
  return occurrence ? `${base}_${occurrence}` : base
}

const scrollToHeading = (heading: TableOfContentsEntry, smooth = false) => {
  const body = document.getElementById('body')
  if (!body) return

  const headerHeight = document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 0
  const headingTop = heading.element.getBoundingClientRect().top
  const bodyTop = body.getBoundingClientRect().top
  const targetTop = body.scrollTop + headingTop - bodyTop - headerHeight - 24

  if (smooth && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    body.scrollTo({ top: targetTop, behavior: 'smooth' })
    return
  }

  const previousScrollBehavior = body.style.scrollBehavior
  body.style.scrollBehavior = 'auto'
  body.scrollTop = targetTop
  body.style.scrollBehavior = previousScrollBehavior
}

const replaceHash = (id: string) => {
  const hash = `#${encodeURIComponent(id)}`
  if (window.location.hash === hash) return
  window.history.replaceState(window.history.state, '', `${route.fullPath.split('#')[0]}${hash}`)
}

const closeMobileToc = () => {
  if (mobileToc.value?.open) mobileToc.value.open = false
}

const onDocumentPointerDown = (event: PointerEvent) => {
  const toc = mobileToc.value
  if (!toc?.open || toc.contains(event.target as Node)) return
  closeMobileToc()
}

let isNavigatingToHeading = false
let navigationEndTimer: number | undefined
let removeNavigationEndListener: (() => void) | undefined

const finishHeadingNavigation = () => {
  if (!isNavigatingToHeading) return
  isNavigatingToHeading = false
  if (navigationEndTimer) window.clearTimeout(navigationEndTimer)
  removeNavigationEndListener?.()
  removeNavigationEndListener = undefined
  updateActiveHeading(false)
}

const navigateToHeading = (heading: TableOfContentsEntry) => {
  const body = document.getElementById('body')
  if (!body) return

  closeMobileToc()
  if (navigationEndTimer) window.clearTimeout(navigationEndTimer)
  removeNavigationEndListener?.()
  isNavigatingToHeading = true
  activeHeading.value = heading.id
  replaceHash(heading.id)

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    scrollToHeading(heading)
    finishHeadingNavigation()
    return
  }

  const onScrollEnd = () => finishHeadingNavigation()
  body.addEventListener('scrollend', onScrollEnd, { once: true })
  removeNavigationEndListener = () => body.removeEventListener('scrollend', onScrollEnd)
  navigationEndTimer = window.setTimeout(finishHeadingNavigation, 1600)
  scrollToHeading(heading, true)
}

const buildArticleNavigation = async () => {
  await nextTick()
  const article = articleContent.value?.querySelector('article')
  if (!article) return

  const words = article.textContent?.trim().split(/\s+/).filter(Boolean).length ?? 0
  readingMinutes.value = words ? Math.max(1, Math.ceil(words / 200)) : undefined

  const usedIds = new Map<string, number>()
  tableOfContents.value = [...article.querySelectorAll<HTMLElement>('h2, h3, h4, h5')].map(
    (element) => {
      const text = element.textContent?.trim() ?? ''
      const id = headingId(text, usedIds)
      element.id = id
      return {
        id,
        text,
        level: Number(element.tagName.slice(1)),
        element
      }
    }
  )
  activeHeading.value = tableOfContents.value[0]?.id ?? ''

  const initialHash = window.location.hash || route.hash
  if (initialHash) {
    const id = decodeURIComponent(initialHash.slice(1))
    await nextTick()
    const heading = tableOfContents.value.find((entry) => entry.id === id)
    if (heading) scrollToHeading(heading)
  }
  updateActiveHeading(false)
}

const updateActiveHeading = (updateHash = true) => {
  const body = document.getElementById('body')
  if (!body || !tableOfContents.value.length) return

  const bodyTop = body.getBoundingClientRect().top
  let current = tableOfContents.value[0]
  let passedHeading = false
  for (const heading of tableOfContents.value) {
    if (heading.element.getBoundingClientRect().top - bodyTop <= 120) {
      current = heading
      passedHeading = true
    } else {
      break
    }
  }

  if (body.scrollTop + body.clientHeight >= body.scrollHeight - 2) {
    current = tableOfContents.value.at(-1) ?? current
    passedHeading = true
  }

  if (activeHeading.value !== current.id) activeHeading.value = current.id
  if (updateHash && passedHeading) replaceHash(current.id)
}

let scrollBody: HTMLElement | null = null
const onScroll = () => {
  if (!isNavigatingToHeading) updateActiveHeading()
}

onMounted(async () => {
  await buildArticleNavigation()
  scrollBody = document.getElementById('body')
  scrollBody?.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('pointerdown', onDocumentPointerDown)
})

onBeforeUnmount(() => {
  scrollBody?.removeEventListener('scroll', onScroll)
  document.removeEventListener('pointerdown', onDocumentPointerDown)
  if (navigationEndTimer) window.clearTimeout(navigationEndTimer)
  removeNavigationEndListener?.()
})

watch(
  () => route.path,
  async () => {
    tableOfContents.value = []
    readingMinutes.value = undefined
    await buildArticleNavigation()
  }
)

useHead(() => {
  if (!articleMeta.value) return {}
  const articleUrl = `${SITE_URL}/articles/${articleMeta.value.name}`
  const articleOgImage = getArticleOgImage(articleMeta.value.name)
  return {
    title: articleMeta.value.title,
    link: [{ rel: 'canonical', href: articleUrl }],
    script: [
      {
        key: 'article-schema',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: articleMeta.value.title,
          image: [articleOgImage],
          datePublished: articleMeta.value.publishDate,
          dateModified: articleMeta.value.lastUpdate,
          author: articleMeta.value.authors.map((author: Author) => ({
            '@type': 'Person',
            name: author.author,
            url: author.link
          })),
          url: articleUrl,
          mainEntityOfPage: articleUrl,
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE }
          }
        })
      }
    ]
  }
})

useSeoMeta({
  ogType: 'article',
  title: () => articleMeta.value?.title,
  ogTitle: () => articleMeta.value?.title,
  twitterTitle: () => articleMeta.value?.title,
  description: () => articleMeta.value?.short,
  ogDescription: () => articleMeta.value?.short,
  twitterDescription: () => articleMeta.value?.short,
  ogImage: () => (articleMeta.value ? getArticleOgImage(articleMeta.value.name) : undefined),
  twitterImage: () => (articleMeta.value ? getArticleOgImage(articleMeta.value.name) : undefined),
  twitterCard: 'summary_large_image',
  ogUrl: () => (articleMeta.value ? `${SITE_URL}/articles/${articleMeta.value.name}` : undefined),
  author: () => articleMeta.value?.authors.map((author) => author.author)
})
</script>
