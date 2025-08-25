import BadgeSchema from '~/server/models/badge.schema'

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event)

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: An "id" is required.'
    })
  }

  let badge
  try {
    badge = await BadgeSchema.findById(id)
  } catch (error) {
    console.error('Error fetching badge:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error.'
    })
  }

  if (!badge) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found: A badge with the provided ID could not be found.'
    })
  }

  return badge
})
