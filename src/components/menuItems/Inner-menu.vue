<script>
import TestImg from '../../img/mustache_cat.jpg'
import { triggers ,TogglePopUp} from '../../pop-ups.js'
import ChosenMenu from '../../pages/rndMenu.vue'
import { menuToShow } from '../../components/model-controller/Inner-menu.js'

export default{
  setup(){
    return{
      TogglePopUp,
      triggers,
      menuToShow
    }
  },

  data() {
    return {
      TestImg: TestImg
    }
  },

  components: {
      TestImg,
      ChosenMenu
  }
}
</script>

<template>
  <nav class="main-menu">

    <div class="menu-item">
      <ul>Dinnerplan</ul>

      <div>
        <button 
          class="menu-img-button"
          @click="TogglePopUp('rndMenu'), menuToShow('dinnerRnd')">
            <img :src="TestImg" alt="testImage" class="menu-image">
        </button>  
      </div>
          
    </div>
    <div class="menu-item">
      <ul>Activity</ul>
      <div>
        <button
          class="menu-img-button"
          @click="TogglePopUp('rndMenu'), menuToShow('activityRnd')">
          <img :src="TestImg" alt="testImage" class="menu-image">
        </button>
      </div>

    </div>
    
  </nav>

  <span>
    <ChosenMenu 
      v-if="triggers.rndMenu"
      :TogglePopUp="() => TogglePopUp('rndMenu')"/>
  </span>
</template>



<style scoped>

.menu-img-button{
  border: none;
}

.main-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 10px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.menu-item ul {
  font-size: 25px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.menu-item div {
  margin-top: 10px;
  
}

</style>