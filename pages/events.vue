<template>
  <div class="events-page">
    <header class="events-heading">
      <p>Events</p>
      <h1>Join the conversation</h1>
      <p>
        Workshops, live discussions, and community sessions on integration architecture and
        Domain-Driven Design.
      </p>
    </header>

    <div v-if="allEvents.length" class="events-reader-layout">
      <EventsEventNavigation
        :events="visibleEvents"
        :active-anchor="activeAnchor"
        :displayed-month="displayedMonth"
        :earliest-date="earliestEventDate"
        :has-earlier-events="hasEarlierEvents"
        :earlier-events-label="earlierEventsLabel"
        @navigate="navigateToEvent"
        @load-earlier="showEarlierEvents"
        @update:displayed-month="updateDisplayedMonth"
      />
      <div class="event-timeline" aria-label="Chronological events">
        <EventsEventSection
          v-for="event in visibleEvents"
          :key="eventAnchor(event)"
          :event="event"
          :anchor="eventAnchor(event)"
          :active="eventAnchor(event) === activeAnchor"
        />
        <section v-if="!visibleEvents.length" class="events-range-empty">
          <h2>Nothing scheduled just yet</h2>
          <p>You can still browse previous workshops, streams, and community sessions.</p>
          <button type="button" @click="showEarlierEvents">{{ earlierEventsLabel }}</button>
        </section>
      </div>
    </div>

    <section v-else class="events-empty" aria-labelledby="events-empty-title">
      <p>Events</p>
      <h2 id="events-empty-title">Nothing scheduled just yet</h2>
      <p>New workshops and live discussions will appear here as soon as they are announced.</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { DateTime } from 'luxon'
import type { Event } from '~/Types/Event'
import eventsData from '~/events.json'
import { chronologicalEvents, eventAnchor, eventStart } from '~/utils/events'

usePageSeo({
  title: 'Events',
  description:
    'Workshops, live discussions, and community events from BridgingTheGap.eu.com on application integration and enterprise architecture.',
  path: '/events'
})

const route = useRoute()
const requestHeaders = useRequestHeaders(['accept-language'])
const eventLocale = useState('event-locale', () => {
  if (import.meta.client) return navigator.language || 'en'
  return (
    String(requestHeaders['accept-language'] || 'en')
      .split(',')[0]
      ?.trim() || 'en'
  )
})
provide('eventLocale', readonly(eventLocale))
const allEvents = chronologicalEvents(eventsData as Event[])
const now = DateTime.utc()
const defaultStart = now.startOf('month')

