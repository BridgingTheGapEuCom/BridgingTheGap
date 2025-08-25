<template>
  <div class="w-full flex gap-6 overflow-hidden maxHeight">
    <div class="pr-5 border-r border-gray-200 maxHeight flex-col gap-5 hidden lg:flex w-80">
      <ClientOnly>
        <VDatePicker
          ref="calendarRef"
          v-model="chosenDate"
          :attributes="eventAttributes"
          :is-dark="darkTheme"
          borderless
          color="gray"
          expanded
          transparent
        />
        <template #fallback>
          <p>Loading events calendar...</p>
        </template>
      </ClientOnly>

      <div class="w-full text-center mt-10 flex flex-col">
        <button
          class="mb-5 mx-1 w-full font-bold rounded-xl text-neutral-500 dark:text-neutral-400 cursor-pointer hover:text-black dark:hover:text-white hover:underline"
          @click="goToPreviousMonth"
        >
          Previous Month
        </button>
        <template v-if="chosenMonthList.length > 0">
          <div class="overflow-auto h-full maxHeightEventList">
            <div
              v-for="event in chosenMonthList"
              :key="event.id"
              :class="{
                border: currentEvent?.id === event.id,
                'bg-neutral-100': currentEvent?.id === event.id,
                'dark:bg-neutral-900': currentEvent?.id === event.id
              }"
              class="p-1 mx-1 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl border-neutral-400 my-1"
              tabindex="0"
              @click="setEvent(event)"
            >
              <strong>{{ getEventDatesAsString(event) }}</strong
              >&nbsp;- {{ event.name }}
            </div>
          </div>
        </template>
        <template v-else>
          <div class="text-neutral-500 cursor-default my-10">
            No events scheduled for this months
          </div>
        </template>
        <button
          class="mt-5 mx-1 w-full font-bold rounded-xl text-neutral-500 dark:text-neutral-400 cursor-pointer hover:text-black dark:hover:text-white hover:underline"
          @click="goToNextMonth"
        >
          Next Month
        </button>
      </div>
    </div>
    <div class="w-full overflow-hidden lg:pr-5 smoothScrolling">
      <div
        v-if="calendarOverlay"
        class="w-screen h-screen absolute left-0 top-0 z-20 bg-neutral-400/75"
        @click.stop="calendarOverlay = false"
      >
        <ClientOnly>
          <div class="bg-transparent dark:bg-neutral-900">
            <VDatePicker
              ref="calendarRef"
              v-model="chosenDate"
              :attributes="eventAttributes"
              :is-dark="darkTheme"
              borderless
              color="gray"
              expanded
              transparent
              @click.stop
            />
          </div>
        </ClientOnly>
      </div>
      <div
        v-if="eventsListOverlay"
        class="w-screen h-screen absolute left-0 top-0 z-20 currentBackground"
      >
        <div class="w-full flex justify-center">
          <div
            class="rounded-full border w-12 h-12 my-5 flex justify-center items-center"
            @click="eventsListOverlay = false"
          >
            <SvgIcon :path="mdiClose" :size="32" class="cursor-pointer" type="mdi" />
          </div>
        </div>
        <div class="h-full overflow-auto">
          <div
            v-for="event in events"
            :key="event.id"
            :class="{
              border: currentEvent?.id === event.id,
              'bg-neutral-100': currentEvent?.id === event.id,
              'dark:bg-neutral-900': currentEvent?.id === event.id
            }"
            class="p-1 mx-1 cursor-pointer text-center hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl border-neutral-400 my-1"
            @click="setEventAndCloseEventsList(event)"
          >
            <strong>{{ new Date(event.date).toLocaleDateString() }}</strong
            >&nbsp;- {{ event.name }}
          </div>
        </div>
      </div>
      <div class="lg:hidden sticky top-2 right-0 flex">
        <SvgIcon
          :path="mdiCalendarClock"
          :size="32"
          class="cursor-pointer"
          type="mdi"
          @click="calendarOverlay = true"
        />
        <SvgIcon
          :path="mdiFormatListNumbered"
          :size="32"
          class="cursor-pointer xs:ml-2"
          type="mdi"
          @click="eventsListOverlay = true"
        />
      </div>
      <template v-if="events && events.length > 0 && events[0].id >= 0">
        <div v-for="(event, index) of events" :key="event.id" class="w-full">
          <EventsLayout
            v-if="visiblePre === event.id"
            :current-event-id="currentEvent?.id && currentEvent?.id > 0 ? currentEvent?.id + 1 : -1"
            :page-id="index"
            :pre="true"
            :tabindex="currentEvent?.id === event.id ? undefined : '-1'"
            @page-change="pageChange"
          >
            <div class="flex flex-col w-full justify-center items-center text-center">
              <div class="flex flex-col self-center text-center">
                <div class="text-2xl">There are no events scheduled for this date</div>
              </div>
            </div>
          </EventsLayout>
          <EventsLayout
            :current-event-id="currentEvent?.id && currentEvent?.id > 0 ? currentEvent?.id + 1 : -1"
            :last-page="index === events.length - 1"
            :page-id="index + 1"
            :tabindex="currentEvent?.id === event.id ? undefined : '-1'"
            @page-change="pageChange"
          >
            <div class="flex flex-col justify-center">
              <div class="text-center text-2xl font-bold mb-5">
                {{ event.name }} - {{ new Date(event.date).toLocaleDateString() }}
              </div>
              <div>
                <img
                  :alt="`${event.name} event image`"
                  :class="{ grayscale: isOldEvent(event) }"
                  :src="event.img"
                  class="lg:w-2/3 lg:float-left lg:mr-5 px-1 lg:px-0 mb-1 m-auto"
                />
                <ul class="lg:mt-0 mt-3">
                  <li
                    v-for="detailKey of Object.keys(event.details)"
                    v-if="event.details"
                    :key="event.name"
                  >
                    <div class="my-1">
                      <b>{{ camelToFlat(detailKey) }}:</b>&nbsp;
                      <template v-if="typeof event.details[detailKey] === 'object'">
                        <template v-if="event.details[detailKey].type === EventDetailTypes.Link">
                          <a
                            :href="(event.details[detailKey] as EventDetailsLink).link"
                            :tabindex="currentEvent?.id === event.id ? undefined : '-1'"
                            class="link cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-gray-50"
                            target="_blank"
                            >{{ (event.details[detailKey] as EventDetailsLink).name }}</a
                          >
                        </template>
                        <template v-if="event.details[detailKey].type === EventDetailTypes.Date">
                          <template
                            v-if="
                              (event.details[detailKey] as EventDetailsDate).startDate ===
                              (event.details[detailKey] as EventDetailsDate).endDate
                            "
                          >
                            <span
                              >{{
                                DateTime.fromISO(
                                  (event.details[detailKey] as EventDetailsDate).startDate,
                                  { zone: 'cet' }
                                )
                                  .toJSDate()
                                  .toLocaleDateString()
                              }}&nbsp;{{
                                (event.details[detailKey] as EventDetailsDate).startTime
                              }}&nbsp;-&nbsp;{{
                                (event.details[detailKey] as EventDetailsDate).endTime
                              }}
                              {{
                                DateTime.fromISO(
                                  (event.details[detailKey] as EventDetailsDate).startDate,
                                  { zone: 'CET' }
                                )?.zoneName?.toUpperCase()
                              }}
                            </span>
                          </template>
                          <template v-else>
                            <span
                              >{{
                                DateTime.fromISO(
                                  `${(event.details[detailKey] as EventDetailsDate).startDate}T${(event.details[detailKey] as EventDetailsDate).startTime}`,
                                  { zone: 'CET' }
                                )
                                  .toJSDate()
                                  .toLocaleString()
                              }}
                              {{
                                DateTime.fromISO(
                                  (event.details[detailKey] as EventDetailsDate).startDate,
                                  { zone: 'CET' }
                                )?.zoneName?.toUpperCase()
                              }}&nbsp;-&nbsp;{{
                                DateTime.fromISO(
                                  `${(event.details[detailKey] as EventDetailsDate).endDate}T${(event.details[detailKey] as EventDetailsDate).endTime}`,
                                  { zone: 'CET' }
                                )
                                  .toJSDate()
                                  .toLocaleString()
                              }}</span
                            >
                          </template>
                        </template>
                      </template>
                      <template v-else>
                        <span>{{ event.details[detailKey] }}</span>
                      </template>
                    </div>
                  </li>
                </ul>
                <pre
                  class="text-wrap font-normal mt-5"
                  style="font-family: 'Atkinson Hyperlegible', sans-serif"
                  >{{ event.description }}</pre
                >
                <div v-if="event.LN || event.YT" class="flex flex-row justify-center my-5">
                  <div v-if="event.LN" class="flex items-center">
                    <a
                      :href="event.LN"
                      :tabindex="currentEvent?.id === event.id ? undefined : '-1'"
                      class="link ml-2"
                      target="_blank"
                    >
                      <SvgIcon :path="mdiLinkedin" :size="46" class="my-0" type="mdi" />
                    </a>
                  </div>
                  <div v-if="event.YT" class="flex items-center">
                    <a
                      :href="event.YT"
                      :tabindex="currentEvent?.id === event.id ? undefined : '-1'"
                      class="link ml-2"
                      target="_blank"
                    >
                      <SvgIcon :path="mdiYoutube" :size="46" class="my-0" type="mdi" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </EventsLayout>
        </div>
        <div>
          <EventsLayout
            v-if="visiblePre === events.length + 1"
            :current-event-id="currentEvent?.id && currentEvent?.id > 0 ? currentEvent?.id + 1 : -1"
            :last-page="true"
            :page-id="events.length + 1"
            :pre="true"
            :target-previous-page="`#event_${events.length}`"
            @page-change="pageChange"
          >
            <div class="flex flex-col w-full justify-center items-center text-center h-full">
              <div class="flex flex-col self-center text-center">
                <div class="text-2xl">There are no events scheduled for this date</div>
              </div>
            </div>
          </EventsLayout>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
