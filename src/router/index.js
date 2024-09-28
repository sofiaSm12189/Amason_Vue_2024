import { createRouter, createWebHistory } from 'vue-router'



import SesionView from '../views/LoginViews/SesionView.vue'
import PruebaView from '../views/LoginViews/PruebaView.vue'
import MenuView from '../views/LoginViews/MenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Sesion',
      component: SesionView
    },
    {
      path: '/prueba',
      name: 'Prueba',
      component: PruebaView
    },
    {
      path: '/menu',
      name: 'Menu',
      component: MenuView
    }
  ]
})

export default router
