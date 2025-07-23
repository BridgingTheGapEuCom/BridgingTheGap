import { google } from 'googleapis'
import { JWT } from 'google-auth-library'
import * as nodemailer from 'nodemailer'
import * as path from 'path'

const SERVICE_ACCOUNT_KEY_FILE: string = path.join(process.cwd(), 'gmail.private.key.json')

const FROM_ADDRESS: string = 'info@bridgingthegap.eu.com'

const SCOPES: string[] = ['https://www.googleapis.com/auth/gmail.send']

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, message, token } = body

  if (!token) {
    return { status: 400, body: 'recaptcha token is missing' }
  }

  const config = useRuntimeConfig()

  const USER_TO_IMPERSONATE: string = config.USER_TO_IMPERSONATE
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

  const RECIPIENT_EMAIL: string = config.RECIPIENT_EMAIL
  const EMAIL_SUBJECT: string = `Website Contact Form ${name ? `from ${name}` : ''}`
  const EMAIL_TEXT_BODY: string = `${name ? `Message from ${name}\n` : ''}${email ? `Email for replies ${email}\n\n` : name ? '\n' : ''}${message}`

  try {
    const auth = new JWT({
      keyFile: SERVICE_ACCOUNT_KEY_FILE,
      scopes: SCOPES,
      subject: USER_TO_IMPERSONATE
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
      to: RECIPIENT_EMAIL,
      subject: EMAIL_SUBJECT,
      text: EMAIL_TEXT_BODY
    }

    const emailContent: string = await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err: Error | null, info: nodemailer.SentMessageInfo) => {
        if (err) {
          reject(err)
        } else {
          // The info.message contains the raw MIME message buffer
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
  } catch (error: any) {
    console.error('Error sending email:', error.message || error)
    if (error.response && error.response.data) {
      console.error('Error details:', error.response.data)
    }
    return { status: 500, body: 'Error sending email' }
  }

  return { status: 200, body: 'Message sent successfully' }
})
