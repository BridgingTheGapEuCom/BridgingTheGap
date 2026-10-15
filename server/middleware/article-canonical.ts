import articles from '~/articles.json'

export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname
  const match = path.match(/^\/articles\/([^/]+)$/)

  if (!match) {
    return
  }

  const slug = decodeURIComponent(match[1])
  const article = articles.find((entry) => entry.name.toLowerCase() === slug.toLowerCase())

  if (!article) {
    return
  }

  const canonicalPath = `/articles/${article.name}`

  if (path !== canonicalPath) {
    return sendRedirect(event, canonicalPath, 301)
  }
})
