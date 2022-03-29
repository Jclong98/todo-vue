<script setup lang="ts">
import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const icon = computed(() => {
  return isDark.value ? '🌞' : '🌚'
})
</script>

<template>
  <button
    @click="toggleDark()"
    title="Toggle Dark Mode"
    class="dark-toggle-btn"
  >
    <img v-if="isDark" src="/images/icon-sun.svg" alt="dark icon" />
    <img v-else src="/images/icon-moon.svg" alt="dark icon" />
  </button>
</template>

<style scoped>
.dark-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark-toggle-btn img {
  width: 1.5em;
  height: 1.5em;
}
</style>
