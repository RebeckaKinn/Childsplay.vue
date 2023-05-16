<script setup>
import MainPage from './components/MainPage.vue'
</script>

<template>
  <header>
  </header>

  <main>
<button v-on:click="something()">Button</button>
    <MainPage />
    <p>Something</p>
  </main>
</template>

<style scoped>

</style>
