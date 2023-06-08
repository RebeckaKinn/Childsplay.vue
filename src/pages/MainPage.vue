
<script>
import InnerMenu from '../components/menuItems/Inner-menu.vue'
import FooterMenu from '../components/menuItems/Footer-menu.vue'
import BottomMessage from '../components/Info/AllRightsReserved.vue'
import Header from '../components/Info/Header-frontPage.vue'

import {menuImage, dinner, activity} from '../components/model-controller/Inner-menu.js'
export default{
  setup(){

    menuImage('dinnerRnd');
    menuImage('activityRnd');

    return{
      menuImage, 
      dinner,
      activity,
    }
  },

  components: {
      InnerMenu,
      FooterMenu,
      BottomMessage,
      Header
  }
}

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