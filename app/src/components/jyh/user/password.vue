<template>
    <div id="box">
        <div class="box">
            <!--上-->
            <div class="box-top">
                <span class="left" @click="user"> < </span>
                <span class="right">重置密码</span>
            </div>

            <!--内容-->

                <ul class="box-middle">
                    <li v-for="li in lis">
                        <input type="text" :placeholder="li.pl" class="one">
                    </li>

                    <div class="red1">
                        <input type="text" placeholder="验证码" class="input2">
                        <div class="red2">
                            <img :src="pic" alt="" ref="photo">
                            <div class="change">
                                <p style="font-size: .55rem;color: #666;">看不清</p>
                                <p style="font-size: .55rem;color: #3b95e9;margin-top: .2rem;" @click="gb">换一张</p>
                            </div>
                        </div>
                    </div>
                </ul>

            <!--下-->
            <div class="bottom" @click="dj">确认修改</div>

            <!--弹框代码-->
            <div v-if="orshow" class="small-box animated bounceIn">
                <div class="yuan">
                    <span class="yuan1"></span>
                    <span class="yuan2"></span>
                </div>
                <p class="import">请输入正确的号码</p>
                <div class="bttn" @click="bbb">确认</div>
            </div>

        </div>
    </div>
</template>

<script>

    import Vue from 'vue'
    export default {
        name: "password",
        data() {
          return {
              lis:[
                  {pl:"账号"},
                  {pl:"旧密码"},
                  {pl:"请输入新密码"},
                  {pl:"请确认密码"}
              ],
              pic:'',
              //获取图片API
              api:"http://cangdu.org:8001/v1/captchas",
             // 弹出框
              orshow:false
          }
        },
        created(){
            //  首次创建验证码
            Vue.axios.post(this.api).then((response) => {
                this.pic = response.data.code
            })
        },

        methods:{
            user() {
                this.$router.push({
                    path:'/user'
                })
            },
            gb() {
                var photo = document.getElementsByClassName("photo")[0]
                Vue.axios.post(this.api).then((response) => {
                    this.pic = response.data.code
                    // console.log(response.data)
                })
            },
            dj() {
              this.orshow = true
            },
            bbb() {
                this.orshow = false
            }
        }
    }
</script>

<style scoped>

    .box-middle {
        background-color: #fff;
        margin-top: .6rem;
    }

    .box-middle li {
        border-bottom: 1px solid #f1f1f1;
        padding: .5rem .8rem;
    }

    .one {
        font-size: .7rem;
        color: #666;
    }

    .input2 {
        font-size: .7rem;
        color: #666;
        padding: .4rem .4rem;
        border-radius: .15rem;
        margin-left: .5rem;
    }

    .red1 {
        height: 2.2rem;
        display: flex;
    }

    .red2 {
        background: #fff;
        margin-left: .4rem;
        border-radius: .2rem;
    }
    img {
        margin-left: .3rem;
    }
    .change {
        margin-top:.5rem;
        margin-right: .2rem;
        display: inline-block
    }

    /*下*/
    .bottom {
        background-color: #4cd964;
        font-size: .7rem;
        color: #fff;
        text-align: center;
        margin: 0 .7rem;
        line-height: 1.8rem;
        border-radius: .2rem;
        margin-top: .7rem;
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
