<script setup lang="ts">
import { computed } from 'vue'
import { Todo } from '../types'

const props = defineProps<{ todos: Todo[] }>()
defineEmits<{ (e: 'clear'): void }>()

const itemsLeft = computed(() => {
  return props.todos.filter((todo) => !todo.complete).length
})
</script>

<template>
  <footer>
    <span> {{ itemsLeft }} items left </span>

    <slot></slot>

    <button @click="$emit('clear')">Clear Completed</button>
  </footer>
</template>

<style scoped>
footer {
  border: 1px solid gray;
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
</style>
