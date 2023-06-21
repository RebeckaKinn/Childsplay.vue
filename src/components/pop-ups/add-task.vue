<script>
import { UpdateList } from '../../components/model-controller/td-list.js';
import { ref } from 'vue';

export default{
    setup(props){
        const newTask = ref('');
        const addTaskAndClosePopUp = () => {
            if (newTask.value === '' || newTask.value === null) return;
            UpdateList(newTask.value);
            newTask.value = '';
            props.TogglePopUp();
        }
        return{
            newTask, 
            addTaskAndClosePopUp
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
                    v-model="newTask"
                    class="task-input"
                    placeholder="Take out the trash..."/>
            </div>

            <button 
                class="todo-add-task-button"
                @click="addTaskAndClosePopUp">
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