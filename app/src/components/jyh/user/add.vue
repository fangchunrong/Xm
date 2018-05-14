<template>
<div id="box">
    <div class="box">
        <!--上-->
        <div class="box-top">
            <span class="left" @click="user"> < </span>
            <span class="right">编辑地址</span>
        </div>

        <!--下-->
        <div class="box-bottom">
            <div class="address">
                <span class="left1">新增地址</span>
                <span class="right1" @click="add1"> > </span>
            </div>
        </div>

    </div>
</div>
</template>

<script>
    export default {
        name: "add",
        methods:{
            user() {
                this.$router.push({
                    path:"/user"
                })
            },
            add1() {
                this.$router.push({
                    path:"/add1"
                })
            }
        }

    }
</script>

<style scoped>

    .box-bottom {
        width: 100%;
        margin-top: .4rem;
        border-top: 1px solid #d9d9d9;
        border-bottom: 1px solid #d9d9d9;
    }

    .address {
        background: #fff;
        margin-top: .4rem;
        padding: .2rem .4rem;
        border-top: 1px solid #d9d9d9;
        display: flex;
        justify-content: space-between;
    }
    .left1 {
        font-size: .7rem;
        color: #333;
        line-height: 1.4rem;
    }
    .right1 {
        line-height:1.4rem ;
        color: rgb(216, 216, 216);
        font-weight: 700;
    }


</style>
