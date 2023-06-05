import './main.css'
import './Chooser.css';
import './todo.css'
import { createApp } from 'vue'
import App from './App.vue'

import router from './routes';

createApp(App).use(router).mount('#app');

