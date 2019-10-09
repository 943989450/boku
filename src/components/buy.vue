<template>
    <main>
        <div class="dis">
            <div class="header">
                <span class="iconfont icon-fanhui" @click="back()"></span>
            </div>
            <section class="section">
                <div class="pd-30">
                    <div class="ta-ct pd-20">
                        <img src="../assets/img/logo.svg" alt="" width="30%">
                    </div>
                    <div class="login-box">
                        <input  class="name" type="text" id='username' placeholder="手机号码/注册名">
                    </div>
                    <div class="login-box">
                        <input  class="name" type="password" id='password' placeholder="密码">
                    </div>
                    <div class="login">登录</div>
                    <div class="bottom">
                        <span>登录</span>
                        <span>注册</span>
                    </div>
                </div>
            </section>
        </div>
    <div class="bar">
        <div class="buy-header">
            <ul>
                <li @click="back()"><span class="iconfont icon-fanhui"></span></li>
                <li><span>购物车</span></li>
                <li><span>删除</span></li>
            </ul>
        </div>
        <div class="hui">
            <input class="radio" type="checkbox">
            <span class="iconfont icon-ziyingzhuanqu left"></span>
            <span class="left">自营</span>
            <span class="right">0</span>
            <span class="right">运费：</span>
        </div>
        <div class="bo">
            <span>由图书仓发货</span>
        </div>
        <div class="detail">
            <div class="inp">
                <input type="checkbox">
            </div>
            <ul>
                <li>
                    <div class="left">
                        <img src="../assets/img/detail.jpg" alt="">
                    </div>
                    <div class="right">
                        <p>岩波新书精选 共7册</p>
                        <p>
                            <span>￥210.70</span>
                            <del>￥301.00</del>
                            <span>现货</span>
                        </p>
                        <p>
                            <span @click="jian()">-</span>
                            <span>{{num}}</span>
                            <span @click="add()">+</span>
                        </p>
                    </div>
                    <div class="del">
                        <p>x{{num}}</p>
                        <p class="iconfont icon-shanchu"></p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="foot">
            <span><input type="checkbox"></span>
            <span>总金额：</span>
            <span>￥{{num*210.70}}</span>
            <span>(含运费：￥0)</span>
            <span @click="jiesuan()">去结算</span>
        </div>
    </div>
    </main>
</template>
<script>
export default {
  data() {
    return {
       num:'1'
    }
  },
  mounted(){
      $(".login").click(function(){
          $(".dis").hide()
          $(".bar").show()
      })
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    add(){
        this.num++
    },
    jian(){
        this.num--;
        if(this.num<=1){
            this.num=1
        }
    },
    jiesuan(){
            this.$toast({
                message: '您结算成功！',
                iconClass: 'iconfont icon-success',
                duration: 2000
            });
        }
  }
  
}
</script>
<style scoped>
.dis{
    display: block;
}
.bar{
    display: none;
}
.header{
    text-align: left;
    position: absolute;
    top: 0;
    z-index: 10;
    width: 100%;
    max-width: 640px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 17px;
    color: #333;
    background-color: #fff;
    box-shadow: 1px 1px 10px rgba(0,0,0,.1);
    border-bottom: 1px #e8e8e8 solid;
    }
.header span{
    float: left;
    padding-left: 0.5rem;
    font-size: 1.2rem;
}
.section{
    position: relative;
    z-index: 8;
    height: 100%;
    padding-top: 45px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
}
.pd-30{
    padding: 0 30px;
}
.pd-20{
    text-align: center;
}
.pd-20 img{
    border: none;
    max-width: 100%;
}
.login-box{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px #9e9e9e solid;
    margin-top: 15px;
    box-sizing: border-box;
    font-size: 15px;
}
.login-box input{
    border:none;
    outline: none;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 45px;
    font-size: 15px;
    padding: 0;
    box-sizing: border-box;
    margin-right: 10px;
}
.login{
    font-size: 0.8rem;
    margin-top: 40px;
    color: #fff;
    background-color: #2ab4e8;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 4px;
}
.bottom{
    overflow: hidden;
}
.bottom span{
    margin-top: 1rem;
    font-size: 0.7rem;
    color: #2ab4e8;
}
.bottom span:nth-of-type(1){
    padding-left: 1rem;
    float: left;
}
.bottom span:nth-of-type(2){
    padding-right: 1rem;
    float: right;
}
.buy-header{
    position: relative;
    top:-2.7rem;
    border-bottom: 1px #e8e8e8 solid;
}
.buy-header ul{
    display: flex;
    justify-content: space-around;
}
.buy-header ul li:nth-of-type(1){
    font-size: 1rem;
    margin-left: -1.5rem;
}
.buy-header ul li:nth-of-type(2){
    font-size: 1.2rem;
}
.buy-header ul li:nth-of-type(3){
    font-size: 1rem;
    color: #2ab4e8;
    margin-right: -1.5rem;
}
.hui{
    overflow: hidden;
    width: 100%;
    position: absolute;
    top: 3rem;
    height: 40px;
    line-height: 40px;
    background-color:#eee; 
}
.hui .right{
    float: right;
}
.hui input{
    margin-left: 1rem;
}
.hui span:nth-of-type(1){
    font-size: 1rem;
}
.hui span:nth-of-type(2){
    font-size: 0.8rem;
}
.hui span:nth-of-type(3){
    font-size: 1rem;
    color: red;
    margin-right: 0.5rem;
}
.hui span:nth-of-type(4){
    font-size: 0.8rem;
}
.bo{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 0.8rem;
    border-bottom: #e8e8e8 1px solid;
}
.bo span{
    padding-left: 1rem;
}
.detail{
    border-bottom: 1px solid #eee;
    margin-top: 1rem;
    overflow: hidden;
}
.detail ul{
    padding-bottom: 1rem;
    font-size: 0.8rem;
}
.detail div{
    float: left;
}
.detail ul li{
    padding-left: 2rem;
    width: 85%;
}
.detail .left{
    position: relative;
    padding-right: 0.5rem;
    width: 25%;
}
.detail .left img{
    width: 100%;
}
.inp input{
    position: relative;
    left: 1rem;
    top: 1rem;
}
.detail .del{
    margin-right: 1rem;
    float: right;
}
.right p:nth-of-type(1){
    padding: 3px 0;
    font-size: 0.9rem;
}
.right p:nth-of-type(2){
    padding: 3px 0;
}
.right p:nth-of-type(2) span:nth-of-type(1){
    color: red;
}
.right p:nth-of-type(3){
    border: 1px solid #eee;
    height: 30px;
    line-height: 30px;
}
.right p:nth-of-type(3) span{
    font-size: 1rem;
    height: 100%;
    text-align: center;
    border:solid 1px #eee;
    display: inline-block;
    width:30%;
}
.right p:nth-of-type(3) span:nth-of-type(1),.right p:nth-of-type(3) span:nth-of-type(3){
    background-color: #eee;
}
.del p{
    font-size: 1rem;
    padding-top: 1rem;
    color:#ccc;
}
.del p:nth-of-type(1){
    color: #333;
}
.foot{
    border-top: 1px solid #eee;
    height: 40px;
    line-height: 40px;
    font-size: 0.8rem;
    position: fixed;
    bottom: 0;
}
.foot span:nth-of-type(2){
    color: #2ab4e8;
}
.foot span:nth-of-type(3){
    color: red;
    padding-right: 1rem;
}
.foot span:nth-of-type(5){
    margin-left: 1rem;
    display: inline-block;
    background-color: #2ab4e8;
    color:#fff;
    border-radius: 5px;
    padding: 0 1rem;
}
</style>