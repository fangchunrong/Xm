<template>
  <div id="box">
    <div class="box">
      <!--导航-->
      <div class="box-top">
        <span class="left" @click="vip"> < </span>
        <p class="right">购买记录</p>
      </div>

      <!--下-->
      <div class="bottom">
        <img src="@/assets/img/4.png" alt="">
        <p class="buy">没有购买记录</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "record",
        methods:{
          vip(){
            this.$router.push({
              path:'/vip'
            })
          }
        }
    }
</script>

<style scoped>
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-top: 6rem;
    width: 3.5rem;
  }

 .buy{
    font-size: .6rem;
    color: #999;
    margin-top: .8rem;
  }
</style>
