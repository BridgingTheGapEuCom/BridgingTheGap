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
}

export enum EventDetailTypes {
  Link = 'link',
  Date = 'date'
}

export enum EventType {
  Meetup = 'Meetup',
  Stream = 'Stream',
  Training = 'Training'
}
