export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export function isValidEmail(email: unknown): email is string {
  return typeof email === 'string' && EMAIL_REGEX.test(email)
}

export function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function isPlainStringRecord(value: unknown): value is Record<string, string> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return false
  }

  const entries = Object.entries(value)
  return (
    entries.length > 0 &&
    entries.length <= 50 &&
    entries.every(
      ([key, entry]) =>
        key.length > 0 && key.length <= 100 && typeof entry === 'string' && entry.length <= 5000
    )
  )
}

export function isErrorWithCode(error: unknown): error is { code: number } {
  return (
    typeof error === 'object' && error !== null && 'code' in error && typeof error.code === 'number'
  )
}

export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}

export function getErrorResponseData(error: unknown): unknown {
  if (
    typeof error !== 'object' ||
    error === null ||
    !('response' in error) ||
    typeof error.response !== 'object' ||
    error.response === null ||
    !('data' in error.response)
  ) {
    return undefined
  }

  return error.response.data
}

export const BADGE_ID_REGEX =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|[A-Za-z0-9_-]{8})$/i

export function isValidBadgeId(id: unknown): id is string {
  return typeof id === 'string' && BADGE_ID_REGEX.test(id)
}

export function sanitizeString(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') {
    return null
  }

  const trimmed = value.trim()
  if (!trimmed || trimmed.length > maxLength) {
    return null
  }

  return trimmed
}
