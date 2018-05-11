<template>
<div id="app">
  <div id="head-top">
    <a data-v-070ab150="" href="#/search/geohash" class="link_search" data-v-cec0c0c0=""><svg data-v-070ab150="" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"><circle data-v-070ab150="" cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none"></circle> <line data-v-070ab150="" x1="14" y1="14" x2="20" y2="20" style="stroke: rgb(255, 255, 255); stroke-width: 2;"></line></svg></a>
    <a data-v-cec0c0c0="" class="head_login">
      <svg data-v-cec0c0c0="" class="user_avatar">
        <use data-v-cec0c0c0="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use></svg></a>
          <span id="dz">{{cityname}}</span>
         <span class="el-icon-location-outline"></span>
  </div>
  <swiper ref="mySwiper" class="lb">
    <!-- slides -->
    <swiper-slide class="sw1">
      <ul class="ulone">
        <li v-for="me in eight2" class="lione">
          <router-link :to="{path:'/all',query:{tit:me.title,jd:jd,wd:wd}}" class="tit">  <img :src="hf+me.image_url" alt="" class="im">
          </router-link>
          <router-link :to="{path:'/all',query:{tit:me.title,jd:jd,wd:wd}}" class="tit"> {{me.title}}</router-link>
        </li>
      </ul>

    </swiper-slide>

    <swiper-slide class="sw2">
      <ul class="ulone">
        <li v-for="me in eight1" class="lione">
          <img :src="hf+me.image_url" alt="" class="im">
          <span class="tit">
           <router-link :to="{path:'/all',query:{tit:me.title,jd:jd,wd:wd}}" class="tit"> {{me.title}}</router-link>
          </span>
        </li>
      </ul>
    </swiper-slide>



  </swiper>
  <div class="swiper-pagination"></div>

  <div class="titt">
    <img :src="a.pic" alt="" id="gwb">
    <span id="fj">附近商家</span>

    <div>
      <ul>
        <li v-for="al in all" class="sjli">
          <img :src="imghf+al.image_path" alt="" class="sj">
          <div class="shopright">
          <header data-v-2df9c5b6="" class="shop_detail_header"><h4 data-v-2df9c5b6="" class="shop_title ellipsis premium"><span class="pp">品牌</span>效果演示</h4>
            <ul data-v-2df9c5b6="" class="shop_detail_ul">
              <li data-v-2df9c5b6="" class="supports">保</li>
              <li data-v-2df9c5b6="" class="supports">准</li>
              <li data-v-2df9c5b6="" class="supports">票</li>
          </ul>
          </header>
            <el-rate class="block"
              v-model="al.rating"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
            <span class="ys">月售{{al.recent_order_num
}}单</span>
            <span data-v-2df9c5b6="" class="delivery_style delivery_left">蜂鸟专送</span>
            <span data-v-2df9c5b6="" class="delivery_style delivery_right">准时达</span>
            <h5>
              <p data-v-2df9c5b6="" class="fee">
                ¥20起送
                <span data-v-2df9c5b6="" class="segmentation">/</span>
                配送费约¥5
              </p>
              <p data-v-2df9c5b6="" class="distance_time">
                <span class="dis">1383.3公里</span>
                <span data-v-2df9c5b6=""class="segmentation">/</span>
                <span data-v-2df9c5b6="" class="order_time">21小时4分钟</span>
              </p>
            </h5>
          </div>
        </li>
      </ul>
    </div>
  </div>

</div>

</template>

<script>
  import Vue from 'vue'
  import Swiper from 'swiper'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import pic from '@/assets/img/gwb.png'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    name: "home",
    data() {
      return {
        mes:'',
        allpic:[],
        hf:'https://fuss10.elemecdn.com',
        imghf:'https://elm.cangdu.org/img/',
        eight1:[],
        eight2:[],
        jd:this.$route.query.latitude,
        wd:this.$route.query.longitude,
        a:{
          pic:pic
        },
        cityname:'',
        all:null,
      }
    },
    created(){
      Vue.axios.get("http://cangdu.org:8001/v2/index_entry").then((response)=>{
        this.mes=response.data;
        console.log(this.mes);
        this.eight1 = this.mes.slice(0,8);
        this.eight2 = this.mes.slice(8,16);
      });
      Vue.axios.get(`http://cangdu.org:8001/v2/pois/${this.$route.query.city}`).then((response)=>{
        this.cityname = response.data.name
      });
      setTimeout(function () {
          new Swiper('.lb', {
          loop:true,
            pagination: {
              el: '.swiper-pagination',
            },
        })
      },100);
      Vue.axios.get(`http://cangdu.org:8001/shopping/restaurants?latitude=${this.$route.query.latitude}&longitude=${this.$route.query.longitude}`).then((response)=>{
        this.all= response.data;
      })
    },

    methods:{
    },
  }
