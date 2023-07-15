import { RouteRecordRaw } from 'vue-router';
import Home from '@/pages/Home.vue';
import Login from '@/pages/login/index.vue';

const routes: RouteRecordRaw[] = [
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
        component: Login
    },
];

// 公共路径
const commonPath: RouteRecordRaw[] = [
    {
        path: '/404',
        name: '404',
        component: () => import("@/pages/exception/404.vue")
    },
    {
        path: '/offline',
        name: 'offline',
        component: () => import('@/pages/Offline.vue')
    }
];

routes.push(...commonPath);

export default routes;