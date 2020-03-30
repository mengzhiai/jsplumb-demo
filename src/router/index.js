/*
 * @Author: your name
 * @Date: 2019-12-02 10:07:12
 * @LastEditTime : 2020-01-02 11:33:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-jsplumb\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  /* {
    path: '/',
    name: 'home',
    component: Home
  }, */
  {
    path: '/',
    name: 'panel',
    component: () => import('../views/jsplumb/panel.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/flow',
    name: 'flow',
    component: () => import('../views/flowDeployDetail/flowMain')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
