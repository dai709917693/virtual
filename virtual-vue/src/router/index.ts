import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('../views/example/example.vue')
    },
    {
      path: '/pmp',
      name: 'pmp',
      component: () => import('../views/example/pmp/pmp.vue')
    },
    {
      path: '/montyHallProblem',
      name: 'montyHallProblem',
      component: () => import('../views/example/monty-hall-problem/montyHallProblem.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('../views/goods/goods.vue'),
      children: [
        {
          path: 'sku-list',
          name: 'skuList',
          component: () => import('../views/goods/sku/list.vue')
        },
        {
          path: 'sku-create',
          name: 'skuCreate',
          component: () => import('../views/goods/sku/create.vue')
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
