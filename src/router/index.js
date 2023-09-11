import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import rtk from '../components/rtk.vue'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',   
    component: Home
  },
  {
    path: '/rtk',
    name: 'rtk',
    component: rtk,
  }




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
