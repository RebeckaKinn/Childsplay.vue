<script>
import TestImg from '../../img/mustache_cat.jpg'
import { triggers ,TogglePopUp} from '../../pop-ups.js'
import ChosenMenu from '../../pages/rndMenu.vue'
import { menuToShow, menuImage } from '../../components/model-controller/Inner-menu.js'
import { ref } from 'vue';

export default{
  setup(){

    const dinnerImage = ref(menuImage('dinnerRnd'));
    const activityImage = ref(menuImage('activityRnd'));

    return{
      TogglePopUp,
      triggers,
      menuToShow,
      menuImage,
      dinnerImage,
      activityImage
    }
  },

//Bruk en måte å få random bildet. Bruke metoden i rndMenu.vue?

  data() {
    return {
      TestImg: TestImg,

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
          @click="menuToShow('dinnerRnd'), TogglePopUp('rndMenu')">
            <img :src="dinnerImage" alt="dinner-Image" class="menu-image">
        </button>  
      </div>
          
    </div>
    <div class="menu-item">
      <ul>Activity</ul>
      <div>
        <button
          class="menu-img-button"
          @click="menuToShow('activityRnd'), TogglePopUp('rndMenu')">
          <img :src="activityImage" alt="activity-image" class="menu-image">
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
  padding: 30px;
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
  margin-top: 5px;
  
}

</style>