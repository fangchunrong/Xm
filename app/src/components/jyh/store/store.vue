<template>
  <div id="box">
    <div class="box">
        <h3>请重新进入</h3>
        <p>请返回后重新进入积分商城~</p>
        <img src="//yun.duiba.com.cn/webapp/img/retrylogin.png">
    </div>
  </div>
</template>

<script>
    export default {
        name: "store"
    }
</script>

<style scoped>

  .box {
    text-align: center;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
  }

  h3 {
    font-size: 26px;
    color: #0d7fd5;
    margin-bottom: 15px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 19px;
  }

  img {
    width: 7.652rem;
    height:  7.652rem;
  }
</style>
