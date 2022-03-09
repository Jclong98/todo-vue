<script setup lang="ts">
import draggable from 'vuedraggable'

import { useTodos } from './composables/useTodos'
import Todo from './components/Todo.vue'
import AddTodoForm from './components/AddTodoForm.vue'

const { todos, addTodo, removeTodo } = useTodos()
</script>

<template>
  <div>
    <h1>Vue Todo App</h1>

    <AddTodoForm @add="addTodo" />

    <draggable
      v-model="todos"
      tag="transition-group"
      item-key="id"
      animation="200"
    >
      <template #item="{ element }">
        <Todo
          :id="element.id"
          v-model:complete="element.complete"
          @remove="removeTodo(element.id)"
        >
          {{ element.text }}
        </Todo>
      </template>
    </draggable>
  </div>
</template>
