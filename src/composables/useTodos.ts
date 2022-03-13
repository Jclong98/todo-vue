import { useStorage } from '@vueuse/core'
import { Todo } from '../types'

export function useTodos() {
  const todos = useStorage<Todo[]>('todos', [
    { id: 3, text: 'Make a Todo Application', complete: false },
    { id: 2, text: 'Get Coffee', complete: false },
    { id: 1, text: 'Wake Up', complete: false },
  ])

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((item) => item.id !== id)
  }

  const addTodo = (text: string) => {
    todos.value.unshift({
      id: new Date().getTime(),
      text,
      complete: false,
    })
  }

  const clearCompleted = () => {
    todos.value = todos.value.filter((item) => !item.complete)
  }

  return {
    todos,
    removeTodo,
    addTodo,
    clearCompleted,
  }
}
