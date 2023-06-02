import './main.css'
import './Chooser.css';
import { createApp } from 'vue'
import App from './App.vue'

import router from './routes';

createApp(App).use(router).mount('#app');

