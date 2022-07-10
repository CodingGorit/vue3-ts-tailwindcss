import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: {
            name: "Home"
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/index.vue')
    },
]

export default routes;