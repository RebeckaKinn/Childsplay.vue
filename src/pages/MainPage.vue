
<script setup>
import InnerMenu from '../components/menuItems/Inner-menu.vue'
import FooterMenu from '../components/menuItems/Footer-menu.vue'
import BottomMessage from '../components/Info/AllRightsReserved.vue'
import Header from '/src/components/Info/Header-frontPage.vue'
</script>

<template>
  <header>
    <Header/>
  </header>

  <main>
    <InnerMenu/>
  </main>
      <BottomMessage/>
      

  <footer>
    <FooterMenu/>
  </footer>

</template>