// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

//算法
Vue.prototype.dealarray=function dealjson(obj) {
  var arr = []
  var Jsonarr = []
  let object = {}
  for (var key in obj) {
    arr.push(obj[key]); //属性
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      object.name = arr[i]
      Jsonarr.push(object)
      object = {}
    } else {
      object.des = arr[i]
      object.id = i
    }
  }
  var one = Jsonarr.slice(0, 13)
  var two = Jsonarr.slice(13, 23)
  for (let j = 0; j < two.length; j++) {
    [two[j].des, two[j].name] = [two[j].name, two[j].des]
  }
  var three = one.concat(two)
  three.splice(12, 1)
  three.splice(4, 1)
  return three
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
