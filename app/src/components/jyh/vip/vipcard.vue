<template>
  <div id="box">
    <div class="box">
      <!--导航-->
      <div class="box-top">
        <span class="left" @click="vip"> < </span>
        <p class="right">兑换会员</p>
      </div>

      <!--购买会员-->
      <p class="buy">成功兑换后将关联到当前账号：
        <span style="font-weight: 700;color: #000; z-index: 1">t4terterter</span>
      </p>

      <!--中-->
      <div class="red">
          <input type="text" placeholder="请输入10位卡号" >
          <input type="text" placeholder="请输入6位卡密">
      </div>

      <!--兑换-->
      <div class="bottom">兑换</div>

      <!--下-->
      <div class="Binding" style="margin-top: 1rem;">
        <h3>——温馨提示——</h3>
        <p>新兑换的会员服务，权益以「会员说明」为准。</p>
        <p>月卡：30次减免配送费。</p>
        <p>季卡：90次减免配送费。</p>
        <p>年卡：360次减免配送费。</p>
        <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "vipcard",
      methods:{
          vip() {
            this.$router.push({
              path:'/vip'
            })
          }
      }
    }
</script>

<style scoped>


  /*P标签*/
  .buy {
    font-size: .6rem;
    color: #666;
    line-height: 2rem;
    padding-left: .7rem;
  }

  /*下*/

  .red {
    display: flex;
    flex-direction: column;
  }
  input{
    border-bottom: 1px solid #f5f5f5;
    height: 2rem;
    font-size: .65rem;
    color: #999;
    padding-left: .7rem;
  }

  .bottom {
    background-color: #ccc;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .7rem;
  }

  /*下边文字*/
  h3 {
    text-align: center;
    font-weight: 400;
    font-size: .65rem;
    color: #aaa;
    margin-bottom: .6rem;
  }
 .Binding p{
    font-size: .5rem;
    color: #aaa;
    line-height: .8rem;
    padding-left: 2rem;
  }
</style>
