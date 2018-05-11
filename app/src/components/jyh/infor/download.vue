<template>
  <div id="box">
    <div class="box">
      <div class="box-top">
        <span class="left" @click="infor"> < </span>
        <p class="right">下载</p>
      </div>

      <div class="down" style="text-align: center">
        <img src="@/assets/img/7.png" alt="">
        <span>下载饿了么APP</span>
      </div>

      <div class="down1" @click="down">下载</div>
    </div>

    <!--弹框-->
    <div class="small-box animated bounceIn" v-if="orshow" >
      <div class="yuan">
        <span class="yuan1"></span>
        <span class="yuan2"></span>
      </div>
      <p class="import">IOS用户请前往AppStore下载</p>
      <button class="bttn" @click="btt">下载</button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "download",
        data:function(){
          return {
            orshow:false
          }
        },
        methods:{
          infor(){
            this.$router.push({
              path:'/infor'
            })
          },
          down(){
            this.orshow = true
          },
          btt(){
            this.orshow = false
          }
        }
    }
</script>

<style scoped>

  /*下*/
  .down img {
    width:7.8rem ;
    height: 7.8rem;
    text-align: center;
    margin-top: 1rem;
  }

  .down span {
    display: block;
    font-size: .8rem;
    color: #666;
    margin-bottom: 1rem;
    margin-top: .5rem;
  }

  .down1 {
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .5rem;
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
