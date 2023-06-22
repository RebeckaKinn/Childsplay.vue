<script>
import { ref, watch } from 'vue';
import { TogglePopUp} from '../pop-ups.js';
import BackButton from '../components/Info/BackButton.vue';
import { rndMenuItems, menuToShow, currentView, changeMenuImage} from '../components/model-controller/Inner-menu.js';

export default{
    setup(){

        const currentInfo = ref(rndMenuItems.value);
        watch(rndMenuItems, (newValue) => {
            currentInfo.value = newValue;
        })

    return{
        TogglePopUp,
        rndMenuItems: currentInfo,
        menuToShow,
        currentView,
        changeMenuImage,
        }
    },
    components: {
        BackButton
    },
    props: ['TogglePopUp'],
}
</script>

<template>
    <div class="default-pop-up">
        <div class="default-pop-up-inner">
                <BackButton/>
            <router-link to="/">
                <button 
                    class="back-button"
                    @click="changeMenuImage(currentView), TogglePopUp()">
                        OK!
                </button>
            </router-link>

            <div class="default-header header-rework">
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

<style scoped>
.header-rework{
    font-size: 25px;
}
</style>
