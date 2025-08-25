export interface Achievement {
  '@context': string[]
  id: string
  type: string
  name: string
  description: string
  image: Image
  criteria: Criteria
}

export interface Image {
  id: string
  type: string
}

export interface Criteria {
  type: string
  narrative: string
}
