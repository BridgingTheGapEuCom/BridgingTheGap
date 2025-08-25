/**
 * Describes the cryptographic proof attached to the credential.
 */
export interface Proof {
  type: string
  created: string // ISO 8601 timestamp
  verificationMethod: string // URL to the public key
  proofPurpose: 'assertionMethod'
  proofValue: string // The base64-encoded signature
}

/**
 * Represents a visual image, like a badge logo or issuer logo.
 */
export interface Image {
  id: string // URL to the image file
  type: 'Image'
}

/**
 * Describes the requirements for earning the badge.
 */
export interface Criteria {
  type: 'Criteria'
  narrative: string // A human-readable description of the criteria
}

/**
 * Defines the badge itself (what was "BadgeClass" in OB 2.0).
 */
export interface Achievement {
  id: string // URL to this achievement's definition
  type: 'Achievement'
  name: string
  description: string
  criteria: Criteria
  image: Image
}

/**
 * Describes the person or entity who earned the badge.
 */
export interface CredentialSubject {
  type?: 'AchievementSubject'
  id?: string // Optional unique ID for the subject (e.g., a DID)
  name?: string
  achievement: Achievement
}

/**
 * The main interface for a signed Open Badge 3.0 Verifiable Credential.
 */
export interface SignedBadge {
  '@context': string[]
  id: string // URL to this specific credential
  type: ['VerifiableCredential', 'OpenBadgeCredential']
  issuer: string // URL to the issuer's profile JSON
  issuanceDate: string // ISO 8601 timestamp
  credentialSubject: CredentialSubject
  proof: Proof
}
