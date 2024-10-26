import { createRouter, createWebHistory } from 'vue-router'

import SesionView from '../views/LoginViews/SesionView.vue'
import MainLayout from '../components/LayoutComponents/MainLayout.vue'
import MenuView from '../views/LoginViews/MenuView.vue'
import CartView from '@/views/LoginViews/CartView.vue'
import sellerDashboard from '@/views/LoginViews/sellerDashboard.vue'

import TicketsView from '../views/LoginViews/TicketsView.vue'
import ChatView from '../views/LoginViews/ChatView.vue'
import CreateTicketView from '../views/LoginViews/CreateTicketView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sesion',
      component: SesionView
    },
    {
      path: '/Main',
      component: MainLayout,
      children: [
        {
          path: '/Menu',
          name: 'Menu',
          component: MenuView
        },
        {
          path: '/Carrito',
          name: 'Carrito',
          component: CartView
        }
      ]
    },
    { path: '/sellerDashboard', name: 'sellerDashboard', component: sellerDashboard },
    {
      path: '/tickets',
      name: 'Tickets',
      component: TicketsView
    },
    {
      path: '/create-ticket',
      name: 'CreateTicket',
      component: CreateTicketView
    },
    {
      path: '/chat',
      name: 'Chat',
      component: ChatView
    }
  ]
})

export default router
