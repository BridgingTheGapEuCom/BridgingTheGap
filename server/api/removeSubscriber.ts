import { SubscriptionSchema } from '~/server/models/subscription.schema'
import { isRecaptchaValid, verifyRecaptcha } from '~/server/utils/recaptcha'
import { isValidEmail } from '~/server/utils/validation'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
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
    await SubscriptionSchema.findOneAndDelete({ email })
    return { status: 200 }
  } catch (error) {
    console.error('Error removing subscriber:', error)
    return { status: 500, body: 'Error removing subscriber' }
  }
})
