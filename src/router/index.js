/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "['from']" }]*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
// import SignUp from '../components/auth/signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log('inside home route', to, from)
      next()
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/*webpackChunkName: "signup" */ '../components/auth/signup.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import(/*webpackChunkName: "signin"*/ '../views/signin.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/*webpackChunkName: "users"*/ '../views/Users.vue')
  },
  {
    path: '/users/:id',
    name: 'UserEditLink',
    component: () => import(/*webpackChunkName: "users"*/ '../views/Users.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/*webpackChunkName: "dashboard"*/ '../components/Dashboard.vue'),
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next()
      } else {
        next('/signin')
      }
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    console.log('xxxxxx checking this')
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      console.log('tohash')
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  console.log('to: ' + to + ' from: ' + from)
  next(() => console.log('running next'))
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   next()
// })

export default router
