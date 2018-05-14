<template>
    <div>
        <span class="el-icon-arrow-left goback" ></span>
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

        <div>
            <ul class="spul">
                <div class="win">
                <div class="divs">
                <li v-for="(al,index) in all" :class="{dj:index==crent}" @click="dj(index,$event)" class="lis">
                    {{al.name}}
                </li>
                </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "car",
        data(){
            return {
                all: null,
                hf:this.$route.query.href,
                changeblue:true,
                blue:false,
                crent:0,
                a:0,
                index:[],
                bb:7,
                bb1:12,
                bb2:7
            }
        },
        methods:{
          change(){
              this.blue = false;
              this.changeblue=true;
          },
            change1(){
                this.changeblue=false;
                this.blue=true;

            },
            dj(index,$event){
              //新品为412
              this.crent = index;
              console.log(index)
              var uls = document.getElementsByClassName('divs')[0];console.log("裹着li的div的position的top"+uls.offsetTop);
              switch (index){
                  case 8 :
                  {
                      uls.style.top = -315+"px";
                  }
                      break;
                  case 13 :
                  {
                      uls.style.top = -315*2+"px";
                  }
                      break;
                  case 17 :
                  {
                      uls.style.top = -315*3+"px";
                  }
                      break;
                  // case 5:{
                  //     uls.style.top = 0
                  // }
                  // break;
                  // case 9:{
                  //     uls.style.top = -315+"px"
                  // }
                  // break;
                  // case 14:{
                  //     uls.style.top = -315*2+"px"
                  // }
                  // break;
                  default:{
                      // if (uls.offsetTop!=0&&index<8){
                      //     uls.style.top =-315+"px";
                      //     var aa = index * 67-this.bb * 67;
                      //     uls.style.top = (uls.offsetTop - aa) + "px";
                      // }else if(index==5||index==6){
                      //    uls.style.top=0
                      // }
                      // if(index>8&&index<13){
                      //     // uls.style.top =-315+"px";
                      //     this.bb++;
                      //     console.log(index)
                      //     console.log(this.bb)
                      //     var aa =Math.abs(index* 67-(this.bb)*67);
                      //     console.log("aa"+aa)
                      //     this.bb--;
                      //     uls.style.top = (uls.offsetTop - aa) + "px";
                      // }
                      // if(index>13&&index<19){
                      //     uls.style.top =-315+"px";
                      //     this.bb1++;
                      //     var aa =index * 67-(this.bb1)*67;
                      //     uls.style.top = (uls.offsetTop - aa) + "px";
                      //     this.bb1--;
                      // }
                      if(index==4){
                          uls.style.top = 0;
                      }
                      if(index>4){
                         uls.style.top=-67+"px";

                      }
                  }
              }
              console.log("点击的li的"+$event.target.offsetTop)
            }
        },
        created(){
            Vue.axios.get(`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1`).then((response)=>{
                //点击食品分类时的数据
                console.log(response.data);
                this.all = response.data
            })
        }
    }
</script>

<style scoped>
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
    .dj{
        border-left: .15rem solid #3190e8;
        background-color: #fff;
    }
    .lis{
        height: 2.9rem;
        line-height: 2.9rem;
        width: 100%;
    }
    .spul{

        height: 25.9rem;
        overflow: hidden;


    }
    .divs{
        position: absolute;
        top: 0px;
        transition: all 0.3s linear ;
    }
    .win{
        overflow: hidden;
        position: relative;
        height: 25.9rem;
    }

</style>


