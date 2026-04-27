import { Schema, model, type Document } from 'mongoose'

interface IRecipient {
  type: string
  hashed: boolean
  salt?: string
  identity: string
}

interface IVerification {
  type: string
}

interface IAssertion {
  atContext: string // Mapping '@context'
  type: string
  id: string
  recipient: IRecipient
  issuedOn: Date
  verification: IVerification
  badge: string
  image: string
}

interface IAll extends Document {
  fullName: string
  badgeContent: IAssertion
}

const Badge20Schema = new Schema<IAll>(
  {
    fullName: {
      type: String,
      required: true
    },
    badgeContent: {
      atContext: {
        type: String,
        required: true,
        default: 'https://w3id.org/openbadges/v2',
        alias: '@context' // Helps with JSON ld compatibility
      },
      type: {
        type: String,
        required: true,
        enum: ['Assertion'],
        default: 'Assertion'
      },
      id: {
        type: String,
        required: true,
        unique: true
      },
      recipient: {
        type: { type: String, required: true },
        hashed: { type: Boolean, required: true },
        salt: { type: String },
        identity: { type: String, required: true }
      },
      issuedOn: {
        type: Date,
        required: true
      },
      verification: {
        type: { type: String, required: true, default: 'HostedBadge' }
      },
      badge: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
    collection: 'badges20'
  }
)

export default model('Badge20', Badge20Schema)
