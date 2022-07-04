import {createRouter,createWebHashHistory} from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'

// 创建一个路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component:Layout
    },
    {
      path: '/login',
      component:Login
    }
  ]
})

export default router