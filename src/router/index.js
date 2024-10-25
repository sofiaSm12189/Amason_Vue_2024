import { createRouter, createWebHistory } from 'vue-router'

import SesionView from '../views/LoginViews/SesionView.vue'
import MainLayout from '../components/LayoutComponents/MainLayout.vue'
import MenuView from '../views/LoginViews/MenuView.vue'

import TicketsView from '../views/LoginViews/TicketsView.vue'
import ChatView from '../views/LoginViews/ChatView.vue'
import CreateTicketView from '@/views/LoginViews/Tickets/CreateTicketView.vue'
//import HelpCenterView from '../views/HelpCenterView.vue'
//import HelpCenter from '@/components/TicketsComponents/HelpCenter.vue'
//import ReturnsView from '../views/ReturnsView.vue'

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
          }
        ],
        
      },
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
      },
  
      
      ]
})

export default router
