<template>
  <div>
    <div
      :id="`event_${pageId}${pre ? '_pre' : ''}`"
      class="min-dvh-minus-header w-full flex flex-col justify-between snap-center"
    >
      <div
        v-if="pageId !== 1"
        class="flex flex-col items-center cursor-pointer hover:text-black dark:hover:text-white text-neutral-500 dark:text-neutral-400"
      >
        <a
          :href="previousPage"
          :tabindex="currentEventId === pageId ? undefined : '-1'"
          class="flex flex-col items-center cursor-pointer"
          @click="emitPageChangeEvent(true)"
        >
          <div class="border-b border-gray-200 mt-1" />
          <SvgIcon :path="mdiArrowUp" :size="24" class="animateBounceOnParentHover" type="mdi" />
          <div class="text-center mb-1" style="font-size: min(2dvh, 4.5dvw)">
            Go to previous event
          </div>
        </a>
      </div>
      <template v-else>
        <div />
      </template>
      <div
        ref="event"
        :tabindex="currentEventId === pageId ? '0' : '-1'"
        class="gap-3 pt-2 overflow-auto"
      >
        <slot />
      </div>
      <div
        v-if="!lastPage"
        class="flex flex-col items-center cursor-pointer hover:text-black dark:hover:text-white text-neutral-500 dark:text-neutral-400"
      >
        <a
          :href="`#event_${pageId + 1}`"
          :tabindex="currentEventId === pageId ? undefined : '-1'"
          class="flex flex-col items-center justify-end cursor-pointer hover:text-black dark:hover:text-white text-neutral-500 dark:text-neutral-400"
          @click="emitPageChangeEvent(false)"
        >
          <div class="border-b border-neutral-200 mb-1" />
          <div class="text-center mb-1" style="font-size: min(2dvh, 4.5dvw)">Go to next event</div>
          <SvgIcon :path="mdiArrowDown" :size="24" class="animateBounceOnParentHover" type="mdi" />
        </a>
      </div>
      <template v-else>
        <div />
      </template>
    </div>
    <div class="h-16" />
  </div>
</template>

<script lang="ts" setup>
import { mdiArrowDown, mdiArrowUp } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

const props = defineProps({
  pageId: {
    type: Number,
    required: true
  },
  lastPage: {
    type: Boolean,
    required: false,
    default: false
  },
  pre: {
    type: Boolean,
    required: false,
    default: false
  },
  targetPreviousPage: {
    type: String,
    required: false,
    default: ''
  },
  currentEventId: {
    type: Number,
    required: false,
    default: 0
  }
})

const event = ref<HTMLElement | null>(null)

const emit = defineEmits(['pageChange'])

/**
 * scrollEventToTop
 *
 * A function that resets the scroll position of an event to the top.
 * The function checks if the event has a defined `value` property.
 * If the `value` exists, the `scrollTop` property of the `value` is set to `0`,
 * effectively scrolling it to the top.
 *
 * Note: Ensure `event` is defined and has a `value` property before usage.
 */
const scrollEventToTop = () => {
  if (event.value) {
    event.value.scrollTop = 0
  }
}

defineExpose({
  scrollEventToTop
})

/**
 * A computed property that determines the URL or identifier of the previous page.
 * The value is calculated based on the existence of a `targetPreviousPage` prop.
 *
 * If the `targetPreviousPage` prop is provided, its value is returned. Otherwise,
 * it generates a string identifier based on the current page's `pageId`. The generated
 * identifier follows the format `#event_<id>` where the `id` is decremented by one
 * if the `pre` prop is not set.
 *
 * Dependencies:
 * - props.targetPreviousPage
 * - props.pre
 * - props.pageId
 *
 * @constant {ComputedRef<string>} previousPage - The computed identifier or URL for the previous page.
 */
const previousPage = computed(() => {
  if (props.targetPreviousPage) {
    return props.targetPreviousPage
  } else {
    return `#event_${props.pre ? props.pageId : props.pageId - 1}`
  }
})

const emitPageChangeEvent = (previous: boolean) => {
  if (previous) {
    const targetId = previousPage.value.replace('#event_', '')
    emit('pageChange', targetId)
  } else {
    emit('pageChange', `${props.pageId + 1}`)
  }
}
</script>

<style scoped>
.min-dvh-minus-header {
  min-height: calc(100dvh - 8rem);
  max-height: calc(100dvh - 8rem);
}

.animateBounceOnParentHover {
  @apply animate-bounce;
}
</style>

<style>
html {
  overflow: hidden;
}
</style>
