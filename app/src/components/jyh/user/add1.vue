<template>
<div id="box">
    <div class="box">
        <!--上-->
        <div class="box-top">
            <span class="left" @click="user"> < </span>
            <span class="right">新增地址</span>
        </div>

        <!--中-->
        <div class="box-middle">
            <ul class="add">
                <li class="aaa" v-for="li in lis">
                    <input type="text" :placeholder="li.tt">
                </li>
            </ul>
        </div>

        <!--下-->
        <div class="add-button">
            <button>新增地址</button>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "add1",
        data(){
            return{
                lis:[
                    {tt:"请输入你的名字"},
                    {tt:"小区/写字楼/学校等"},
                    {tt:"请填写详细送餐地址"},
                    {tt:"请填写能够联系到您的手机号"},
                    {tt:"备用联系电话(选填)"}
                ]
            }
        },
        methods:{
            user(){
                this.$router.push({
                    path:"/user"
                })
            }

        }
    }
</script>

<style scoped>
  /*中*/
.box-middle {
    margin-top: 0.4rem;
}
    .add {
        background: #fff;
        padding-top: .4rem;
    }
    .aaa {
        padding-bottom: .4rem;
    }
    .box-middle input {
        display: block;
        width: 15rem;
        font-size: .6rem;
        margin: 0 auto;
        padding: .3rem;
        background: #f2f2f2;
        border: 1px solid #ddd;
        border-radius: 3px;
    }

    /*下*/
    .add-button {
        margin: .6rem auto;
        width: 15rem;
        background: #4cd964;
        border-radius: 3px;
    }

    .add-button button {
        width: 100%;
        font-size: .6rem;
        color: #fff;
        line-height: 1.6rem;.
        background: none;
        font-weight: 700;
        opacity: .6;
    }
</style>
