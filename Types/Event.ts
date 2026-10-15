export interface Event {
  id: number
  name: string
  img: string
  description: string
  date: string | Date
  details: EventDetails
  eventType: EventType
  span?: number
  LN?: string
  YT?: string
  tags: string[]
  durationMinutes?: number
  speakers?: EventSpeaker[]
  summary?: string
  topics?: string[]
}

export interface EventSpeaker {
  name: string
  role?: string
  photo?: string
  isHost?: boolean
}

export interface TranscriptLine {
  startTime: number
  person: string
  text: string
}

export interface EventDetails {
  [key: string]: string | EventDetailsLink | EventDetailsDate
}

export interface EventDetailsLink {
  type: EventDetailTypes
  name: string
  link: string
}

export interface EventDetailsDate {
  type: EventDetailTypes
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  timezone?: string
}

export enum EventDetailTypes {
  Link = 'link',
  Date = 'date'
}

export enum EventType {
  Meetup = 'Meetup',
  Stream = 'Stream',
  Training = 'Training',
  Workshop = 'Workshop'
}
