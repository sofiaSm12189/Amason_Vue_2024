import { createRouter, createWebHistory } from 'vue-router'



import SesionView from '../views/LoginViews/SesionView.vue'
import MainLayout from '../components/LayoutComponents/MainLayout.vue'
import PruebaView from '../views/LoginViews/PruebaView.vue'
import MenuView from '../views/LoginViews/MenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [

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
      ],
      
    },
    {
      path: '/sesion',
      name: 'sesion',
      component: SesionView
    },
  ]
})

export default router
