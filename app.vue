<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { watch } from 'vue'

const route = useRoute()

if (route && route.query) {
  if (route.query.tags) {
    route.query.tags = route.query.tags.split(',')
  }
}

/**
 * Watch for route changes to update query parameters
 */
watch(route, (current) => {
  if (current && current.query) {
    if (route.query.tags) {
      route.query.tags = route.query.tags.split(',')
    }
  }
})

const script = [
  {
    key: 'pageMeta',
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Bridging the Gap',
      url: 'https://bridgingthegap.eu.com'
    })
  }
]

/**
 * Set up head metadata
 */
useHead({
  title: 'Bridging the Gap',
  titleTemplate: (siteTitle) => {
    return siteTitle ? `Bridging The Gap` : 'Bridging The Gap'
  },
  link: {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.png'
  },
  meta: [
    {
      name: 'description',
      content:
        'Bridging the Gap is a collaboration of integration architects working together to create a simple guide to integration architecture'
    },
    { name: 'theme-color', content: 'rgb(250,250,250)' }
  ],
  script: script,
  htmlAttrs: {
    lang: 'en'
  }
})

/**
 * SEO Meta Information
 */
useSeoMeta({
  title: 'Bridging the Gap',
  ogTitle: 'Bridging the Gap',
  ogSiteName: 'Bridging the Gap',
  description:
    'Bridging the Gap is a collaboration of integration architects working together to create a simple guide to integration architecture',
  ogDescription:
    'Bridging the Gap is a collaboration of integration architects working together to create a simple guide to integration architecture',
  ogImage: 'https://bridgingthegap.eu.com/favicon.png',
  ogUrl: 'https://bridgingthegap.eu.com',
  twitterTitle: 'Bridging the Gap',
  twitterDescription:
    'Bridging the Gap is a collaboration of integration architects working together to create a simple guide to integration architecture',
  twitterImage: 'https://bridgingthegap.eu.com/favicon.png',
  twitterCard: 'summary'
})
</script>

<style lang="scss">
@use '@/assets/style/base.css';
@use '@/assets/style/main.scss';
</style>
