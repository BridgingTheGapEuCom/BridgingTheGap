import events from '~/events.json'
import type { Event } from '~/Types/Event'

export type StreamEvent = Event

const streamEvents = events as unknown as Event[]

export function slugifyStreamName(name: string): string {
  return name
    .replaceAll(' ', '_')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('?', '')
    .replaceAll("'", '')
    .replaceAll('‘', '')
    .replaceAll('’', '')
}

export function extractYoutubeVideoId(ytUrl: string): string {
  const match = ytUrl.match(
    /(?:youtu\.be\/|(?:youtube\.com\/)(?:live\/|watch\?v=|embed\/))([\w-]{11})/
  )
  return match?.[1] ?? ytUrl.replace(/.*\//, '').replace(/[?&].*$/, '')
}

export function isYoutubeVideoId(value: string): boolean {
  return /^[\w-]{11}$/.test(value)
}

export function findStreamEvent(routeParam: string): StreamEvent | undefined {
  return streamEvents.find((event) => {
    if (event.YT) {
      const ytId = extractYoutubeVideoId(event.YT)
      if (ytId === routeParam) {
        return true
      }
    }

    return slugifyStreamName(event.name) === routeParam
  })
}

export function getStreamDescription(event: StreamEvent, maxLength = 160): string {
  return event.description.replace(/\n+/g, ' ').trim().slice(0, maxLength)
}

export function resolveStreamSpeakerPhoto(photo?: string): string | undefined {
  if (!photo || photo.startsWith('/') || /^https?:\/\//.test(photo)) return photo
  return `/streams/${photo}`
}