function resolveHashEvent(hash: string): Event | undefined {
  const stableAnchor = hash.replace(/^#/, '')
  const stableMatch = allEvents.find((event) => eventAnchor(event) === stableAnchor)
  if (stableMatch) return stableMatch

  const legacyMatch = hash.match(/^#event_(\d+)(?:_pre)?$/)
  if (legacyMatch) {
    const requestedIndex = Math.min(Math.max(Number(legacyMatch[1]), 1), allEvents.length) - 1
    return allEvents[requestedIndex]
  }
}

function resolveRequestedEvent(): Event | undefined {
  const hashMatch = resolveHashEvent(route.hash)
  if (hashMatch) return hashMatch

  const eventName = Array.isArray(route.query.eventName)
    ? route.query.eventName[0]
    : route.query.eventName
  return eventName ? allEvents.find((event) => event.name === eventName) : undefined
}

const requestedEvent = resolveRequestedEvent()
const initialRangeStart =
  requestedEvent && eventStart(requestedEvent) < defaultStart
    ? eventStart(requestedEvent).startOf('month')
    : defaultStart
const rangeStart = ref(initialRangeStart)
const earliestEventMonth = allEvents.length
  ? eventStart(allEvents[0]).startOf('month')
  : defaultStart
const earliestEventDate = allEvents.length
  ? eventStart(allEvents[0]).startOf('day').toJSDate()
  : undefined
const visibleEvents = computed(() =>
  allEvents.filter((event) => eventStart(event) >= rangeStart.value)
)
const hasEarlierEvents = computed(() => earliestEventMonth.toMillis() < rangeStart.value.toMillis())
const earlierEventsLabel = computed(() =>
  hasEarlierEvents.value
    ? `Show events before ${rangeStart.value.setLocale(eventLocale.value).toFormat('LLLL yyyy')}`
    : 'All events are shown'
)

function nearestEvent(events: Event[]): Event | undefined {
  return [...events].sort((first, second) => {
    const firstStart = eventStart(first).toMillis()
    const secondStart = eventStart(second).toMillis()
    const firstDistance = Math.abs(firstStart - now.toMillis())
    const secondDistance = Math.abs(secondStart - now.toMillis())
    if (firstDistance !== secondDistance) return firstDistance - secondDistance

    const firstUpcoming = firstStart >= now.toMillis()
    const secondUpcoming = secondStart >= now.toMillis()
    if (firstUpcoming !== secondUpcoming) return firstUpcoming ? -1 : 1
    return firstStart - secondStart
  })[0]
}

const initialEvent = requestedEvent ?? nearestEvent(visibleEvents.value)
const activeAnchor = ref(initialEvent ? eventAnchor(initialEvent) : undefined)
const displayedMonth = ref(monthForEvent(initialEvent))
let observer: IntersectionObserver | undefined
let bodyScrollHandler: (() => void) | undefined
let updateActiveFromScroll: (() => void) | undefined
let isNavigatingToEvent = false
let navigationEndTimer: number | undefined
let removeNavigationEndListener: (() => void) | undefined
let eventSections: HTMLElement[] = []
let isExtendingRange = false
let rangeExtensionEndTimer: number | undefined

function monthForEvent(event?: Event) {
  const start = event ? eventStart(event) : now
  return new Date(Date.UTC(start.year, start.month - 1, 1))
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function refreshEventSections() {
  eventSections = Array.from(document.querySelectorAll<HTMLElement>('[data-event-anchor]'))
  observer?.disconnect()
  eventSections.forEach((section) => observer?.observe(section))
}

async function extendRangeStart(targetMonth: DateTime) {
  const nextRangeStart =
    targetMonth.toMillis() < earliestEventMonth.toMillis()
      ? earliestEventMonth
      : targetMonth.startOf('month')
  if (nextRangeStart.toMillis() >= rangeStart.value.toMillis()) return

  const scrollRoot = document.getElementById('body')
  const positionAnchor = activeAnchor.value
    ? document.getElementById(activeAnchor.value)
    : eventSections[0]
  const anchorTop = positionAnchor?.getBoundingClientRect().top
  const previousScrollBehavior = scrollRoot?.style.scrollBehavior ?? ''
  const previousOverflowAnchor = scrollRoot?.style.overflowAnchor ?? ''

  if (rangeExtensionEndTimer !== undefined) window.clearTimeout(rangeExtensionEndTimer)
  isExtendingRange = true
  if (scrollRoot) {
    scrollRoot.style.scrollBehavior = 'auto'
    scrollRoot.style.overflowAnchor = 'none'
  }

  rangeStart.value = nextRangeStart
  await nextTick()
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
  refreshEventSections()

  if (!activeAnchor.value && visibleEvents.value.length) {
    const nearestVisibleEvent = nearestEvent(visibleEvents.value)
    if (nearestVisibleEvent) setActive(eventAnchor(nearestVisibleEvent), false)
  }

  const updatedAnchor = positionAnchor?.id ? document.getElementById(positionAnchor.id) : undefined
  if (scrollRoot && anchorTop !== undefined && updatedAnchor) {
    scrollRoot.scrollTop += updatedAnchor.getBoundingClientRect().top - anchorTop
  }

  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
  if (scrollRoot) {
    scrollRoot.style.scrollBehavior = previousScrollBehavior
    scrollRoot.style.overflowAnchor = previousOverflowAnchor
  }
  rangeExtensionEndTimer = window.setTimeout(() => {
    isExtendingRange = false
    rangeExtensionEndTimer = undefined
  }, 150)
}

function showEarlierEvents() {
  if (!hasEarlierEvents.value) return
  void extendRangeStart(rangeStart.value.minus({ months: 3 }))
}

async function updateDisplayedMonth(month: Date) {
  const monthStart = DateTime.fromObject(
    { year: month.getUTCFullYear(), month: month.getUTCMonth() + 1, day: 1 },
    { zone: 'utc' }
  )
  await extendRangeStart(monthStart)
  displayedMonth.value = month
}

function setActive(anchor: string, updateUrl = true) {
  if (!visibleEvents.value.some((event) => eventAnchor(event) === anchor)) return
  activeAnchor.value = anchor
  const event = visibleEvents.value.find((candidate) => eventAnchor(candidate) === anchor)
  if (event) displayedMonth.value = monthForEvent(event)

  if (updateUrl && window.location.hash !== `#${anchor}`) {
    window.history.replaceState(
      window.history.state,
      '',
      `${route.fullPath.split('#')[0]}#${anchor}`
    )
  }
}

function navigateToEvent(anchor: string) {
  const target = document.getElementById(anchor)
  if (!target) return

  cancelNavigationEndWait()
  isNavigatingToEvent = true
  setActive(anchor)

  if (prefersReducedMotion()) {
    scrollEventIntoView(target, 'auto')
    requestAnimationFrame(() => requestAnimationFrame(finishEventNavigation))
    return
  }

  const scrollRoot = document.getElementById('body')
  if (!scrollRoot) {
    finishEventNavigation()
    return
  }

  const onScrollEnd = () => finishEventNavigation()
  scrollRoot.addEventListener('scrollend', onScrollEnd, { once: true })
  removeNavigationEndListener = () => scrollRoot.removeEventListener('scrollend', onScrollEnd)
  navigationEndTimer = window.setTimeout(finishEventNavigation, 1600)
  scrollEventIntoView(target, 'smooth')
}

function cancelNavigationEndWait() {
  if (navigationEndTimer !== undefined) window.clearTimeout(navigationEndTimer)
  navigationEndTimer = undefined
  removeNavigationEndListener?.()
  removeNavigationEndListener = undefined
}

function finishEventNavigation() {
  if (!isNavigatingToEvent) return
  isNavigatingToEvent = false
  cancelNavigationEndWait()
  updateActiveFromScroll?.()
}

function scrollEventIntoView(target: HTMLElement, behavior: ScrollBehavior) {
  const scrollRoot = document.getElementById('body')
  if (!scrollRoot) return
  const desiredTop = window.matchMedia('(max-width: 58rem)').matches ? 145 : 95

  if (behavior === 'auto') {
    const previousBehavior = scrollRoot.style.scrollBehavior
    scrollRoot.style.scrollBehavior = 'auto'
    let targetTop = 0
    let offsetElement: HTMLElement | null = target
    while (offsetElement && offsetElement !== scrollRoot) {
      targetTop += offsetElement.offsetTop
      offsetElement = offsetElement.offsetParent as HTMLElement | null
    }
    const positionTarget = () => {
      scrollRoot.scrollTop = targetTop - desiredTop
      scrollRoot.scrollTop +=
        target.getBoundingClientRect().top - scrollRoot.getBoundingClientRect().top - desiredTop
    }
    positionTarget()
    requestAnimationFrame(() => {
      positionTarget()
      requestAnimationFrame(() => {
        scrollRoot.style.scrollBehavior = previousBehavior
      })
    })
    return
  }

  const destination =
    scrollRoot.scrollTop +
    target.getBoundingClientRect().top -
    scrollRoot.getBoundingClientRect().top -
    desiredTop
  scrollRoot.scrollTo({ top: destination, behavior })
}

async function initializeScrolling() {
  const scrollRoot = document.getElementById('body')
  if (!scrollRoot) return

  const fragmentAnchor = decodeURIComponent(window.location.hash.replace(/^#/, ''))
  const stableTarget = document.getElementById(fragmentAnchor)
  const fragmentEvent = resolveHashEvent(window.location.hash)
  const initialAnchor = stableTarget?.dataset.eventAnchor
    ? stableTarget.dataset.eventAnchor
    : fragmentEvent && visibleEvents.value.includes(fragmentEvent)
      ? eventAnchor(fragmentEvent)
      : activeAnchor.value

  if (initialAnchor) setActive(initialAnchor, false)
  await document.fonts.ready
  await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))

  const initialTarget = initialAnchor ? document.getElementById(initialAnchor) : null
  if (initialTarget) scrollEventIntoView(initialTarget, 'auto')
  if (initialAnchor) setActive(initialAnchor)

  updateActiveFromScroll = () => {
    const readingLine =
      scrollRoot.getBoundingClientRect().top +
      (window.matchMedia('(max-width: 58rem)').matches ? 150 : 100)
    const timeline = document.querySelector<HTMLElement>('.event-timeline')
    const timelinePoint = timeline
      ? Math.min(timeline.getBoundingClientRect().left + 24, window.innerWidth - 1)
      : Math.floor(window.innerWidth / 2)
    const sectionAtReadingLine = document
      .elementsFromPoint(timelinePoint, readingLine)
      .map((element) => element.closest<HTMLElement>('[data-event-anchor]'))
      .find((section): section is HTMLElement => Boolean(section))

    if (sectionAtReadingLine?.dataset.eventAnchor) {
      setActive(sectionAtReadingLine.dataset.eventAnchor)
      return
    }

    let currentSection = eventSections[0]

    for (const section of eventSections) {
      if (section.getBoundingClientRect().top > readingLine) break
      currentSection = section
    }

    const anchor = currentSection?.dataset.eventAnchor
    if (anchor) setActive(anchor)
  }

  observer = new IntersectionObserver(
    () => {
      if (!isNavigatingToEvent && !isExtendingRange) updateActiveFromScroll?.()
    },
    {
      root: scrollRoot,
      rootMargin: '-18% 0px -58% 0px',
      threshold: [0, 0.01, 0.35]
    }
  )
  refreshEventSections()

  bodyScrollHandler = () => {
    if (isNavigatingToEvent || isExtendingRange) return

    const atBottom = scrollRoot.scrollTop + scrollRoot.clientHeight >= scrollRoot.scrollHeight - 3
    const lastAnchor = eventSections.at(-1)?.dataset.eventAnchor
    if (atBottom && lastAnchor) {
      setActive(lastAnchor)
      return
    }
    updateActiveFromScroll?.()
  }
  scrollRoot.addEventListener('scroll', bodyScrollHandler, { passive: true })
  updateActiveFromScroll?.()
}

onMounted(() => void initializeScrolling())

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelNavigationEndWait()
  if (rangeExtensionEndTimer !== undefined) window.clearTimeout(rangeExtensionEndTimer)
  const scrollRoot = document.getElementById('body')
  if (scrollRoot && bodyScrollHandler) scrollRoot.removeEventListener('scroll', bodyScrollHandler)
})
</script>

<style scoped>
.events-page {
  width: 100%;
}

.events-heading {
  max-width: 52rem;
  padding: clamp(2.5rem, 5vw, 4.75rem) 0 clamp(2rem, 4vw, 3.5rem);
}

.events-heading > p:first-child,
.events-empty > p:first-child {
  color: var(--editorial-accent);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.events-heading h1 {
  margin: 0.45rem 0 0.75rem;
  font-size: clamp(2.35rem, 4.5vw, 4rem);
  line-height: 1;
  letter-spacing: -0.045em;
}

.events-heading > p:last-child {
  max-width: 60ch;
  color: var(--editorial-muted);
  font-size: 1.05rem;
  line-height: 1.55;
}

.events-reader-layout {
  display: flex;
  align-items: flex-start;
  border-top: 1px solid var(--editorial-border);
  gap: clamp(1.5rem, 3vw, 3.5rem);
}

.event-timeline {
  min-width: 0;
  flex: 1;
}

.events-range-empty {
  max-width: 42rem;
  margin: 3rem 0;
  padding: 2rem;
  border: 1px solid var(--editorial-border);
}

.events-range-empty h2 {
  margin: 0 0 0.5rem;
}

.events-range-empty p {
  color: var(--editorial-muted);
}

.events-range-empty button {
  min-height: 2.75rem;
  margin-top: 1rem;
  padding: 0.55rem 0.9rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.3rem;
  color: var(--editorial-text);
  background: var(--editorial-surface);
  font: inherit;
  font-weight: 700;
}

.events-range-empty button:hover {
  border-color: var(--editorial-text);
  background: var(--editorial-surface-muted);
}

.events-empty {
  max-width: 42rem;
  margin: 4rem auto;
  padding: 2rem;
  border: 1px solid var(--editorial-border);
  text-align: center;
}

.events-empty h2 {
  margin: 0.5rem 0;
}

.events-empty p:last-child {
  color: var(--editorial-muted);
}

@media (max-width: 58rem) {
  .events-reader-layout {
    display: block;
  }
}
</style>
