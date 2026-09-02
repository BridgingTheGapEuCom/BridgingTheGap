<template>
  <ClientOnly>
    <VCalendar
      ref="calendar"
      class="event-calendar"
      :attributes="attributes"
      :is-dark="isDark"
      :locale="eventLocale"
      borderless
      expanded
      transparent
      @dayclick="selectDay"
      @did-move="calendarMoved"
    />
    <template #fallback>
      <p class="calendar-fallback">Loading events calendar…</p>
    </template>
  </ClientOnly>
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

const calendar = ref<{ move: (page: { month: number; year: number }) => Promise<void> } | null>(
  null
)
const darkTheme = inject<Readonly<Ref<boolean>>>(
  'darkTheme',
  computed(() => false)
)
const eventLocale = inject<Readonly<Ref<string>>>(
  'eventLocale',
  computed(() => 'en')
)
const isDark = computed(() => darkTheme.value)

const attributes = computed(() =>
  props.events.map((event) => ({
    key: eventAnchor(event),
    dates: eventStart(event).toJSDate(),
    dot:
      eventAnchor(event) === props.activeAnchor
        ? { class: 'active-event-dot', style: { backgroundColor: 'var(--editorial-text)' } }
        : { style: { backgroundColor: 'var(--editorial-muted)' } },
    popover: { label: event.name, visibility: 'hover-focus' }
  }))
)

watch(
  () => [props.displayedMonth.getUTCFullYear(), props.displayedMonth.getUTCMonth()] as const,
  ([year, month]) => {
    void calendar.value?.move({ month: month + 1, year })
  },
  { immediate: true }
)

watch(calendar, (instance) => {
  if (!instance) return
  void instance.move({
    month: props.displayedMonth.getUTCMonth() + 1,
    year: props.displayedMonth.getUTCFullYear()
  })
})

function selectDay(day: { date: Date }) {
  const selected = props.events.find((event) => {
    const start = eventStart(event)
    return (
      start.year === day.date.getFullYear() &&
      start.month === day.date.getMonth() + 1 &&
      start.day === day.date.getDate()
    )
  })

  if (selected) emit('navigate', eventAnchor(selected))
}

function calendarMoved(
  pages: Array<{ year: number; month: number }> | { year: number; month: number }
) {
  const page = Array.isArray(pages) ? pages[0] : pages
  if (page?.year && page?.month) {
    emit('update:displayed-month', new Date(Date.UTC(page.year, page.month - 1, 1)))
  }
}
</script>

<style scoped>
.calendar-fallback {
  min-height: 17rem;
  padding: 1rem;
  color: var(--editorial-muted);
}

:deep(.event-calendar) {
  --vc-accent-50: var(--editorial-surface-muted);
  --vc-accent-100: var(--editorial-surface-muted);
  --vc-accent-200: var(--editorial-border);
  --vc-accent-300: var(--editorial-border-strong);
  --vc-accent-400: var(--editorial-muted);
  --vc-accent-500: var(--editorial-muted);
  --vc-accent-600: var(--editorial-text);
  --vc-accent-700: var(--editorial-text);
  --vc-accent-800: var(--editorial-text);
  --vc-accent-900: var(--editorial-text);
  width: 100%;
  color: var(--editorial-text);
  background: transparent;
  font-family: inherit;
}

:deep(.vc-header .vc-title),
:deep(.vc-weekday),
:deep(.vc-day-content),
:deep(.vc-arrow) {
  color: var(--editorial-text);
}

:deep(.vc-weekday) {
  color: var(--editorial-muted);
}

:deep(.vc-day-content),
:deep(.vc-arrow) {
  min-width: 2.45rem;
  min-height: 2.45rem;
}

:deep(.vc-dot) {
  width: 5px;
  height: 5px;
  border-radius: 0;
  background: var(--editorial-muted);
}

:deep(.active-event-dot) {
  width: 7px;
  height: 7px;
  background: var(--editorial-text);
}

:deep(button:focus-visible) {
  outline: 3px solid var(--editorial-focus);
  outline-offset: 2px;
}
</style>
