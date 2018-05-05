import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/jyh/login/login'

import face from '../components/fcr/face/face'
import wd from '../components/fcr/face/city'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'face',
      component: face
    },
    {
      path:'/city/:id',
      name:'city',
      component:wd
    },
    {
      path:'/login',
      name:'login',
      component:login
    }

  ]
})
