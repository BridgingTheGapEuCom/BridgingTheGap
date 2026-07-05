import { defineSitemapEventHandler } from '#imports'
import events from '~/events.json'
import { extractYoutubeVideoId } from '~/utils/streamEvent'

export default defineSitemapEventHandler(() => {
  return events
    .filter((event) => event.YT)
    .map((event) => ({
      loc: `/streams/${extractYoutubeVideoId(event.YT!)}`,
      lastmod: event.date
    }))
})
