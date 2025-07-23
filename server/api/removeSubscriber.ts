import { SubscriptionSchema } from '~/server/models/subscription.schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, token } = body
  try {
    if (!token) {
      return { status: 400, body: 'recaptcha token is missing' }
    }

    const config = useRuntimeConfig()

    const recaptchaSecret = config.RECAPTCHA_SECRET_KEY
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${token}`,
      {
        method: 'POST'
      }
    )

    const data = await response.json()

    if (!data.success || data.score < 0.5) {
      return { status: 400, body: 'recaptcha verification failed' }
    }

    await SubscriptionSchema.findOneAndDelete({ email })
    return {}
  } catch (error) {
    console.log(error)
    return error
  }
})
