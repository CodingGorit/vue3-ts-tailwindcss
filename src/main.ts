import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index';
import '@/assets/css/global.css'
import globalComponents from '@/components';

const app = createApp(App);

app.use(router);
app.use(globalComponents);
app.mount('#app');
