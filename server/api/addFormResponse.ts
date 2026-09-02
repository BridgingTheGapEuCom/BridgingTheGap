import { FormResponseSchema } from '~/server/models/form.schema'
import { isRecaptchaValid, verifyRecaptcha } from '~/server/utils/recaptcha'
import { isPlainRecord, isPlainStringRecord, isValidEmail } from '~/server/utils/validation'

export default defineEventHandler(async (event) => {
  const body = await readBody<unknown>(event)
  if (!isPlainRecord(body)) {
    return { status: 400, body: 'Invalid request body' }
  }

  const { formBody, token } = body

  if (!token) {
    return { status: 400, body: 'recaptcha token is missing' }
  }

  const recaptchaResult = await verifyRecaptcha(token)

  if (!isRecaptchaValid(recaptchaResult)) {
    return { status: 400, body: 'Recaptcha verification failed' }
  }

  if (!isPlainRecord(formBody)) {
    return { status: 400, body: 'Invalid request body' }
  }

  const { formName, answers } = formBody

  if (!formName || typeof formName !== 'string' || formName.length > 200) {
    return { status: 400, body: 'Invalid request body: no form name' }
  }

  if (!isPlainStringRecord(answers)) {
    return { status: 400, body: 'Invalid request body: answers must be strings' }
  }

  if (!isValidEmail(answers.Email)) {
    return { status: 400, body: 'Invalid request body: no Email address' }
  }

  try {
    const formAnswerExists = await FormResponseSchema.find({
      'answers.Email': answers.Email,
      formName
    })

    if (formAnswerExists && formAnswerExists.length > 0) {
      return { status: 409, body: 'Form answer provided already' }
    }

    await FormResponseSchema.create({ formName, answers })
    return { status: 200 }
  } catch (error) {
    console.error('Error saving form response:', error)
    return { status: 500, body: 'Error saving form response' }
  }
})
