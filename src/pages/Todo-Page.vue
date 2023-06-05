<script>
import FooterMenu from '../components/menuItems/Footer-menu.vue';
import BackButton from '../components/Info/BackButton.vue';
import { triggers ,TogglePopUp} from '../pop-ups.js';
import AddTask from '../components/pop-ups/add-task.vue';
import { toDoList } from '../components/model-controller/td-list.js';
import { onMounted, ref, computed } from 'vue';

export default {
  setup (){
    
    const taskList = ref([]);

    const completedTasks = computed( () => {
        return taskList.value.filter(task => task.done === true);
    })
    
    const currentTasks = computed( () => {
        return taskList.value.filter(task => task.done === false);
    })

    onMounted(async () => {
        taskList.value = await toDoList();
    })

    return {
      triggers,
      TogglePopUp,
      taskList,
      completedTasks,
      currentTasks,
    }
  },

   components: {
     FooterMenu,
     BackButton,
     AddTask
   }
}

</script>

<template>
<div class="container">
    <header>
        <BackButton/>
        <div class="default-header">
            To Do List
        </div>
    </header>

    <main class="todo-main">
        <section class="todo-grid" v-for="task in currentTasks" :key="task.id">
                <div class="info">{{ task.description }}</div>
                <div><input 
                        type="checkbox" 
                        class="info-checkbox" 
                        v-model="task.done"/></div>
        </section>


    <div class="todo-button-link">
        <button
            class="todo-add-task-button"
            @click="TogglePopUp('addTask')">
                add
        </button>
    </div>

        <section class="todo-grid" v-for="task in completedTasks" :key="task.id">
                <div class="info info-done">{{ task.description }}</div>
                <div><input 
                        type="checkbox" 
                        class="info-checkbox" 
                        v-model="task.done"/></div>
        </section>


        <span>
            <AddTask 
                v-if="triggers.addTask"
                :TogglePopUp="() => TogglePopUp('addTask')"/>
        </span>
    </main>
</div>
    <footer>
        <FooterMenu/>
    </footer>
</template>
