<script>
import { TogglePopUp, triggers } from '../../pop-ups.js';
import Arrow from '../../img/back-arrow_v3.png';

    export default {
        setup(){
            return{
                TogglePopUp,
                triggers,
                Arrow
            }
        },

       methods: {
    Back() {
    let popUpClosed = false;

    Object.keys(triggers.value).forEach(key => {
      if (triggers.value[key]) {
        TogglePopUp(key);
        popUpClosed = true;
      }
    });

    if (!popUpClosed) {
      this.$router.go(-1);
    }
  }
},    
    }
</script>

<template>
    <span>
        <img 
            :src="Arrow"
            class="back-button" 
            alt="back-button-arrow"
            v-on:click="Back">
    </span>
</template>


<style scoped>
.back-button{
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 9999;
    height: 60px;
    width: auto;
}
</style>