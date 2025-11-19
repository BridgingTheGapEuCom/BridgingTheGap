<template>
  <div class="w-full">
    <ArticleList
      :articles="lodash.cloneDeep(articles)"
      :events="
        lodash
          .cloneDeep(events)
          .filter((e) => e.eventType === 'Stream' && new Date(e.date) < new Date())
      "
      :newest-event="newestEvent"
    />
  </div>
</template>

<script setup>
import articles from '../articles.json'
import events from '../events.json'
import lodash from 'lodash'

/**
 * This computed property finds the newest event based on the date.
 * If there are no events, it returns null.
 * @returns {Event|null} The newest event object or null if no events exist.
 */
const newestEvent = computed(() => {
  if (!events || events.length === 0) {
    return null
  }

  return events.reduce((newest, current) => {
    const newestDate = new Date(newest.date)
    const currentDate = new Date(current.date)

    return currentDate.getTime() > newestDate.getTime() ? current : newest
  })
})
</script>
