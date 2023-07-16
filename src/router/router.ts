import { RouteRecordRaw } from 'vue-router';
import Home from '@/pages/Home.vue';
import Widgets from "@/pages/widgets/index.vue"
import WidgetMain from '@/pages/widgets/main.vue';

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
        path: "/widget",
        name: 'Wdiegt',
        redirect: '/widget/home',
        component: Widgets,
        children: [{
            path: "/widget/home",
            component: WidgetMain
        }]
    }
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