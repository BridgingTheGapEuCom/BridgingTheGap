<template>
  <div ref="container" class="flex">
    <Icon class="mr-2" :name="icon" size="28" />
    <div class="input-container">
      <div
        id="select-trigger"
        tabindex="0"
        class="select-trigger flex w-full justify-between"
        @click="isOpen = true"
        @keydown.enter="isOpen = !isOpen"
        @keydown.space.prevent="isOpen = !isOpen"
        @keydown.down.prevent="selectNextOption()"
        @keydown.up.prevent="selectPreviousOption()"
        @focus="onFocus"
        @blur="onBlur"
      >
        <span v-if="selectedLabel" class="selected-text">{{ selectedLabel }}</span>
        <span v-else>&nbsp;</span>
        <Icon
          name="mdi:chevron-right"
          size="20"
          class="mainTransition"
          :class="{ 'rotate-90': isOpen }"
        />
      </div>

      <label class="label h2" :class="{ floating: isOpen || !!model }">
        {{ label }}
      </label>

      <div class="underline" :class="{ active: isOpen || !!model }" />

      <transition name="fade">
        <ul v-if="isOpen" class="dropdown-list">
          <li
            v-for="(option, index) in options || []"
            :key="index"
            class="dropdown-item h5"
            :class="{ 'is-selected': getOptionValue(option) === model }"
            @click="selectOption(option)"
          >
            {{ getOptionLabel(option) }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

type SelectOption = string | { label: string; value: string }

const model = defineModel({ type: String as PropType<string | null>, required: true })
const isOpen = ref(false)
const container = ref<HTMLElement | null>(null)

const props = withDefaults(
  defineProps<{
    label?: string
    icon?: string
    options: SelectOption[]
    autocomplete?: string | null
    name?: string | null
  }>(),
  {
    label: 'Select an option',
    icon: '',
    autocomplete: null,
    name: null
  }
)

const emits = defineEmits<{
  focus: []
  blur: []
}>()

const onBlur = () => {
  isOpen.value = false
  emits('blur')
}

const onFocus = () => {
  isOpen.value = true
  emits('focus')
}

const getOptionValue = (option: SelectOption): string => {
  return typeof option === 'string' ? option : option.value
}

const getOptionLabel = (option: SelectOption): string => {
  return typeof option === 'string' ? option : option.label
}

const selectedLabel = computed(() => {
  if (!props.options) return ''
  const selected = props.options.find((opt) => getOptionValue(opt) === model.value)
  return selected ? getOptionLabel(selected) : ''
})

const selectOption = (option: SelectOption) => {
  model.value = getOptionValue(option)
  isOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (event.target instanceof Node && container.value?.contains(event.target)) {
    return
  }
  isOpen.value = false
}

const selectNextOption = () => {
  if (!props.options || !isOpen.value) return
  const currentIndex = props.options.findIndex((opt) => getOptionValue(opt) === model.value)
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % props.options.length
  model.value = getOptionValue(props.options[nextIndex])
}

const selectPreviousOption = () => {
  if (!props.options || !isOpen.value) return
  const currentIndex = props.options.findIndex((opt) => getOptionValue(opt) === model.value)
  const previousIndex =
    currentIndex === -1
      ? props.options.length - 1
      : (currentIndex - 1 + props.options.length) % props.options.length
  model.value = getOptionValue(props.options[previousIndex])
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped lang="scss">
.input-container {
  @apply relative flex-1;
}

.select-trigger {
  @apply w-full border-b border-neutral-700 p-1 cursor-pointer min-h-[2.25rem] flex items-center;
  background-color: transparent;
  outline: none;
  transition: var(--mainTransition);
}

.selected-text {
  @apply truncate;
}

.label {
  @apply pointer-events-none absolute top-0 left-1;
  font-size: var(--h5);
  transition: var(--mainTransition);
}

.label.floating {
  @apply dark:text-neutral-300;
  top: -1.25rem;
  left: -0.3rem;
  scale: 0.85;
}

.underline {
  @apply w-full bottom-0 absolute left-0 h-0.5 border-b-2 border-neutral-950 dark:border-neutral-50;
  transform: scaleX(0);
  transition: var(--mainTransition);
}

.underline.active {
  transform: scaleX(1);
}

.dropdown-list {
  @apply absolute z-50 w-full mt-1 max-h-60 overflow-y-auto;
  @apply bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700;
  @apply rounded shadow-xl py-1;
  top: 100%;
}

.dropdown-item {
  @apply px-4 py-2 cursor-pointer transition-colors;
  @apply hover:bg-neutral-100 dark:hover:bg-neutral-800;
}

.dropdown-item.is-selected {
  @apply bg-neutral-200 dark:bg-neutral-700 font-bold;
}

/* Scrollbar styling */
.dropdown-list::-webkit-scrollbar {
  width: 6px;
}
.dropdown-list::-webkit-scrollbar-thumb {
  @apply bg-neutral-300 dark:bg-neutral-600 rounded;
}
</style>
