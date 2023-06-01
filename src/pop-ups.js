
import { ref } from 'vue';


    export const triggers = ref({
      deleteWarning: false,
      addTask: false,
      addFood: false,
      rndMenu: false,
    });

    export const TogglePopUp = (key) => {
      triggers.value[key] = !triggers.value[key]
    };
