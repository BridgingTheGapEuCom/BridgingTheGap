export interface OpenBadges20 {
  fullName: string
  badgeContent: BadgeContent
}

export interface BadgeContent {
  '@context': string
  type: string
  id: string
  recipient: Recipient
  issuedOn: string
  verification: Verification
  badge: string
  image: string
}

export interface Recipient {
  type: string
  hashed: boolean
  salt: string
  identity: string
}

export interface Verification {
  type: string
}