</script>
<style>
  .swiper-pagination-bullet{
    margin-left: 10px;
  }
</style>
<style scoped>
  #app{
    width: 100%;
    height: 100%;
  }
  #head-top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }
  .link_search{
    left: .8rem;
    width: .9rem;
    height: .9rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .head_login{
    right: .55rem;
    font-size: .65rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .el-icon-location-outline{
    color: white;
    width: 20px;
    position: absolute;
    right: .55rem;
    top: 30%;
    bottom: 50%;
    font-size: 1rem;
  }
  #dz{
    font-size: .8rem;
    color: #fff;
    text-align: center;
    display: block;
    margin-top: 0.665rem;
  }
  .lb{
   margin-top: 2.65rem;
  }
  .im{
    margin-bottom: .3rem;
    width: 1.8rem;
    height: 1.8rem;
    display: inline-block;

  }
  .lione{
    width: 25%;
    display: inline-block;
    text-align: center;

  }
  .ulone{
    width: 100%;


  }
  .sw1{
    width: 100%;
  }
  .sw2{
    width: 100%;
    height: 100px;
  }
  .tit{
    display: block;
    text-align: center;
    font-size: .55rem;
    color: #666;
  }
  .swiper-pagination{
    width: 100%;
    text-align: center;


  }
#gwb{
  width: 4%;
}
.titt{
  margin-top: 0.434rem;
  margin-left: 0.65rem;
  padding: 0.434rem;
}
#fj{
  color: #999;
  font: .55rem/1.6rem Microsoft YaHei;
}
  .sj{
    width: 2.7rem;
    height: 2.7rem;
    display: block;
    margin-right: .4rem;
  }
.sjli{
  display: flex;
  border-bottom: .025rem solid #f1f1f1;
  padding: .7rem .4rem;
}
.shop_detail_header{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
  .shop_title {
    width: 8.5rem;
    color: #333;
    padding-top: .01rem;
    font: .65rem/.65rem PingFangSC-Regular;
    font-weight: 700;
  }
  .shop_detail_ul {
    display: -ms-flexbox;
    display: flex;
    transform: scale(.8);
    margin-right: -.3rem;
  }
  .supports{
    font-size: .5rem;
    color: #999;
    border: .025rem solid #f1f1f1;
    padding: 0 .04rem;
    border-radius: .08rem;
    margin-left: .05rem;

  }
  .shopright{
    position: relative;
  }
  .block{
    transform: scale(0.6);
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    top: 1rem;
    left: -0.8rem;
  }
  .pp{
    content: "\54C1\724C";
    display: inline-block;
    font-size: .5rem;
    line-height: .6rem;
    color: #333;
    background-color: #ffd930;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }
  .ys{
    transform: scale(.8);
    display: inline-block;
    margin-left: 4rem;
    line-height: 3;
    font-size: .3rem;
    color: #666;
  }
  .delivery_left{
    display: inline-block;
    transform: scale(0.6);
    font-size: .1rem;
    color: #fff;
    background-color: #3190e8;
    border: .025rem solid #3190e8;
    margin-left: 0.826rem;
  }
  .delivery_right{
    display: inline-block;
    transform: scale(0.6);
    font-size: .1rem;
    color: #3190e8;
    border: .025rem solid #3190e8;
    margin-left: -0.826rem;
  }
  .fee{
    transform: scale(.7);
    font-size: .5rem;
    color: #666;
    margin-left: -1rem;
  }

  .distance_time{
    transform: scale(.7);
    position: absolute;
    right: -1.30rem;
    top: 2.13rem;
  }
  .dis{
    color: #999;
  }
  .order_time{
    color: #3190e8;
  }
  h5{
  text-align: left;
  }
</style>
