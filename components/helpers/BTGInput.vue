<template>
  <div class="flex">
    <SvgIcon
      class="pointer-events-none mr-1.5"
      type="mdi"
      :path="icon"
      :size="28"
    />
    <div class="input-container">
      <input
        id="input"
        type="text"
        :value="model"
        required="true"
        @input="(event) => (model = event?.target?.value)"
      >
      <label
        for="input"
        type="text"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="none"
        spellcheck="false"
        class="label h2"
      >{{ label }}</label>
      <div class="underline" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiMagnify } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

const model = defineModel()

defineProps({
  label: { type: String, required: false, default: 'Search in articles' },
  icon: { type: String, required: false, default: mdiMagnify }
})
</script>

<style scoped lang="scss">
.input-container {
  @apply relative flex-1;
}

.input-container input[type='text'] {
  @apply w-full border-b border-neutral-700 p-1;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  @apply pointer-events-none absolute top-0 left-1;
  font-size: var(--h5);
  transition: var(--mainTransition);
}

.input-container input[type='text']:focus ~ .label,
.input-container input[type='text']:valid ~ .label {
  @apply dark:text-neutral-300;
  top: -1.25rem;
  left: -0.3rem;
  scale: 0.85;
}

.input-container .underline {
  @apply bg-neutral-900 dark:bg-neutral-100 w-full bottom-0 absolute left-0 h-0.5;
  transform: scaleX(0);
  transition: var(--mainTransition);
}

.input-container input[type='text']:focus ~ .underline,
.input-container input[type='text']:valid ~ .underline {
  transform: scaleX(1);
}
</style>
