<script setup lang="ts">
import DarkToggle from './DarkToggle.vue'
</script>

<template>
  <header>
    <h1>Vue Todo App</h1>

    <div>
      <DarkToggle />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
