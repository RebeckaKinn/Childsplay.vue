<script>
import { ref, watch } from 'vue';
import { triggers ,TogglePopUp} from '../pop-ups.js';
import { rndMenuItems, menuToShow, currentView} from '../components/model-controller/Inner-menu.js';

export default{
    setup(){

        const currentInfo = ref(rndMenuItems.value);
        watch(rndMenuItems, (newValue) => {
            currentInfo.value = newValue;
        })

        return{
            triggers,
            TogglePopUp,
            rndMenuItems: currentInfo,
            menuToShow,
            currentView
        }
    },

    props: ['TogglePopUp'],
}
</script>

<template>
    <div class="default-pop-up">
        <div class="default-pop-up-inner">

            <router-link to="/">
                <button 
                    class="back-button"
                    @click="TogglePopUp()">
                        home
                </button>
            </router-link>

            <div class="default-header">
                Tip of the day is...
            </div>

            <p class="chooser-title">{{ rndMenuItems.title }}</p>
            <p class="chooser-description">{{ rndMenuItems.description }}</p>
            
            <div>
                <img :src="rndMenuItems.img" alt="testImage" class="menu-image">
            </div>

            <div>
                <button 
                    class="rnd-button"
                    @click="menuToShow(currentView)">
                        Give me another
                </button>
            </div>

        </div>
    </div>
</template>
