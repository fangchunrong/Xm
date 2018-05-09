<template>
    <div id="app">
      <div class="headtop">
        <span class="jt"><</span>
        <span class="tit">{{this.$route.query.tit}}</span>
      </div>
      <div class="sort">

        <div class="titt" @click="dj">
          <span :class="{xz:orxz}" v-if="!orxz" @click="orshow($event,tit)">{{this.$route.query.tit}}</span>
          <span v-if="orxz" :class="{xz:orxz}">分类</span>
          <span class="el-icon-caret-bottom" :class="{xz:orxz}"></span>
        </div>
        <div class="titt" @click="dj1">
          <span :class="{xz:orz}">排序</span>
          <span class="el-icon-caret-bottom" :class="{xz:orz}"></span>
        </div>
        <div class="titt" @click="dj2">
          <span :class="{xz:orx}">筛选</span>
          <span class="el-icon-caret-bottom " :class="{xz:orx}"></span>
        </div>
      </div>
      <!--以下为导航栏-->

      <div class="ha">
        <div class="left">
        <ul class="oneul">
          <li v-for="(al,index) in all" class="oneli">
            <img :src="al.image_url" alt="" class="tb" v-if="!index==0">
            <span class="alname" @click="dj3(index,$event)" >{{al.name}}</span>
            <span class="sum">{{al.count}}</span>
            <span class="el-icon-arrow-right"></span>
          </li>
        </ul>
        </div>
        <div class="right">
          <ul class="oneul">
            <li v-for="(al,index) in sz" class="twoli">
              <span class="alname" v-show="index!=0" @click="dj4(al.id,$event)">{{al.name}}</span>
              <!--<span class="alname">{{al.name}}</span>-->
              <span class="cou" v-show="index!=0">{{al.count}}</span>
            </li>
          </ul>
            </div>
      </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import user from "@/assets/img/user.png";
    export default {
      name: "all",
      data() {
        return {
          orxz: false,
          orx: false,
          orz: false,
          all: null,
          sz: '',
          jd:this.$route.query.jd,
          wd:this.$route.query.wd,
          tit:this.$route.query.tit,
          index:null
        }
      },
      methods: {
        dj() {
          this.orxz = !this.orxz;
          this.orx = false;
          this.orz = false
        },
        dj1() {
          this.orz = !this.orz;
          this.orxz = false;
          this.orx = false
        },
        dj2() {
          this.orx = !this.orx;
          this.orxz = false;
          this.orz = false

        },
        dj3(index,$event) {
            for(let i = 0;i<$event.target.parentNode.parentNode.childNodes.length;i++){
              $event.target.parentNode.parentNode.childNodes[i].style="background:#f1f1f1"
            }
            $event.target.parentNode.style="background:white";
             this.sz = this.all[index].sub_categories;

        },
        dj4(index,$event){
          console.log(index);
          console.log(this.jd)
          Vue.axios.get(`http://cangdu.org:8001/shopping/restaurants?latitude=${this.jd}&longitude=${this.wd}&restaurant_category_ids[]=${index}`).then((response)=>{
            //点击食品分类时的数据
            console.log(response.data)
          })
        },
        orshow($event,tit){
          if(tit == "甜品饮品"){
           tit = 8
          }else if(tit =="商超便利"){
            tit = 5
          }else if(tit == "美食"||tit=="简餐"||tit=="新店特惠"||tit=="麻辣烫"||tit=="包子粥店"||tit=="汉堡薯条"){
            tit =1
          }else if(tit == "川湘菜"){
            tit = 4
          }else if(tit == "鲜花蛋糕"){
            tit = 6
          }else if(tit =="日韩料理"||tit=="披萨意面"){
            tit = 0
          }else if(tit =="果蔬生鲜"){
            tit = 3
          }
          var a = $event.target.parentNode.parentNode.nextSibling.nextSibling.childNodes[0].childNodes[0];
          for(let i = 0;i<a.childNodes.length;i++){
            a.childNodes[i].style="background:#f1f1f1"
          }
          a.childNodes[tit].style="background:white";
          this.sz = this.all[tit].sub_categories;
        }
      },
      created() {
        Vue.axios.get(`http://cangdu.org:8001/shopping/v2/restaurant/category`).then((response) => {
          this.all = response.data;
          console.log(this.all);
          console.log(this.sz);
          function insert_flg(str, flg, length) {
            var newstr = "";
            var tmp = str.substring(0, 1);
            newstr += tmp + flg;
            var tmp = str.substring(1, 3);
            newstr += tmp + flg;
            var tmp = str.substring(3, length)
            newstr += tmp;
            return newstr;
          }

          function creatsrc(str) {
            var hf = "https://fuss10.elemecdn.com/";
            if (str == null) {
              return 0
            }
            var temp = insert_flg(str, "/", str.length);
            if (str.length == 35) {
              var hz = ".png"
            } else {
              var hz = ".jpeg"
            }
            var newtemp = temp + hz;
            str = hf + newtemp;
            return str;
          }

          for (var i = 0; i < this.all.length; i++) {
            this.all[0].image_url = null;
            this.all[i].image_url = creatsrc(this.all[i].image_url)
            this.all[7].image_url = user;
          }

        });

      }
    }
</script>

<style scoped>
.headtop{
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
}
.jt{
  font-size:1.4rem ;
  color: white;
}
  .tit{
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
  }
  .sort{
    margin-top: 2.6rem;
    display: flex;
    justify-content: space-around;
    justify-items: center;
    flex-direction: row;
    border-bottom: .025rem solid #f1f1f1;
  }
  .titt{
    border-right: .025rem solid #f1f1f1;
    vertical-align: middle;
    padding-bottom: 0.434rem;
  }
  .titt:last-child{
    border: 0;
  }
  .el-icon-caret-bottom{
    transition: all 0.5s;
  }
  .xz{
    color: deepskyblue;
    transform: rotateZ(180deg);
    transition: all 0.5s;
  }
  .tb{
    width: .8rem;
    height: .8rem;
    vertical-align: middle;
    margin-right: .2rem;
  }
  .alname{
    font-size: .5rem;
    color: #666;
    line-height: 1.8rem;
  }
  .ha{

  }
  .left{
    width: 50%;
    height: 100%;
    background: #f1f1f1;
  }
  .right{
    background: white;
    width: 50%;
    height: 16.08rem;
    overflow-x: hidden;
  }
.right::-webkit-scrollbar {display:none}
  .sum{
    display: inline-block;
    background-color: #ccc;
    font-size: .4rem;
    color: #fff;
    padding: 0 .1rem;
    border: .025rem solid #ccc;
    border-radius: .8rem;
    vertical-align: middle;
    margin-left: 1.17rem;
  }
  .el-icon-arrow-right{
    color: #cfcfcf;
  }
  .oneli{
    padding-left: 10px;
  }
  .twoli{
    border-bottom: 1px solid whitesmoke;
    margin-left: 1.17rem;
  }
  .cou{
    display: inline-block;
    font-size: .4rem;
    color: black;
    vertical-align: middle;
    float: right;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }
</style>
