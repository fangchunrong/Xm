<template>
  <div id="box">
    <div class="box">
      <!--导航-->
      <div class="box-top">
        <span class="left" @click="infor"> < </span>
        <p class="right">会员中心</p>
      </div>
      <!--购买会员-->
      <p class="buy">为账户
        <span style="font-weight: 700;color: #000; z-index: 1">t4terterter</span>
        购买会员
      </p>

      <!--会员特权-->
      <div class="vip_box">
        <!--上-->
        <div class="vip_box_header">
          <!--上左-->
            <span style="font-size: .7rem;
    color: #333;">会员特权</span>
          <!--上右-->
          <div class="header_r" @click="explain">
            <span style="font-size: .6rem;
    color: #999;margin-right: .2rem;">会员说明</span>
            <span style="color: #999;"> > </span>
          </div>
        </div>

        <!--中-->
        <div class="vip_box_middle">
           <div class="box_middle" v-for="box_middle in lists">
          <img :src="box_middle.pic" style="width: 1.6rem;height: 1.8rem;display: inline-block">
          <div class="middle_r">
            <h4>{{box_middle.h4}}</h4>
            <p>{{box_middle.p}}</p>
            <p>{{box_middle.p1}}</p>
          </div>
        </div>
      </div>
      </div>

        <!--开通会员-->
        <div class="apply">
          <div class="apply_vip">
            <span style="font-size: .7rem;color: #333;">开通会员</span>
          </div>
          <div class="buy_vip">
            <div class="buy_l">
              <span>1个月</span>
              <span style="font-weight: 700;color: #f60;">￥20</span>
            </div>
            <div class="buy_r" @click="buy">购买</div>
          </div>
        </div>

      <!--兑换会员-->
      <!--上-->
      <div class="vip_box_header" style="margin-top: .5rem" v-for="vip_box_header in vips">
        <!--上左-->
        <span style="font-size: .7rem;
    color: #333; margin-left: .8rem;">{{vip_box_header.count}}</span>
        <!--上右-->
        <div class="header_r">
            <span style="font-size: .6rem;
    color: #999;margin-right: .2rem;">{{vip_box_header.count1}}</span>
          <span style="color: #999;"> > </span>
        </div>
      </div>

        </div>
      </div>

</template>

<script>

  import pic1 from "@/assets/img/6.jpg"
  import pic2 from "@/assets/img/5.jpg"
    export default {
        name: "vip",
      data:function () {
        return{
          lists:[
            {
              pic:pic1,
              h4:"减免配送费",
              p:"每月减免30单，每日可减免3单，每单最高减4元",
              p1:"蜂鸟专送专享"
            },
            {
              pic:pic2,
              h4:"减免配送费",
              p:"每月减免30单，每日可减免3单，每单最高减4元",
              p1:"蜂鸟专送专享"
            }
          ],
          vips:[
            {
              count:"兑换会员",
              count1:"使用卡号密码"
            },
            {
              count:"购买记录",
              count1:"开发票"
            }
          ]

        }
      }
      ,
      methods:{
          infor(){
            this.$router.push({
              path:'/infor'
            })
          },
        explain() {
            this.$router.push({
              path:'/explain'
            })
        },
        buy() {
            this.$router.push({
              path:'/pay'
            })
        }
      }
    }
</script>

<style scoped>
  #box {
    width: 375px;
    height: 667px;
    background-color: #f5f5f5;
  }

  .box {
    width: 100%;
  }
  /*上*/
  .box-top {
    width: 375px;
    height: 1.95rem;
    background-color: #3190e8;
    border-bottom: 1px solid #fff ;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*上*/
  .box-top {
    width: 375px;
    height: 1.95rem;
    background-color: #3190e8;
    border-bottom: 1px solid #fff ;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    display: inline-block;
    font-size: 1.2rem;
    line-height: 2.2rem;
    color: white;
    position: absolute;
    left: 10px;
  }

  .right {
    font-size: 0.8rem;
    color: #fff;
    font-weight: 700;
  }

  /*P标签*/
  .buy {
    font-size: .6rem;
    color: #666;
    line-height: 2rem;
    padding-left: .7rem;
  }

  /*中间*/
  .vip_box {
    background-color: #fff;
    padding-left: .7rem;
    margin-bottom: .5rem;
  }

  .vip_box_header {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
  }

  .header_r {
    display: flex;
    align-items: center;
  }

  /*中*/
  .box_middle {
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    padding: .8rem 0;
  }
  .middle_r {
    margin-left: .5rem;
  }
   h4 {
    font-size: .7rem;
    color: #333;
    font-weight: 400;
  }
  p {
    margin-top: .2rem;
    font-size: .5rem;
    color: #999;
  }

  /*开会员*/
  .apply {
    background-color: #fff;
    padding-left: .7rem;
    margin-bottom: .5rem;
    height: 4.69rem;
  }

  .apply_vip {
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
  }

  .buy_vip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: .7rem;
    font-size: .7rem;
    line-height: 2.6rem;
  }

  .buy_r {
    border: .025rem solid #f60;
    border-radius: .2rem;
    line-height: 1.2rem;
    height: 1.2rem;
    width: 2.6rem;
    text-align: center;
    font-size: .6rem;
    color: #f60;
  }
</style>
