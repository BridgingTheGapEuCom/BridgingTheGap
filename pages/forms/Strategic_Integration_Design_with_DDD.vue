<template>
  <div class="justify-between w-full articleLinkHeight max-w-screen-xl flex flex-col flex-grow">
    <h2 class="text-center">{{ formName }} application form</h2>
    <div
      v-if="formSubmitted"
      class="absolute flex items-center justify-center w-screen h-screen top-0 left-0 bg-gray-500/75 transition-opacity z-10"
    >
      <div
        class="bg-white dark:bg-neutral-950 rounded-lg p-8 flex flex-col justify-center text-center"
      >
        <div>
          {{ submitResponse }}
        </div>
        <button
          :class="{
            'hover:bg-neutral-100': submitResponse,
            'dark:hover:bg-neutral-700': submitResponse
          }"
          :tabindex="submitResponse ? '0' : '-1'"
          class="py-2.5 mt-5 self-center cursor-pointer w-32 bg-neutral-50 rounded-lg border border-neutral-200 dark:bg-neutral-800 dark:text-white text-neutral-600 dark:border-neutral-600"
          type="submit"
          @click="formSubmitted = false"
        >
          OK
        </button>
      </div>
    </div>

    <div class="flex justify-center flex-grow">
      <form novalidate class="article flex flex-col w-full" @submit.prevent="submit">
        <transition name="scale">
          <div
            v-if="errorsAfterSubmit"
            role="alert"
            class="mainTransition bg-rose-200 border border-rose-400 p-2 rounded dark:text-black"
          >
            <div class="flex items-center font-bold mb-2">
              <Icon name="mdi:alert-circle" class="text-red-800 mr-1" size="28" />
              Please correct the errors below:
            </div>
            <transition-group name="list" tag="ul" class="list-disc text-left ml-6">
              <li v-for="error of invalidInfoArray" :key="error">{{ error }}</li>
            </transition-group>
          </div>
        </transition>
        <BTGInput
          v-model="name"
          name="firstName"
          autocomplete="given-name"
          class="my-8"
          :class="{ emptyValue: name === '' }"
          label="First Name"
          icon="mdi:account"
        />

        <BTGInput
          v-model="lastName"
          name="lastName"
          autocomplete="family-name"
          class="my-8"
          :class="{ emptyValue: lastName === '' }"
          label="Last Name"
          icon="mdi:account"
        />

        <BTGInput
          v-model="email"
          name="email"
          type="email"
          autocomplete="email"
          class="my-8 email"
          :class="{
            invalidEmail:
              email !== null && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email ? email : '')
          }"
          label="Email Address"
          icon="mdi:at"
        />

        <BTGSelect
          v-model="role"
          class="my-8"
          label="Role"
          :class="{ emptyValue: role === null && roleBlured }"
          :options="roles"
          icon="mdi:card-account-details"
          @blur="roleBlured = true"
          @focus="roleBlured = false"
        />

        <BTGInput
          v-if="role === 'Other'"
          v-model="other"
          autocomplete="organization-title"
          class="mt-2 mb-8 ml-8"
          label="Other"
          :class="{ emptyValue: role === 'Other' && other === '' }"
          icon="mdi:text-account"
        />

        <button
          class="mt-6 w-full h-9 border-2 border-gray-400 rounded-2xl bg-neutral-300 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Submitting...' : 'Submit' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BTGInput from '~/components/helpers/BTGInput.vue'
import BTGSelect from '~/components/helpers/BTGSelect.vue'
import { type IReCaptchaComposition, useReCaptcha } from 'vue-recaptcha-v3'

interface FormResponse {
  status: number
}

const formName = ref('Strategic Integration Design with DDD')

const email = ref<string | null>(null)
const name = ref<string | null>(null)
const lastName = ref<string | null>(null)
const role = ref<string | null>(null)
const roles = ref([
  'Business Analyst',
  'CTO/CIO',
  'Enterprise Architect',
  'IT Manager',
  'Integration Architect',
  'Software Developer',
  'Software Engineer',
  'Solutions Architect',
  'System Architect',
  'Tech Lead',
  'Other'
])
const roleBlured = ref(false)
const other = ref<string | null>(null)

const errorsAfterSubmit = ref(false)
const invalidInfoArray = ref<Array<string>>([])

const formSubmitted = ref(false)
const submitResponse = ref('')
const isSubmitting = ref(false)

let recaptcha: IReCaptchaComposition | undefined = undefined

if (import.meta.client) {
  recaptcha = useReCaptcha()
}

/**
 * Lifecycle hook that initializes the reCAPTCHA component when the component is mounted.
 * @async
 * @function onMounted
 * @returns {Promise<void>} A promise that resolves when reCAPTCHA is loaded or rejects if loading fails.
 * @throws {Error} Logs an error if reCAPTCHA fails to load.
 */
onMounted(async () => {
  if (recaptcha) {
    try {
      await recaptcha.recaptchaLoaded()
    } catch (error) {
      console.error('reCAPTCHA failed to load:', error)
    }
  }
})

