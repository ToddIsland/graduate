import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },{
    path:'/home',
    name:'Home',
    component:()=>import('../views/Home.vue')
  },{
    path:'/accepted',
    name:'Accepted',
    component:()=>import('../views/Accepted.vue')
  },{
    path:'/rejected',
    name:'Rejected',
    component:()=>import('../views/Rejected.vue')
  },{
    path:'/others',
    name:'Others',
    component:()=>import('../views/Others.vue')
  },{
    path:'/manage',
    name:'Manage',
    component:()=>import('../views/Manage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
