<template>
    <div id="container">
        <div class="container">
            <!--背景-->
            <div class="nav1"></div>
            <!--导航-->
            <div class="nav">
                <i class="el-icon-arrow-left nav_l"></i>
                <i class="el-icon-arrow-right nav_r"></i>
                <div class="n_left">
                    <img src="@/assets/img/hhh.jpg" class="img" alt="">
                </div>
                <div class="n_right">
                    <h4>效果不错</h4>
                    <p class="p1">商家配送/分钟送达/配送费￥5</p>
                    <p class="p2">公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
                </div>
            </div>

            <!--中间-->
            <div class="header">
                <div class="d1">
                    <span>商品</span>
                </div>
               <div class="d1">
                   <span>评价</span>
               </div>
            </div>

            <!--下-->
            <div class="list">
                <!--左-->
                <ul class="hot">
                    <div class="win">
                        <div>
                            <li class="hot1" v-for="hot1 in hots">
                                <img :src=hot1.pic alt="" class="img1">
                                <span>{{hot1.count}}</span>
                            </li>
                        </div>
                    </div>
                </ul>
                <!--右-->
                <ul class="food">
                    <div class="win1">
                    <div class="txt">
                        <span class="span1">热销榜</span>
                        <span class="span2">大家喜欢吃，才叫真好吃。</span>
                    </div>
                        <li class="food1" v-for="food1 in foods">
                            <img :src=food1.pic1 alt="" class="img2">
                            <div class="guige">
                                <h3>{{food1.count1}}</h3>
                                <p class="a1">{{food1.count2}}</p>
                                <p class="a2">{{food1.count3}}</p>
                                <p class="a3">{{food1.count4}}</p>
                            </div>
                            <div class="money">
                                <div class="money1">
                                    <span class="b1">{{food1.count5}}</span>
                                    <span class="b2">{{food1.count6}}</span>
                                    <span class="b3">{{food1.count7}}</span>
                                </div>
                                <div class="guige1">
                                    <span class="b4">{{food1.count8}}</span>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import pic from "@/assets/img/z.png"
    import pic1 from "@/assets/img/kitty.jpg"
    export default {
        name: "carr",
        data:function() {
            return {
                pic:pic,
                pic1:pic1,
                hots:[
                    {
                        count:"热销榜",
                        pic:pic
                    },
                    {
                        count:"优惠",
                        pic:pic
                    },
                    {
                        count:"饮料",
                        pic:""
                    },
                    {
                        count:"单点",
                        pic:""
                    },
                    {
                        count:"新品",
                        pic:""
                    },
                    {
                        count:"测试",
                        pic:""
                    },
                    {
                        count:"qqq",
                        pic:""
                    },
                    {
                        count:"renyin",
                        pic:""
                    },
                    {
                        count:"热销榜",
                        pic:""
                    },
                    {
                        count:"qqq",
                        pic:""
                    },
                    {
                        count:"热饮",
                        pic:""
                    },
                    {
                        count:"小吃",
                        pic:""
                    },
                    {
                        count:"小吃",
                        pic:""
                    },
                    {
                        count:"小吃",
                        pic:""
                    },
                    {
                        count:"小吃",
                        pic:""
                    },
                    {
                        count:"小吃",
                        pic:""
                    },
                    {
                        count:"小吃",
                        pic:""
                    }
                ],
                foods:[
                    {
                        pic1:pic1,
                        count1:"1",
                        count2:"1",
                        count3:"月销量622份 好评率44%",
                        count4:"111111111111111111",
                        count5:"￥",
                        count6:"20",
                        count7:"起",
                        count8:"选规格"
                    },
                    {
                        pic1:pic1,
                        count1:"食品名称",
                        count2:"食品详情",
                        count3:"月销量631份 好评率33%",
                        count4:"食品活动",
                        count5:"￥",
                        count6:"20",
                        count7:"起",
                        count8:"选规格"
                    },
                    {
                        pic1:pic1,
                        count1:"食品名称",
                        count2:"食品详情",
                        count3:"月销量631份 好评率33%",
                        count4:"食品活动",
                        count5:"￥",
                        count6:"20",
                        count7:"起",
                        count8:"选规格"
                    },
                    {
                        pic1:pic1,
                        count1:"食品名称",
                        count2:"食品详情",
                        count3:"月销量631份 好评率33%",
                        count4:"食品活动",
                        count5:"￥",
                        count6:"20",
                        count7:"起",
                        count8:"选规格"
                    },
                    {
                        pic1:pic1,
                        count1:"食品名称",
                        count2:"食品详情",
                        count3:"月销量631份 好评率33%",
                        count4:"食品活动",
                        count5:"￥",
                        count6:"20",
                        count7:"起",
                        count8:"选规格"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
/*背景*/
.nav1 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3.48rem;
    background: url(../../../assets/img/00.jpg) no-repeat;
    filter:blur(10px);
}
/*导航*/
.nav {
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    overflow: hidden;
}
.nav_l,.nav_r {
    position: fixed;
    font-size: larger;
    font-weight: 700;
    color: #000;
}
.nav_l {
    top:.1rem;
    left: .1rem;
}
.nav_r {
    top: 1rem;
    right: .1rem;
}

.nav img {
    width: 2.9rem;
    height: 2.9rem;
    border-radius: .2rem;
    margin-left: .5rem;
}

.n_right{
    float: right;
    margin-right: 1rem;
}
.n_left {
    float: left;
}
h4,.p1,.p2 {
    color: #000;
}
.n_right h4 {
    font-size: .8rem;
    font-weight: 700;
    width: 100%;
    margin-bottom: .3rem;
}
.p1 {
    font-size: .5rem;
    margin: .5rem 0 .5rem 0;
}
.p2 {
    font-size: .5rem;
    width: 11.5rem;
}

    /*中*/
    .header {
        margin-top: 3.48rem;
        display: flex;
        background-color: #fff;
        padding: .3rem 0 .6rem;
        border-bottom: 1px solid #ebebeb;
    }

    .d1 {
        flex:1;
        text-align: center;
        padding: .3rem .1rem;
    }
    .d1 span {
        font-size: .65rem;
        color: #666;
        border-bottom: .12rem solid #fff;
    }

/*下*/
    .hot1 {
        padding: .7rem .3rem;
        border-bottom: .025rem solid #ededed;
        box-sizing: border-box;
        border-left: .15rem solid #f8f8f8;
        width:4rem;
    }
   .img1 {
        width: .8rem;
        height: .8rem;
   }

    .list {
        overflow: hidden;
    }
    .hot {
        float: left;
    }
    .food {
        float: right;
        width: 12.3rem;
    }

    /*右*/
    .txt {
        padding: .6rem;
    }
    .span1 {
        font-size: .7rem;
        color: #666;
        font-weight: 700;
    }
    .span2 {
        font-size: .5rem;
        color: #999;
    }

    /*窗口*/
    .win {
        width: 4rem;
        height:23.043rem;
        overflow-y:scroll;
    }
    .win1 {
        width:12.3rem;
        height:23.043rem;
        overflow-y:scroll;
    }
    /*隐藏滚动条*/
    .win::-webkit-scrollbar {
        display: none;
    }
    .win1::-webkit-scrollbar {
        display: none;
    }

    /*右边*/
    .img2  {
        margin-bottom: 1rem;
        width: 2rem;
        height: 2rem;
    }
    .food1 {
        background-color: #fff;
        padding: .6rem .4rem;
        border-bottom: 1px solid #f8f8f8;
    }
    h3 {
        font-size: .7rem;
        color: #333;
    }
    .a1 {
        font-size: .5rem;
        color: #999;
        line-height: .6rem;
    }
    .a2 {
        font-size: .5rem;
        color: #333;
    }
    .a3 {
        font-size: .3rem;
        border: 1px solid currentColor;
        border-radius: .3rem;
        padding: .08rem;
        display: inline-block;
        transform: scale(.8);
        margin-left: -.35rem;
        color: rgb(241, 136, 79);
        border-color: rgb(240, 115, 115);
    }
    .guige {
        display: inline-block;
    }
    .b1 {
        font-size: .5rem;
        color: #f60;
        margin-right: .05rem;
    }
    .b2 {
        font-size: .7rem;
        color: #f60;
        font-weight: 700;
        margin-right: .3rem;
    }
    .b3 {
        font-size: .5rem;
        color: #666;
    }
    .b4 {
        font-size: .5rem;
        color: #fff;
        padding: .1rem .2rem;
        background-color: #3190e8;
        border-radius: .2rem;
        border: 1px solid #3190e8;
        margin-top: .5rem;
    }
    .money {
        margin-left: 2.4rem;
        font-size: 0;
        margin-top: .3rem;
        display: flex;
        justify-content: space-between;
    }

</style>
