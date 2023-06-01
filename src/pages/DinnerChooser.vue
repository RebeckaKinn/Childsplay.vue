<script>
import TestImg from '../img/mustache_cat.jpg'
import './Chooser.css';
import { triggers ,TogglePopUp} from '../pop-ups.js'

export default{
    setup(){
        return{
            triggers,
            TogglePopUp
        }
    },

    data() {
    return {
      TestImg: TestImg
    }
  },

    props: ['TogglePopUp']
}
</script>

<template>
    <div class="container">
        <header>
            <div class="default-header chooser-title">Dinner of the day is...</div>
        </header>

        <main class="chooser-main">
            <p class="chooser-title">Me.</p>
            <p class="chooser-description">I am the dinner.</p>
            <div>
                <img :src="TestImg" alt="testImage" class="menu-image">
            </div>
        
        </main>
    </div>

    <footer>
            <div class="chooser-button-links">
                <button class="button first-button">Give me another</button>
                <button
                    class="button second-button"
                    @click="TogglePopUp()">
                        OK!
                </button>
            </div>
    </footer>
</template>
