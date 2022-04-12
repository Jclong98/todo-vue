<script setup lang="ts">
import { computed } from 'vue'
import Check from './Check.vue'

const props = withDefaults(
  defineProps<{
    id: number
    complete?: boolean
  }>(),
  {
    complete: false,
  }
)

const emit = defineEmits<{
  (e: 'remove', id: number): void
  (e: 'update:complete', value: boolean): void
}>()

const complete = computed({
  get() {
    return props.complete
  },
  set(newValue: boolean) {
    emit('update:complete', newValue)
  },
})
</script>

<template>
  <div class="todo" :class="{ complete }">
    <Check v-model="complete" />

    <span className="todo__text">
      <slot></slot>
    </span>
    <button title="Remove" class="remove-btn" @click="emit('remove', id)">
      <img src="/images/icon-cross.svg" alt="remove button" />
    </button>
  </div>
</template>

<style scoped>
.todo {
  padding: 1em;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  border-bottom: 1px solid var(--very-light-grayish-blue);
}

html.dark .todo {
  border-bottom: 1px solid var(--very-dark-grayish-blue);
}

.todo p {
  margin: 0;
}

.todo .todo__text:hover {
  cursor: pointer;
}

.todo.complete .todo__text {
  text-decoration: line-through;
  opacity: 50%;
}

.todo input[type='checkbox'] {
  display: none;
}

.todo .remove-btn {
  opacity: 0;
}
.todo:hover .remove-btn {
  opacity: 1;
}

.remove-btn:focus-visible {
  opacity: 1;
}
</style>
