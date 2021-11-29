import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/Vortex/About.vue'
import UserExpenseDetails from '../views/UserExpenseDetails.vue'
import UserInfoEdit from '../views/UserInfoEdit.vue'
import ExitService from '../views/ExitService.vue'
import AdminExpenseDetails from '../views/AdminExpenseDetails.vue'
import EnterpriseStatus from '../views/EnterpriseStatus.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userexpense',
    name: 'UserExpenseDetails',
    component: UserExpenseDetails
  },
  {
    path: '/userinfoedit',
    name: 'UserInfoEdit',
    component: UserInfoEdit
  },
  {
    path: '/exitsvc',
    name: 'ExitService',
    component: ExitService
  },
  {
    path: '/adminexpense',
    name: 'AdminExpenseDetails',
    component: AdminExpenseDetails
  },
  {
    path: '/enterprisestats',
    name: 'EnterpriseStatus',
    component: EnterpriseStatus
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
