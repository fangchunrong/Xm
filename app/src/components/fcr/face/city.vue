<template>
  <div id="app">
    <div class="city">
      <div id="head-top">
        <div id="jt" @click="dj"><</div>
        <div id="title">{{city}}</div>
        <div id="change" @click="dj">切换城市</div>
      </div>
      <div class="city-form">
        <div id="inp">
          <input type="search"placeholder="输入学校,商务楼,地址" v-model="serachcity">
          <button class="sub" @click="tj">提交</button>
          <div class="se-hes" v-if="!mes">搜索历史</div>
          <ul v-if="mes" class="getul">
            <div class="sernone" v-if="mes.length==0">很抱歉!无搜索结果</div>
            <div class="sernone" v-if="!serachcity">请填写内容</div>
            <li class="getli" v-for="obj in mes" v-if="!mes.length==0">

            <h4 class="hh4">{{obj.name}}</h4>
              <p class="address">{{obj.address}}</p>
            </li>
          </ul>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  Vue.use(VueAxios, axios)
    export default {
        name: "wd",
        data(){
          return{
            city:'',
            serachcity:'',
            id:'',
            mes:''
          }
        },
      methods:{
        dj(){
          this.$router.push({path:'/'})
        },
        tj(){
          Vue.axios.get(`http://cangdu.org:8001/v1/pois?city_id=${this.id}&keyword=${this.serachcity}&type=search`).then((response)=>{
            this.mes=response.data
            console.log(this.mes.length);
          })
        }
      },
      created(){
        var id  =  this.$route.params.id;
        Vue.axios.get(`http://cangdu.org:8001/v1/cities/${id}`).then((response) => {
        this.city =response.data.name;
        this.id = response.data.id;
        })

      }
    }
</script>

<style scoped>
  body{
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
  }
#head-top{
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
}
  #jt{
    left: .4rem;
    font-size: 1rem;
    line-height: 1.9rem;
    margin-left: .4rem;
    color: white;
  }
  #title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #change{
    right: .4rem;
    font-size: .6rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .city-form{
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: 2.4rem;
  }
  #inp{
    width: 90%;
  margin: 0 auto;
  text-align: center;
  }
  input{
    border: 1px solid #e4e4e4;
    padding: 0 .3rem;
    font-size: .65rem;
    color: #333;
    border-radius: .1rem;
    margin-bottom: .4rem;
    width: 100%;
    height: 1.4rem;
  }
  .sub{
    background-color: #3190e8;
    font-size: .65rem;
    color: #fff;
    border-radius: .1rem;
    margin-bottom: .4rem;
    width: 100%;
    height: 1.4rem;
  }
  .se-hes{
    display: flex;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-left: .5rem;
    font: .475rem/.8rem Microsoft YaHei;
    align-items: left;
  }
  .getul{
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
  }
  .getli{
    margin: 0 auto;
    padding-top: .65rem;
    border-bottom: 1px solid #e4e4e4;
    text-align: left;
    padding-bottom: .65rem;
  }
  .hh4{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    width: 90%;
    font-size: .65rem;
    color: #333;
  }
  .address{
    width: 90%;
    margin-top: .60rem;
    font-size: .45rem;
    color: #999;
  }
   .sernone{
    font: .65rem/1.75rem Microsoft YaHei;
    color: #333;
    background-color: #fff;
    text-indent: .5rem;
     text-align: left;
  }
</style>
