<template>
  <div class="w-full">
    <ArticleList :articles="articles" :events="events.filter((e) => e.eventType === 'Stream')" />
  </div>
</template>

<script setup>
import articles from '../articles.json'
import events from '../events.json'
</script>
