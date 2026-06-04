export interface OpenBadgesDescription20 {
  '@context': string[]
  id: string
  type: string
  name: string
  description: string
  issuer: string
  image: string
  criteria: Criteria
}

export interface Criteria {
  type: string
  narrative: string
}
