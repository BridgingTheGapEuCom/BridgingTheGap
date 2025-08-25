import { model, Schema } from 'mongoose'

/**
 * Describes the visual image for the badge or issuer.
 */
const ImageSchema = new Schema(
  {
    id: { type: String, required: true },
    type: { type: String, required: true, default: 'Image' }
  },
  { _id: false }
)

/**
 * Describes the requirements for earning the badge.
 */
const CriteriaSchema = new Schema(
  {
    type: { type: String, required: true, default: 'Criteria' },
    narrative: { type: String, required: true }
  },
  { _id: false }
)

/**
 * Defines the badge itself (equivalent to "BadgeClass" in OB 2.0).
 */
const AchievementSchema = new Schema(
  {
    id: { type: String, required: true },
    type: { type: String, required: true, default: 'Achievement' },
    name: { type: String, required: true },
    description: { type: String, required: true },
    criteria: { type: CriteriaSchema, required: true },
    image: { type: ImageSchema, required: true }
  },
  { _id: false }
)

/**
 * Describes the person or entity who earned the badge.
 */
const CredentialSubjectSchema = new Schema(
  {
    type: { type: String, default: 'AchievementSubject' },
    // Optional unique ID for the subject (e.g., a Decentralized Identifier)
    id: { type: String },
    name: { type: String },
    email: { type: String },
    achievement: { type: AchievementSchema, required: true }
  },
  { _id: false }
)

/**
 * Defines the cryptographic proof section of the credential.
 */
const ProofSchema = new Schema(
  {
    type: { type: String, required: true },
    created: { type: Date, required: true },
    verificationMethod: { type: String, required: true },
    proofPurpose: { type: String, required: true, enum: ['assertionMethod'] },
    proofValue: { type: String, required: true }
  },
  { _id: false }
)

/**
 * Main schema for a signed Open Badge 3.0 Verifiable Credential document.
 */
const BadgeSchema = new Schema(
  {
    /**
     * Maps the DB field 'context' to JSON '@context'.
     * The '@' is a reserved character in MongoDB keys.
     */
    context: {
      type: [String],
      required: true,
      alias: '@context'
    },
    /**
     * The unique URL identifier for this specific issued badge.
     * Should be unique to prevent duplicate documents.
     */
    id: {
      type: String,
      required: true,
      unique: true
    },
    /**
     * The type of credential, must include 'VerifiableCredential' and 'OpenBadgeCredential'.
     */
    type: {
      type: [String],
      required: true
    },
    /**
     * URL pointing to the issuer's profile JSON.
     */
    issuer: {
      type: String,
      required: true
    },
    /**
     * The date the badge was issued.
     */
    issuanceDate: {
      type: Date,
      required: true
    },
    /**
     * The recipient of the badge and the achievement details.
     */
    credentialSubject: {
      type: CredentialSubjectSchema,
      required: true
    },
    /**
     * The cryptographic signature that makes the badge verifiable.
     */
    proof: {
      type: ProofSchema,
      required: true
    }
  },
  {
    /**
     * Mongoose option to automatically add createdAt and updatedAt timestamps.
     */
    timestamps: true
  }
)

export default model('Badge', BadgeSchema)
