<script>
import { fetchData } from '../../components/model-controller/Inner-menu.js';
import { onMounted } from 'vue';

//kunne se alt i arrayet, men sender inn riktig data i fohrold til hvilke de trykker på. 
export default {
    setup() {

        onMounted(async () => {
            await fetchData();
        })
        
        return{
            fetchData,
        }
    },

    props: ['TogglePopUp']
}
</script>

<template>
    <div class="default-pop-up">
        <div class="default-pop-up-inner">
            <slot/>

            <div>

            </div>

        </div>
    </div>
</template>

<style scoped>

</style>