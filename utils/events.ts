import { DateTime } from 'luxon'
import type { Event, EventDetailsDate } from '~/Types/Event'
import { EventDetailTypes } from '~/Types/Event'

export function eventDateDetails(event: Event): EventDetailsDate {
  return event.details[EventDetailTypes.Date] as EventDetailsDate
}

export function eventStart(event: Event): DateTime {
  const details = eventDateDetails(event)
  const startTime = details.startTime.padStart(5, '0')

  return DateTime.fromISO(`${details.startDate}T${startTime}`, {
    zone: details.timezone || 'UTC'
  })
}

export function eventAnchor(event: Event): string {
  const titleSlug = event.name
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  return `event-${eventDateDetails(event).startDate}-${titleSlug || 'untitled'}`
}

export function chronologicalEvents(events: Event[]): Event[] {
  return [...events].sort((first, second) => {
    const difference = eventStart(first).toMillis() - eventStart(second).toMillis()
    return difference || first.name.localeCompare(second.name)
  })
}

export function normalizeExternalUrl(url: string): string {
  const trimmed = url.trim()
  if (/^[a-z][a-z\d+.-]*:/i.test(trimmed)) return trimmed
  if (trimmed.startsWith('//')) return `https:${trimmed}`
  return `https://${trimmed}`
}
