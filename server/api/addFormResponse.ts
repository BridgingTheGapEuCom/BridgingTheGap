import { FormResponseSchema } from '~/server/models/form.schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { formBody, token } = body

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
    return { status: 400, body: 'Recaptcha verification failed' }
  }

  if (!formBody.answers.Email) {
    return { status: 400, body: 'Invalid request body: no Email address' }
  }

  if (!formBody.formName) {
    return { status: 400, body: 'Invalid request body: no form name' }
  }

  try {
    const formAnswerExists = await FormResponseSchema.find({
      'answers.Email': formBody.answers.Email,
      formName: formBody.formName
    })

    if (formAnswerExists && formAnswerExists.length > 0) {
      return { status: 409, body: 'Form answer provided already' }
    }

    await new FormResponseSchema(formBody).save()
    return { status: 200 }
  } catch (error) {
    console.log(error)
    return error
  }
})
