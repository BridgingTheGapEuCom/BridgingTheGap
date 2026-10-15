import Badge20Schema from '~/server/models/badge.schema'
import { createHash } from 'crypto'
import { isRecaptchaValid, verifyRecaptcha } from '~/server/utils/recaptcha'
import { isPlainRecord, isValidEmail } from '~/server/utils/validation'

export default defineEventHandler(async (event) => {
  const body = await readBody<unknown>(event)
  if (!isPlainRecord(body)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid request body' })
  }

  const { email, token } = body

  if (!token) {
    return { status: 400, body: 'recaptcha token is missing' }
  }

  const recaptchaResult = await verifyRecaptcha(token)

  if (!isRecaptchaValid(recaptchaResult)) {
    return { status: 400, body: 'recaptcha verification failed' }
  }

  if (!isValidEmail(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: A valid "email" is required.'
    })
  }

  let badges
  try {
    const salt = 'BridgingTheGap'
    const sha = createHash('sha256').update(`${email}${salt}`).digest('hex')

    badges = await Badge20Schema.aggregate([
      {
        $match: {
          'badgeContent.recipient.identity': `sha256$${sha}`
        }
      },
      {
        $addFields: {
          issuedOnDate: { $toDate: '$badgeContent.issuedOn' }
        }
      },
      {
        $match: {
          issuedOnDate: { $lt: new Date() }
        }
      }
    ])
  } catch (error) {
    console.error('Error fetching badges:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error.'
    })
  }

  if (!badges || badges.length === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found: There are no badges issued for this email address'
    })
  }

  return badges.map((badge) => badge.badgeContent)
})
