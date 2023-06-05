<script>
import { deleteListData } from '../../components/model-controller/td-list.js';

export default{

    setup(){
        return{
            deleteListData
        }
    },

    props: ['TogglePopUp']
}

</script>


<template>
    <div class="default-pop-up">
        <div class="default-pop-up-inner">
            <slot/>
            <p>You are about to delete all saved data added to the To-Do list.</p>
            <p>Are you sure?</p>
            
            <div class="button-container">
            <button 
                class="add"
                @click="deleteListData(), TogglePopUp()">
                    Yes
            </button>

            <button 
                class="add"
                @click="TogglePopUp()">
                    No
            </button>
            </div>

        </div>
    </div>
</template>


<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
}

</style>
