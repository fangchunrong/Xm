<template>
  <div id="box">
    <div class="box">
      <!--导航-->
        <div class="box-top">
          <span class="left" @click="home"> < </span>
          <p class="right">我的</p>
        </div>
      <!--登录-->
        <div class="login" @click="hit">
          <!--头像-->
          <div class="head"></div>
          <!--注册-->
          <div class="middle">
            <p style="font-weight: 700; font-size: .8rem; color: #fff">登录/注册</p>
            <p style="margin-top:.3rem">
              <i class="el-icon-mobile-phone" style="color: #fff; font-weight: bolder"></i>
              <span style="font-size: .573333rem; color: #fff">暂无绑定手机号</span>
            </p>
          </div>
          <i class="el-icon-arrow-right" style="color: #fff; margin-left: 6.5rem"></i>
        </div>

      <!--金额-->
        <ul class="YH">
          <li class="yh" @click="money">
            <p class="yh1">
              <span style="font-size:1.2rem; color:#f90; font-weight: 700; ">0.00</span>
              元</p>
            <span>我的余额</span>
          </li>
          <li class="yh">
            <p class="yh1" @click="discounts">
              <span style="font-size:1.2rem; color:#ff5f3e; font-weight: 700; ">3</span>
              个</p>
            <span>我的优惠</span>
          </li>
          <li class="yh" @click="score">
            <p class="yh1">
              <span style="font-size:1.2rem; color:#6ac20b; font-weight: 700; ">0</span>
              分</p>
            <span>我的积分</span>
          </li>
        </ul>

        <!--订单-->
        <ul class="list">
          <li class="order" v-for="order in lists" @click="order.beat">
           <i :class="order.pic" :style="{marginLeft:order.marginLeft+'rem' ,color:order.color}"></i>
              <span style="margin-left:.5rem; font-size:.65rem ">{{order.count}}</span>
              <i class="el-icon-arrow-right" style="margin-left: 9rem; font-size: small"></i>
            </li>
          </ul>

      <!--服务中心-->
        <ul class="server" style="margin-top: .5rem">
          <li class="order" v-for="order in orders" @click="order.beat1">
            <i :class="order.pic" style="margin-left: .5rem; color: rgb(74, 165, 240);"></i>
            <span style="margin-left:.5rem; font-size:.65rem;">{{order.count}}</span>
            <i class="el-icon-arrow-right" style="margin-left: 9rem; font-size: small"></i>
          </li>
        </ul>

      <!--脚部-->
      <div class="footer">
        <div class="footer1"  v-for="footer1 in array"  @click="blue" style="text-align: center">
            <router-link :to="{name:footer1.name}" class="black" style="color: #000">
                <li :class="footer1.pic"></li>
                <p style="font-size: .5rem">{{footer1.count}}</p>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "infor",
      data:function () {
        return {
          lists:[
            {
              pic:"el-icon-document",
              count:"我的订单",
              marginLeft:0.5,
              color:"black",
              beat:()=> {
                this.$router.push({
                  path:'/order'
                })
               }
              },

            {
              pic:"el-icon-goods",
              count:"积分商城",
              marginLeft:0.5,
              color:"rgb(252, 123, 83)",
              beat:()=> {
                this.$router.push({
                  path:'/store'
                })
              }
            },

            {
              pic:"el-icon-star-on",
              count:"饿了么会员卡",
              marginLeft:0.5,
              color:"rgb(255, 198, 54)",
              beat:()=> {
                this.$router.push({
                  path:'/vip'
                })
              }
            }
          ],

          orders:[
            {
              pic:"el-icon-menu",
              count:"服务中心",
              beat1:()=> {
                this.$router.push({
                  path:'/server'
                })
              }
            },
            {
              pic:"el-icon-service",
              count:"下载饿了么APP",
              beat1:()=> {
                this.$router.push({
                  path:'/download'
                })
              }
            }
          ],

          array:[
            {
              pic:"el-icon-refresh",
              count:"外卖",
                name:"home"
            },
            {
              pic:"el-icon-search",
              count:"搜索",
                name:"search"
            },
            {
              pic:"el-icon-tickets",
              count:"订单",
                name:"order"
            },
            {
              pic:"el-icon-menu",
              count:"我的",
                name:"infor"
            }
          ]
        }
      },
      methods :{
          blue(ev){
            //currentTarget:绑定事件的标签
            var el = ev.currentTarget
            for(let a=0;a<el.parentNode.childNodes.length;a++)
            {
              el.parentNode.childNodes[a].firstChild.style.color = "black"
            }
            el.firstChild.style.color = "#3190e8"
            // console.log(ev.target)
          },
        hit(){
          this.$router.push({
            path:'/user'
          })
        },
        money() {
            this.$router.push({
              path:'/money'
            })
        },
        score() {
            this.$router.push({
              path:'/score'
            })
        },
        discounts() {
          this.$router.push({
            path:'/discounts'
          })
        },
        dd() {
            this.$router.push({
              path:'/order'
            })
        },
        home() {
            this.$router.push({
              path:'/home'
            })
        }
      }
    }
</script>

<style scoped>
  /*登录*/
  .login {
    width:375px;
    background-color: #3190e8;
    height:3.913rem;
    magin-top:1.95rem;
    display:flex;
    align-items: center;
  }
  .head {
    width:2.521rem;
    height:2.521rem;
    background:#fff;
    border-radius:50%;
    margin-left: .5rem;
  }
  .middle {
    margin-left: .48rem;
  }


  /*余额*/
  .YH {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    margin-bottom: .5rem;
  }
  .yh {
    width:33.33% ;
    border-right:1px solid #f1f1f1;
    text-align: center;
    margin-bottom: .3rem;
  }
  .yh1 {
    font-size: .55rem;
    padding: .853333rem 0 .453333rem;
  }
  .yh span {
    font-size: .57333rem;
    color: #666;
    font-weight: 400;
  }

  .order{
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    padding:.433333rem .266667rem .433333rem 0;
    font-size: .7rem;
    color: #333;
    display: flex;
    justify-content:flex-start;
  }

  /*脚部*/
  .footer {
    width: 100%;
    height: 1.95rem;
    background-color: #fff;
    display: flex;
    justify-content:space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
  }

</style>
