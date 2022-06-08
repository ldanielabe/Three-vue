import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarView from '../views/CarView.vue'
import ThreejsView from '../views/ThreejsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/car',
      name: 'car',
      component: CarView
      // route level code-splitting
      // this generates a separate chunk (Car.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/CarView.vue')
    },
    {
      path: '/threejs',
      name: 'threejs',
      component: ThreejsView
    }
  ]
})

export default router
