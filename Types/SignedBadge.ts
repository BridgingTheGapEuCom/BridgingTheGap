import { model, Schema } from 'mongoose'

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

const ImageSchema = new Schema(
  {
    id: { type: String, required: true },
    type: { type: String, required: true, default: 'Image' }
  },
  { _id: false }
)

const CriteriaSchema = new Schema(
  {
    type: { type: String, required: true, default: 'Criteria' },
    narrative: { type: String, required: true }
  },
  { _id: false }
)

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

const CredentialSubjectSchema = new Schema(
  {
    type: { type: String, default: 'AchievementSubject' },
    id: { type: String }, // Optional DID or other identifier
    name: { type: String },
    achievement: { type: AchievementSchema, required: true }
  },
  { _id: false }
)

const SignedBadgeSchema = new Schema(
  {
    context: {
      type: [String],
      required: true,
      alias: '@context' // Maps the DB field 'context' to JSON '@context'
    },
    id: {
      type: String,
      required: true,
      unique: true // Each issued badge should have a unique ID
    },
    type: {
      type: [String],
      required: true
    },
    issuer: {
      type: String,
      required: true
    },
    issuanceDate: {
      type: Date,
      required: true
    },
    credentialSubject: {
      type: CredentialSubjectSchema,
      required: true
    },
    proof: {
      type: ProofSchema,
      required: true
    }
  },
  {
    timestamps: true // Adds createdAt and updatedAt timestamps
  }
)

export default model('SignedBadge', SignedBadgeSchema)
