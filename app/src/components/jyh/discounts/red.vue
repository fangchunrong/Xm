<template>
  <div id="box">
    <div class="box">
      <!--上-->
      <div class="box-top">
        <span class="left" @click="discounts"> < </span>
        <span class="right">兑换红包</span>
      </div>

      <!--中-->
      <div class="red">
        <input type="text" placeholder="请输入兑换码" class="input1">
        <div class="red1">
          <input type="text" placeholder="验证码" class="input2">
          <div class="red2">
                <img :src="pic" alt="" ref="photo">
            <div class="change">
              <p style="font-size: .55rem;color: #666;">看不清</p>
              <p style="font-size: .55rem;color: #3b95e9;margin-top: .2rem;" @click="bh">换一张</p>
            </div>
          </div>
        </div>
      </div>

      <!--下-->
      <div class="bottom">兑换</div>

    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "red",
        data:function(){
          return {
            pic:'',
            //获取图片API
            api:"http://cangdu.org:8001/v1/captchas"
          }
        },
      created(){
        //  首次创建验证码
        Vue.axios.post(this.api).then((response) => {
        this.pic = response.data.code
      })
      },
        methods:{
          discounts(){
            this.$router.push({
              path:'/discounts'
            })
          },
          bh() {
            var ptoto = document.getElementsByClassName("photo")[0]
            Vue.axios.post(this.api).then((response) => {
              this.pic = response.data.code
              // console.log(response.data)
            })
          }
        }
    }
</script>

<style scoped>

  /*下*/
  .input1 {
    margin-top: .7rem;
    width: 89%;
    margin-left: .5rem;
    font-size: .7rem;
    color: #666;
    padding: .6rem .4rem;
    border-radius: .15rem;
  }
  .input2 {
    font-size: .7rem;
    color: #666;
    padding: .6rem .4rem;
    border-radius: .15rem;
    margin-left: .5rem;
  }

  .red1 {
    height: 2.2rem;
    display: flex;
    margin-top: .7rem;
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
</style>
