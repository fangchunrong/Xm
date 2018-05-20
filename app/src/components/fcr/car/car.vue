<template>
    <div>
        <span class="el-icon-arrow-left goback" @click="goback"></span>
        <div class="top">
            <img :src="hf" alt="" class="header_cover">
            <div class="des_header">
                <a href="#" class="des_top">
                    <div class="des_left">
                        <img :src="hf" alt="" class="des_img">
                    </div>
                    <div class="des_right">
                        <h4 class="des_title">效果演示</h4>
                        <p class="des_text">商家配送／分钟送达／配送费¥5</p>
                        <p class="des_bot">公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
                    </div>
                    <p class="el-icon-arrow-right"></p>
                </a>
            </div>
        </div>

        <div class="cen">
               <div class="cen_left">
                   <span class="mr" :class="{sp:changeblue}" @click="change">商品</span>
               </div>
                <div class="cen_right">
                    <span class="mr" :class="{sp:blue}" @click="change1">评价</span>
                </div>
        </div>

        <div class="bot" v-if="f">

            <ul class="spul">
                <div class="win">
                <div class="divs">

                <li v-for="(al,index) in all" :class="{dj:index==crent}" @click="dj(index,$event)" class="lis">
                    <img :src="al.icon_url" alt="" class="tb" v-if="index==0||index==1">
                    {{al.name}}
                </li>
                </div>
                </div>
                <ul class="twoul">
                    <div class="bb" >
                    <li v-for="al in all" class="aa">
                        <div class="twoli">
                            <div class="twoli_header">
                                <span class="twoli_menu">{{al.name}}</span>
                                <p class="twoli_des">{{al.description}}</p>
                                <div class="dian">...</div>
                            </div>

                        </div>
                        <div v-for="a in al.foods" class="onediv">
                            <img :src="href+a.image_path" class="imgs">
                            <div style="width: 100%">
                            <h3>{{a.name}}</h3>
                                <p class="onep">{{a.description}}</p>
                                <p class="twop">
                                    <span class="span1">月售{{a.month_sales}}份</span>
                                    <span class="span1">好评率{{a.satisfy_rate}}%</span>
                                </p>
                                <p class="threep">
                                    <span class="span2">111111111111111111111</span>
                                </p>
                                <div class="foot">
                                    <div class="food_price">
                                        <span>¥</span>
                                        <span>{{a.specfoods[0].price}}</span>
                                        <span>起</span>
                                    </div>
                                    <div class="food_num" style="display: none">
                                        <span class="jian" @click="ggjian" >-</span>
                                        <span  style="color: red;font-size: .4rem;display: block;float: right;margin-right: 0.4rem">{{cs}}</span>
                                    </div>

                                    <div class="choice">

                                        <span class="show_choice" v-if="a.specfoods.length==3" @click="gg(a,$event)">选规格</span>
                                        <span class="jiahao" v-if="!(a.specfoods.length==3)" @click="jh">+</span>
                                    </div>
                                </div>
                            </div>
                            <span class="jingpin" v-if="a.attributes.length==1">新品</span>
                            </div>

                    </li>
                   </div>

                </ul>
            </ul>
        </div>

        <div class="container" v-if="pj1">
            <!--上-->
            <div class="header">
                <div class="header_l">
                    <p class="p1">{{return3}}</p>
                    <p class="p2">综合评价</p>
                    <p class="p3">高于周边商家76.9%</p>
                </div>
                <div class="header_r">
                    <p>
                        <span class="span1">服务态度</span>
                        <el-rate
                            v-model="return1"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                        </el-rate>
                    </p>
                    <p>
                        <span class="span1">菜品评价</span>
                        <el-rate
                            v-model="return2"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                        </el-rate>
                    </p>
                    <p>
                        <span class="span1">送达时间</span>
                        <span class="s1">分钟</span>
                    </p>
                </div>
            </div>

            <!--中间-->
            <ul class="middle">
                <li class="food" v-for="(li,index) in food" :style="{color:li.beat},{background:li.beat1}" @click="blue6(index)" :class="{blue:changeclass==index}">{{li.name}}({{li.count}})</li>
            </ul>

            <!--下-->
            <ul class="bottom">
                <li class="bottom1" v-for="bottom1 in text1">
                    <img :src="bottom1.avatar"  class="one1">
                    <div class="one2">
                        <div class="h1">
                            <div class="rh1">
                                <p class="pp1">{{bottom1.username}}</p>
                                <p class="pp2">
                                    <el-rate v-model="bottom1.rating_star"></el-rate>
                                    <span class="pp3">{{bottom1.time_spent_desc}}</span>
                                </p>
                            </div>
                        </div>
                        <ul class="h2">
                            <li  v-for="bottom2 in bottom1.item_ratings" >
                                <div>
                                    <img :src="bottom2.image_hash" alt="" class="im" v-if="bottom2.image_hash!=0">
                                </div>
                                <span class="li1">{{bottom2.food_name}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="one3">
                        2017-02-10
                    </div>
                </li>
            </ul>

        </div>





        <div class="gg" v-show="orgg">
            <div class="gg1">
            <div class="gg1_header">
                <p>{{c}}</p>
                <p @click="gb">X</p>
            </div>
            <h5>规格</h5>
                <ul>
                    <li v-for="(gg,index) in ggs" @click="xz(index)" :class="{blue1:crent1==index}">{{gg.specs_name}}</li>
                </ul>
                <div class="gg1_foot">
                    <span>{{price}}</span>
                    <div class="buy" @click="addbuy">加入购物车</div>
                </div>
            </div>

        </div>
        <div class="buycar">
            <div class="img" @click="zs">
                <img src="@/assets/img/car.png">
                <span class="sl" v-if="cs!=0">{{cs}}</span>
            </div>
            <div class="num">
                <div>{{count}}</div>
                <div>配送费5</div>
            </div>
            <div class="gobuy" @click="sett">
                <div >去结算</div>
            </div>
            <div class="zhanshicar" v-if="showcar">
                <div class="zhanshicar_header">
                    <span>购物车</span>
                    <span @click="clear">清空</span>
                </div>
                <ul>
                    <li v-for="(car,index) in incar" class="incar" v-if="car!='#'">
                        <div class="carleft">
                            <p>{{c}}</p>
                            <p>{{car.gg}}</p>
                        </div>
                        <div class="carright">
                            <div>{{car.price}}</div>
                            <div>
                                <span @click="jianjian(index,car.price)">-</span>
                                <span>{{car.sl}}</span>
                                <span @click="jiajia(index,car.price)">+</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
            <!--<div class="black"></div>-->








    </div>
</template>

<script>
    import Vue from 'vue';
    import Vuex from 'vuex'
    import pic from "@/assets/img/1.jpg"
    Vue.use(Vuex);
    var crtl = this;
    const store = new Vuex.Store({
        state:{
            price:0,//购物车将要战士的初始价格
            count:null,//右上角红色span
            incar:[],
        },
        mutations:{
            add(state,b){
               state.count++;
                state.price+=b;
            },
            jianjian(state,p){
                state.count--;
                state.incar[p.index].sl--;
                state.price-=p.p
            },
            jiajia(stata,p){
                stata.incar[p.index].sl++
                stata.count++;
                stata.price+=p.p
            },
            clear(state){
                state.count=0;
                state.price=0.00;
                state.incar=[];
            }

        }
    })
  export default{
        name: "car",
        data(){
            return {
                all: null,
                hf:"",
                changeblue:true,
                blue:false,
                crent:0,
                crent1:0,
                index:[],
                bb:7,
                bb1:12,
                bb2:7,
                href:"https://elm.cangdu.org/img/",
                diss:[],
                top:0,
                or:true,
                w:true,
                c:null,
                orgg:false,
                ggs:null,
                price:null,
                count:"0.00",
                cs:"",
                carprice:"0.00",
                sp:null,
                xb:0,
                sl:1,
                incar:null,
                showcar:false,
                z:null,
                b:null,
                f:true,
                pj1:false,


                return1:null,
                return2:null,
                return3:"",
                //从下表为0的开始点击
                changeclass:0,
                food:"",
                //下
                pic:pic,
                text1:null,
                value1: null,
            }
        },
        methods:{
            goback(){
              this.$router.push({
                  name: "home",
              } )
            },
            blue6(index){
                this.changeclass = index
            },
            jianjian(index,price){
                var p = {
                    index:index,
                    p:price
                }
                store.commit('jianjian',p);
                this.cs =store.state.count;
                this.count = store.state.price
                this.$set(this.incar,index,store.state.incar[index]);
                if(store.state.incar[index].sl==0){
                    store.state.incar.splice(index,1);
                }
                if(store.state.incar.length==0){
                    this.showcar=false
                }
            },
            sett(){
              this.$router.push({path:'/set'})
            },
            ggjian(){
                //规格见见
            },
            jiajia(index,price){
                var p = {
                    index:index,
                    p:price
                };
                store.commit("jiajia",p);
                this.$set(this.incar,index,store.state.incar[index])
                this.cs =store.state.count
                this.count = store.state.price
            },
            zs(){
                this.showcar=!this.showcar
            },
            clear(){
                store.commit("clear")
                this.showcar = false
                this.incar=null;
                this.cs = store.state.count;
                this.count = store.state.price;
                console.log(store.state.incar)
                console.log(this.incar)
            },
        aaa(index){
            var uls = document.getElementsByClassName('divs')[0];
            var ul = document.getElementsByClassName("twoul")[0];
            this.crent = index;
            this.a=true;
            var timer=setInterval(()=>{
                if(index==1&&ul.scrollTop==0){
                    this.crent = 0;
                    this.crent = index;
                    clearInterval(timer)
                }
            },20);
            if(index<=4){
                uls.style.top = 0;
            }
            if(index>4){
                var x = 67*index;
                uls.style.top=-(x-67*4)+"px";
            }
            if(index>=15){
                uls.style.top =-737+"px";
            }
        },
            change(){
              this.blue = false;
              this.changeblue=true;
              this.pj1 = false;
              this.f = true;
          },
            change1(){
                this.changeblue=false;
                this.blue=true;
                this.f = false;
                this.pj1 = true;


            },
            dj(index,$event) {
                this.w =false;
               var  r = false;
                clearInterval(window.timer13);
                this.or = false;
                var uls = document.getElementsByClassName('divs')[0];
                var two = document.getElementsByClassName("aa");
                var bb =document.getElementsByClassName("bb")[0];
                var ul = document.getElementsByClassName("twoul")[0];
                var divs = document.getElementsByClassName("divs")[0];
                var dis = 0;
                     for (var i = 0;i<index;i++){
                             dis+=two[i].offsetHeight;
                         }
                function sd(mark,index,dis,a) {
                         if(index==0){
                             a.scrollTop = 0;
                             this.aaa(index);
                             return 0;
                         }
                        var b = mark[index].offsetHeight;
                        var t =0;
                        var allt = 20;
                        var allpy = dis-b;
                        var timer = setInterval(()=>{
                            t++;
                            a.scrollTop = b+(allpy/allt)*t;
                            if(t>=allt){
                               r=true;
                                this.aaa(index);
                             clearInterval(timer);

                            }

                        },20)
                    };

             sd.call(this,two,index,dis,ul);
                    console.log(r)
                    if(r==true) {
                        window.timer13 = setInterval(() => {
                            console.log("13");
                            for (var i = 0; i < two.length; i++) {
                                var x = two[i].offsetHeight;
                                if (this.diss.length == 0) {
                                    var h = x;
                                } else {
                                    var h = x + this.diss[i - 1];
                                }
                                this.diss.push(h);

                                if (ul.scrollTop >= this.diss[i]) {
                                    this.aaa(i + 1);
                                    this.a = false;
                                    if (i >= 8) {
                                        divs.style.top = -536 + "px";
                                    }
                                }
                            }
                        }, 20);
                    }


                        },
            jh(){
            console.log("我是加号")
            },
            gb(){
            this.orgg = false
            },
            gg(a,$event){
            this.orgg = !this.orgg;
            $event.target.parentNode.parentNode.childNodes[2].style.display="block";
            this.c = a.name;
            this.ggs = a.specfoods;
            this.price = this.ggs[this.crent1].price
            },
            xz(index){
                this.crent1= index;
                this.price = this.ggs[this.crent1].price;
            },
            addbuy(name){
                this.price = this.ggs[this.crent1].price;//展示价格
                store.commit('add',this.price);
                this.cs = store.state.count;//获取state里计算后的
                this.count = store.state.price;
                var sp = {
                    name:this.c,
                    price:this.ggs[this.crent1].price,
                    gg:this.ggs[this.crent1].specs_name,
                    sl:this.sl,
                    id:this.crent1
                };
                if(store.state.incar[sp.id]=="#"){
                    store.state.incar[sp.id]=sp
                }
                if(store.state.incar[sp.id]!=null){
                     store.state.incar[sp.id].sl++;
                }else{
                    store.state.incar[sp.id]=sp
                }
                 for(var i = 0;i<sp.id;i++){
                     if(store.state.incar[i]==undefined){
                        store.state.incar[i]="#"
                  }
                }
                this.incar =store.state.incar;

            }
        },
      created(){
                                        var timer = setInterval(() => {
                                            var a = this.or;
                                            if (a == false) {
                                                clearInterval(timer);
                                            }
                                            var ul = document.getElementsByClassName("twoul")[0];
                                            var two = document.getElementsByClassName("aa");
                                            var divs = document.getElementsByClassName("divs")[0];
                                            for (var i = 0; i < two.length; i++) {
                                                var x = two[i].offsetHeight;
                                                if (this.diss.length == 0) {
                                                    var h = x;
                                                } else {
                                                    var h = x + this.diss[i - 1];
                                                }
                                                this.diss.push(h);
                                                if (ul.scrollTop >= this.diss[i]) {
                                                    this.aaa(i + 1);
                                                    if (i >= 8) {
                                                        divs.style.top = -536 + "px";
                                                    }
                                                }
                                            }
                                        }, 20);
            this.hf = this.$route.query.href
            Vue.axios.get(`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1`).then((response)=>{
                //点击食品分类时的数据
                console.log(response.data);
                this.all = response.data;
                function qiegeFn(Arr) {
                    let newStr = "";
                    var tmp = Arr.substring(0, 1) + "/"
                    newStr += tmp;
                    var tmp = Arr.substring(1, 3) + "/"
                    newStr += tmp;
                    var tmp = Arr.substring(3, Arr.length) + "."
                    newStr += tmp;
                    var href = "https://fuss10.elemecdn.com/"
                    href += newStr
                    if (Arr.length == 35) {
                        var hz = "png"
                    } else {
                        var hz = "jpeg"
                    }
                    return href += hz
                };

               for(var i = 0;i<this.all.length;i++){
                    this.all[i].icon_url=qiegeFn(this.all[i].icon_url)
                   if(this.all[i].icon_url=="https://fuss10.elemecdn.com///.jpeg"){
                       this.all[i].icon_url=null;
                   }
               }
            })



          //获取评价分数
          Vue.axios.get("http://cangdu.org:8001/ugc/v2/restaurants/1/ratings/scores").then((response)=>{
              // console.log(response.data)
              // 获取服务评分
              this.return1 =Number(response.data.service_score.toFixed(1))
              // console.log(typeof this.return1)

              //获取菜品评价
              //toFixed()：保留小数
              this.return2 = Number(response.data.food_score.toFixed(1))

              // 获取综合评分
              this.return3 = Number(response.data.overall_score.toFixed(1))
              //   console.log(typeof this.return3)
          });

          //获取评价分类
          Vue.axios.get("http://cangdu.org:8001/ugc/v2/restaurants/1/ratings/tags").then((response)=>{
              //response.data:是请求返回的数据
              // console.log(response.data)
              this.food = response.data

          });

          //获取评价信息
          Vue.axios.get("http://cangdu.org:8001/ugc/v2/restaurants/1/ratings?offset=0&limit=10").then((response)=>{
              console.log(response.data)
              this.text1 = response.data
              // console.log(this.text1 )
              function qiegeFn(Arr) {
                  let newStr = "";
                  if(Arr==""){
                      return pic
                  }
                  var tmp = Arr.substring(0, 1) + "/"
                  newStr += tmp;
                  var tmp = Arr.substring(1, 3) + "/"
                  newStr += tmp;
                  var tmp = Arr.substring(3, Arr.length) + "."
                  newStr += tmp;
                  var href = "https://fuss10.elemecdn.com/"
                  href += newStr
                  if (Arr.length == 35) {
                      var hz = "png"
                  } else {
                      var hz = "jpeg"
                  }
                  return href += hz
              };

              for(var i = 0;i<this.text1.length;i++){
                  this.text1[i].avatar = qiegeFn(this.text1[i].avatar)
              }

              function qiege1Fn(Arr) {
                  let newStr = "";
                  if(Arr=="") {
                      return 0
                  }
                  var tmp = Arr.substring(0, 1) + "/"
                  newStr += tmp;
                  var tmp = Arr.substring(1, 3) + "/"
                  newStr += tmp;
                  var tmp = Arr.substring(3, Arr.length) + "."
                  newStr += tmp;
                  var href = "https://fuss1 0.elemecdn.com/"
                  href += newStr
                  if (Arr.length == 35) {
                      var hz = "png"
                  } else {
                      var hz = "jpeg"
                  }
                  return href += hz
              };

              for(var i= 0;i<this.text1.length;i++) {
                  for(var j = 0;j<this.text1[i].item_ratings.length;j++){
                      this.text1[i].item_ratings[j].image_hash = qiege1Fn(this.text1[i].item_ratings[j].image_hash)
                  }
              }


          });





        }}
</script>
<style>
    .el-rate__item {
        margin: -5px;
    }
</style>
<style scoped>
    .jian{
        font-size: .5rem;
        background: white;
        border-radius: 50%;
        border: 1px solid black;
        display:block;
        width: 22%;
        margin-left: .565rem;
        text-align: center;
        float: left;
    }
    .incar{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .carleft p{
        margin: .4rem;
    }
    .carright{
        display: flex;
        width: 35%;
        justify-content: space-between;
        align-items: center;
    }
    .carright div{
        width: 50%;
    }
    .carright div:nth-of-type(1){
        color: #f60;
    }
    .carright div:nth-of-type(2) span:first-child{
        color: #3190e8;
        display: inline-block;
        width: .5rem;
        height: .5rem;
        background: white;
        border: deepskyblue solid 1px;
        border-radius: 50%;
        text-align: center;
        vertical-align: middle;
        line-height: 0.3478rem;
    }
    .carright div:nth-of-type(2) span:nth-of-type(3){
        color: white;
        display: inline-block;
        width: .6rem;
        height: .6rem;
        border-radius: 50%;
        border: deepskyblue solid 1px;
        background: deepskyblue;
        text-align: center;
        vertical-align: middle;
        line-height: 0.45rem;
    }
    .black{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,.4);
        z-index: 10;
    }
    .zhanshicar{
        position:fixed;
        bottom: 3rem;
        left: 0;
        width: 100%;
        z-index: 11;
    }
    .zhanshicar ul{
        background: white;
        color: black;
    }
    .zhanshicar_header span:first-child{
        margin-left: .3rem;
    }
    .zhanshicar_header span:nth-of-type(2){
        margin-right: .3rem;
    }

    .zhanshicar_header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: .6rem;
        padding-bottom: .6rem;
        background: #eceff1;
    }
    .gobuy{
        background-color: #4cd964;
        position: absolute;
        right: 0;
        width: 5rem;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .gobuy div{
        font-size: .7rem;
        color: #fff;
        font-weight: 700;
    }
    .num{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 3.5rem;
    }
    .num div{
        font-size: .8rem;
        font-weight: 300;
        margin-bottom: .5rem;
    }
    .sl{
        position: absolute;
        top: -.25rem;
        right: -.25rem;
        background-color: #ff461d;
        line-height: .7rem;
        text-align: center;
        border-radius: 50%;
        border: .025rem solid #ff461d;
        min-width: .7rem;
        height: .7rem;
        font-size: .5rem;
        color: #fff;
        font-family: Helvetica Neue,Tahoma,Arial;
    }
    .buycar{
        position: fixed;
        background-color: #3d3d3f;
        bottom: 0;
        width: 100%;
        height: 2.99rem;
        left: 0;
        color: white;
    }
    .img{
        position: absolute;
        display: table-cell;
        border-radius: 50%;
        border: black solid 0.1rem;
        left: .5rem;
        top: -.5rem;
        width: 2.39rem;
        height: 2.39rem;
        background: #3190e8;
        z-index: 12;
    }
    .img img{
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -0.695rem;
        margin-left: -0.695rem;
        width: 1.39rem;
        height: 1.39rem;
    }
    .blue1{
        border: .025rem solid deepskyblue!important;
    }
    .gg1_header{
        display: flex;
        align-items: right;
        justify-content:flex-end;
    }
    .gg1_header p:first-child {
        width: 50%;
    }
    .gg1_header p:nth-of-type(2){
        margin-right: .3rem;
        font-size: 1rem;
        color: #c5c5c5;
    }
    .gg1_header p{
        margin-top: .5rem;
    }
    .gg1{
        position: absolute;
        top: 35%;
        left: 15%;
        width: 70%;
        background-color: #fff;
        z-index: 18;
        border: 1px;
        border-radius: .2rem;
    }
    .gg1 h5{
        padding: .5rem;

    }
    .gg1 ul{
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    .gg1 ul li{
        display: inline-block;
        font-size: .6rem;
        padding: .3rem .5rem;
        border: .025rem solid #ddd;
        border-radius: .2rem;
        margin-right: .5rem;
        margin-bottom: .2rem;
    }
    .gg1_foot{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f9f9f9;
        padding: .5rem;
        border: 1px;
        margin-top: 1.2rem;
        border-bottom-left-radius: .2rem;
        border-bottom-right-radius: .2rem;
    }
    .buy{
        width: 4rem;
        height: 1.3rem;
        background-color: #3199e8;
        border: 1px;
        border-radius: .15rem;
        font-size: .6rem;
        color: #fff;
        text-align: center;
        line-height: 1.3rem;
    }
    .gg{
       background-color: rgba(0,0,0,.4);
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 17;
    }
    .jingpin{
        display: block;
        top: 0.434rem;
        left: -0.434rem;
        font-size: .5rem;
        color: white;
        position: absolute;
        padding: 0 .3rem;
        transform: rotateZ(311deg);
        background: greenyellow;
        height: .5rem;
        z-index: 10;
    }
    .bb{
        top: 0;
        right: 0;
        position: absolute;
        transition: all .5s linear;
        overflow-x: hidden;
    }
    .aa{
        width: 100%;

    }
    .jiahao{
        display: block;
        font-size: .55rem;
        color: #fff;
        padding: .1rem .2rem;
        background-color: #3190e8;
        border-radius: 50%;
        border: 1px solid #3190e8;
    }
.goback{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    z-index: 11;
    padding-top: .2rem;
    padding-left: .2rem;
    font-size: 1.3rem;
    color: white;
}
.top{
    overflow: hidden;
    position: relative;
    z-index: 10;
    width: 100%;
    height: 4.37rem;
}
    .header_cover{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        filter: blur(10px);
    }
    .des_header{
        position: relative;
        z-index: 12;
        background-color: rgba(119,103,137,.43);
        padding: .4rem 0 .4rem .4rem;
        width: 100%;
        overflow: hidden;
    }
    .des_top{
        display: flex;
        height: 4.37rem;
    }
    .des_left{
        margin-right: .3rem;
    }
    .des_img{
        width: 2.9rem;
        height: 2.9rem;
        display: block;
        border-radius: .15rem;
        z-index: 100;
    }
    .des_right{
        flex: 1;
    }
    .des_title{
        font-size: .8rem;
        color: #fff;
        font-weight: 700;
        width: 100%;
        margin-bottom: 0.65rem;
    }
    .des_text{
        font-size: .5rem;
        color: #fff;
        margin-bottom: .65rem;
    }
    .des_bot{
        font-size: .5rem;
        color: #fff;
        width: 11.5rem;
    }
.el-icon-arrow-right{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: .3rem;
    z-index: 11;
    font-size: 0.8rem;
    color: white;
}
    .cen{
        display: flex;
        background-color: #fff;
        padding: .3rem 0 .6rem;
        border-bottom: 1px solid #ebebeb;
    }
    .cen_left,.cen_right{
        flex: 1;
        text-align: center;
        font-size: .65rem;
        color: #333333;
        padding: .2rem .1rem;

    }
    .mr{
        font-size: .65rem;
        color: #666;
        padding: .2rem .1rem;
        border-bottom: .12rem solid #fff;
    }
    .sp{
        border-bottom: .12rem solid  #3190e8;
        color: #3190e8;
    }
.lis{
    width: 83%;
    height: 2.9rem;
    line-height: 2.9rem;
    padding-left: 3%;
    overflow: hidden;
    border-left: .15rem solid #f5f5f5;
}
    .dj{
        border-left: .15rem solid #3190e8;
        background-color: #fff!important;
    }

    .spul{

        height: 25.9rem;
        overflow: hidden;
        width: 100%;
        display: block;
        position: relative;


    }
    .divs{
        position: absolute;
        top: 0;
        transition: all 0.3s linear ;
    }
    .win{
        overflow: hidden;
        height: 25.9rem;
        width: 30%;
        white-space: nowrap;
    }
    .tb{
        width: .5rem;
        height: .6rem;
        margin-left: .434rem;
    }
    .bot{
        overflow: hidden;
    }
    .twoul{
        height: 29rem;
        width: 72%;
        overflow-y: scroll;
        overflow-x: hidden;
        top: 0;
        right: 0;
        position: absolute;
    }
.twoul::-webkit-scrollbar {
    display: none;
}
    .twoli{
        padding: .4rem;
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .twoli_header{
        width: 11rem;
        white-space: nowrap;
        overflow: hidden;
    }
    .twoli_menu{
        font-size: .7rem;
        color: #666;
        font-weight: 700;
    }
    .twoli_des{
        font-size: .5rem;
        color: #999;
        width: 30%;
        display: inline-block;
    }
    .dian{
        color: red;
        width: .5rem;
        height: 1rem;
        display: inline-block;
        text-align: center;
        vertical-align:text-top;
        margin-left: 3.913rem;
    }
    .imgs{
        width: 2rem;
        height: 2rem;
        display: block;
    }
    .onediv{
        background-color: #fff;
        padding: .6rem .4rem;
        border-bottom: 1px solid #f8f8f8;
        display: flex;
        position: relative;

    }
    .onep{
        font-size: .5rem;
        color: #999;
        line-height: .6rem;
    }
    .twop{
        line-height: .8rem;
    }
    .span1{
        font-size: .5rem;
        color: #333;
    }
    .span2{
        color: rgb(241, 136, 79);
        border-color: rgb(240, 115, 115);
        font-size: .3rem;
        border: 1px solid currentColor;
        border-radius: .3rem;
        padding: .08rem;
        display: inline-block;
        transform: scale(.8);
        margin-left: -.35rem;
    }
    .food_num{
        width: 30%;
        padding-top: .1rem;
    }
    .food_price{
        width: 40%;
    }
.food_price span:first-of-type {
    font-size: .5rem;
    color: #f60;
    margin-right: .05rem;
}
.food_price span:nth-of-type(2) {
    font-size: .7rem;
    color: #f60;
    font-weight: 700;
    margin-right: .3rem;
}
.food_price span:nth-of-type(3) {
    font-size: .5rem;
    color: #666;
}
    .foot{
        margin-left: 0.4rem;
        font-size: 0;
        width: 100%;
        margin-top: .3rem;
        display: flex;
        justify-content: space-between;
    }
    .choice{
      margin-right: .3rem;
    }
    .show_choice{
        display: block;
        font-size: .55rem;
        color: #fff;
        padding: .1rem .2rem;
        background-color: #3190e8;
        border-radius: .2rem;
        border: 1px solid #3190e8;

    }



    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: .8rem .5rem;
        margin-bottom: .5rem;
    }
    /*左*/
    .header_l {
        flex: 3;
        text-align: center;
    }

    .p1 {
        font-size: 1.2rem;
        color: #f60;
    }
    .p2 {
        font-size: .65rem;
        color: #666;
        margin-bottom: .1rem;
    }
    .p3 {
        font-size: .4rem;
        color: #999;
    }
    /*右*/
    .header_r {
        flex: 4;
        margin-left: 30px;
    }
    .el-rate {
        display: inline-block;
        transform: scale(0.7);
    }
    .span1 {
        color: #666;
        font-size: .65rem;
    }

    .s1 {
        font-size: .4rem;
        color: #999;
        margin-left: .5rem;
    }


    /*中间*/

    .middle {
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        padding: .5rem;
    }
    .food {
        font-size: .6rem;
        color: #6d7885;
        padding: .3rem;
        background-color: #ebf5ff;
        border-radius: .2rem;
        border: 1px;
        margin: 0 .4rem .2rem 0;
    }



    .blue {
        background: #3190e8!important;
        color: #fff;
    }

    /*下*/
    .bottom {
        background: #ffffff;
    }
    .bottom1 {
        border-top: 1px solid #f1f1f1;
        padding: .6rem 0;
        display: flex;
        justify-content: space-around;
    }
    .one1 {
        width: 1.5rem;
        height: 1.5rem;
        margin-left: -1rem;
    }
    .one2 {
        margin-left: -2rem;

    }

    .one3 {
        font-size: .4rem;
        color: #999;
    }
    .pp1 {
        color: #666;
        margin-bottom: .2rem;
        font-size: .5rem;
    }
    .pp2 {
        transform: scale(0.8);
        margin-left: -1rem;
    }
    .pp3{
        font-size: .55rem;
        color: #666;
        margin-left: -.5rem;
    }
    .li1{
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .55rem;
        color: #999;
        width: 2.2rem;
        padding: .2rem;
        border: .025rem solid #ebebeb;
        border-radius: .15rem;
        margin-right: .3rem;
        margin-bottom: 4px;
    }

    .im{
        width: 3rem;
        height: 3rem;
        margin-right: .4rem;
        display: inline-block;
    }
    .h2{
        display: flex;
        justify-content: space-between;
    }

</style>


