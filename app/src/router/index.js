import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import login from '../components/jyh/login/login'
=======
import face from '../components/fcr/face/face'
import wd from '../components/fcr/face/city'

>>>>>>> develop
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'login',
      component: login
=======
      name: 'face',
      component: face
    },
    {
      path:'/city/:id',
      name:'city',
      component:wd
>>>>>>> develop
    }
  ]
})
