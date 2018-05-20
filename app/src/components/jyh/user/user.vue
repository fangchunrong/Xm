<template>
    <div id="box">
      <div class="box">
        <!--上-->
        <div class="box-top">
          <span class="left" @click="hit"> < </span>
          <span class="right">账户信息</span>
        </div>
        <!--中间-->
        <div class="box-middle">
          <div class="middle1" v-for="middle1 in array" @click="middle1.beat">
            <span class="tx">{{middle1.count}}</span>
            <img :src="middle1.pic" alt="">
            <i :class="middle1.text" style="margin-right: .5rem; opacity: 0.5"></i>
          </div>
        </div>

        <!--账号绑定-->
        <div class="phone">
            <p class="phone1">账号绑定</p>
            <!--手机-->
            <div class="phone2" @click="dianji">
              <img src="@/assets/img/2.png" style="width: .8rem; height: 1rem">
              <p style="font-size: .6rem; margin-left:-.4rem" >手机</p>
              <i class="el-icon-arrow-right"  style="margin-right: .5rem; opacity: 0.5"></i>
          </div>

          <p class="phone1">安全设置</p>
            <!--登录密码-->
          <div class="phone2" @click="password">
            <p style="font-size: .6rem; margin-left: .5rem">登录密码</p>
            <span style="margin-right:-10.5rem ; opacity: 0.5">修改</span>
            <i class="el-icon-arrow-right"  style="margin-right: .5rem; opacity: 0.5"></i>
          </div>
        </div>

        <!--退出登录-->
        <button class="out" @click="btt">退出登录</button>

        <!--退出弹框-->
        <div class="big-box"  v-if="orshow">
          <div class="small-box animated bounceIn">
            <div class="yuan">
              <span class="yuan1"></span>
              <span class="yuan2"></span>
            </div>
            <p class="import">是否退出登录</p>
            <div>
              <button class="bttn1" @click="wait">再等等</button>
              <button class="bttn" @click="quit">退出登录</button>
            </div>
          </div>
        </div>

          <!--手机弹框代码-->
          <div v-if="orshow1" class="small-box animated bounceIn">
              <div class="yuan">
                  <span class="yuan1"></span>
                  <span class="yuan2"></span>
              </div>
              <p class="import">请在手机APP设置</p>
              <div class="bttn3" @click="bbb">确认</div>
          </div>
      </div>
    </div>
</template>

<script>
  import pic from "@/assets/img/1.jpg"
    export default {
        name: "user",
        data:function () {
          return {
            array:[
              {
                  count:"头像",
                  text:"el-icon-arrow-right",
                  pic:pic,
                  beat:()=>{
                      console.log("安吉时间");
                  }
              },
              {
                  count:"用户名",
                  text:"el-icon-arrow-right",
                  pic:"",
                  beat:()=>{
                      this.$router.push({
                          path:"/name"
                      })
                  }
              },
              {
                  count:"收货地址",
                  text:"el-icon-arrow-right",
                  pic:"",
                  beat:()=> {
                      this.$router.push({
                          path:"/add"
                      })
                  }
              }
            ],
            orshow: false,
              orshow1:false
          }
        },
      methods: {
          hit(){
            this.$router.push({
              path:'/infor'
            })
          },
        btt() {
          this.orshow = true
        },
        quit() {
            this.$router.push({
              path:'/infor'
            })
        },
        wait() {
            this.orshow = false
        },
          password() {
              this.$router.push({
                  path:'/password'
              })
          },
          dianji(){
              this.orshow1 = true
          },
          bbb() {
              this.orshow1 = false
          }
      }
    }
</script>

<style scoped>


  /*中间*/
  .box-middle {
    margin-top: .3rem;
  }
  .middle1 {
    background: #fff;
    width: 100%;
    height:2.08rem;
    border-bottom: 0.5px solid gainsboro;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .middle1:first-child {
    border-top: 0.5px solid gainsboro;
    height: 3.1rem;
  }
  /*头像*/
  .tx{
    font-size: .6rem;
    display: inline-block;
    margin-left: .5rem;
  }
  img {
    margin-right: -11rem;
  }

  /*手机绑定*/
  .phone1 {
    font-size: .55rem;
    margin: .5rem ;
    height:.5rem;
  }
  .phone2 {
    background: #fff;
    width: 100%;
    height:2.08rem;
    border-top: 0.5px solid gainsboro;
    border-bottom: 0.5px solid gainsboro;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    margin-left: .5rem;
  }
   /*退出登录*/
  .out {
    width: 96%;
    margin-left: .3rem;
    margin-top: 1.3rem;
    line-height: 1.5rem;
    border-radius: 5px;
    background: #d8584a;
    font-size: .6rem;
    color: #fff;
    border: 0;
  }

  /*弹出框模板*/
  .big-box {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0 ,0.2);
  }

  /*退出登录弹出框*/
  .small-box {
    width: 94%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    border-radius: 3%;
    left: 3%;
    top: 20%;
    z-index: 100;
  }

  .yuan {
    width: 3.9rem;
    height: 3.9rem;
    border: .15rem solid #f8cb86;
    border-radius: 50%;
    position: relative;
    margin-top: 1rem;
  }

  .yuan1 {
    display: block;
    width: .2rem;
    height: 2.043rem;
    background-color: #f8cb86;
    position: absolute;
    left: 50%;
    top: 20%;
  }

  .yuan2 {
    display: block;
    width: .3rem;
    height: .3rem;
    position: absolute;
    left: 50%;
    top: 80%;
    border-radius: 50%;
    background-color: #f8cb86;
  }

  .bttn {
    color: #fff;
    background: #d8584a;
    font-weight: 700;
    margin:30px 10px 30px 10px;
  }

  .bttn1,.bttn {
    padding: .4rem 1rem;
    border-radius: 5px;
    font-size: .6rem;
    color: #fff;
    letter-spacing: 1px;
    margin-top: 26px;
    border: 0;
  }

  .import {
    width: 100%;
    text-align: center;
    font-size: 1.304rem;
    color: #575757;
    font-weight: 500;
    margin: 25px 0;
  }

  /*手机弹出框代码*/
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

  .bttn3 {
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
