import type { BadgeCriteriaPresentation } from '~/Types/BadgeCredential'
import type { OpenBadgesDescription20 } from '~/Types/OpenBadgesDescription.20'

const UUID_PATTERN = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}'
const OPAQUE_BADGE_ID_PATTERN = '[A-Za-z0-9_-]{8}'
const BADGE_ID_PATTERN = `(?:${UUID_PATTERN}|${OPAQUE_BADGE_ID_PATTERN})`
const BADGE_ID_REGEX = new RegExp(`^${BADGE_ID_PATTERN}$`, 'i')
const BADGE_CREDENTIAL_PATH_REGEX = new RegExp(`/api/credentials/(${BADGE_ID_PATTERN})/?$`, 'i')

export function extractBadgeId(value: unknown): string | null {
  if (typeof value !== 'string') return null

  let decodedValue: string
  try {
    decodedValue = decodeURIComponent(value.trim())
  } catch {
    return null
  }

  if (BADGE_ID_REGEX.test(decodedValue)) return decodedValue

  try {
    const credentialUrl = new URL(decodedValue, 'https://bridgingthegap.eu.com')
    return credentialUrl.pathname.match(BADGE_CREDENTIAL_PATH_REGEX)?.[1] ?? null
  } catch {
    return null
  }
}

const CRITERIA_BY_ACHIEVEMENT: Record<string, string[]> = {
  'btg-strategic_integration_design_with_DDD.json': [
    'Attended all four live course modules.',
    'Collaborated on the group exercises.',
    'Applied Domain-Driven Design strategic tools to integration architecture and interoperability design.'
  ],
  'btg-strategic_integration_design_with_DDD_dryrun.json': [
    'Attended all four live course modules.',
    'Collaborated on the group exercises.',
    'Applied Domain-Driven Design strategic tools to integration architecture and interoperability design.',
    'Reviewed the course material early and provided feedback on its content, exercises, and delivery.'
  ],
  'btg-polishdreamin-integration_design_with_ddd.json': [
    "Attended the live Integration Design with DDD workshop at Polish Dreamin'26.",
    'Collaborated on the group exercises.',
    'Applied Domain-Driven Design strategic tools to application integration.'
  ],
  'ddd-btgonline-2025-integration.json': [
    'Attended the live DDD for Enterprise Application Integration workshop.',
    'Collaborated on the Lucidspark exercises.',
    'Provided feedback for the DDD Europe 2025 presentation.',
    'Applied Domain-Driven Design to enterprise application integration.'
  ],
  'ddd-europe-2025-integration.json': [
    'Attended and completed the DDD for Enterprise Application Integration workshop at DDD Europe 2025.'
  ]
}

function descriptorFileName(id: string): string {
  try {
    return new URL(id, 'https://bridgingthegap.eu.com').pathname.split('/').at(-1) ?? ''
  } catch {
    return id.split('/').at(-1) ?? ''
  }
}

export function getBadgeCriteria(achievement: OpenBadgesDescription20): BadgeCriteriaPresentation {
  const items = CRITERIA_BY_ACHIEVEMENT[descriptorFileName(achievement.id)]

  if (items) return { items, narrative: null }

  return {
    items: [],
    narrative: achievement.criteria?.narrative?.trim() || achievement.description
  }
}
