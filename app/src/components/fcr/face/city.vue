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
          <input id="ttj" type="search"placeholder="输入学校,商务楼,地址" v-model="serachcity">
          <button class="sub" @click="tj">提交</button>
          <div class="se-hes" v-if="!mes">搜索历史</div>
          <ul v-if="mes" class="getul">
            <div class="sernone" v-if="mes.length==0">很抱歉!无搜索结果</div>
            <div class="sernone" v-if="!serachcity">请填写内容</div>
            <li class="getli" v-for="(obj,index) in mes" v-if="!mes.length==0" @click="cs(index)">

              <h4 class="hh4"><router-link :to="{name:'home',query:{city:obj.geohash,latitude:obj.latitude,longitude:obj.longitude}}" class="hh4">{{obj.name}}</router-link></h4>
              <p class="address">{{obj.address}}</p>
            </li>
          </ul>

        </div>
      </div>

    </div>
      <ul v-if="names" class="getul" v-show="orshow">
        <li class="hosli getli" v-for="na in names">

          <h4 class="hh4">{{na.name}}</h4>
          <p class="address">{{na.add}}</p>
        </li>
        <li id="clear" @click="clear">清空所有</li>
      </ul>
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
            mes:'',
            all:[],

            names:[],
            allnames:[],
            orshow:false
          }
        },
      methods:{
        dj(){
          this.$router.push({path:'/'})
        },
        tj(){
          Vue.axios.get(`http://cangdu.org:8001/v1/pois?city_id=${this.id}&keyword=${this.serachcity}&type=search`).then((response)=>{
            this.mes=response.data
          })
        },
        cs(index){
          var a = {
            name:this.mes[index].name,
            add:this.mes[index].address
          };
          for(var i = 0;i<this.all.length;i++) {
            if (a.name == this.all[i].name) {
              console.log("已有");
              return 0;
            }
          }
          if(localStorage.getItem("name")!=null){
            this.all=JSON.parse(localStorage.getItem("name"))
          }
          this.all.push(a);
          var b = JSON.stringify(this.all);
          localStorage.setItem("name",b);


        },
        clear(){

          window.localStorage.removeItem("name");
          this.orshow = false
        }
      },
      created(){
        var id  =  this.$route.params.id;
        Vue.axios.get(`http://cangdu.org:8001/v1/cities/${id}`).then((response) => {
        this.city =response.data.name;
        this.id = response.data.id;
        });
        this.name = localStorage.getItem("name")
        this.names=JSON.parse(this.name)
        if(this.names!=null){
          this.orshow=true
        }
      }
    }
</script>

<style scoped>
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
  .hosli{
    margin-left: .434rem;
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
  #ttj{
    outline: none;
  }
  #clear{
    font-size: .7rem;
    color: #666;
    text-align: center;
    line-height: 2rem;
    background-color: #fff;
  }
</style>
