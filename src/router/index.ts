import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import LoginView from '../views/login/LoginView.vue'

import UserView from '../views/table/UserView.vue'
import PrimaryView from '../views/primary/PrimaryView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/user',
        name: 'user',
        component: UserView
      },
      {
        path: '/primary',
        name: 'primary',
        component: PrimaryView
      }
    ]
  },
  {
    path: '/',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
