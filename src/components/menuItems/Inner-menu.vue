<script>
import { triggers ,TogglePopUp} from '../../pop-ups.js'
import ChosenMenu from '../../pages/rndMenu.vue'
import { menuToShow, dinner, activity} from '../../components/model-controller/Inner-menu.js'
import { ref } from 'vue';

export default{
  setup(){

    const dinnerImage = ref(dinner.value.img);
    const activityImage = ref(activity.value.img);

    return{
      TogglePopUp,
      triggers,
      menuToShow,
      dinnerImage,
      activityImage,
      dinner, 
      activity
    }
  },

  components: {
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
            <img 
              :src="dinnerImage" 
              alt="dinner-Image" 
              class="menu-image">
        </button>  
      </div>
          
    </div>
    <div class="menu-item">
      <ul>Activity</ul>
      <div>
        <button
          class="menu-img-button"
          @click="menuToShow('activityRnd'), TogglePopUp('rndMenu')">
            <img 
              :src="activityImage" 
              alt="activity-image" 
              class="menu-image">
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