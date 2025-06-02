import { defineMongooseModel } from '#nuxt/mongoose'

export const SubscriptionSchema = defineMongooseModel({
  name: 'Subscriptions',
  schema: {
    email: {
      type: 'string',
      required: true,
      unique: true
    }
  },
  options: {
    timestamps: true
  }
})