<template>
  <nav class="event-index" aria-label="Event index">
    <section v-for="group in groups" :key="group.label">
      <h3>{{ group.label }}</h3>
      <ul>
        <li v-for="event in group.events" :key="eventAnchor(event)">
          <a
            :href="`#${eventAnchor(event)}`"
            :aria-current="eventAnchor(event) === activeAnchor ? 'location' : undefined"
            @click.prevent="$emit('navigate', eventAnchor(event))"
          >
            <time :datetime="eventStart(event).toISO() ?? String(event.date)">
              {{ eventStart(event).toFormat('dd') }}
            </time>
            <span>{{ event.name }}</span>
          </a>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script lang="ts" setup>
import type { Event } from '~/Types/Event'
import { eventAnchor, eventStart } from '~/utils/events'

const props = defineProps<{ events: Event[]; activeAnchor?: string }>()
const eventLocale = inject<Readonly<Ref<string>>>(
  'eventLocale',
  computed(() => 'en')
)

defineEmits<{ navigate: [anchor: string] }>()

const groups = computed(() => {
  const grouped = new Map<string, Event[]>()
  for (const event of props.events) {
    const label = eventStart(event).setLocale(eventLocale.value).toFormat('LLLL yyyy')
    grouped.set(label, [...(grouped.get(label) ?? []), event])
  }
  return [...grouped].map(([label, events]) => ({ label, events }))
})
</script>

<style scoped>
.event-index {
  display: grid;
  gap: 1.15rem;
}

h3 {
  margin: 0 0 0.3rem;
  color: var(--editorial-muted);
  font-size: 0.7rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

ul {
  display: grid;
  gap: 0.1rem;
}

a {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  align-items: center;
  min-height: 2.75rem;
  padding: 0.3rem 0.4rem;
  border-left: 2px solid transparent;
  border-radius: 0.2rem;
  color: var(--editorial-muted);
  font-size: 0.76rem;
  line-height: 1.25;
  gap: 0.35rem;
}

a:hover {
  color: var(--editorial-text);
  background: var(--editorial-surface-muted);
}

a[aria-current='location'] {
  border-left-color: var(--editorial-text);
  color: var(--editorial-text);
  background: var(--editorial-surface-muted);
  font-weight: 700;
}

time {
  align-self: start;
  padding-top: 0.1rem;
  color: inherit;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
}
</style>
