<script setup>
import MainPage from './components/MainPage.vue'
import FooterMenu from './components/menuItems/Footer-menu.vue'
import BackButton from './components/BackButton.vue'
import BottomMessage from './components/AllRightsReserved.vue'
import Header from './components/Header-frontPage.vue'
import './main.css'

</script>

<template>
  <header>
    <Header/>
  </header>

  <main>
    <MainPage />
  </main>

    <BottomMessage/>
  <footer>
    <FooterMenu/>
  </footer>
</template>


<style scoped>

</style>
