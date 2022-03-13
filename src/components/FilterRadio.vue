<script setup lang="ts">
import { computed } from 'vue'

type FilterType = 'all' | 'active' | 'completed'

const props = defineProps<{ modelValue: FilterType }>()
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
      {{ item.label }}
    </label>
  </div>
</template>

<style scoped>
.filter-radio {
  display: flex;
  justify-content: space-around;
  gap: 10px;
}
</style>
