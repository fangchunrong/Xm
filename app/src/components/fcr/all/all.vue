<template>
    <div id="app">
      <div class="headtop">
        <span class="jt"><</span>
        <span class="tit">{{this.$route.query.tit}}</span>
      </div>

    </div>
</template>

<script>
    export default {
        name: "all"
    }
</script>

<style scoped>
.headtop{
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
}
.jt{
  font-size:1.4rem ;
  color: white;
}
  .tit{
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
  }
</style>
