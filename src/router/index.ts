import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './router';

const router = createRouter({
    history: createWebHistory("/"),
    routes: routes
})

 // 路由首尾配置
 router.beforeEach((to, from, next) => {
    // NProgress.start()
    // 404 页面拦截
    if (to.matched.length !== 0) {
      next()
    } else {
      next({ path: '/404' })
    }
  })
  
  router.afterEach(() => {
    // NProgress.done()
  })

export default router;  