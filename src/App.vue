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
  if (filterType.value === 'all') return true
  if (filterType.value === 'active') return !todo.complete
  if (filterType.value === 'completed') return todo.complete

  return false
}
</script>

<template>
  <div class="container">
    <Header />

    <main>
      <AddTodoForm @submit="addTodo" />

      <div class="todo-group card">
        <draggable
          v-model="todos"
          tag="transition-group"
          item-key="id"
          animation="200"
          delay="100"
          delayOnTouchOnly
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
            <Footer
              id="todo-footer"
              :todos="todos"
              @clear="clearCompleted"
              key="footer"
            >
              <FilterRadio
                id="filter-radio"
                class="card"
                v-model="filterType"
              />
            </Footer>
          </template>
        </draggable>
      </div>
    </main>

    <footer class="explaination-footer">
      <p>Drag and drop to reorder List</p>

      <p>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor</a
        >. Coded by
        <a href="https://github.com/jclong98/todo-vue">Jacob Long</a>.
      </p>
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

#todo-footer {
  position: relative;
  margin-bottom: 6em;
}

#filter-radio {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4em;
  padding: 0.5em;
}

@media (min-width: 600px) {
  #todo-footer {
    margin-bottom: 0;
  }

  #filter-radio {
    position: relative;
    bottom: 0;
    padding: 0;
  }
}

.explaination-footer {
  margin-top: 50px;
  text-align: center;
  color: var(--dark-grayish-blue);
  font-size: 14px;
}
</style>
