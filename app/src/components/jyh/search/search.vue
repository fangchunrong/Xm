<template>
    <div id="box">
        <div class="box">
            <!--上-->
            <div class="box-top">
                <span class="left" @click='infor'> < </span>
                <p class="right">搜索</p>
            </div>

            <!--input-->
            <div class="box-middle">
                <input type="text" placeholder="请输入商家或美食名称" v-model="message">
                <button @click="dj">提交</button>
                <div class="cha" v-show="message" @click="dj1"> X </div>
            </div>

            <div class="sorry" v-if="orshow">很抱歉！无搜索结果</div>

            <!--显示历史记录-->
            <div class="history" v-if="orshow1">
                <h4>搜索历史</h4>
                <ul>
                    <li  v-for="li in lis">
                        <span >{{li}}</span>
                        <div class="cha1" @click="dj3"> X </div>
                    </li>
                </ul>
                <div class="clear" @click="dj2">清空历史记录</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
          return {
              message:"",
              orshow:false,
              orshow1:false,
              lis:[]
          }
        },
        methods:{
            infor(){
                this.$router.push({
                    path:'/infor'
                })
            },
            dj() {
                this.orshow = true
                this.orshow1 = false
            },
            dj1() {
                this.lis.push(this.message)
               this.message = ""
                this.orshow = false
                this.orshow1 = true
            },
            dj2() {
                this.orshow1 = false
            },
            dj3() {
                this.orshow1 = false
            }

        }

    }
</script>

<style scoped>
    .box-middle {
        background-color: #fff;
        padding: .5rem;
        display: flex;
        position: relative;
    }

    .box-middle input {
        flex: 4;
        border: .025rem solid #e4e4e4;
        font-size: .65rem;
        color: #333;
        border-radius: .125rem;
        background-color: #f2f2f2;
        font-weight: 700;
        padding: .25rem .25rem;
    }

    .box-middle button {
        flex: 1;
        border: .025rem solid #3190e8;
        margin-left: .2rem;
        font-size: .65rem;
        color: #fff;
        border-radius: .125rem;
        background-color: #3190e8;
        font-weight: 700;
        padding: 0 .25rem;
    }

    /*搜索框无结果*/
    .sorry {
        margin: 0 auto;
        font: .65rem/1.75rem Microsoft YaHei;
        color: #333;
        background-color: #fff;
        text-align: center;
        margin-top: .125rem;
    }
    /*符号：X*/
     .cha, .cha1 {
        font-weight: 900;
        font-size: small;
    }
     .cha1 {
         color: #666;
     }
    .cha {
        color: #6583e8;
        position: absolute;
        left: 11.3rem;
        top: 0.9rem;
    }


    /*搜索历史记录*/
    .history ul {
        background: #fff;
    }
    .history li {
        background-color: #fff;
        border-bottom: .025rem solid #e4e4e4;
        font: .7rem/2rem Microsoft YaHei;
        padding: 0 .3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .history h4 {
        font-size: .6rem;
        line-height: 2rem;
        text-indent: .5rem;
        font-weight: 700;
        color: #666;
    }

    /*清空历史记录*/
    .clear {
        background-color: #fff;
        color: #3190e8;
        font: .7rem/2rem Microsoft YaHei;
        font-weight: 700;
        text-align: center;
    }

    li span {
        display: inline-block;
        width: 80%;
    }

</style>
