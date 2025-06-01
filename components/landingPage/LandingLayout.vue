<template>
  <div
    :id="`page_${pageId}`"
    class="min-dvh-minus-header flex flex-col justify-between px-5 snap-center"
    :class="{ 'bg-neutral-100': pageId % 2 === 1 }"
  >
    <div
      class="flex flex-col gap-3 mt-2 flex-1"
      :class="{ 'justify-around': lastPage, 'justify-between': !lastPage }"
    >
      <slot />
    </div>
    <a
      v-if="!lastPage"
      class="flex flex-col items-center justify-end cursor-pointer"
      :href="`#page_${pageId + 1}`"
    >
      <div class="border-b border-gray-200 mb-1" />
      <div
        class="text-center mb-1 text-gray-500 dark:text-gray-400"
        style="font-size: min(2dvh, 4.5dvw)"
      >
        Click to scroll down
      </div>
      <SvgIcon
        class="animateBounceOnParentHover text-gray-500 dark:text-gray-400"
        type="mdi"
        :path="mdiArrowDown"
        :size="24"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { mdiArrowDown } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

defineProps({
  pageId: {
    type: Number,
    required: true
  },
  lastPage: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style scoped>
.min-dvh-minus-header {
  min-height: 100dvh;
  max-height: 100dvh;
}

.animateBounceOnParentHover {
  @apply animate-bounce;
}
</style>