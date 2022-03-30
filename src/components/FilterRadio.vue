<script setup lang="ts">
import { computed } from 'vue'
import { FilterType } from '../types'

const props = defineProps<{ modelValue: FilterType; key?: string }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: FilterType): void
}>()

const filterItems = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Completed',
    value: 'completed',
  },
]

const filterType = computed({
  get() {
    return props.modelValue
  },
  set(value: FilterType) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <div class="filter-radio">
    <label v-for="item in filterItems" :key="item.value">
      <input
        type="radio"
        name="filter"
        :value="item.value"
        v-model="filterType"
      />
      <span>{{ item.label }}</span>
    </label>
  </div>
</template>

<style scoped>
.filter-radio {
  display: flex;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
  /* color: var(--light-grayish-blue); */
}

html.dark .filter-radio {
  color: var(--dark-grayish-blue);
}

.filter-radio label:hover {
  cursor: pointer;
  color: var(--very-dark-grayish-blue);
}

html.dark .filter-radio label:hover {
  color: var(--very-light-grayish-blue);
}

.filter-radio input[type='radio'] {
  display: none;
}

.filter-radio input[type='radio']:checked + span {
  color: var(--bright-blue);
}
</style>
