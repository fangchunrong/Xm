<template>
  <div id="box">
    <div class="box">
      <!--上-->
      <div class="box-top">
        <span class="left" @click='fh'> < </span>
        <p class="right">密码登录</p>
      </div>
      <!--中间-->
      <div class="box-middle">
        <!--input1-->
        <div class="middle">
          <input type="text" v-model="username" placeholder="账号">
        </div>
        <!--input2-->
        <div class="middle">
          <input type="text" v-model="password" placeholder="密码">
          <div class="button" v-bind:class="{green:orchange}">
            <div class="btn1" v-bind:class="{change:orchange}" @click="dj"></div>
            <span class="span1">abc</span>
            <span class="span2">...</span>
          </div>
        </div>
        <!--ipnut3-->
        <div class="middle">
          <input type="text" v-model="code" placeholder="验证码">
          <!--验证码-->
          <ul>
            <li>
              <img :src="pic" alt="" ref="photo">
            </li>
          </ul>
          <!--换一张-->
          <div class="chang_img">
            <p style="color: #666; font-size: .55rem">看不清</p>
            <p style="color: #3b95e9; font-size:.55rem; margin-top: .3rem;" class="chang" @click="bh">换一张</p>
          </div>
        </div>
      </div>
    </div>

    <!--下-->
    <div class="box-bottom">
      <p>温馨提示：未注册过的账号，登陆时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
      <button class="btn" @click="bt">登录</button>
      <a href="#" class="a">重置密码？</a>
    </div>
    <!--弹框代码-->
    <div v-if="orshow" class="small-box animated bounceIn">
      <div class="yuan">
        <span class="yuan1"></span>
        <span class="yuan2"></span>
      </div>
      <p class="import">请输入手机号/邮箱/用户名</p>
      <button class="bttn" @click="btt">确认</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios)


  export default {
    name: "login",
    data: function () {
      return {
        username: "",
        password: "",
        code: "",
        orshow: false,
        orchange: false,
        pic: "",
        api: "http://cangdu.org:8001/v1/captchas"
      }
    },
    created() {
      Vue.axios.post(this.api).then((response) => {
        this.pic = response.data.code
        // console.log(response)
      })
    },
    methods: {
      bt() {
        if (this.username == "" || this.password == "" || this.code == "") {
          this.orshow = true
        }else {
            this.$router.push({
              path:'/infor'
            })
        }
      },
      btt() {
        this.orshow = false
      },
      dj() {
        this.orchange = !this.orchange
        // console.log("wwww")
      },
      bh() {
        var ptoto = document.getElementsByClassName("photo")[0]
        Vue.axios.post(this.api).then((response) => {
          this.pic = response.data.code
          console.log(response.data)
        })
      },
      fh() {
        this.$router.push({
          path:'/'
        })
      },


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
    padding-top: 0.1rem;
    position: relative;
  }

  /*上*/
  .box-top {
    width: 375px;
    height: 1.95rem;
    background-color: #3190e8;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  /*中*/
  .box-middle {
    background-color: #fff;
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .middle {
    display: flex;
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
  }

  input {
    font-size: .7rem;
    color: #666;

  }

  input:focus {
    outline: none;
  }

  img {
    display: inline-block;
    width: 70px;
    margin-right: 30px;
  }

  .chang_img {
    display: inline-block;
  }

  /*下*/
  .box-bottom p {
    font-size: 0.5rem;
    color: red;
    margin: 0.4rem;
    margin-left: 0.8rem;
  }

  .btn {
    width: 95%;
    margin-left: 0.4rem;
    font-size: 0.7rem;
    padding: 0.5rem 0;
    border-radius: 0.2rem;
    background: #4cd964;
    color: white;
    border: 0;
  }

  .a {
    float: right;
    font-size: .6rem;
    color: #3b95e9;
    margin-right: .3rem;
    margin-top: 1.5rem;
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
    top: 60%;
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

  /*密码*/
  .button {
    background: #ccc;
    width: 1.8rem;
    height: .7rem;
    padding: 0 .2rem;
    border: 1px;
    border-radius: .5rem;
    margin-left: 4.5rem;
    position: relative;
    display: flex;
    align-items: center;
  }

  .btn1 {
    width: 1.1rem;
    height: 1.1rem;
    background-color: #f1f1f1;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0.02667rem 0.05333rem 0 rgba(0, 0, 0, .1);
    top: -.3rem;
    left: -.3rem;
    position: absolute;
    transition: all .3s;
  }

  .span1, .span2 {
    font-size: .45rem;
    color: #fff;
  }

  .span1 {
    transform: translateY(.01rem);
  }

  .change {
    transform: translateX(1.3rem);
  }

  .green {
    background: #4cd964;
  }


</style>
