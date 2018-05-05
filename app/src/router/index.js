import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD

=======
>>>>>>> develop
import login from '../components/jyh/login/login'

import face from '../components/fcr/face/face'
import wd from '../components/fcr/face/city'
<<<<<<< HEAD
=======


>>>>>>> develop
Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path:'/',
=======
      path: '/',
>>>>>>> develop
      name: 'face',
      component: face
    },
    {
      path:'/city/:id',
      name:'city',
      component:wd
<<<<<<< HEAD
=======
    },
    {
      path:'/login',
      name:'login',
      component:login
>>>>>>> develop
    }

  ]
})
