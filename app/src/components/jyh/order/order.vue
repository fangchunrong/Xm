<template>
  <div id="box">
    <div class="box">
      <!--导航-->
      <div class="box-top">
        <span class="left" @click="infor"> < </span>
        <p class="right">订单列表</p>
      </div>
      <!--脚部-->
      <div class="footer">
        <div class="footer1"  v-for="footer1 in array"  @click="blue" style="text-align: center">
          <li :class="footer1.pic"></li>
          <p style="font-size: .5rem">{{footer1.count}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "order",
      data:function () {
        return {
          array:[
            {pic:"el-icon-refresh", count:"外卖"},
            {pic:"el-icon-search", count:"搜索"},
            {pic:"el-icon-tickets", count:"订单"},
            {pic:"el-icon-menu", count:"我的"}
          ]
        }
      },
      methods:{
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
