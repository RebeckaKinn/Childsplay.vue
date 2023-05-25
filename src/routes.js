
import {createRouter, createWebHistory} from 'vue-router';
import MainPage from './pages/MainPage.vue';
import Settings from './pages/Settings.vue';

const routes = [
  {path: '/', name: 'FrontPage', component: MainPage},
  {path: '/settings', name: 'Settings', component: Settings}
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;