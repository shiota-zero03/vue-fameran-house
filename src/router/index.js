import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/App.vue'

import AuthTheme from '../components/auth-components/AuthTheme.vue';
import Login from '../pages/auth/Login.vue';
import Register from '../pages/auth/Register.vue';
import ForgotPassword from '../pages/auth/ForgotPassword.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    component: AuthTheme,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