import jsonEvents from '../events.json'
import { type Event, type EventDetailsDate, type EventDetailsLink, EventDetailTypes, EventType } from '~/Types/Event'
import { mdiCalendarClock, mdiClose, mdiFormatListNumbered, mdiLinkedin, mdiYoutube } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import { DateTime } from 'luxon'
import type { AttributeConfig } from '~/Types/VCalendar'

/**
 * A ref to the calendar component instance.
 * @type {Ref<null>}
 */
const calendarRef = ref(null)

/**
 * Injected boolean to determine if the dark theme is active.
 * @type {boolean}
 */
const darkTheme = inject('darkTheme', false)
/**
 * The currently selected date in the calendar.
 * @type {Ref<Date>}
 */
const chosenDate = ref(new Date())
/**
 * The currently selected event object.
 * @type {Ref<Event | undefined>}
 */
const currentEvent: Ref<Event | undefined> = ref(undefined)
/**
 * An array of all event objects, loaded from a JSON file.
 * @type {Ref<Array<Event>>}
 */
const events: Ref<Array<Event>> = ref(jsonEvents as Array<Event>)
/**
 * Controls the visibility of the "no events scheduled" message for a specific date.
 * @type {Ref<number>}
 */
const visiblePre = ref(-1)

const router = useRouter()
const route = useRoute()