/**
 * Validates the form fields and updates the error state accordingly.
 * @function validate
 * @returns {void} Updates the form validation state and error messages.
 * @description
 * - Resets the error state and error messages.
 * - Validates required fields (name, lastName, email, role).
 * - Validates email format.
 * - Validates the 'Other' role field if selected.
 * - Sets appropriate error messages for invalid fields.
 */
const validate = () => {
  errorsAfterSubmit.value = false
  invalidInfoArray.value = []

  if (!name.value) {
    name.value = ''
    errorsAfterSubmit.value = true
    invalidInfoArray.value.push('First Name is required')
  }

  if (!lastName.value) {
    lastName.value = ''
    errorsAfterSubmit.value = true
    invalidInfoArray.value.push('Last Name is required')
  }

  if (!email.value) {
    email.value = ''
    errorsAfterSubmit.value = true
    invalidInfoArray.value.push('Email Address is required')
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
    errorsAfterSubmit.value = true
    invalidInfoArray.value.push('Please provide a valid Email Address')
  }
  if (!role.value) {
    role.value = null
    roleBlured.value = true
    errorsAfterSubmit.value = true
    invalidInfoArray.value.push('Role is required')
  }

  if (role.value === 'Other' && !other.value) {
    errorsAfterSubmit.value = true
    other.value = ''
    invalidInfoArray.value.push('Role is required')
  }
}

/**
 * Handles form submission, including validation, reCAPTCHA verification, and API request.
 * @async
 * @function submit
 * @returns {Promise<void>} A promise that resolves when the form submission is complete.
 * @throws {Error} Logs an error if reCAPTCHA fails or the API request fails.
 * @description
 * - Sets the submitting state to true.
 * - Validates the form fields.
 * - If validation fails or reCAPTCHA is not available, returns early.
 * - Executes reCAPTCHA verification.
 * - Submits form data to the API endpoint.
 * - Handles different response statuses (409, 200, others).
 * - Updates the form submission state and response message.
 */
const submit = async () => {
  isSubmitting.value = true
  validate()

  if (errorsAfterSubmit.value || !recaptcha) {
    isSubmitting.value = false
    return
  }

  try {
    await recaptcha.recaptchaLoaded()

    const token = await recaptcha.executeRecaptcha('submit_message')

    const response: FormResponse = await $fetch('/api/addFormResponse', {
      method: 'POST',
      body: {
        token,
        formBody: {
          formName: 'Strategic Integration Design with DDD',
          answers: {
            FirstName: name.value,
            LastName: lastName.value,
            Email: email.value,
            role: role.value === 'Other' ? other.value : role.value
          }
        }
      }
    })

    formSubmitted.value = true
    isSubmitting.value = false

    if (response.status === 409) {
      submitResponse.value = 'You have already submitted this form. Thank you!'
    } else if (response.status === 200) {
      submitResponse.value = 'Thank you! Your form has been submitted successfully.'
    } else {
      submitResponse.value =
        'We encountered an issue while submitting your form. Please try again later.'
    }
  } catch (error) {
    console.error('reCAPTCHA failed to load:', error)
    submitResponse.value =
      'We encountered an issue while submitting your form. Please try again later.'
    isSubmitting.value = false
  }
}

/**
 * Watches for changes in form fields and revalidates the form if errors were previously displayed.
 * @function
 * @param {Array} [name, lastName, email, role, other] - The form fields to watch for changes.
 * @returns {void} Revalidates the form if errors were previously displayed.
 * @description
 * - Watches for changes in the form fields (name, lastName, email, role, other).
 * - If errors were previously displayed (errorsAfterSubmit.value is true), revalidates the form.
 * - This ensures that error messages are updated in real-time as the user corrects invalid fields.
 * - Edge cases:
 *   - If no errors were previously displayed, the watcher does nothing.
 *   - If validation passes after corrections, errorsAfterSubmit.value will be set to false.
 */
watch([name, lastName, email, role, other], () => {
  if (errorsAfterSubmit.value) {
    validate()
  }
})
</script>

<style scoped>
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.container {
  cursor: pointer;
}

.container input {
  display: none;
}

.container svg {
  overflow: visible;
}

.path {
  fill: none;
  stroke: black;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition:
    stroke-dasharray 0.5s ease,
    stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;
}

.container input:checked ~ svg .path {
  stroke-dasharray: 70.5096664428711 9999999;
  stroke-dashoffset: -262.2723388671875;
}

.emptyValue {
  @apply text-red-800 dark:text-red-300;
  position: relative;

  &:before {
    content: 'This field is required';
    position: absolute;
    bottom: -1.4rem;
    left: 2.2rem;
    font-size: 0.7rem;
  }
}

.invalidEmail {
  @apply text-red-800 dark:text-red-300;
  position: relative;

  &:before {
    content: 'Invalid email address';
    position: absolute;
    bottom: -1.4rem;
    left: 2.2rem;
    font-size: 0.7rem;
  }
}

label {
  cursor: pointer;
}

input[type='radio'] {
  cursor: pointer;
  user-select: none;
  text-align: left;
  width: 0.8rem;
  height: 1rem;

  & + label {
    margin-bottom: 0.5rem;
  }
}
</style>
