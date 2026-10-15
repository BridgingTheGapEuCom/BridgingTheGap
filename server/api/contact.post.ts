import { google } from 'googleapis'
import { JWT } from 'google-auth-library'
import * as nodemailer from 'nodemailer'
import * as path from 'path'
import fs from 'fs'
import { isRecaptchaValid, verifyRecaptcha } from '~/server/utils/recaptcha'
import {
  getErrorMessage,
  getErrorResponseData,
  isPlainRecord,
  isValidEmail,
  sanitizeString
} from '~/server/utils/validation'

const SERVICE_ACCOUNT_KEY_FILE: string = path.join(process.cwd(), 'gmail.private.key.json')

const FROM_ADDRESS: string = 'info@bridgingthegap.eu.com'

const SCOPES: string[] = ['https://www.googleapis.com/auth/gmail.send']

export default defineEventHandler(async (event) => {
  const body = await readBody<unknown>(event)
  if (!isPlainRecord(body)) {
    return { status: 400, body: 'Invalid request body' }
  }

  const { name, email, message, token } = body

  if (!token) {
    return { status: 400, body: 'recaptcha token is missing' }
  }

  const recaptchaResult = await verifyRecaptcha(token)

  if (!isRecaptchaValid(recaptchaResult)) {
    return { status: 400, body: 'recaptcha verification failed' }
  }

  const sanitizedMessage = sanitizeString(message, 10000)
  if (!sanitizedMessage) {
    return { status: 400, body: 'Message is required' }
  }

  const sanitizedName = name ? sanitizeString(name, 200) : null
  const sanitizedEmail = email ? (isValidEmail(email) ? email.trim() : null) : null

  if (email && !sanitizedEmail) {
    return { status: 400, body: 'Invalid email address' }
  }

  const config = useRuntimeConfig()

  const userToImpersonate: string = config.userToImpersonate
  const recipientEmail: string = config.recipientEmail
  const EMAIL_SUBJECT: string = `Website Contact Form ${sanitizedName ? `from ${sanitizedName}` : ''}`
  const EMAIL_TEXT_BODY: string = `${sanitizedName ? `Message from ${sanitizedName}\n` : ''}${sanitizedEmail ? `Email for replies ${sanitizedEmail}\n\n` : sanitizedName ? '\n' : ''}${sanitizedMessage}`

  try {
    const filePath = path.resolve(SERVICE_ACCOUNT_KEY_FILE)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const credentials = JSON.parse(fileContent)

    const auth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: SCOPES,
      subject: userToImpersonate
    })

    await auth.authorize()

    const gmail = google.gmail({ version: 'v1', auth: auth as never })

    const transporter = nodemailer.createTransport({
      streamTransport: true,
      newline: 'unix',
      buffer: true
    })

    const mailOptions: nodemailer.SendMailOptions = {
      from: FROM_ADDRESS,
      to: recipientEmail,
      subject: EMAIL_SUBJECT,
      text: EMAIL_TEXT_BODY
    }

    const emailContent: string = await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err: Error | null, info: nodemailer.SentMessageInfo) => {
        if (err) {
          reject(err)
        } else {
          resolve(info.message.toString())
        }
      })
    })

    const base64EncodedEmail: string = Buffer.from(emailContent)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: base64EncodedEmail
      }
    })
  } catch (error: unknown) {
    console.error('Error sending email:', getErrorMessage(error))
    const responseData = getErrorResponseData(error)
    if (responseData !== undefined) {
      console.error('Error details:', responseData)
    }
    return { status: 500, body: 'Error sending email' }
  }

  return { status: 200, body: 'Message sent successfully' }
})
