<template>
  <div id="box">
    <div class="box">
      <div class="box-top">
        <span class="left" @click="vip"> < </span>
        <p class="right">在线支付</p>
      </div>

      <!--时间-->
      <div class="time">
        <div class="time1">
          <span class="time2">支付剩余时间</span>
          <p>00 : {{m}} : {{s}}</p>
        </div>
      </div>

      <div class="one">选择支付方式</div>
      <!--支付方式-->
      <div class="list">
        <div class="list_top">
          <div class="list_top_l">
            <img src="@/assets/img/8.png" class="pic1">
            <span style="font-size: .7rem;color: #666;">支付宝</span>
          </div>
          <div class="list_top_r">
              <i class="el-icon-success" @click="y1" id="lv"></i>
          </div>
        </div>

        <div class="list_top">
          <div class="list_top_l">
            <img src="@/assets/img/9.png" class="pic1">
            <span style="font-size: .7rem;color: #666;">微信</span>
          </div>
          <div class="list_top_r">
              <i class="el-icon-success" @click="y2" id="lv1"></i>
          </div>
        </div>
      </div>

      <!--下-->
      <P class="button" @click="btn">确认支付</P>

      <!--弹框代码-->
      <div v-if="orshow" class="small-box animated bounceIn">
        <div class="yuan">
          <span class="yuan1"></span>
          <span class="yuan2"></span>
        </div>
        <p class="import">当前环境无法支付，请打开官方APP进行付款</p>
        <div class="bttn" @click="bbb">确认</div>
      </div>

      <!--定时器弹出框-->
      <div v-if="orshow1" class="small-box animated bounceIn">
        <div class="yuan">
          <span class="yuan1"></span>
          <span class="yuan2"></span>
        </div>
        <p class="import">支付超时</p>
        <div class="bttn" @click="ddd">确认</div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "pay",
      data:function(){
          return{
            orshow:false,
            orshow1:false,
            s:"00",
            m:15
          }
      },
      methods:{
          vip(){
            this.$router.push({
              path:'/vip'
            })
          },
        btn(){
            this.orshow = true
        },
        bttn(){
            this.orshow = false
        },
        bbb(){
            this.orshow = false
        },
        ddd(){
            this.orshow1 = false
        },
          y1($e) {
             $e.target.style.color = "green"
              var lv1 = document.getElementById("lv1");
              lv1.style.color = "black"
          },
          y2($e) {
              $e.target.style.color = "green";
                  var lv = document.getElementById("lv");
                  lv.style.color = "black"
          }
      },
      created(){
        var timer1 = setInterval(()=> {
           this.s--
            if (this.s <=-1 ){
             this.s = 59
            }
            if(this.s<=9){
             this.s = "0"+this.s.toString()
            }

            if(this.s ==59 && this.m ==15 ){
             this.m = 14
            }
          },1000)

       var timer = setInterval(()=> {
          this.m--
          if(this.m <= 0){
            clearInterval(timer)
            clearInterval(timer1)
            this.orshow1 = true
          }

          if(this.m <= 9){
            this.m = "0"+this.m.toString()
          }
        },60000)
      }
    }
</script>

<style scoped>

  /*时间*/
  .time {
    background-color: #fff;
    padding: .7rem;
    text-align: center;
  }
  .time1 {
    margin-top: 1rem;
  }

  .time2 {
    font-size: .6rem;
    color: #666;
    margin-top: 1rem;
  }

  .one {
    background-color: #f1f1f1;
    padding: 0 .7rem;
    font-size: .7rem;
    color: #666;
    line-height: 1.8rem;
  }

  /*支付方式*/
  .list {
    background: #fff;
  }
  .list_top,.list_top_l {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 .3rem;
  }
  .list_top {
    padding: .4rem .7rem;
    line-height: 2.6rem;
    border-bottom: .025rem solid #f5f5f5;
  }

  .pic1 {
    width: 2rem;
    height: 2rem;
    margin-right: .2rem;
  }



  /*支付*/
  .button {
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .5rem;
    font-weight: 700;
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

  /*定时器*/
  .time1 p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

    /*对号变色*/
    .green {
        color: green;
    }
</style>
