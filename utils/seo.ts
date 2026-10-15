export const SITE_URL = 'https://bridgingthegap.eu.com'
export const SITE_NAME = 'BridgingTheGap.eu.com'
export const SITE_LOGO = `${SITE_URL}/logo.webp`
export const DEFAULT_OG_IMAGE = SITE_LOGO

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) {
    return path
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function getArticleOgImage(articleName: string): string {
  return absoluteUrl(`/articles/${articleName}/image.webp`)
}

export function getYoutubeThumbnail(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
}

export function truncateDescription(text: string, maxLength = 160): string {
  return text.replace(/\n+/g, ' ').trim().slice(0, maxLength)
}
