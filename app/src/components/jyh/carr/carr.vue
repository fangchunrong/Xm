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
                    <li class="hot1">热销榜</li>
                </ul>
                <!--右-->
                <ul class="food">
                    <li class="food1">

                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "carr"
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
        
    }
    /*.list {*/

    /*}*/

    /*.hot {*/
        /*width:3.8rem;*/
    /*}*/

    /*.food {*/

    /*}*/








</style>
