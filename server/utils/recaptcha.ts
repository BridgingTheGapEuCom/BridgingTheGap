interface RecaptchaResponse {
  success: boolean
  score?: number
}

export async function verifyRecaptcha(token: string): Promise<RecaptchaResponse> {
  const config = useRuntimeConfig()

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${config.RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: 'POST' }
  )

  return response.json()
}

export function isRecaptchaValid(data: RecaptchaResponse): boolean {
  return data.success && (data.score ?? 0) >= 0.5
}
