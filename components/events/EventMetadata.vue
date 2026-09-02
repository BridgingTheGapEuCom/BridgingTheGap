<template>
  <div class="event-metadata">
    <div v-if="event.LN || event.YT" class="event-platforms">
      <a
        v-if="event.LN"
        :href="normalizeExternalUrl(event.LN)"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgIcon :path="mdiLinkedin" :size="21" type="mdi" aria-hidden="true" />
        LinkedIn
      </a>
      <a
        v-if="event.YT"
        :href="normalizeExternalUrl(event.YT)"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgIcon :path="mdiYoutube" :size="22" type="mdi" aria-hidden="true" />
        YouTube
      </a>
    </div>

    <dl v-if="details.length">
      <div v-for="detail in details" :key="detail.label">
        <dt>{{ detail.label }}</dt>
        <dd>
          <a
            v-if="detail.link"
            :href="normalizeExternalUrl(detail.link)"
            target="_blank"
            rel="noopener noreferrer"
            >{{ detail.value }}</a
          >
          <span v-else>{{ detail.value }}</span>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import { mdiLinkedin, mdiYoutube } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import type { Event, EventDetailsLink } from '~/Types/Event'
import { EventDetailTypes } from '~/Types/Event'
import { normalizeExternalUrl } from '~/utils/events'

const props = defineProps<{ event: Event }>()

const details = computed(() =>
  Object.entries(props.event.details)
    .filter(([key]) => key !== EventDetailTypes.Date)
    .map(([key, value]) => {
      const label = key
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/^./, (letter) => letter.toUpperCase())

      if (typeof value === 'object' && value.type === EventDetailTypes.Link) {
        const link = value as EventDetailsLink
        return { label, value: link.name, link: link.link }
      }

      return { label, value: String(value) }
    })
)
</script>

<style scoped>
.event-metadata {
  display: grid;
  gap: 1.25rem;
}

.event-platforms {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.event-platforms a {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--editorial-border-strong);
  border-radius: 0.35rem;
  color: var(--editorial-text);
  gap: 0.45rem;
}

.event-platforms a:hover {
  background: var(--editorial-surface-muted);
}

dl {
  display: grid;
  max-width: 66ch;
  gap: 0.65rem;
}

dl > div {
  display: grid;
  grid-template-columns: minmax(7.5rem, 0.3fr) minmax(0, 1fr);
  padding-bottom: 0.65rem;
  border-bottom: 1px solid var(--editorial-border);
  gap: 1rem;
}

dt {
  color: var(--editorial-muted);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

dd a {
  color: var(--editorial-text);
  text-decoration: underline;
  text-underline-offset: 0.18rem;
}

@media (max-width: 36rem) {
  dl > div {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
}
</style>
