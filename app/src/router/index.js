import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/jyh/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
