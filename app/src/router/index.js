import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/jyh/login/login'
import infor from '../components/jyh/infor/infor'
import user from '../components/jyh/user/user'
import money from '../components/jyh/money/money'
import money1 from '../components/jyh/money1/money1'
import score from '../components/jyh/score/score'
import score1 from '../components/jyh/score1/score1'
import discounts from '../components/jyh/discounts/discounts'
import prize from '../components/jyh/discounts/prize'
import red from '../components/jyh/discounts/red'
import explain1 from '../components/jyh/discounts/explain1'
import coupon from '../components/jyh/discounts/coupon'
import order from '../components/jyh/order/order'
import store from '../components/jyh/store/store'
import vip from '../components/jyh/vip/vip'
import explain from '../components/jyh/vip/explain'
import server from '../components/jyh/infor/server'
import download from '../components/jyh/infor/download'
import pay from '../components/jyh/vip/pay'
import vipcard from '../components/jyh/vip/vipcard'
import record from '../components/jyh/vip/record'
import detail from '../components/jyh/infor/detail'
import search from '../components/jyh/search/search'
import password from '../components/jyh/user/password'
import add from '../components/jyh/user/add'
import add1 from '../components/jyh/user/add1'
import name from '../components/jyh/user/name'
import appraise from '../components/jyh/appraise/appraise'
import carr from '../components/jyh/carr/carr'

import face from '../components/fcr/face/face'
import wd from '../components/fcr/face/city'
import home from '../components/fcr/home/home'
import all from '../components/fcr/all/all'
import car from "../components/fcr/car/car"
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

      path:'/home',
      name:'home',
      component:home
    },
    {
      path: '/all',
      name: 'all',
      component: all
    },
    {
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
    },
    {
      path:'/score',
      name:'score',
      component:score
    },
    {
      path:'/score1',
      name:'score1',
      component:score1
    },
    {
      path:'/discounts',
      name:'discounts',
      component:discounts
    },
    {
      path:'/order',
      name:'order',
      component:order
    },
    {
      path:'/store',
      name:'store',
      component:store
    },
    {
      path:'/vip',
      name:'vip',
      component:vip
    },
    {
      path:'/explain',
      name:'explain',
      component:explain
    },
    {
      path:'/server',
      name:'server',
      component:server
    },
    {
      path:'/download',
      name:'download',
      component:download
    },
    {
      path:'/pay',
      name:'pay',
      component:pay
    },
    {
      path:'/prize',
      name:'prize',
      component:prize
    },
    {
      path:'/red',
      name:'red',
      component:red
    },
    {
      path:'/explain1',
      name:'explain1',
      component:explain1
    },
    {
      path:'/coupon',
      name:'coupon',
      component:coupon
    },
    {
      path:'/vipcard',
      name:'vipcard',
      component:vipcard
    },
    {
      path:'/record',
      name:'record',
      component:record
    },
    {
      path:'/server/:id',
      name:"detail",
      component:detail
    },
      {
          path:'/search',
          name:"search",
          component:search
      },
      {
          path:"/car",
          name:"car",
          component:car
      },
      { path:'/password',
          name:"password",
          component:password
      },
      {
          path:'/add',
          name:"add",
          component:add
      },
      {
          path:'/add1',
          name:"add1",
          component:add1
      },
      {
          path:'/name',
          name:"name",
          component:name
      },
      {
          path:'/appraise',
          name:"appraise",
          component:appraise
      },
      {
          path:'/carr',
          name:'carr',
          component:carr
      }
  ]
})
