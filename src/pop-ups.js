
import { ref } from 'vue';


    export const triggers = ref({
      deleteWarning: false,
      addTask: false,
      addFood: false,
      viewRndMenu: false,
    });

    export const TogglePopUp = (key) => {
      triggers.value[key] = !triggers.value[key]
    };
