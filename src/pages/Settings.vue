<script>
import FooterMenu from '../components/menuItems/Footer-menu.vue';
import BackButton from '../components/Info/BackButton.vue';
import PopUpWarning from '../components/pop-ups/delete-todo-warning.vue';
import AddInfo from '../components/pop-ups/add-info.vue'
import { ShowRndAddMenu } from '../components/model-controller/Add-rnd-info.js';
import { triggers ,TogglePopUp} from '../pop-ups.js'

export default {
  setup (){
    return {
      triggers,
      TogglePopUp,
      ShowRndAddMenu
    }
  },

  components: {
    FooterMenu,
    BackButton,
    PopUpWarning,
    AddInfo
  }
  
}
</script>

<template>
  <div class="container">
    <header>
      <BackButton />
      <div class="default-header">Settings</div>
    </header>

    <main>
      <div class="setting-menu">
        <button 
          class="setting-button"
          @click="ShowRndAddMenu('dinnerRnd'), TogglePopUp('addInfo')">
            Add dinner item
        </button>

        <button 
          class="setting-button"
          @click="null">
            Edit dinner
        </button>
        <br/>

         <button 
          class="setting-button"
          @click="ShowRndAddMenu('activityRnd'), TogglePopUp('addInfo')">
            Add activity
        </button>

        <button 
          class="setting-button"
          @click="null">
            Edit activity
        </button>
        <br/>
        
        <button 
          class="setting-button" 
          @click="() => TogglePopUp('deleteWarning')">
            Delete to-do list
          </button>
      </div>

      <span>
        <PopUpWarning 
          v-if="triggers.deleteWarning"
          :TogglePopUp="() => TogglePopUp('deleteWarning')"/>

        <AddInfo
          v-if="triggers.addInfo"
          :TogglePopUp="() => TogglePopUp('addInfo')"/>
      </span>
      
    </main>

    <footer>
      <FooterMenu />
    </footer>
  </div>
</template>


<style scoped>


main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
}

.setting-menu {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.setting-button {
  display: block;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  text-align: center;
  border: 1px solid #45d0e2;
  font-size: 20px;
}
.setting-button:hover{
    color: #45d0e2;
}
</style>
