import { SubscriptionSchema } from '~/server/models/subscription.schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    await new SubscriptionSchema(body).save()
    return {}
  } catch (error) {
    console.log(error)
    return error
  }
})