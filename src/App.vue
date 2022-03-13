<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import draggable from 'vuedraggable'

import { Todo as TodoType, FilterType } from './types'
import { useTodos } from './composables/useTodos'

import Header from './components/Header.vue'
import Todo from './components/Todo.vue'
import AddTodoForm from './components/AddTodoForm.vue'
import Footer from './components/Footer.vue'
import FilterRadio from './components/FilterRadio.vue'

const { todos, addTodo, removeTodo, clearCompleted } = useTodos()

const filterType = useStorage<FilterType>('filterType', 'all')

const isVisible = (todo: TodoType) => {
  if (filterType.value === 'all') {
    return true
  }

  if (filterType.value === 'active') {
    return !todo.complete
  }

  if (filterType.value === 'completed') {
    return todo.complete
  }

  return false
}
</script>

<template>
  <div>
    <Header />

    <AddTodoForm @submit="addTodo" />

    <draggable
      v-model="todos"
      tag="transition-group"
      item-key="id"
      animation="200"
    >
      <template #item="{ element }">
        <Todo
          v-show="isVisible(element)"
          :id="element.id"
          v-model:complete="element.complete"
          @remove="removeTodo(element.id)"
        >
          {{ element.text }}
        </Todo>
      </template>
    </draggable>

    <Footer :todos="todos" @clear="clearCompleted">
      <FilterRadio v-model="filterType" />
    </Footer>
  </div>
</template>
