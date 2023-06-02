<script>
import {  } from '../../components/model-controller/td-list.js';

export default{
    setup(){
        return{

        }
    },

    props: ['TogglePopUp']
}
</script>


<template>
    <div class="default-pop-up">
        <div class="default-pop-up-inner">
            <slot />

            <div>
                <input 
                    type="text"
                    id="task-input"
                    class="task-input"
                    placeholder="Take out the trash..."/>
            </div>

            <button 
                class="add"
                @click="TogglePopUp()">
                Add task
            </button>

        </div>
    </div>
</template>



<style scoped>

.task-input{
    width: 300px;
    font-size: 20px;
    border: 1px solid rgb(206, 206, 206);
    padding: 5px;
    margin-bottom: 20px;
}
</style>