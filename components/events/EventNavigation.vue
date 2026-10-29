<template>
  <aside class="desktop-event-navigation" aria-label="Browse events">
    <EventsEventCalendar
      :events="events"
      :active-anchor="activeAnchor"
      :displayed-month="displayedMonth"
      :earliest-date="earliestDate"
      @navigate="$emit('navigate', $event)"
      @update:displayed-month="$emit('update:displayed-month', $event)"
    />
    <div class="event-type-filter" role="group" aria-label="Filter by event type">
      <button
        v-for="option in eventTypeOptions"
        :key="option.value"
        type="button"
        :aria-pressed="selectedEventType === option.value"
        @click="$emit('update:event-type', option.value)"
      >
        {{ option.label }} <span>{{ option.count }}</span>
      </button>
    </div>
    <button
      class="load-earlier-events"
      type="button"
      :disabled="!hasEarlierEvents"
      @click="$emit('load-earlier')"
    >
      {{ earlierEventsLabel }}
    </button>
    <div class="desktop-index-scroll">
      <EventsEventIndex
        :events="events"
        :active-anchor="activeAnchor"
        @navigate="$emit('navigate', $event)"
      />
    </div>
  </aside>

  <details class="mobile-event-navigation" @toggle="onToggle">
    <summary>
      <span>
        <small>Current event</small>
        <strong>{{ activeLabel }}</strong>
      </span>
      <span aria-hidden="true">{{ mobileOpen ? 'Close' : 'Browse' }}</span>
    </summary>
    <div class="mobile-navigation-content">
      <EventsEventCalendar
        :events="events"
        :active-anchor="activeAnchor"
        :displayed-month="displayedMonth"
        :earliest-date="earliestDate"
        @navigate="navigateMobile"
        @update:displayed-month="$emit('update:displayed-month', $event)"
      />
      <div class="event-type-filter" role="group" aria-label="Filter by event type">
        <button
          v-for="option in eventTypeOptions"
          :key="option.value"
          type="button"
          :aria-pressed="selectedEventType === option.value"
          @click="$emit('update:event-type', option.value)"
        >
          {{ option.label }} <span>{{ option.count }}</span>
        </button>
      </div>
      <div class="mobile-event-index">
        <button
          class="load-earlier-events"
          type="button"
          :disabled="!hasEarlierEvents"
          @click="$emit('load-earlier')"
        >
          {{ earlierEventsLabel }}
        </button>
        <EventsEventIndex
          :events="events"
          :active-anchor="activeAnchor"
          @navigate="navigateMobile"
        />
      </div>
    </div>
  </details>
</template>

<script lang="ts" setup>
import { EventType, type Event } from '~/Types/Event'
import { eventAnchor, eventStart } from '~/utils/events'

type EventTypeFilter = EventType | 'all'

const props = defineProps<{
  events: Event[]
  allEvents: Event[]
  selectedEventType: EventTypeFilter
  activeAnchor?: string
  displayedMonth: Date
  earliestDate?: Date
  hasEarlierEvents: boolean
  earlierEventsLabel: string
}>()

const emit = defineEmits<{
  navigate: [anchor: string]
  'load-earlier': []
  'update:displayed-month': [month: Date]
  'update:event-type': [eventType: EventTypeFilter]
}>()

const mobileOpen = ref(false)
const eventLocale = inject<Readonly<Ref<string>>>(
  'eventLocale',
  computed(() => 'en')
)
const activeEvent = computed(() =>
  props.events.find((event) => eventAnchor(event) === props.activeAnchor)
)
const eventTypeOptions = computed(() => [
  { label: 'All', value: 'all' as const, count: props.allEvents.length },
  ...Object.values(EventType).map((eventType) => ({
    label: eventType === EventType.Training ? 'Training' : `${eventType}s`,
    value: eventType,
    count: props.allEvents.filter((event) => event.eventType === eventType).length
  }))
])
const activeLabel = computed(() => {
  if (!activeEvent.value) return 'Browse the event calendar'
  return `${eventStart(activeEvent.value).setLocale(eventLocale.value).toFormat('d LLL')} — ${activeEvent.value.name}`
})

function onToggle(event: globalThis.Event) {
  mobileOpen.value = (event.currentTarget as HTMLDetailsElement).open
}

