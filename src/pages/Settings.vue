<script>
import FooterMenu from '../components/menuItems/Footer-menu.vue';
import BackButton from '../components/Info/BackButton.vue';
import PopUpWarning from '../components/pop-ups/delete-todo-warning.vue';
// import { ref } from 'vue';
import { triggers ,TogglePopUp} from '../pop-ups.js'

export default {
  setup (){
 

    return {
      PopUpWarning,
      triggers,
      TogglePopUp
    }
  },

  components: {
    FooterMenu,
    BackButton,
    PopUpWarning
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
        <router-link to="" class="setting-button">Add dinner item</router-link>
        <router-link to="" class="setting-button">Edit food items</router-link><br/>
        <router-link to="" class="setting-button">Add activity</router-link>
        <router-link to="" class="setting-button">Edit activities</router-link><br/>
        
        <button 
          class="setting-button" 
          @click="() => TogglePopUp('deleteWarning')">
          Delete to-do list
          </button>
      </div>
      <span>
        <PopUpWarning 
          v-if="triggers.deleteWarning"
          :TogglePopUp="() => TogglePopUp('deleteWarning')"
          /></span>
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
}
.setting-button:hover{
    color: #45d0e2;
}
</style>
