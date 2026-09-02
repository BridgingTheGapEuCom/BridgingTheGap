import type { BadgeContent } from '~/Types/OpenBadges.20'
import type { OpenBadgesDescription20 } from '~/Types/OpenBadgesDescription.20'

export interface OpenBadgesIssuer20 {
  '@context': string
  type: string
  id: string
  name: string
  url: string
  email: string
  description?: string
  image?: string
}

export interface BadgeCriteriaPresentation {
  items: string[]
  narrative: string | null
}

export interface BadgeCredentialViewModel {
  assertion: BadgeContent
  achievement: OpenBadgesDescription20
  issuer: OpenBadgesIssuer20
  recipientName: string
  credentialId: string
  credentialUrl: string
  artworkUrl: string
  issuerLogoUrl: string | null
  issuedOn: string
  verificationLabel: string
  criteria: BadgeCriteriaPresentation
}
