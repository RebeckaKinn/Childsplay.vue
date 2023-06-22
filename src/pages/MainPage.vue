
<script>
import InnerMenu from '../components/menuItems/Inner-menu.vue'
import FooterMenu from '../components/menuItems/Footer-menu.vue'
import BottomMessage from '../components/Info/AllRightsReserved.vue'
import Header from '../components/Info/Header-frontPage.vue'
import { onMounted } from 'vue';

import {menuImage, dinner, activity, fetchData} from '../components/model-controller/Inner-menu.js'
export default{
  setup(){

   onMounted(async () => {
     await fetchData(); 
     menuImage('dinnerRnd');
     menuImage('activityRnd');
   });


    return{
      menuImage, 
      dinner,
      activity,
      fetchData
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