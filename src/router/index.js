import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },

  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/testView.vue')
    },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "about" */ '../views/OurTeamView.vue')
    },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
