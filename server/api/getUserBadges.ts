import BadgeSchema from '~/server/models/badge.schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, token } = body

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

  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: An "email" is required.'
    })
  }

  let badges
  try {
    badges = await BadgeSchema.find({ 'credentialSubject.email': email })
  } catch (error) {
    console.error('Error fetching badges:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error.'
    })
  }

  if (!badges) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found: There are no badges issued for this email address'
    })
  }

  return badges
})
