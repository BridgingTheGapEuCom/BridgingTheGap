<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useHead } from '#imports'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '~/utils/seo'

const websiteSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
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

/**
 * Set up head metadata
 */
useHead({
  titleTemplate: (title) => (title ? `${title} | ${SITE_NAME}` : SITE_NAME),
  link: {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.png'
  },
  meta: [
    {
      name: 'description',
      content:
        'BridgingTheGap.eu.com is a collaboration of integration architects working together to create a simple guide to integration architecture'
    },
    { name: 'theme-color', content: 'rgb(250,250,250)' }
  ],
  script: [
    {
      key: 'website-schema',
      type: 'application/ld+json',
      innerHTML: websiteSchema
    }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

/**
 * SEO Meta Information
 */
useSeoMeta({
  title: SITE_NAME,
  ogTitle: SITE_NAME,
  ogSiteName: SITE_NAME,
  description:
    'BridgingTheGap.eu.com is a collaboration of integration architects working together to create a simple guide to integration architecture',
  ogDescription:
    'BridgingTheGap.eu.com is a collaboration of integration architects working together to create a simple guide to integration architecture',
  ogImage: DEFAULT_OG_IMAGE,
  ogUrl: SITE_URL,
  twitterTitle: SITE_NAME,
  twitterDescription:
    'BridgingTheGap.eu.com is a collaboration of integration architects working together to create a simple guide to integration architecture',
  twitterImage: DEFAULT_OG_IMAGE,
  twitterCard: 'summary_large_image'
})
</script>

<style lang="scss">
@use '@/assets/style/base.css';
</style>
