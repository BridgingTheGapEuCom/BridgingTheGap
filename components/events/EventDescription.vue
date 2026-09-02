<template>
  <div class="event-description">
    <template v-for="(block, blockIndex) in blocks" :key="blockIndex">
      <ul v-if="block.type === 'list'">
        <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
          <template v-for="(part, partIndex) in tokenize(item)" :key="partIndex">
            <a
              v-if="part.url"
              :href="normalizeExternalUrl(part.url)"
              target="_blank"
              rel="noopener noreferrer"
              >{{ part.text }}</a
            >
            <template v-else>{{ part.text }}</template>
          </template>
        </li>
      </ul>
      <p v-else>
        <template v-for="(part, partIndex) in tokenize(block.text)" :key="partIndex">
          <a
            v-if="part.url"
            :href="normalizeExternalUrl(part.url)"
            target="_blank"
            rel="noopener noreferrer"
            >{{ part.text }}</a
          >
          <template v-else>{{ part.text }}</template>
        </template>
      </p>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { normalizeExternalUrl } from '~/utils/events'

type DescriptionBlock = { type: 'paragraph'; text: string } | { type: 'list'; items: string[] }

const props = defineProps<{ text: string }>()

const blocks = computed<DescriptionBlock[]>(() => {
  const result: DescriptionBlock[] = []
  const chunks = props.text.replace(/\r\n/g, '\n').split(/\n\s*\n/)

  for (const chunk of chunks) {
    if (!chunk) continue
    const lines = chunk.split('\n')
    const isList = lines.every((line) => /^\s*[•*-]\s*/.test(line))
    result.push(
      isList
        ? { type: 'list', items: lines.map((line) => line.replace(/^\s*[•*-]\s*/, '')) }
        : { type: 'paragraph', text: chunk }
    )
  }

  return result
})

function tokenize(text: string) {
  const parts: Array<{ text: string; url?: string }> = []
  const urlPattern = /(?:https?:\/\/|www\.|(?:[a-z\d-]+\.)+[a-z]{2,}\/)[^\s]+/gi
  let lastIndex = 0

  for (const match of text.matchAll(urlPattern)) {
    const index = match.index ?? 0
    if (index > lastIndex) parts.push({ text: text.slice(lastIndex, index) })

    const rawUrl = match[0]
    const trailing = rawUrl.match(/[),.!?:;]+$/)?.[0] ?? ''
    const cleanUrl = trailing ? rawUrl.slice(0, -trailing.length) : rawUrl
    parts.push({ text: cleanUrl, url: cleanUrl })
    if (trailing) parts.push({ text: trailing })
    lastIndex = index + rawUrl.length
  }

  if (lastIndex < text.length) parts.push({ text: text.slice(lastIndex) })
  return parts
}
</script>

<style scoped>
.event-description {
  display: grid;
  max-width: 78ch;
  gap: 1rem;
  line-height: 1.68;
}

p {
  margin: 0;
  white-space: pre-line;
}

ul {
  padding-left: 1.4rem;
  list-style: disc;
}

a {
  color: var(--editorial-text);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.18rem;
  overflow-wrap: anywhere;
}
</style>
