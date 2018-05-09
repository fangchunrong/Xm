<template>
  <div id="box">
    <div class="box">
      <!--导航-->
      <div class="box-top">
        <span class="left" @click="infor"> < </span>
        <p class="right">服务中心</p>
      </div>
      <!--中-->
      <div class="box_m">
        <div class="middle_l">
          <i class="el-icon-service" style="color:red "></i>
          <span>在线客服</span>
        </div>
        <div class="middle_l">
          <i class="el-icon-phone" style="color: rgb(106, 194, 11);"></i>
          <span>在线客服</span>
        </div>
      </div>
      <h4>热门问题</h4>
      <!--列表-->
      <ul>
        <li v-for="li in lis">
          <span>{{li.text}}</span>
          <span style="margin-left: 9rem; font-size: large; font-weight: 700; color: rgb(153, 153, 153);"> > </span>
        </li>
      </ul>
   </div>
    </div>
</template>

<script>
    export default {
        name: "server",
      data:function () {
        return{
          lis:[
            {text:"超级会员权益说明"},
            {text:"签到规则"},
            {text:"用户等级说明"},
            {text:"积分问题"},
            {text:"教我拍大片"},
            {text:"支付问题"},
            {text:"其他问题"},
            {text:"准时达问题"},
            {text:"会员说明"},
            {text:"会员问题"},
            {text:"红包问题"},
            {text:"活动细则"},
            {text:"补签规则"},
            {text:"优惠说明"},
            {text:"免费声明"},
            {text:"代金券说明"},
            {text:"商家合作"},
            {text:"余额问题"},
            {text:"超赞商家"},
            {text:"匿名购买"},
            {text:"活动问题"}
          ]
        }
      },
      methods:{
        infor(){
          this.$router.push({
            path:'/infor'
          })
        }
      }

    }
</script>

<style scoped>
  #box {
    width: 375px;
    height: 667px;
  }

  .box {
    width: 100%;
  }
  /*上*/
  .box-top {
    width: 375px;
    height: 1.95rem;
    background-color: #3190e8;
    border-bottom: 1px solid #fff ;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*上*/
  .box-top {
    width: 375px;
    height: 1.95rem;
    background-color: #3190e8;
    border-bottom: 1px solid #fff ;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    margin-top: -.2rem;
    font-size: 1.2rem;
    color: white;
    position: absolute;
    left: 10px;
  }

  .right {
    font-size: 0.8rem;
    color: #fff;
    font-weight: 700;
  }

  /*中*/
  .box_m {
    display: flex;
    justify-content: space-between;
  }
.middle_l {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
}
  span {
    margin-top: .4rem;
    font-size: .6rem;
    color: #666;
  }
  h4 {
    font-size: .75rem;
    color: #333;
    line-height: 3rem;
    border-bottom: 1px solid #f5f5f5;
    padding-left: .7rem;
  }

  li{
    padding: 0 .7rem;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
