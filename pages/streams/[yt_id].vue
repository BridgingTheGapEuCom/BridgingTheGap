<template>
  <div class="w-full">
    <StreamLayout :transcript="transcript" :name="name" :video-id="videoId" />
  </div>
</template>

<script setup lang="ts">
import events from '../../events.json'
const route = useRoute()

const videoId = ref(route.params.yt_id as string)

const transcript = ref([])
const name = ref('')

const event = events.find((el) => {
  return el.YT?.includes(videoId.value)
})

if (event?.YT) {
  name.value = event.name
}

try {
  const response = await fetch(`/transcripts/${route.params.yt_id}.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch transcript')
  }

  transcript.value = await response.json()
} catch (error) {
  console.error(error)
}
</script>
