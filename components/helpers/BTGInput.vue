<template>
  <div class="flex">
    <Icon :name="icon" size="28" />
    <div class="input-container">
      <input
        :id="`input-${uuid}`"
        :autocomplete="autocomplete"
        :name="name"
        type="text"
        :value="model"
        required="true"
        @input="(event) => (model = event?.target?.value)"
      />
      <label :for="`input-${uuid}`" class="label h2">{{ label }}</label>
      <div class="underline" />
    </div>
  </div>
</template>

<script setup lang="ts">
const uuid = Math.random().toString(36).substring(2, 15)

const model = defineModel()

defineProps({
  label: { type: String, required: false, default: 'Search in articles and events' },
  icon: { type: String, required: false, default: 'mdi:magnify' },
  autocomplete: { type: String, required: false, default: null },
  name: { type: String, required: false, default: null }
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
  @apply w-full bottom-0 absolute left-0 border-b-2 border-neutral-950 dark:border-neutral-50;
  transform: scaleX(0);
  transition: var(--mainTransition);
}

.input-container input[type='text']:focus ~ .underline,
.input-container input[type='text']:valid ~ .underline {
  transform: scaleX(1);
}
</style>
