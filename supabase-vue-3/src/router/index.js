import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Account from '../views/Account.vue'
import Visited from '../views/Visited.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    /*{
       path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }, */
    {
      path: '/account',
      name: 'account',
      component : Account,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/visited',
      name: 'visited',
      component : Visited,
      meta: {
        requiresAuth: true,
      }
    },
  ]
})

export default router
