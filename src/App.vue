<script setup>
import MainPage from './components/MainPage.vue'
import FooterMenu from './components/menuItems/Footer-menu.vue'
import BackButton from './components/BackButton.vue'
import './main.css'

</script>

<template>
  <header>
    <BackButton/>
  </header>

  <main>

    <MainPage />

  </main>

  <footer>
    <FooterMenu/>
  </footer>
</template>


<style scoped>

</style>
