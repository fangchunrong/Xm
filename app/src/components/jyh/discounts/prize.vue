<template>
  <div id="box">
    <div class="box">
      <!--上-->
      <div class="box-top">
        <span class="left" @click="discounts"> < </span>
        <span class="right">推荐有奖</span>
      </div>
      <!--图片-->
      <img src="@/assets/img/11.png" style="width: 100%;height: 10rem">

      <!--微信，qq等-->
      <div class="box-middle">
        <div class="weixin" v-for="weixin in array" @click="dianji">
          <img :src="weixin.pic" alt="">
          <p>{{weixin.text}}</p>
        </div>
      </div>

      <!--累计收益-->
      <div class="num">
        <div class="num_l" style="border-right:1px solid #666;">
          <p>累计收益</p>
          <p>
            <span style="font-size: .8rem;color: #ff5633;font-weight: 700;">0</span>
            元</p>
        </div>
        <div class="num_l">
          <p>成功邀请</p>
          <p>
            <span style="font-size: .8rem;color:#666;font-weight: 700;">0</span>
            元</p>
        </div>
      </div>

      <p style="font-size: .5rem;color: #666;text-align: center;margin-top: 1rem;">-收益明细-</p>
      <!--下-->
      <div class="footer">
        <img src="@/assets/img/12.png">
        <p>还不赶紧去邀请好友</p>
      </div>

      <!--弹框代码-->
      <div v-if="orshow" class="small-box animated bounceIn">
        <div class="yuan">
          <span class="yuan1"></span>
          <span class="yuan2"></span>
        </div>
        <p class="import">请在饿了么APP中打开</p>
        <div class="bttn" @click="bbb">确认</div>
      </div>

    </div>
  </div>
</template>

<script>
  import pic from "@/assets/img/weixin.png"
  import pic1 from "@/assets/img/qq.png"
  import pic2 from "@/assets/img/weibo.png"
    export default {
        name: "prize",
        data:function(){
          return {
            array:[
              {
                pic:pic,
                text:"邀请微信好友"
              },
              {
                pic:pic1,
                text:"邀请QQ好友"
              },
              {
                pic:pic2,
                text:"面对面邀请"
              }
            ],
            orshow:false

          }
        },
        methods:{
          discounts(){
            this.$router.push({
              path:'/discounts'
            })
          },
          dianji(){
            this.orshow = true
          },
          bbb() {
            this.orshow = false
          }

        }
    }
</script>

<style scoped>

  /*微信 QQ*/
  .box-middle {
    display: flex;
    padding: 1rem 0;
    background-color: #fff;
  }
  .weixin {
    flex: 1;
    text-align: center;
  }
  .weixin img {
    margin-top: .2rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  p {
    margin-top: .3rem;
    font-size: .5rem;
    color: #333;
  }

  /*下*/
  .num {
    display: flex;
    margin-top: 1rem;
    font-size: .5rem;
    color: #666;
  }
  .num_l {
    flex: 1;
    text-align: center;
  }

  /*脚部*/
  .footer {
    text-align: center;
    margin-top: 1rem;
  }
  .footer img {
    width: 1.3rem;
    height: 1.6rem;
  }

  /*弹出框*/
  .small-box {
    width: 12.218rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 13%;
    right: 50%;
    top: 28%;
    border-radius: 3%;
  }

  .yuan {
    width: 3rem;
    height: 3rem;
    border: .15rem solid #f8cb86;
    border-radius: 50%;
    position: relative;
    margin-top: 1rem;
  }

  .yuan1 {
    display: block;
    width: .12rem;
    height: 1.5rem;
    background-color: #f8cb86;
    position: absolute;
    left: 50%;
    top: 20%;
  }

  .yuan2 {
    display: block;
    width: .2rem;
    height: .2rem;
    position: absolute;
    left: 50%;
    top: 80%;
    background-color: #f8cb86;
  }

  .bttn {
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    background-color: #4cd964;
    margin-top: .8rem;
    border: 1px;
    font-weight: 700;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
    line-height: 1.74rem;
  }

  .import {
    font-size: .7rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }
</style>
