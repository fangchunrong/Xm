<template>
  <div id="box">
    <div class="box">
      <!--导航-->
      <div class="box-top">
        <span class="left" @click="infor"> < </span>
        <p class="right">服务中心</p>
      </div>
      <!--中-->
      <div class="box_m">
        <div class="middle_l">
          <i class="el-icon-service" style="color:red "></i>
          <span>在线客服</span>
        </div>
        <div class="middle_l">
          <i class="el-icon-phone" style="color: rgb(106, 194, 11);"></i>
          <span>在线客服</span>
        </div>
      </div>
      <h4>热门问题</h4>

      <!--列表-->
      <ul>
        <li v-for="li in qq" >
          <router-link class="ccc" :to="{name:'detail', query:{des:li.des}}">{{li.name}}</router-link>
          <span style="margin-left: 9rem; font-size: large; font-weight: 700; color: rgb(153, 153, 153);"> > </span>
        </li>
      </ul>
   </div>
    </div>
</template>

<script>

  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios)

    export default {
        name: "server",
      data:function () {
        return{
          //存放请求来的数据
          qq:null
        }
      },
      methods:{
        infor(){
          this.$router.push({
            path:'/infor'
          })
        }
      },

      created (){
        Vue.axios.get("http://cangdu.org:8001/v3/profile/explain").then((response)=>{
          this.qq = this.dealarray(response.data)
          console.log( this.dealarray(response.data))
        })
      }

    }
</script>

<style scoped>

  /*中*/
  .box_m {
    display: flex;
    justify-content: space-between;
  }
 .middle_l {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
}

  /*热门问题*/
  h4 {
    font-size: .75rem;
    color: #333;
    line-height: 3rem;
    border-bottom: 1px solid #f5f5f5;
    padding-left: .7rem;
  }

  li{
    padding: 0 .7rem;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ccc{
    margin-top: .4rem;
    font-size: .6rem;
    color: #666;
  }
</style>