/**
 * A boolean flag to control the visibility of the calendar overlay on smaller screens.
 * @type {Ref<boolean>}
 */
const calendarOverlay = ref(false)
/**
 * A boolean flag to control the visibility of the events list overlay on smaller screens.
 * @type {Ref<boolean>}
 */
const eventsListOverlay = ref(false)

/**
 * Lifecycle hook that runs after the component has been mounted.
 * It sorts events, assigns IDs, and sets the initial event based on the URL hash or the closest upcoming date.
 */
onMounted(() => {
  // Sort events chronologically
  events.value = events.value.sort((a: Event, b: Event) => {
    const aDate = DateTime.fromISO(a.date as string)
    const bDate = DateTime.fromISO(b.date as string)

    return aDate > bDate ? 1 : -1
  })

  // Assign a unique ID to each event
  events.value.map((el, index) => {
    el.id = index
    if (!(el.date instanceof Date)) {
      el.date = DateTime.fromISO(el.date, {
        zone: 'cet'
      }).toJSDate()
    }
    return el
  })

  // Set the initial event based on the URL hash
  if (route.hash) {
    let id = route.hash.replace('#event_', '')
    if (id.includes('_pre')) {
      id = id.replace('_pre', '')
      if (Number(id) > events.value.length) {
        id = `${events.value.length}`
      }
      router.replace({ hash: `#event_${id}` })
    }

    if (Number(id) > events.value.length) {
      id = `${events.value.length}`
    }

    nextTick(() => {
      currentEvent.value = events.value.find((el) => {
        return `${el.id}` === `${Number(id) - 1}`
      })
      if (currentEvent.value) {
        chosenDate.value = new Date(currentEvent.value.date)
      }
    })
  } else {
    // If no hash is present, find the closest upcoming event
    const closestEvent = findClosestUpcomingEventByDate(events.value)
    if (closestEvent) {
      currentEvent.value = closestEvent.event
      chosenDate.value = new Date(closestEvent.event.date)
    }
  }
})

