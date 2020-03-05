import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/bbs/Index'
import Newest from '../views/bbs/Newest'
import NBA from '../views/bbs/NBA'
import CBA from '../views/bbs/CBA'
import Relaxation from '../views/bbs/Relaxation'
import Article from '../views/bbs/Article'
import Game from '../views/bbs/Game'
import Personal from '../views/bbs/Personal'
import OtherUser from "../views/bbs/OtherUser"
import Login from '../views/bbs/Login'
import Register from '../views/bbs/Register'
import Main from '../views/manage/Main'
import ManLogin from '../views/manage/ManLogin'
import Statistics from '../views/manage/Statistics'
import UserManagement from '../views/manage/UserManagement'
import PostManagement from '../views/manage/PostManagement'

Vue.use(VueRouter)

const routes = [
  {
      path: '*',
      redirect: '/index',
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    redirect: '/index/newest',
    children: [
      {path: '/index/login',name:'login', component: Login},
      {path: '/index/register', component: Register},
      {path: '/index/newest', component: Newest},
      {path: '/index/nba', component: NBA},
      {path: '/index/cba', component: CBA},
      {path: '/index/relaxation', component: Relaxation},
      {path: '/index/game', component: Game},
      {path: '/index/article', component: Article},
      {path: '/index/personal', component: Personal},
      {path: '/index/otheruser', component: OtherUser},
    ]
  },
  {
    path: '/main',
    redirect: '/main/manlogin',
    components: {
      default: Main
    },
    children: [
      { path: '/main/statistics',name:'Statistics', component: Statistics },
      { path: '/main/userManagement',name:'UserManagement', component: UserManagement },
      { path: '/main/postManagement',name:'PostManagement', component: PostManagement }
    ]
  },
  {
    path: '/main/manlogin',
    name:'ManLogin',
    component: ManLogin
  }
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
router.beforeEach((to, from, next) => {
  let nextRoute = ['Statistics', 'UserManagement', 'PostManagement']
  if (nextRoute.indexOf(to.name) >= 0) {
    if (localStorage.isAdminLogin) {
      next()
    }else{
      alert('您还未登录')
      router.push({path:"/main/manlogin"})
    }
  }
  if(to.name === 'ManLogin' && localStorage.isAdminLogin){
    alert('您已经登录了')
    router.push({path:"/main/statistics"})
  }
  if(to.name === 'login' && localStorage.isLogin){
    alert('您已经登录了')
    router.push({path:"/index/newest"})
  }
  next()
})
export default router
