<script setup lang="ts">
import DarkToggle from './DarkToggle.vue'
</script>

<template>
  <header>
    <h1>TODO</h1>

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
  margin-top: 2em;
  margin-bottom: 1.25em;
}

h1 {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.75ch;
  color: white;
}

@media (min-width: 600px) {
  header {
    margin-top: 70px;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 40px;
  }
}
</style>