/**
 * A computed property that returns a list of events for the currently chosen month and year.
 * @returns {Array<Event>} An array of events for the selected month.
 */
const chosenMonthList = computed(() => {
  const clone = []
  for (let i = 0; i <= events.value.length; i++) {
    const event = events.value[i]
    if (event) {
      const date = new Date(event.date)
      if (
        chosenDate.value &&
        chosenDate.value.getMonth() === date.getMonth() &&
        chosenDate.value.getFullYear() === date.getFullYear()
      ) {
        clone.push(event)
      }
    }
  }

  return clone
})

/**
 * Converts a camelCase formatted string into a flat, capitalized sentence.
 *
 * This function takes a camelCase string, splits it into individual words
 * wherever a lowercase letter is followed by an uppercase letter, and then
 * capitalizes the first letter of each word. The words are joined together
 * with spaces to form a flat sentence.
 *
 * @param {string} camel - The camelCase formatted string to be converted.
 * @returns {string} The formatted string as a space-separated, capitalized sentence.
 */
const camelToFlat = (camel: string) => {
  const camelCase = camel.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ')

  let flat = ''

  camelCase.forEach((word) => {
    flat = flat + word.charAt(0).toUpperCase() + word.slice(1) + ' '
  })
  return flat
}

/**
 * Evaluates if a given event has occurred in the past.
 *
 * This function checks the date of the provided event and determines if it
 * is older than the current date. The event date is extended by one day
 * before performing the comparison to account for the specific time constraints.
 *
 * @param {Event} event - The event object containing the date to be evaluated. The date property must be a valid JavaScript Date object.
 * @returns {boolean} - Returns true if the event occurred in the past, otherwise false.
 */
const isOldEvent = (event: Event) => {
  let date = DateTime.fromJSDate(event.date)
  date = date.plus({ days: 1 })

  return date.toJSDate() < new Date()
}

/**
 * Navigates to the first event of the previous month.
 * If no event is found, it sets the date to the first day of the previous month.
 */
const goToPreviousMonth = () => {
  if (chosenDate.value) {
    const currentMonth = new Date(chosenDate.value).getMonth()
    const currentYear = new Date(chosenDate.value).getFullYear()
    const targetMonth = currentMonth === 1 ? 12 : currentMonth - 1
    const targetYear = currentMonth === 1 ? currentYear - 1 : currentYear

    for (let i = 0; i < events.value.length; i++) {
      const event = events.value[i]
      const date = new Date(event.date)
      if (date.getFullYear() === targetYear && date.getMonth() === targetMonth) {
        setEvent(event)
        return
      }
    }

    // If no event is found, just move the calendar to the previous month
    const tempDate = new Date(chosenDate.value)
    tempDate.setMonth(tempDate.getMonth() - 1)
    tempDate.setDate(1)
    chosenDate.value = tempDate
  }
}

