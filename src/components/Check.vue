<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    disabled?: boolean
  }>(),
  {
    value: true,
    disabled: false,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const value = computed({
  get: () => props.modelValue || false,
  set: (newValue: boolean) => emit('update:modelValue', newValue),
})
</script>

<template>
  <div class="check">
    <input type="checkbox" v-model="value" />
    <button @click="value = !value" :class="{ checked: value }">
      <img v-show="value" src="/images/icon-check.svg" alt="check icon" />
    </button>
  </div>
</template>

<style scoped>
.check input[type='checkbox'] {
  display: none;
}

.check button {
  width: 1.3em;
  height: 1.3em;
  border-radius: 50%;
  background-color: var(--light-grayish-blue);
  margin-right: 1em;
  display: grid;
  place-content: center;
  position: relative;
}

html.dark .check button {
  background-color: var(--very-dark-grayish-blue);
}

.check button::before {
  content: '';
  position: absolute;
  background-color: white;
  border-radius: 50%;
  height: 90%;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

html.dark .check button::before {
  background-color: var(--very-dark-desaturated-blue);
}

.check button.checked::before {
  opacity: 0;
}

.check button.checked {
  background-image: var(--check-background);
}

.check button:hover {
  background-image: var(--check-background);
}
</style>
