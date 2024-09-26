import { createRouter, createWebHistory } from 'vue-router'


import AboutView from '../views/AboutView.vue'
import SesionView from '../views/LoginViews/SesionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Sesion',
      component: SesionView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }

  ]
})

export default router
