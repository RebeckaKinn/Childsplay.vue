
import {createRouter, createWebHistory} from 'vue-router';
import MainPage from './pages/MainPage.vue';
import Settings from './pages/Settings.vue';
import TodoList from './pages/Todo-Page.vue';
import ActivityChooser from './pages/ActivityChooser.vue';
import DinnerChooser from './pages/DinnerChooser.vue';

const routes = [
  {path: '/', name: 'FrontPage', component: MainPage},
  {path: '/settings', name: 'Settings', component: Settings},
  {path: '/to-do-list', name: 'To-Do List', component: TodoList},
  {path: '/activitychooser', name: 'Activity Chooser', component: ActivityChooser},
  {path: '/dinnerchooser', name: 'Dinner Chooser', component: DinnerChooser},
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;