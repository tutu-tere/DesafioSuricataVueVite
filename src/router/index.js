import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/contacto',
    name: 'contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    props: () => {
      return {
        nombre: 'Desayuno',
        descripcion: 'Contamos con desayunos nutrivivos y deliciosos',
        precio: 2000,
        cantidad: 'Para dos personas'
      }
    },
    component: () => import('../views/ProductosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
