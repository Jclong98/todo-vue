<script setup lang="ts">
import { ref } from 'vue'

const newTodoText = ref('')

const emit = defineEmits<{
  (e: 'add', text: string): void
}>()

const onSubmit = () => {
  emit('add', newTodoText.value)
  newTodoText.value = ''
}
</script>

<template>
  <form class="add-todo-form" @submit.prevent="onSubmit">
    <input type="text" v-model="newTodoText" />
    <button>Add</button>
  </form>
</template>

<style scoped>
.add-todo-form {
  border: 1px solid gray;
  padding: 10px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 5px;
}
</style>
