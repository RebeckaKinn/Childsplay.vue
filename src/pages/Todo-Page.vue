<script>
import FooterMenu from '../components/menuItems/Footer-menu.vue'
import BackButton from '../components/Info/BackButton.vue'
import { triggers ,TogglePopUp} from '../pop-ups.js'
import AddTask from '../components/pop-ups/add-task.vue'
import { toDoList } from '../components/model-controller/td-list.js';

export default {
  setup (){
 
    return {
      triggers,
      TogglePopUp,
      toDoList: []
    }
  },

  mounted() {
        this.toDoList = toDoList();
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
        <section class="todo-grid" v-for="task in toDoList" :key="task.id">
                <div class="info">{{ task.description }}</div>
                <div><input type="checkbox" class="info-checkbox" /></div>
        </section>
    <div class="todo-button-link">

        <button
            class="todo-add-task-button"
            @click="TogglePopUp('addTask')">
                Add task
        </button>


    </div>
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
