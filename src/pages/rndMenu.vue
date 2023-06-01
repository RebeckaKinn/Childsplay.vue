<script>
import './Chooser.css';
import { triggers ,TogglePopUp} from '../pop-ups.js'
import { rndMenuItems } from '../components/model-controller/Inner-menu.js'


export default{
    setup(){
        return{
            triggers,
            TogglePopUp,
            rndMenuItems,
            
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
                    class="rnd-button">
                        Give me another
                </button>
            </div>

        </div>
    </div>
</template>
