<template>
  <div
    class="min-dvh-minus-header justify-start screenHeight overflow-hidden w-full h-full max-w-screen-xl flex flex-col flex-grow"
  >
    <div>
      <NuxtLink
        class="flex link items-end text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
        to="/"
      >
        <SvgIcon :path="mdiArrowLeft" :size="24" type="mdi" />
        <div class="ml-1">Back to articles list</div>
      </NuxtLink>
    </div>
    <h1 class="mt-3 mb-2.5">
      {{ name }}
    </h1>

    <ClientOnly>
      <div v-if="showVideo" class="flex justify-center items-center">
        <div
          :style="`max-width:${videoWidth}px; max-height:${videoHeight}px; min-width:${videoWidth}px; min-height:${videoHeight}px`"
        >
          <ScriptYouTubePlayer ref="youtube" :video-id="videoId" @ready="onReady">
            <template #awaitingLoad>
              <div
                class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]"
              >
                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                  <path
                    d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                    fill="#f00"
                  />
                  <path d="M 45,24 27,14 27,34" fill="#fff" />
                </svg>
              </div>
            </template>
          </ScriptYouTubePlayer>
        </div>
      </div>
    </ClientOnly>

    <div
      v-if="transcript.length > 0"
      class="flex justify-center items-center mt-2 gap-2 cursor-pointer hover:text-black dark:hover:text-white text-neutral-500"
      @click="showVideo = !showVideo"
    >
      <SvgIcon :path="showVideo ? mdiVideoBoxOff : mdiVideoBox" :size="24" type="mdi" />
      <span>{{ showVideo ? 'Show full transcript' : 'Show video' }}</span>
    </div>
    <div
      :class="{ 'overflow-auto': !showVideo, 'overflow-hidden': showVideo }"
      class="transcript-container"
    >
      <div class="transcript-list">
        <div class="w-full">
          <div
            :class="{
              'grid-cols-[min-content_min-content_1fr]': !showVideo,
              'grid-cols-[min-content_1fr]': showVideo
            }"
            class="grid"
          >
            <template v-for="(line, index) in transcript" :key="index">
              <div v-if="!showVideo" class="transcript-line-full">
                {{ secondsToDate(line.startTime) }}
              </div>
              <div
                :ref="(el) => setLineRef(el, index)"
                :class="{
                  active: index === currentIndex && showVideo,
                  'transcript-line': showVideo,
                  'transcript-line-full': !showVideo
                }"
                class="pr-2 whitespace-nowrap"
              >
                <p
                  :class="{ 'transcript-person': showVideo, 'transcript-person-full': !showVideo }"
                  class="transcript-person"
                >
                  {{ line.person }}:
                </p>
              </div>
              <div
                :class="{
                  active: index === currentIndex && showVideo,
                  'transcript-line': showVideo,
                  'transcript-line-full': !showVideo
                }"
              >
                <p class="text-wrap">{{ line.text }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiArrowLeft, mdiVideoBox, mdiVideoBoxOff } from '@mdi/js'
import { ref, watch } from 'vue'

/**
 * @property {string} videoId - The unique identifier for the video.
 * @property {string} name - The name or title of the video.
 * @property {object} transcript - The transcript object containing timing and text data.
 */
const props = defineProps({
  videoId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  transcript: {
    type: Array,
    required: false,
    default() {
      return []
    }
  }
})

/**
 * A reactive reference to a YouTube player instance. Initially set to `null`.
 *
 * This reference is used to manage and interact with a YouTube player on the
 * web page, allowing developers to control playback, change settings, and handle
 * events through the player API.
 *
 * @type {Object|null}
 */
const youtube = ref(null)
/**
 * A reference to the player element in the Vue component's template.
 * Initially set to null, it will be assigned a DOM element when the component mounts.
 */
const player = ref(null)
/**
 * Holds the current time in seconds. This variable is a reference that can be updated to reflect the elapsed time or other timing-related data.
 */
const currentTime = ref(0)
/**
 * Variable representing the interval between progress updates.
 * Set to `null` if no interval is currently defined.
 */
let progressInterval = null

const showVideo = ref(true)

/**
 * Tracks the current index in a list or array, initially set to -1 indicating no selection.
 *
 * @type {Ref<UnwrapRef<number>, UnwrapRef<number> | number>}
 */
const currentIndex = ref(-1)
/**
 * An array reference to hold line data. Initially empty, can be populated with references to line objects.
 */
const lineRefs = ref([])

/**
 * videoHeightThreshold is a constant value that represents the minimum acceptable height for videos in pixels.
 * This threshold helps in ensuring that videos meet certain dimensions to avoid issues with playback or display.
 * Setting this threshold can be particularly useful in applications where uniformity in video size is required,
 * such as in video sharing platforms, educational content delivery systems, or multimedia presentations.
 *
 * @type {number}
 * @constant
 */
