<template>
  <div id="box">
    <div class="box">
      <!--上-->
      <div class="box-top">
        <span class="left" @click="infor"> < </span>
        <span class="right">我的余额</span>
      </div>
    </div>
    <!--中间-->
    <div class="box-middle">
      <div class="container">
        <div class="header">
          <span style="color: #666">当前余额</span>
          <img :src="pic" alt="" style="margin-left: 9.5rem">
          <span style="color: #3190e8" @click="ye">余额说明</span>
        </div>
        <p class="num" style="margin-top: .3rem">
          <span style="font-size: 1.8rem; color:#333 ">0.00</span>
          <span style="font-size: .7rem; color:#333 ">元</span>
        </p>
        <div class="button">提现</div>
      </div>
    </div>
    <p class="footer">交易明细</p>
    <div class="bottom">
      <img :src="photo" style="width:3.48rem; height: 3.48rem">
      <p style="color: #999; font-size: .7rem">暂无明细记录</p>
    </div>

  </div>
</template>

<script>
  import pic from '@/assets/img/3.jpg'
  import photo from '@/assets/img/4.png'

    export default {
        name: "money",
      data:function () {
        return {
          pic:pic,
          photo:photo
        }
      },
      methods :{
        infor() {
          this.$router.push({
            path:'/infor'
          })
        },
        ye() {
          this.$router.push({
            path:'/money1'
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
    background-color: #ccc;
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

</style>
