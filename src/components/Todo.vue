<script setup lang="ts">
interface Props {
  id: number
  complete: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'remove', id: number): void
  (e: 'update:complete', value: boolean): void
}>()

const updateChecked = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:complete', target.checked)
}
</script>

<template>
  <div>
    <label :class="['todo', { complete: complete }]">
      <p>
        <span class="handle">⠿</span>
        <input
          type="checkbox"
          :name="`todo-${id}`"
          :id="`todo-${id}`"
          :checked="complete"
          @change="updateChecked($event)"
        />
        <span className="todo__text">
          <slot></slot>
        </span>
      </p>
      <button @click="$emit('remove', id)">Delete</button>
    </label>
  </div>
</template>

<style scoped>
.todo {
  border: 1px solid gray;
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}

.todo p {
  margin: 0;
}

.todo .handle {
  opacity: 0;
  transition: all 0.2s ease-in-out;
  cursor: grab;
}

.todo:hover .handle {
  opacity: 1;
}

.todo.complete .todo__text {
  text-decoration: line-through;
}
</style>