/**
 * Navigates to the first event of the next month.
 * Handles cases where no event is found, showing a "pre" view instead.
 */
const goToNextMonth = () => {
  if (chosenDate.value) {
    const currentMonth = new Date(chosenDate.value).getMonth()
    const currentYear = new Date(chosenDate.value).getFullYear()
    const targetMonth = currentMonth === 12 ? 1 : currentMonth + 1
    const targetYear = currentMonth === 12 ? currentYear + 1 : currentYear

    for (let i = 0; i < events.value.length; i++) {
      const event = events.value[i]
      const date = new Date(event.date)
      if (date.getFullYear() === targetYear && date.getMonth() === targetMonth) {
        setEvent(event)
        return
      }
    }

    const tempDate = new Date(chosenDate.value)
    tempDate.setMonth(tempDate.getMonth() + 1)
    tempDate.setDate(1)
    const previous = findClosestUpcomingEventByDate(events.value, tempDate, true)

    if (!previous) {
      // No more events, show the 'pre' layout after the last event
      chosenDate.value = tempDate
      visiblePre.value = events.value.length + 1
      nextTick(() => {
        router.replace({ hash: `#event_${visiblePre.value}_pre` })
        window.document.getElementById(`event_${visiblePre.value}_pre`)?.scrollIntoView()
      })
    } else {
      // Show the 'pre' layout for the first event
      chosenDate.value = tempDate
      visiblePre.value = 0
      nextTick(() => {
        router.replace({ hash: `#event_${visiblePre.value}_pre` })
        window.document.getElementById(`event_${visiblePre.value}_pre`)?.scrollIntoView()
      })
    }
  }
}

/**
 * Handles the page change based on the given identifier. This method updates the
 * `currentEvent` value by finding an event matching the identifier adjusted by a
 * specific offset. If a matching event is found, it also updates the `chosenDate`
 * value to the date of the corresponding event.
 *
 * @param {string} id - The identifier used to locate the corresponding event. Generally
 *                      adjusted by a numerical offset for the search.
 */
const pageChange = (id: string) => {
  currentEvent.value = events.value.find((el) => {
    return `${el.id}` === `${Number(id) - 1}`
  })

  if (currentEvent.value) {
    chosenDate.value = new Date(currentEvent.value.date)
  }
}

/**
 * Updates the current event and sets the chosen date based on the provided event.
 * @param {Event} event - The event object to set as the current one.
 */
const setEvent = (event: Event) => {
  currentEvent.value = event
  chosenDate.value = new Date(event.date)
}

/**
 * Sets the current event and closes the events list overlay (for mobile view).
 * @param {Event} event - The event to set.
 */
const setEventAndCloseEventsList = (event: Event) => {
  setEvent(event)
  eventsListOverlay.value = false
}

/**
 * Formats the event's date or date range into a string.
 * @param {Event} event - The event object.
 * @returns {string} The formatted date string.
 */
const getEventDatesAsString = (event: Event) => {
  const date = new Date(event.date)
  let text = `${date.toLocaleDateString()}`
  if (event.span) {
    date.setDate(date.getDate() + (event.span - 1))
    text = `${text} - ${date.toLocaleDateString()}`
  }

  return text
}

/**
 * Finds the closest upcoming or previous event from a list based on a reference date.
 * @param {Array<Event>} events - An array of event objects.
 * @param {Date} [date] - The reference date. Defaults to the current date.
 * @param {boolean} [previous] - If true, finds the closest previous event instead of the next one.
 * @returns {{event: Event, exactMatch: boolean}|null} An object with the event and match info, or null if no event is found.
 */
