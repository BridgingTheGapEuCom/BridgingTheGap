export type SearchContentType = 'article' | 'stream'

export interface SearchResultItem {
  id: string
  type: SearchContentType
  title: string
  description?: string
  topics: string[]
  people: string[]
  primaryPerson?: string
  to: string
  readingMinutes?: number
  durationMinutes?: number
  transcriptMatch?: {
    startTime: number
    excerpt: string
  }
}

export interface SearchResultGroup {
  type: SearchContentType
  label: string
  count: number
  items: SearchResultItem[]
}

export interface SearchResponse {
  query: string
  total: number
  counts: Record<SearchContentType, number>
  groups: SearchResultGroup[]
}

export function formatSearchDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return remainingMinutes ? `${hours}h ${remainingMinutes}m` : `${hours}h`
}