const videoHeightThreshold = 380

/**
 * Computes the optimal video height based on the window's inner height and width.
 * Adjusts height for screens with a maximum width of 1280 pixels to maintain a 16:9 aspect ratio.
 * Caps the height at a maximum value of 720 pixels.
 *
 * @type {ComputedProperty}
 * @returns {number} - The calculated video height
 */
const videoHeight = computed(() => {
  if (!window?.innerHeight) {
    return 0
  }

  let height = window.innerHeight - videoHeightThreshold
  if (window.innerWidth <= 1280) {
    height = ((window.innerWidth - 10) * 9) / 16
  }

  if (height > 720) {
    return 720
  }

  return height
})

/**
 * Computed property that calculates the optimal width for a video based on the current window size and height threshold.
 *
 * The calculation first determines an initial width using the formula: ((window.innerHeight - videoHeightThreshold) * 16) / 9.
 * If the calculated width is greater than 1280 pixels, it returns 1280 pixels. Otherwise, it checks if the window's inner width
 * is less than or equal to 1280 pixels and returns that value minus 10 pixels in such cases. For other widths, it simply returns
 * the calculated width.
 *
 * @return {number} The computed video width based on the current window size and conditions.
 */
const videoWidth = computed(() => {
  if (!window?.innerWidth || !window?.innerHeight) {
    return 0
  }

  let width = ((window.innerHeight - videoHeightThreshold) * 16) / 9

  if (window.innerWidth <= 1280) {
    return Math.round(window.innerWidth - 10)
  }

  if (width > 1280) {
    return 1280
  } else {
    return Math.round(width)
  }
})

/**
 * Sets a reference to a DOM element at the specified index within the lineRefs array.
 *
 * @function
 * @param {HTMLElement|null} el - The DOM element to set as a reference. If null or undefined, no action is taken.
 * @param {number} index - The index in the lineRefs array where the reference should be stored.
 */
const setLineRef = (el, index) => {
  if (el) {
    lineRefs.value[index] = el
  }
}

const secondsToDate = (seconds) => {
  const date = new Date(null)
  date.setSeconds(seconds)
  return date.toISOString().slice(11, 19)
}

/**
 * A lifecycle hook that is called before the component is updated.
 */
onBeforeUpdate(() => {
  lineRefs.value = []
})

/**
 * A lifecycle hook that is called when the component is ready.
 */
const onReady = () => {
  player.value = youtube.value.player
  trackProgress()
}

/**
 * Tracks and updates the current playback progress of a media player at regular intervals.
 *
 * This function clears any existing interval that tracks progress and sets up a new interval
 * to frequently update the `currentTime` variable based on the player's current playback time.
 * It ensures that the `getCurrentTime` method from the player is invoked, if available, to fetch the
 * most recent playback progress.
 *
 * The interval is set to 250 milliseconds for consistent tracking of progress.
 */
const trackProgress = () => {
  if (progressInterval) clearInterval(progressInterval)
  progressInterval = setInterval(() => {
    if (player.value && typeof player.value.getCurrentTime === 'function') {
      currentTime.value = player.value.getCurrentTime()
    }
  }, 250)
}

/**
 * Watches for changes in the `currentTime` variable and updates the `currentIndex` accordingly.
 */
watch(currentTime, (newTime) => {
  let newIndex = props.transcript.findIndex((line, index) => {
    const nextLine = props.transcript[index + 1]
    return newTime >= line.startTime && (!nextLine || newTime < nextLine.startTime)
  })

  if (newIndex !== -1 && newIndex !== currentIndex.value) {
    currentIndex.value = newIndex
  }
})

/**
 * Watches for changes in the `currentIndex` variable and scrolls to the corresponding line in the transcript.
 */
watch(currentIndex, (newIndex) => {
  const activeElement = lineRefs.value[newIndex]

  if (activeElement) {
    activeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
})
</script>

<style lang="scss" scoped>
.min-dvh-minus-header {
  min-height: calc(100dvh - 7rem);
  max-height: calc(100dvh - 7rem);
}

.transcript-container {
  @apply mt-2;
}

.transcript-list {
  @apply text-neutral-500;
}

.transcript-line {
  @apply py-2 px-4 leading-5 m-0 whitespace-normal opacity-70;
  transition: var(--transcriptTransition);
}

.transcript-line.active {
  @apply text-black dark:text-white bg-neutral-100 dark:bg-neutral-900 opacity-100;
}

.active > .transcript-person {
  @apply text-neutral-800 dark:text-neutral-200;
}

.transcript-person {
  @apply text-neutral-400;
}

.transcript-person-full {
  @apply text-black dark:text-white;
}

.transcript-line-full {
  @apply py-2 px-4 leading-5 m-0 whitespace-normal text-black dark:text-white;
}
</style>