const findClosestUpcomingEventByDate = (events: Array<Event>, date?: Date, previous?: boolean) => {
  const today = new Date()
  const givenDateUTC = date
    ? Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    : Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())

  let inTheSpan = undefined

  for (let i = 0; i < events.length; i++) {
    const event = events[i]
    const eventDate = new Date(event.date)
    const eventDateUTC = Date.UTC(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate()
    )

    // Exact date match
    if (eventDateUTC === givenDateUTC) {
      if (previous) {
        return {
          event: i !== 0 ? events[i - 1] : events[i],
          exactMatch: false
        }
      } else {
        return {
          event: event,
          exactMatch: true
        }
      }
    }

    // Check if the given date is within a multi-day event span
    if (event.span) {
      const tempDate = new Date(eventDateUTC)
      tempDate.setDate(tempDate.getDate() + (event.span - 1))
      if (
        eventDateUTC < givenDateUTC &&
        Date.UTC(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate()) >= givenDateUTC
      ) {
        inTheSpan = event
      }
    }

    // Found the next event after the given date
    if (eventDateUTC > givenDateUTC) {
      if (previous) {
        return {
          event: i !== 0 ? events[i - 1] : events[i],
          exactMatch: false
        }
      } else {
        if (inTheSpan) {
          return {
            event: inTheSpan,
            exactMatch: true
          }
        }
        return {
          event: event,
          exactMatch: false
        }
      }
    }
  }

  return null
}

/**
 * Computed property to transform events into attributes for the V-Calendar component.
 * This is used to highlight event dates on the calendar.
 * @returns {Array<AttributeConfig>} An array of attribute configurations for V-Calendar.
 */
const eventAttributes = computed(() => {
  return events.value.map((event) => {
    const attribute: Partial<AttributeConfig> = {
      key: event.id,
      popover: {
        label: event.name, // Text to show on hover
        visibility: 'hover'
      },
      highlight: {
        color: 'red',
        fillMode: 'light'
      }
    }

    if (event.eventType === EventType.Meetup) {
      attribute.highlight = {
        color: 'blue',
        fillMode: 'light'
      }
    } else if (event.eventType === EventType.Stream) {
      attribute.highlight = {
        color: 'green',
        fillMode: 'light'
      }
    } else if (event.eventType === EventType.Training) {
      attribute.highlight = {
        color: 'orange',
        fillMode: 'light'
      }
    }

    if (event.span) {
      attribute.dates = [{ start: new Date(event.date), span: event.span }]
    } else {
      attribute.dates = [{ start: new Date(event.date), span: 1 }]
    }
    return attribute
  })
})

/**
 * Watches for changes in the `chosenDate` and updates the `currentEvent` accordingly.
 * It also updates the URL hash to reflect the selected event.
 */
watch(chosenDate, (newDate) => {
  if (newDate) {
    const closest = findClosestUpcomingEventByDate(events.value, newDate)
    if (closest && closest.exactMatch) {
      setTimeout(() => {
        visiblePre.value = -1
      }, 500)
      currentEvent.value = closest.event
    } else if (!closest) {
      // If no upcoming event is found, set it to the very last event in the list
      currentEvent.value = events.value[events.value.length - 1]
    } else if (closest && !closest.exactMatch) {
      visiblePre.value = closest.event.id
      nextTick(() => {
        router.replace({ hash: `#event_${visiblePre.value}_pre` })
        window.document.getElementById(`event_${visiblePre.value}_pre`)?.scrollIntoView()
      })
    }
    calendarOverlay.value = false
    if (calendarRef.value) {
      calendarRef.value.move(newDate)
    }
  }
})

/**
 * Watches for changes in the `currentEvent` and scrolls the corresponding element into view.
 * Updates the URL hash.
 */
watch(currentEvent, (newEvent) => {
  if (newEvent) {
    nextTick(() => {
      router.replace({ hash: `#event_${Number(newEvent.id) + 1}` })
      window.document.getElementById(`event_${Number(newEvent.id) + 1}`)?.scrollIntoView()
    })
  }
})
</script>

<style scoped>
.maxHeight {
  max-height: calc(100dvh - 8rem);
}

.maxHeightEventList {
  max-height: calc(100dvh - 32rem);
}

.smoothScrolling {
  scroll-behavior: var(--scroll-behavior);
}
</style>
