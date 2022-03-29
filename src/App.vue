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
  <div class="container">
    <Header />

    <AddTodoForm @submit="addTodo" />

    <div class="todo-group card">
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

        <template #footer>
          <Footer :todos="todos" @clear="clearCompleted" key="footer">
            <FilterRadio class="desktop-filter" v-model="filterType" />
          </Footer>
        </template>
      </draggable>
    </div>

    <FilterRadio class="card mobile-filter" v-model="filterType" />

    <footer class="explaination-footer">
      <p>Drag and drop to reorder List</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}

.todo-group {
  margin-top: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}

.mobile-filter {
  margin-top: 1.25em;
  padding: 0.5em;
  gap: 2ch;
}

.desktop-filter {
  display: none;
}

@media (min-width: 600px) {
  .desktop-filter {
    display: flex;
  }

  .mobile-filter {
    display: none;
  }
}

.explaination-footer {
  margin-top: 50px;
  text-align: center;
  color: var(--dark-grayish-blue);
  font-size: 14px;
}
</style>
