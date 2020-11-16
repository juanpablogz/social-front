import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Index from '../views/Index.vue'
import LogIn from '../views/LogIn.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: { auth: true },
  },
  {
    path: '/logIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const publicPages = ['/signIn', '/logIn', '/admin']
  const authRequired = !publicPages.includes(to.path)
  const logeedIn = JSON.parse(localStorage.getItem('token'));
  if (to.meta.auth) {
    if (authRequired && logeedIn['access-token'] !== undefined) {
      return next()
    }else if (authRequired && logeedIn['access-token'] === undefined) {
      return next('/signIn')
    }
  }
  next()
})

export default router
