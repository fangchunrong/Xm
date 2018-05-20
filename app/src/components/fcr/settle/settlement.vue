<template>
  <div class="settlement">
    <header class="ttx_head_top">
      <section class="ttx_head_goback">
      <span class="head_login">
        <span class="login_span">登录|注册</span>
      </span>
        <router-link to="/home">
          <svg class="ttx_head_sev">
            <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2px;">

            </polyline>
          </svg>
        </router-link>
      </section>
      <section class="ttx_title_head_ellipsis">
        <span class="ttx_title_text">确认订单</span>
      </section>
    </header>
    <!---->
    <div style="height: 100%" class="ttx..">
      <section class="address_container">
        <div class="address_empty_left">
          <div style="color: #3190e8;font-size: .8rem" class="el-icon-location-outline"></div>
          <span class="add_address">请添加一个收货地址</span>
        </div>
        <div class="address_empty_right"> ></div>
      </section>
      <!---->
      <section class="delivery_model">
        <p class="deliver_text">送达时间</p>
        <section class="deliver_time">
          <p class="p1">尽快送达 | 预计 17:12</p>
          <p class="p2">蜂鸟转送</p>
        </section>
      </section>
      <div class="pay_way">
        <header class="header_style">
          <span class="span2">支付方式</span>
          <div class="more_type ">
            <span class="span3">在线支付</span>
            <span> ></span>
          </div>
        </header>
        <section class="hongbo">
          <span class="span5">红包</span>
          <span class="span6">暂时只在饿了么App 中支持</span>
        </section>
      </div>
      <section class="food_list">
        <header class="ttx_head1">
          <img class="im1" src="//elm.cangdu.org/img/16018a5c08533.jpeg" alt="">
          <span class="span7">效果展示</span>
        </header>
        <ul class="food_list_ul">
          <li class="food_item_style">
            <p class="food_name">皮皮邱-皮皮丹</p>
            <div class="num_price">
              <span style="color: #f60;margin-left: 6rem">x 1</span>
              <span>¥250</span>
            </div>
          </li>
        </ul>
        <div class="food_item_style">
          <p class="food_name">餐盒</p>
          <div class="num_price">
            <span></span>
            <span>¥ 11477</span>
          </div>
        </div>
        <!---->
        <div class="food_item_style">
          <p class="food_name">配送费</p>
          <div class="num_price">
            <span></span>
            <span>¥ 4</span>
          </div>
        </div>
        <!---->
        <div class="food_item_style">
          <p class="food_name">订单 ¥11731</p>
          <div class="num_price">
            <span></span>
            <span style="width: 4rem;color: #f60;">待支付 ¥11731</span>
          </div>
        </div>
      </section>
      <!---->
      <section class="pay_way">
        <div class="ttx_t">
          <span class="span9">订单备注</span>

          <span class="ellipsis">口味、偏好等</span>
          <span class="span10"> ></span>
        </div>
        <div class="hongbo1">
          <span class="span10">发票抬头</span>
          <span class="span11">不需要开发票</span>
          <span class="span10"> ></span>
        </div>
      </section>
    </div>
    <!---->
    <div class="confrim_order">
      <p class="pp1"> 待支付 ¥11731</p>
      <p class="pp2"> 确认下单</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "settlement"
  }
</script>

<style scoped>
  .ttx_head_top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }

  .ttx_head_goback {
    left: .4rem;
    width: .6rem;
    height: 1rem;
    line-height: 2.2rem;
    margin-left: .4rem;
  }

  .ttx_head_sev {
    width: 0.8rem;
    float: left;
    height: 1rem;
    margin-top: .4rem;
    z-index: 10;
  }

  .ttx_title_head_ellipsis {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }

  .head_login {
    right: .55rem;
    font-size: .65rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .login_span {
    color: #fff;
  }

  .address_container {
    margin-top: 2rem;
    padding: 1rem .5rem;
    background-color: white;
    display: flex;
    align-items: center;
    font-size: .7rem;
  }

  .address_empty_left {
    display: flex;
    align-content: center;
  }

  .address_empty_right {
    width: .6rem;
    height: .6rem;
    fill: #999;
    margin-left: 7rem;

  }

  .delivery_model {
    border-left: .2rem solid #3190e8;
    min-height: 4rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    background-color: white;
    margin-top: .5rem;

  }

  .deliver_text {
    font-size: .8rem;
    color: #333;
    font-weight: 700;
    padding-left: .3rem;
  }

  .deliver_time {

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .p1 {
    font-size: .7rem;
    color: #3190e8;
  }

  .p2 {
    font-size: .5rem;
    color: #fff;
    background-color: #3190e8;
    width: 2.4rem;
    margin-top: .5rem;
    text-align: center;
    border-radius: .12rem;
    padding: .1rem;
  }

  .header_style {
    margin-top: .3rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
    padding: .2rem;
  }

  .span2 {
    font-size: .7rem;
    color: #666;

  }

  .span3 {
    font-size: .6rem;
    color: #aaa;
    width: 10rem;
    display: inline-block;
    text-align: right;
    vertical-align: middle;
    margin-left: -10rem;
  }

  .hongbo {
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-top: .025rem solid #f5f5f5;
    padding: .2rem;
  }

  .span5 {
    font-size: .6rem;
    color: #aaa;
    line-height: 2rem;
  }

  .span6 {
    font-size: .6rem;
    color: #aaa;
    line-height: 2rem;
  }

  .food_list {
    background-color: #fff;
    margin-top: .4rem;
  }

  .ttx_head1 {
    padding: .7rem;
    border-bottom: .025rem solid #f5f5f5;
  }

  .im1 {
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
  }

  .span7 {
    font-size: .8rem;
    color: #333;
  }

  .food_list_ul {
    padding-top: .5rem;
  }

  .food_item_style {
    display: flex;
    justify-content: space-between;
    line-height: 1.8rem;
    padding: 0 .7rem;
  }

  .food_name {
    /*width: 11rem;*/
    font-size: .65rem;
    color: #666;
  }

  .num_price {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .65rem;
  }

  .pay_way {
    background-color: #fff;
    margin-top: .4rem;
    padding: 0 .7rem;
    margin-bottom: 3rem;
  }

  .span9 {
    font-size: .7rem;
    color: #666;
  }

  .ellipsis {
    font-size: .6rem;
    color: #aaa;
    width: 10rem;
    /*display: inline-block;*/
    text-align: right;
    /*vertical-align: middle;*/
  }

  .span10 {
    font-size: .6rem;
    color: #aaa;
    line-height: 2rem;
  }

  .span11 {
    font-size: .6rem;
    color: #aaa;
    line-height: 2rem;
    text-align: right;
    margin-left: 6.5rem;
  }

  .ttx_t {
    display: flex;

    justify-content: space-between;
    line-height: 2rem;
  }

  .hongbo1 {
    display: flex;
    justify-content: space-between;
    border-top: .025rem solid #f5f5f5;

  }

  .confrim_order {
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2rem;
  }

  .pp1 {
    background-color: #3c3c3c;
    flex: 5;
    padding-left: .7rem;
    line-height: 2rem;
    font-size: .75rem;
    color: #fff;
  }

  .pp2 {
    flex: 2;
    background-color: #56d176;
    text-align: center;
    line-height: 2rem;
    font-size: .75rem;
    color: #fff;
  }
</style>
