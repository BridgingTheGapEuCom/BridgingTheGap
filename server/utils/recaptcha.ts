const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'
const EXPECTED_ACTION = 'submit_message'
const PRODUCTION_HOSTNAMES = new Set(['bridgingthegap.eu.com', 'www.bridgingthegap.eu.com'])

interface RecaptchaResponse {
  success: boolean
  score?: number
  action?: string
  hostname?: string
}

export async function verifyRecaptcha(token: unknown): Promise<RecaptchaResponse> {
  const config = useRuntimeConfig()
  const secret = config.recaptchaSecretKey

  if (
    typeof token !== 'string' ||
    token.length === 0 ||
    token.length > 4096 ||
    typeof secret !== 'string' ||
    secret.length === 0
  ) {
    return { success: false }
  }

  try {
    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(8000)
    })

    if (!response.ok) return { success: false }

    const data: unknown = await response.json()
    if (!isRecaptchaResponse(data)) return { success: false }

    return data
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error)
    return { success: false }
  }
}

export function isRecaptchaValid(data: RecaptchaResponse): boolean {
  const allowedHostnames = new Set(PRODUCTION_HOSTNAMES)
  if (process.env.NODE_ENV === 'development') {
    allowedHostnames.add('localhost')
    allowedHostnames.add('127.0.0.1')
  }

  return (
    data.success &&
    (data.score ?? 0) >= 0.5 &&
    data.action === EXPECTED_ACTION &&
    typeof data.hostname === 'string' &&
    allowedHostnames.has(data.hostname)
  )
}

function isRecaptchaResponse(value: unknown): value is RecaptchaResponse {
  if (typeof value !== 'object' || value === null || !('success' in value)) return false

  return (
    typeof value.success === 'boolean' &&
    (!('score' in value) || typeof value.score === 'number') &&
    (!('action' in value) || typeof value.action === 'string') &&
    (!('hostname' in value) || typeof value.hostname === 'string')
  )
}
