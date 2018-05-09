<template>
  <div id="box">
    <div class="box">
      <!--上-->
      <div class="box-top">
        <span class="left" @click="infor"> < </span>
        <span class="right">我的优惠</span>
      </div>
      <div class="top">
        <span class="top1">红包</span>
        <span class="top2">商家代金券</span>
      </div>
      <div class="middle">
        <p class="middle-l">
          <span style="color: #666">有</span>
          <span style="color: #ff5340">3</span>
          <span style="color: #666">个红包即将到期</span>
        </p>
        <p class="middle-r">
          <img :src="pic" style="width: .6rem; height: .6rem" >
          <span style="color: #3190e8">红包说明</span>
        </p>
      </div>

      <!--分享红包-->
      <ul class="list">
        <li class="list_li" v-for="list_li in lists">
          <div class="list_item">
            <div class="list_item_left">
                <span class="span1">¥</span>
                <span class="span2">{{list_li.span2}}</span>
                <span class="span3">{{list_li.span3}}</span>
                <span class="span4">{{list_li.span4}}</span>
                <p class="p1">{{list_li.p1}}</p>
              </div>
            <div class="list_item_right">
              <h4>分享红包</h4>
              <p>2017-05-23到期</p>
              <p >限收货手机号为 13681711254</p>
            </div>
            <div class="time_right">剩3日</div>
          </div>
        </li>
      </ul>

      <!--文字内容-->
      <div class="footer">
        <p >限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
      </div>

      <!--历史记录-->
      <div class="history">
        <span class="wz">查看历史红包</span>
        <span style="font-size: small; color: #666"> > </span>
      </div>

      <!--底部-->
      <div class="bottom">
        <span style="border-right: 1px solid rgb(245, 245, 245);">兑换红包</span>
        <span @click="prize">推荐有奖</span>
      </div>

    </div>
  </div>
</template>

<script>

  import pic from "@/assets/img/3.jpg"
    export default {
        name: "discounts",
        data:function () {
          return {
            pic:pic,
            lists:[
              {span2:"1",span3:".",span4:"0",p1:"满20元可用"},
              {span2:"2",span3:".",span4:"0",p1:"满40元可用"},
              {span2:"4",span3:".",span4:"5",p1:"满30元可用"}
            ]
          }
        },
      methods:{
        infor() {
          this.$router.push({
            path:'/infor'
          })
        },
        prize() {
          this.$router.push({
            path:'/prize'
          })
        }
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
  }

  /*top*/
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 2rem;
    background-color: #fff;
  }
  .top1 {
    border-bottom:.1rem solid #3190e8;
    padding-bottom:.3rem;
    color: #3190e8;
  }
  .top2{
    text-align: center;
    font-size: .65rem;
    color: #333;
    padding-bottom: .2rem;
    /*border-bottom: .1rem solid #fff;*/
  }

  /*middle*/
  .middle {
    display: flex;
    justify-content: space-between;
    font-size: .5rem;
    line-height: 2rem;
    padding: 0 .7rem;
  }

  /*红包*/
  .list {
    width: 14.87rem;
    margin-left: .7rem;
  }

  .list_li{
    width: 100%;
    height: 4.218rem;
    background: #fff;
    /*background-size: .5rem .2rem;*/
    margin-bottom: .5rem;
    border-radius: .25rem;
  }

  .list_item {
    display: flex;
    justify-content: space-between;
    padding: 1rem .5rem .8rem;
  }
  /*左*/
  .list_item_left {
    font-size: 0;
    border-right: .025rem dotted #ccc;
    flex: 1;
  }

  .list_item_right {
    flex: 2;
    margin-left: 1.5rem;
  }
  .span1,.span2,.span3,.span4 {
    color: #ff5340;
  }
  .span1 {
    font-size: .75rem;
    font-weight: 700;
  }
  .span2 {
    font-size: 1.5rem;
  }
  .span3,.span4 {
    font-size: .8rem;
    font-weight: 700;
  }

.p1 {
  font-size: .4rem;
  color: #999;
}

  /*中*/
  h4 {
    font-size: .7rem;
    color: #666;
    margin-left: -.7rem;
  }
.list_item_right p {
  margin-left: -.7rem;
  font-size: .4rem;
  color: #999;
}

  .time_right {
    font-size: .75rem;
    color: #ff5340;
  }

.footer {
  font-size: .4rem;
  color: #999;
  margin-left: 1.5rem;
}
/*历史记录*/
  .history {
    margin:1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wz {
    font-size: .5rem;
    color: #999;
    margin-right: .2rem;
  }

/*底部*/
  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
  }

  .bottom span {
    flex: 1;
    line-height: 2rem;
    text-align: center;
    font-size: .7rem;
    color: #555;
  }

</style>
