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
    <label>
      <input type="radio" name="filter" value="all" v-model="filterType" />
      <span>All</span>
    </label>
    <label>
      <input type="radio" name="filter" value="active" v-model="filterType" />
      <span>Active</span>
    </label>
    <label>
      <input
        type="radio"
        name="filter"
        value="completed"
        v-model="filterType"
      />
      <span>Completed</span>
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
