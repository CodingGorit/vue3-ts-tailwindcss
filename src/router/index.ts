import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './router';
import Utils from '../utils/Utils';

const instance = Utils.getInstance();

const router = createRouter({
    history: createWebHistory("/"),
    routes: routes,
    scrollBehavior: () => ({ left: 0, top: 0 }),
})

 // 路由首尾配置
 router.beforeEach((to, from, next) => {
   instance.startNProgress();

    // 404 页面拦截
    if (to.matched.length !== 0) {
      next();
    } else {
      next({ path: '/404' });
    }
  })
  
  router.afterEach(() => {
    instance.closeNProgress();
  })

export default router;  