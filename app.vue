<template>
  <NuxtLayout>
    <div class="max-w-screen-xl flex flex-grow justify-center">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import { watch } from 'vue'

const route = useRoute()
const router = useRouter()

if (route && route.query) {
  if (route.query.tags) {
    router.replace(`${route.path}${route.hash}?tags=${route.query.tags.split(',')}`)
  } else {
    router.replace(`${route.path}${route.hash}`)
  }
}

watch(route, (current) => {
  if (current && current.query) {
    if (current.query.tags) {
      router.replace(`${current.path}${current.hash}?tags=${current.query.tags.split(',')}`)
    } else {
      router.replace(`${current.path}${current.hash}`)
    }
  }
})

useHead({
  title: 'Bridging the Gap',
  titleTemplate: (siteTitle) => {
    return siteTitle ? `Bridging The Gap` : 'Bridging The Gap'
  },
  link: {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.svg'
  },
  meta: [
    {
      name: 'description',
      content:
        'Bridging the Gap is a collaboration of integration architects working together to create a simple guide to integration architecture'
    },
    { name: 'theme-color', content: 'rgb(250,250,250)' }
  ],
  script: [
    {
      src: 'https://bridgingthegap.eu.com:3000/script.js',
      'data-website-id': '138c939d-5f34-4771-a0da-405393793fe8'
    },
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
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'Bridging the Gap',
  ogTitle: 'Bridging the Gap',
  ogSiteName: 'Bridging the Gap',
  description:
    'Bridging the Gap is a collaboration of integration architects working together to create a simple guide to integration architecture',
  ogDescription:
    'Bridging the Gap is a collaboration of integration architects working together to create a simple guide to integration architecture',
  ogImage: 'https://bridgingthegap.eu.com/favicon.svg',
  ogUrl: 'https://bridgingthegap.eu.com',
  twitterTitle: 'Bridging the Gap',
  twitterDescription:
    'Bridging the Gap is a collaboration of integration architects working together to create a simple guide to integration architecture',
  twitterImage: 'https://bridgingthegap.eu.com/favicon.svg',
  twitterCard: 'summary'
})
</script>

<style lang="scss">
@use '@/assets/style/base.css';
@use '@/assets/style/main.scss';
</style>
