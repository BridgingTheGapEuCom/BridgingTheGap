import Badge20Model from '~/server/models/badge.schema'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'badge')

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: An "id" is required.'
    })
  }

  let badge
  try {
    badge = await Badge20Model.findOne({
      'badgeContent.id': `https://bridgingthegap.eu.com/api/credentials/${id}`
    }).exec()
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

  return badge.badgeContent
})
