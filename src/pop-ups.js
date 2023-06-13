
import { ref } from 'vue';


    export const triggers = ref({
      deleteWarning: false,
      addInfo: false,
      rndMenu: false,
    });

    export const TogglePopUp = (key) => {
      triggers.value[key] = !triggers.value[key]
    };
