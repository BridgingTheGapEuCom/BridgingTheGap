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
    strict: false,
    collection: 'form_responses'
  }
})
