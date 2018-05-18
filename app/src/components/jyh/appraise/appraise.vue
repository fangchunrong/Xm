<template>
    <div class="container">
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
                <li class="food" v-for="(li,index) in food" :style="{color:li.beat},{background:li.beat1}" @click="blue(index)" :class="{blue:changeclass==index}">{{li.name}}({{li.count}})</li>
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
</template>

<script>
    import Vue from "vue"
    import pic from "@/assets/img/1.jpg"

    export default {
        name: "appraise",
        data() {
            return {
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
                // bottoms:[
                //     {
                //         pic:pic,
                //         // text1:"4*********b",
                //         give:"按时送达",
                //         pic1:pic1,
                //         pic2:pic2,
                //         s1:"超级至尊披萨_铁盘",
                //         s2:"韩式浓情风味鸡(标准份)"
                //     },
                //     {
                //         pic:pic,
                //         // username:"t****n",
                //         give:"按时送达",
                //         pic1:pic1,
                //         pic2:"",
                //         s1:"香草凤尾虾-5只装",
                //         s2:"鸡茸蘑菇汤"
                //     }
                // ]
            }
        },
        methods:{
          blue(index){
              this.changeclass = index
          }
        },
        created(){
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

        }
    }
</script>
<style>
   .el-rate__item {
       margin: -5px;
   }
</style>
<style scoped>
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
