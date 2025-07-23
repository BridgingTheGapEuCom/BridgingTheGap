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
          :tabindex="currentEventId === pageId ? undefined : '-1'"
          :href="previousPage"
          class="flex flex-col items-center cursor-pointer"
          @click="emitPageChangeEvent(true)"
        >
          <div class="border-b border-gray-200 mt-1" />
          <SvgIcon class="animateBounceOnParentHover" type="mdi" :path="mdiArrowUp" :size="24" />
          <div class="text-center mb-1" style="font-size: min(2dvh, 4.5dvw)">
            Go to previous event
          </div>
        </a>
      </div>
      <template v-else>
        <div></div>
      </template>
      <div class="gap-3 pt-2 overflow-auto" :tabindex="currentEventId === pageId ? '0' : '-1'">
        <slot></slot>
      </div>
      <div
        v-if="!lastPage"
        class="flex flex-col items-center cursor-pointer hover:text-black dark:hover:text-white text-neutral-500 dark:text-neutral-400"
      >
        <a
          :tabindex="currentEventId === pageId ? undefined : '-1'"
          class="flex flex-col items-center justify-end cursor-pointer hover:text-black dark:hover:text-white text-neutral-500 dark:text-neutral-400"
          :href="`#event_${pageId + 1}`"
          @click="emitPageChangeEvent(false)"
        >
          <div class="border-b border-neutral-200 mb-1" />
          <div class="text-center mb-1" style="font-size: min(2dvh, 4.5dvw)">Go to next event</div>
          <SvgIcon class="animateBounceOnParentHover" type="mdi" :path="mdiArrowDown" :size="24" />
        </a>
      </div>
      <template v-else>
        <div></div>
      </template>
    </div>
    <div class="h-16"></div>
  </div>
</template>

<script setup lang="ts">
import { mdiArrowDown, mdiArrowUp } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

const router = useRouter()

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
    required: false
  },
  currentEventId: {
    type: Number,
    required: false,
    default: 0
  }
})

const emit = defineEmits(['pageChange'])

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
