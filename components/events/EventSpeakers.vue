<template>
  <section v-if="speakers.length" class="event-speakers" aria-labelledby="speaker-heading">
    <h3 id="speaker-heading">Speakers</h3>
    <ul>
      <li v-for="speaker in speakers" :key="speaker.name">
        <img
          v-if="speaker.photo"
          :src="photoSource(speaker.photo)"
          :alt="`${speaker.name} portrait`"
        />
        <span v-else class="speaker-initials" aria-hidden="true">{{ initials(speaker.name) }}</span>
        <span>
          <strong>{{ speaker.name }}</strong>
          <small v-if="speaker.role">{{ speaker.role }}</small>
        </span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { EventType, type EventSpeaker } from '~/Types/Event'
import { resolveStreamSpeakerPhoto } from '~/utils/streamEvent'

const props = defineProps<{ speakers: EventSpeaker[]; eventType: EventType }>()

function photoSource(photo: string) {
  return props.eventType === EventType.Stream ? resolveStreamSpeakerPhoto(photo) : photo
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}
</script>

<style scoped>
.event-speakers h3 {
  margin: 0 0 0.65rem;
  color: var(--editorial-muted);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
}

li {
  display: flex;
  align-items: center;
  min-width: 12rem;
  gap: 0.65rem;
}

img,
.speaker-initials {
  width: 2.75rem;
  height: 2.75rem;
  flex: 0 0 2.75rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(1);
}

.speaker-initials {
  display: grid;
  place-items: center;
  color: var(--editorial-text);
  background: var(--editorial-surface-muted);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

li > span:last-child {
  display: flex;
  flex-direction: column;
}

small {
  max-width: 24ch;
  color: var(--editorial-muted);
  font-size: 0.76rem;
  line-height: 1.25;
}
</style>
