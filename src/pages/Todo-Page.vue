<script>
import FooterMenu from '../components/menuItems/Footer-menu.vue';
import BackButton from '../components/Info/BackButton.vue';
import { triggers ,TogglePopUp} from '../pop-ups.js';
import AddTask from '../components/pop-ups/add-task.vue';
import { fetchTasks, tasks, toggleIsCompleted } from '../components/model-controller/td-list.js';
import { onMounted, computed } from 'vue';

export default {
  setup() {

  onMounted(async () => {
    tasks.value = await fetchTasks(); 
  });

  const completedTasks = computed(() => {
    return tasks.value.filter(task => task.isCompleted === true); 
  });

  const currentTasks = computed(() => {
    return tasks.value.filter(task => task.isCompleted === false); 
  });

    const toggleTask = async (task) => {
      await toggleIsCompleted(task);
    };

  return {
    triggers,
    TogglePopUp,
    completedTasks,
    currentTasks,
    AddTask,
    tasks,
    toggleIsCompleted,
    toggleTask
  };
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
      <BackButton />
      <div class="default-header">To Do List</div>
    </header>

    <main class="todo-main">
      <section class="todo-grid" v-for="task in currentTasks" :key="task.id">
        <div class="info">{{ task.description }}</div>
        <div>
          <input 
            type="checkbox" 
            class="info-checkbox" 

            @change="toggleTask(task)" />
        </div>
      </section>

      <div class="todo-button-link">
        <button class="todo-add-task-button" @click="TogglePopUp('addTask')">
          add
        </button>
      </div>

      <section class="todo-grid" v-for="task in completedTasks" :key="task.id">
        <div class="info info-done">{{ task.description }}</div>
        <div>
          <input 
            type="checkbox" 
            class="info-checkbox" 

            @change="toggleTask(task)"/>
        </div>
      </section>

      <span>
        <AddTask v-if="triggers.addTask" :TogglePopUp="() => TogglePopUp('addTask')" />
      </span>
    </main>
  </div>
  <footer>
    <FooterMenu />
  </footer>
</template>