function navigateMobile(anchor: string) {
  mobileOpen.value = false
  const details = document.querySelector<HTMLDetailsElement>('.mobile-event-navigation')
  if (details) details.open = false
  emit('navigate', anchor)
}
</script>

<style scoped>
.desktop-event-navigation {
  position: sticky;
  top: 5.75rem;
  display: flex;
  width: 17rem;
  max-height: calc(100dvh - 6.75rem);
  flex: 0 0 17rem;
  flex-direction: column;
  padding: 0.75rem 1rem 0.75rem 0;
  border-right: 1px solid var(--editorial-border);
  gap: 0.9rem;
}

.desktop-index-scroll {
  min-height: 0;
  padding: 0 0.4rem 0.4rem;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.event-type-filter {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.3rem;
}

.event-type-filter button {
  min-height: 2.65rem;
  padding: 0.35rem 0.55rem;
  border: 1px solid transparent;
  border-radius: 0.45rem;
  color: var(--editorial-text);
  background: transparent;
  font: inherit;
  font-size: 0.76rem;
  font-weight: 500;
  text-align: left;
}

.event-type-filter button:first-child {
  grid-column: 1 / -1;
}

.event-type-filter button span {
  margin-left: 0.2rem;
  color: var(--editorial-muted);
  font-size: 0.7rem;
}

.event-type-filter button:hover {
  background: var(--editorial-surface-muted);
}

.event-type-filter button[aria-pressed='true'] {
  border-color: var(--editorial-text);
  background: var(--editorial-surface-muted);
  font-weight: 700;
}

.event-type-filter button[aria-pressed='true'] span {
  color: currentColor;
}

.event-type-filter button:focus-visible {
  outline: 3px solid var(--editorial-focus);
  outline-offset: 2px;
}

.load-earlier-events {
  min-height: 2.75rem;
  padding: 0.5rem 0.65rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.3rem;
  color: var(--editorial-text);
  background: var(--editorial-surface);
  font: inherit;
  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.25;
  text-align: left;
}

.load-earlier-events:hover:not(:disabled) {
  border-color: var(--editorial-text);
  background: var(--editorial-surface-muted);
}

.load-earlier-events:disabled {
  color: var(--editorial-muted);
  cursor: default;
}

.mobile-event-navigation {
  display: none;
}

@media (max-width: 58rem) {
  .desktop-event-navigation {
    display: none;
  }

  .mobile-event-navigation {
    position: sticky;
    z-index: 20;
    top: 4.75rem;
    display: block;
    width: 100%;
    border-bottom: 1px solid var(--editorial-border-strong);
    background: color-mix(in srgb, var(--editorial-bg) 96%, transparent);
    backdrop-filter: blur(12px);
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 3.4rem;
    padding: 0.45rem 1rem;
    cursor: pointer;
    gap: 1rem;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary > span:first-child {
    display: flex;
    min-width: 0;
    flex-direction: column;
  }

  summary small {
    color: var(--editorial-muted);
    font-size: 0.64rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  summary strong {
    overflow: hidden;
    font-size: 0.8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  summary > span:last-child {
    color: var(--editorial-muted);
    font-size: 0.74rem;
    font-weight: 700;
  }

  .mobile-navigation-content {
    display: grid;
    grid-template-columns: minmax(17rem, 0.8fr) minmax(18rem, 1.2fr);
    max-height: calc(100dvh - 8.15rem);
    padding: 0.75rem 1rem 1rem;
    border-top: 1px solid var(--editorial-border);
    background: var(--editorial-surface);
    gap: 1rem;
    overflow: auto;
    overscroll-behavior: contain;
  }

  .mobile-navigation-content > .event-type-filter {
    grid-row: 2;
    grid-column: 1;
    align-self: start;
  }

  .mobile-event-index {
    display: grid;
    grid-row: 1 / span 2;
    grid-column: 2;
    align-content: start;
    gap: 0.9rem;
  }
}

@media (max-width: 42rem) {
  .mobile-navigation-content {
    grid-template-columns: 1fr;
  }

  .event-type-filter {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-row: auto;
    grid-column: auto;
  }

  .event-type-filter button:first-child {
    grid-column: auto;
  }

  .mobile-event-index {
    grid-row: auto;
    grid-column: auto;
  }
}
</style>
