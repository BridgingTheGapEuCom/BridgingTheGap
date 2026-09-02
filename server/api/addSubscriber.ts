import { SubscriptionSchema } from '~/server/models/subscription.schema'
import { isRecaptchaValid, verifyRecaptcha } from '~/server/utils/recaptcha'
import { isErrorWithCode, isPlainRecord, isValidEmail } from '~/server/utils/validation'

export default defineEventHandler(async (event) => {
  const body = await readBody<unknown>(event)
  if (!isPlainRecord(body)) {
    return { status: 400, body: 'Invalid request body' }
  }

  const { email, token } = body

  if (!token) {
    return { status: 400, body: 'recaptcha token is missing' }
  }

  const recaptchaResult = await verifyRecaptcha(token)

  if (!isRecaptchaValid(recaptchaResult)) {
    return { status: 400, body: 'Recaptcha verification failed' }
  }

  if (!isValidEmail(email)) {
    return { status: 400, body: 'Invalid email address' }
  }

  try {
    await SubscriptionSchema.create({ email })
    return { status: 200 }
  } catch (error: unknown) {
    if (isErrorWithCode(error) && error.code === 11000) {
      return { status: 409, body: 'Email already subscribed' }
    }
    console.error('Error adding subscriber:', error)
    return { status: 500, body: 'Error adding subscriber' }
  }
})
