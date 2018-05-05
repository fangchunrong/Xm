<template>
   <div class="fhome">
     <div class="ftop">
       <span id="fele">ele.me</span>
       <span id="fdl" @click="lg">登录|注册</span>
     </div>
     <div class="top-city">
       <div class="poscity">
       <span>当前定位城市</span>
       <span>定位不准时,请在城市列表中选择</span>
       </div>
       <div class="guess-city">
          <span id="this-city">{{guess}}</span>
          <span id="right-jt">></span>
       </div>
       <div class="hot-city">
          <h4 class="city-title">热门城市</h4>
          <ul class="first-ul">
            <li v-for="(hotcity,index) in hotcitys">{{hotcity.name}}
            </li>
          </ul>
       </div>
       <div class="all-city">
              <ul class="two-ul">
                <li class="first-li" v-for="(value,key) in newobj">
                  <h4 class="city-ti">{{key}}
                    <span class="first">(按字母排序)</span></h4>
                  <ul>
                    <li class="city" v-for="val in value">
                      <router-link :to="{name:'city',params:{id:val.id}}" class="aa">{{val.name}}</router-link></li>
                  </ul>
                </li>

              </ul>

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
        name: "face",
        data(){
          return{
            guess:'',
            hotcitys:null,
            newobj:null

          }
        },

      created(){
        Vue.axios.get('http://cangdu.org:8001/v1/cities?type=guess').then((response) => {
          this.guess=response.data.name;
        })

      Vue.axios.get('http://cangdu.org:8001/v1/cities?type=hot').then((response) => {
        this.hotcitys= response.data

    })
        function objKeySort(obj) {//排序的函数
          var newkey = Object.keys(obj).sort();
          var newObj = {};
          for (var i = 0; i < newkey.length; i++) {
            newObj[newkey[i]] = obj[newkey[i]];
          }
          return newObj;
        }
     Vue.axios.get('http://cangdu.org:8001/v1/cities?type=group').then((response) => {
     this.newobj =objKeySort(response.data)

     })
  }
  ,
      methods:{
          lg(){
              this.$router.push({
                path:'/login'
              })
          }
      }
    }
</script>

<style scoped>
.ftop{
  background: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
  font-size: 0.7rem;
  overflow: hidden;
  position: a;
}
#fele,#fdl{
  display: inline-block;
  color: white;
  font-size: .7rem;
}
#fele{
  left: .4rem;
  font-weight: 400;
  font-size: .7rem;
  color: #fff;
  width: 2.3rem;
  height: .7rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
#fdl{
  float: right;
  position: absolute;
  top: 50%;
  right: .4rem;
  font-size: 0.65rem;
  transform: translateY(-50%);
}
  .top-city{
    padding-top: 2.35rem;
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
    margin-bottom: .4rem;
  }
  .poscity{
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 1.45rem;
    padding: 0 .45rem;
  }
  .poscity span:first-child{
    font-size: .55rem;
    color: #666;
  }
  .poscity span:nth-of-type(2){
    font-weight: 900;
    font-size: .475rem;
    color: #9f9f9f;
  }
  .guess-city{
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    height: 1.8rem;
    margin-bottom: 0.43rem;
    padding: 0 .45rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    font: .75rem/1.8rem Microsoft YaHei;
  }
  #this-city{
    color: #3190e8
  }
  #right-jt{
    width: .6rem;
    height: .6rem;
    color: #999;
    text-align: center;
    font-size: 1.30rem;
    margin-bottom: 1.30rem;
  }
  .hot-city{
    background-color: #fff;
    margin-bottom: .4rem;
  }
.city-title{
  color: #666;
  font-weight: 400;
  text-indent: .45rem;
  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  font: .55rem/1.45rem Helvetica Neue;
}
  li{
    list-style: none;
    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
    width: 24.85%;
    height: 1.75rem;
    font: .6rem/1.75rem Microsoft YaHei;
  }
  .first-li{
  margin-bottom: .4rem;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
}
  .city-ti{
    color: #666;
    font-weight: 400;
    text-indent: .45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: .55rem/1.45rem Helvetica Neue;
  }
  .first{
    font-size: .475rem;
    color: #999;
  }
  .first-ul{
    width: 100%;
    height: 3.566rem;
  }
  .first-li{
  margin-bottom: .4rem;
  background-color: #fff;
    width: 100%;
  border-bottom: 1px solid #e4e4e4;
    text-align: -webkit-match-parent;
    height: 100%;
}
  .two-ul{

  }
  .all-city{
    margin-top: 10px;
  }
  .city{
    color: #666;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  .aa{
    color: #666;
  }
</style>
