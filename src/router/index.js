import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ListaCalcadosView from '../views/ListaCalcadosView.vue'

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView},
  { path: '/lista/calcados', name: 'lista', component: ListaCalcadosView}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _, next) => {
  //const loggedIn = isAuthenticated()
  if (to.meta.requiresAuth ) {
    return next({ name: 'login', query: { redirect: to.fullPath } })
  }
  if (to.meta.guestOnly ) {
    return next({ name: 'dashboard' })
  }
  next()
})

export default router