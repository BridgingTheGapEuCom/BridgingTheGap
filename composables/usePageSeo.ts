import { absoluteUrl, DEFAULT_OG_IMAGE } from '~/utils/seo'

interface PageSeoOptions {
  title?: string
  description: string
  path?: string
  ogImage?: string
}

export function usePageSeo(options: PageSeoOptions) {
  const ogImage = options.ogImage ?? DEFAULT_OG_IMAGE
  const ogUrl = options.path ? absoluteUrl(options.path) : undefined

  useHead({
    ...(options.title && { title: options.title }),
    ...(ogUrl && {
      link: [{ rel: 'canonical', href: ogUrl }]
    })
  })

  useSeoMeta({
    ...(options.title && {
      title: options.title,
      ogTitle: options.title,
      twitterTitle: options.title
    }),
    description: options.description,
    ogDescription: options.description,
    twitterDescription: options.description,
    ogImage,
    twitterImage: ogImage,
    twitterCard: 'summary_large_image',
    ogUrl
  })
}
