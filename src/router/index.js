import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/bbs/Index'
import Newest from '../views/bbs/Newest'
import NBA from '../views/bbs/NBA'
import CBA from '../views/bbs/CBA'
import Relaxation from '../views/bbs/Relaxation'
import Article from '../views/bbs/Article'
import Game from '../views/bbs/Game'
import Login from '../views/bbs/Login'
import Register from '../views/bbs/Register'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index,
    children: [
      {path: '/index/login', component: Login},
      {path: '/index/register', component: Register},
      {path: '/index/newest', component: Newest},
      {path: '/index/nba', component: NBA},
      {path: '/index/cba', component: CBA},
      {path: '/index/relaxation', component: Relaxation},
      {path: '/index/game', component: Game},
      {path: '/index/article', component: Article},
    ]
  },
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
