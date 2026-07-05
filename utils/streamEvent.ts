import events from '~/events.json'

type StreamEvent = (typeof events)[number]

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
  return ytUrl.replace(/.*\//, '')
}

export function findStreamEvent(routeParam: string): StreamEvent | undefined {
  return events.find((event) => {
    if (event.YT) {
      const ytId = extractYoutubeVideoId(event.YT)
      if (ytId === routeParam || event.YT.includes(routeParam)) {
        return true
      }
    }

    return slugifyStreamName(event.name) === routeParam
  })
}

export function getStreamDescription(event: StreamEvent, maxLength = 160): string {
  return event.description.replace(/\n+/g, ' ').trim().slice(0, maxLength)
}
