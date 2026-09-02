<template>
  <section
    :id="anchor"
    :data-event-anchor="anchor"
    class="event-section"
    :class="{ 'is-active': active }"
    :aria-labelledby="`${anchor}-title`"
  >
    <span class="timeline-marker" aria-hidden="true" />
    <header>
      <div class="event-date-block">
        <time :datetime="start.toISO() ?? details.startDate">
          <strong>{{ formatDay(start) }}</strong>
          <span>{{ formatMonth(start) }}</span>
        </time>
      </div>
      <div>
        <div class="event-kicker">
          <span class="event-type">{{ event.eventType }}</span>
          <span>{{ formatDateRange }}</span>
          <span>{{ details.startTime }}–{{ details.endTime }} {{ timezone }}</span>
        </div>
        <h2 :id="`${anchor}-title`">{{ event.name }}</h2>
      </div>
    </header>

    <div class="event-story">
      <img :src="event.img" :alt="`Artwork for ${event.name}`" loading="lazy" />
      <EventsEventDescription :text="event.description" />
    </div>

    <EventsEventSpeakers :event-type="event.eventType" :speakers="event.speakers ?? []" />
    <EventsEventMetadata :event="event" />
  </section>
</template>

<script lang="ts" setup>
import type { Event } from '~/Types/Event'
import { eventDateDetails, eventStart } from '~/utils/events'

const props = defineProps<{ event: Event; anchor: string; active: boolean }>()
const eventLocale = inject<Readonly<Ref<string>>>(
  'eventLocale',
  computed(() => 'en')
)

const details = computed(() => eventDateDetails(props.event))
const start = computed(() => eventStart(props.event))
const timezone = computed(() => details.value.timezone || 'UTC')
const formatDateRange = computed(() => {
  const startLabel = start.value
    .setLocale(eventLocale.value)
    .toLocaleString({ day: 'numeric', month: 'long', year: 'numeric' })
  if (details.value.endDate === details.value.startDate) return startLabel

  const end = start.value.set({
    year: Number(details.value.endDate.slice(0, 4)),
    month: Number(details.value.endDate.slice(5, 7)),
    day: Number(details.value.endDate.slice(8, 10))
  })
  return `${startLabel} – ${end
    .setLocale(eventLocale.value)
    .toLocaleString({ day: 'numeric', month: 'long', year: 'numeric' })}`
})

function formatDay(date: ReturnType<typeof eventStart>) {
  return date.toFormat('dd')
}

function formatMonth(date: ReturnType<typeof eventStart>) {
  return date.setLocale(eventLocale.value).toFormat('LLL').toLocaleUpperCase(eventLocale.value)
}
</script>

<style scoped>
.event-section {
  position: relative;
  display: grid;
  padding: clamp(2.4rem, 5vw, 4.5rem) 0 clamp(3.2rem, 7vw, 6rem) clamp(2rem, 4vw, 3.75rem);
  border-bottom: 1px solid var(--editorial-border);
  scroll-margin-top: 6.5rem;
  gap: 1.5rem;
}

.event-section::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.55rem;
  width: 1px;
  content: '';
  background: var(--editorial-border-strong);
}

.timeline-marker {
  position: absolute;
  z-index: 1;
  top: clamp(3rem, 6vw, 5.1rem);
  left: 0.2rem;
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--editorial-bg);
  border-radius: 50%;
  background: var(--editorial-muted);
  box-shadow: 0 0 0 1px var(--editorial-border-strong);
}

.is-active .timeline-marker {
  width: 0.9rem;
  height: 0.9rem;
  left: 0.125rem;
  background: var(--editorial-text);
}

header {
  display: grid;
  grid-template-columns: 4rem minmax(0, 1fr);
  align-items: start;
  gap: 1.25rem;
}

.event-date-block time {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem 0;
  border-top: 2px solid var(--editorial-text);
  border-bottom: 1px solid var(--editorial-border-strong);
}

.event-date-block strong {
  font-size: 1.55rem;
  line-height: 1;
}

.event-date-block span {
  margin-top: 0.25rem;
  color: var(--editorial-muted);
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.event-kicker {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--editorial-muted);
  font-size: 0.76rem;
  gap: 0.4rem 0.8rem;
}

.event-type {
  padding: 0.18rem 0.45rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 999px;
  color: var(--editorial-text);
  background: var(--editorial-surface-muted);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

h2 {
  max-width: 27ch;
  margin: 0.45rem 0 0;
  font-size: clamp(1.45rem, 2.4vw, 2.25rem);
  line-height: 1.12;
  letter-spacing: -0.02em;
}

.event-story {
  display: flow-root;
  width: 100%;
  max-width: 78ch;
}

.event-story img {
  width: min(100%, 42rem);
  aspect-ratio: 16 / 9;
  border: 1px solid var(--editorial-border);
  border-radius: 0.25rem;
  background: var(--editorial-surface-muted);
  filter: grayscale(1);
  object-fit: contain;
}

.event-story :deep(.event-description) {
  display: block;
}

.event-story :deep(.event-description > * + *) {
  margin-top: 1rem;
}

@media (min-width: 69rem) {
  .event-story img {
    float: left;
    width: calc(48% - 0.75rem);
    margin: 0 1.5rem 1rem 0;
  }
}

@media (max-width: 40rem) {
  .event-section {
    padding-left: 1.45rem;
    scroll-margin-top: 8.75rem;
  }

  header {
    grid-template-columns: 3.4rem minmax(0, 1fr);
    gap: 0.8rem;
  }
}
</style>
