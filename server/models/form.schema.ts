import { defineMongooseModel } from '#nuxt/mongoose'

export const FormResponseSchema = defineMongooseModel({
  name: 'FormResponse',
  schema: {
    formName: {
      type: String,
      required: true
    },
    answers: {
      type: Object,
      required: true
    }
  },
  options: {
    timestamps: true,
    strict: true,
    collection: 'form_responses'
  }
})
