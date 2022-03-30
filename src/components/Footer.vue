<script setup lang="ts">
import { computed } from 'vue'
import { Todo } from '../types'

const props = defineProps<{ todos: Todo[] }>()
const emit = defineEmits<{ (e: 'clear'): void }>()

const itemsLeft = computed(() => {
  return props.todos.filter(todo => !todo.complete).length
})
</script>

<template>
  <footer class="todo-footer">
    <span> {{ itemsLeft }} items left </span>

    <slot></slot>

    <button class="clear-btn" @click="emit('clear')">Clear Completed</button>
  </footer>
</template>

<style scoped>
.todo-footer {
  padding: 0.5em 1em;
  border-radius: 4px;
  margin: 10px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 14px;
  color: var(--dark-grayish-blue);
}

.clear-btn {
  text-align: right;
}

.clear-btn:hover {
  color: var(--very-dark-grayish-blue);
}

html.dark .clear-btn:hover {
  color: var(--very-light-grayish-blue);
}
</style>
