import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/jyh/login/login'
<<<<<<< HEAD
=======
import infor from '../components/jyh/infor/infor'
import user from '../components/jyh/user/user'
import money from '../components/jyh/money/money'
import money1 from '../components/jyh/money1/money1'

>>>>>>> 2e5fae145aed75aa539266d98b33ba0afe64bd0b
import face from '../components/fcr/face/face'
import wd from '../components/fcr/face/city'
import home from '../components/fcr/home/home'
import all from '../components/fcr/all/all'
Vue.use(Router)

export default new Router({
  routes: [
    {

      path:'/',
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
    },
    {
<<<<<<< HEAD
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/all',
      name:'all',
      component:all
=======
      path:'/infor',
      name:'infor',
      component:infor
    },
    {
      path:'/user',
      name:'user',
      component:user
    },
    {
      path:'/money',
      name:'money',
      component:money
    },
    {
      path:'/money1',
      name:'money1',
      component:money1
>>>>>>> 2e5fae145aed75aa539266d98b33ba0afe64bd0b
    }

  ]
})
