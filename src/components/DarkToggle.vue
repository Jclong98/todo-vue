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
  <button @click="toggleDark()" title="Toggle Dark Mode">
    {{ icon }}
  </button>
</template>
