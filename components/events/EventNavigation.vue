<template>
  <aside class="desktop-event-navigation" aria-label="Browse events">
    <EventsEventCalendar
      :events="events"
      :active-anchor="activeAnchor"
      :displayed-month="displayedMonth"
      @navigate="$emit('navigate', $event)"
      @update:displayed-month="$emit('update:displayed-month', $event)"
    />
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
        @navigate="navigateMobile"
        @update:displayed-month="$emit('update:displayed-month', $event)"
      />
      <EventsEventIndex :events="events" :active-anchor="activeAnchor" @navigate="navigateMobile" />
    </div>
  </details>
</template>

<script lang="ts" setup>
import type { Event } from '~/Types/Event'
import { eventAnchor, eventStart } from '~/utils/events'

const props = defineProps<{
  events: Event[]
  activeAnchor?: string
  displayedMonth: Date
}>()

const emit = defineEmits<{
  navigate: [anchor: string]
  'update:displayed-month': [month: Date]
}>()

const mobileOpen = ref(false)
const eventLocale = inject<Readonly<Ref<string>>>(
  'eventLocale',
  computed(() => 'en')
)
const activeEvent = computed(() =>
  props.events.find((event) => eventAnchor(event) === props.activeAnchor)
)
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
  padding-right: 0.25rem;
  overflow-y: auto;
  overscroll-behavior: contain;
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
}

@media (max-width: 42rem) {
  .mobile-navigation-content {
    grid-template-columns: 1fr;
  }
}
</style>
