<template>
  <div id="box">
    <div class="box">
      <!--上-->
      <div class="box-top">
        <span class="left" @click="infor"> < </span>
        <span class="right">我的积分</span>
      </div>
    </div>
    <!--中间-->
    <div class="box-middle">
      <div class="container">
        <div class="header">
          <span style="color: #666">当前积分</span>
          <img :src="pic" alt="" style="margin-left: 9.5rem">
          <span style="color: #3190e8" @click="jf">积分说明</span>
        </div>
        <p class="num" style="margin-top: .3rem">
          <span style="font-size: 1.8rem; color:#333 ">0</span>
          <span style="font-size: .7rem; color:#333 ">分</span>
        </p>
        <div class="button" @click="btt">积分兑换商品</div>
      </div>
    </div>
    <!--下-->
    <p class="footer">最近30天积分记录</p>
    <div class="bottom">
      <img :src="photo" style="width:3.48rem; height: 3.48rem">
      <p style="color: #666; font-size: .7rem; margin: .8rem;">最近30天无积分记录</p>
      <span style="font-size: .5rem;color: #999;">快去下单赚取大量积分吧</span>
    </div>

    <!--弹框代码-->
    <div v-if="orshow" class="small-box animated bounceIn">
      <div class="yuan">
        <span class="yuan1"></span>
        <span class="yuan2"></span>
      </div>
      <p class="import">快去下单赚取大量积分吧</p>
      <button class="bttn" @click="hide">确认</button>
    </div>

  </div>
</template>

<script>
  import pic from '@/assets/img/3.jpg'
  import photo from '@/assets/img/4.png'

  export default {
    name: "score",
    data:function () {
      return {
        pic:pic,
        photo:photo,
        orshow:false
      }
    },
    methods :{
      infor() {
        this.$router.push({
          path:'/infor'
        })
      },
      jf() {
        this.$router.push({
          path:'/score1'
        })
      },
      btt() {
        this.orshow = true
      },
      hide() {
        this.orshow = false
      }
    }
  }
</script>

<style scoped>

  /*中间*/
  .box-middle {
    padding: .3rem;
    background-color: #3190e8;
  }
  .container {
    padding: .4rem;
    background-color: #fff;
    border-radius: .15rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    font-size: .55rem;
  }

  /*按钮*/
  .button {
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    color: #fff;
    border-radius: .15rem;
    line-height: 2rem;
    margin-top: 1rem;
    text-align: center;
    background-color:#fe6d47;
  }
  /*交易明细*/
  .footer {
    font-size: .6rem;
    color: #999;
    line-height: 2rem;
    padding-left: .5rem;
  }

  /*底部*/
  .bottom {
    text-align: center;
    margin-top: 3rem;
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
    background-color: #4cd964;
    margin-top: .8rem;
    border: 1px;
    font-weight: 700;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }

  .import {
    margin-top: 1rem;
  }
</style>
