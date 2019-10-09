<template>
    <main>
        <section class="section">
            <div class="pr">
                <div class="df ">
                    <div class="fg">
                        <span>签到</span>
                    </div>
                    <div class="fs">
                        <span class="iconfont icon-shezhi"></span>
                    </div>
                </div>
            </div>
            <div class="bc">
                 <div class="use">
                        <img src="../assets/img/myuser.jpg" alt="">
                    </div>
                <div class="bg">
                    <ul>
                        <li><p>0.00</p><p>余额</p></li>
                        <li><p>55</p><p>积分</p></li>
                        <li><p>3</p><p>卡卷</p></li>
                        <li><p>0</p><p>收藏</p></li>
                    </ul>
                </div>
            </div>
        </section>
        <div class="all">
        <div class="bb1">
            <div class="bb1-top">
                <span>我的订单</span>
                <span>全部订单<i class="iconfont icon-fanhui_you"></i></span>
            </div>
            <div class="bb1-ul">
                <ul>
                    <li>
                        <p class="iconfont icon-daifukuan"></p>
                        <p>待付款</p>
                    </li>
                    <li>
                        <p class="iconfont icon-daifahuo1"></p>
                        <p>待发货</p>
                    </li>
                    <li>
                        <p class="iconfont icon-daifahuo"></p>
                        <p>待收货</p>
                    </li>
                     <li>
                        <p class="iconfont icon-31daipingjia"></p>
                        <p>待评价</p>
                    </li>
                </ul>
            </div>
        </div>
         <div class="bb2">
            <div class="bb2-top">
                <span>博库服务</span>
            </div>
            <div class="bb2-ul">
                <ul>
                    <li>
                        <p class="iconfont icon-tubiaozhizuomoban"></p>
                        <p>好书好书共读</p>
                    </li>
                    <li>
                        <p class="iconfont icon--shequ"></p>
                        <p>社区</p>
                    </li>
                    <li>
                        <p class="iconfont icon-renwu"></p>
                        <p>任务</p>
                    </li>
                     <li>
                        <p class="iconfont icon-tubiaozhizuomoban1"></p>
                        <p>众筹</p>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </main>
</template>
<style scoped>
.all{
    background-color: #eee;
}
.section {
    position: relative;
    top:-4rem;
    z-index: 8;
    box-sizing: border-box;
}
.pr{
    overflow: hidden;
    padding-bottom: 110px;
    background-color: #2f9de2;
    background-image: url("../assets/img/mybg.png");
    background-repeat: repeat;
    background-size: cover;
}
.df{
    overflow: hidden;
    color: #fff;
    padding: 10px 0;
}
.fg{
    padding: 5px;
}
.fg span{
    border: 1px #fff solid;
    padding: 2px 4px;
    font-size: 1rem;
}
.fs{
    float: right;
    position: relative;
    top:-2rem;
    font-size: 1rem;
}
.fs span{
    padding: 5px;
}
.bc{
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: -1rem;
    left: 15px;
    right: 15px;
    margin-top: 30px;
   
}
.use img{
    position: relative;
    top:2rem;
    border-radius: 50%;
    width:20%; 
}
.bg ul{
    height: 80px;
    width: 92%;
    background-color: #fff;
     box-shadow: 0 0 10px rgba(0,0,0,.4);
}
.bg li{
    margin-top: 1.5rem;
    width: 20%;
    font-size: 0.7rem;
}
.bb1{
    margin-bottom: 1rem;
    background-color: #fff;
    margin-top: 20px;
    padding-bottom: 2rem;
}
.bb1-top{
    overflow: hidden;
    width: 100%;
    border-bottom: 1px solid #eee;
}
.bb1-top span{
    font-size: 0.8rem;
    color: #999;
}
.bb1-top span:nth-of-type(1){
    float: left;
}
.bb1-top span:nth-of-type(2){
    float: right;
}
.bb1-ul ul{
    padding-top: 1rem;
    text-align: center;
    display: flex;
    justify-content: space-around;
    font-size: 0.8rem;
}
.bb2{
    margin-bottom: 4rem;
    background-color: #fff;
    padding-bottom: 2rem;
}
.bb2-top{
    overflow: hidden;
    width: 100%;
    border-bottom: 1px solid #eee;
}
.bb2-top span{
    font-size: 0.8rem;
    color: #999;
}
.bb2-ul ul{
    padding-top: 1rem;
    text-align: center;
    display: flex;
    justify-content: space-around;
    font-size: 0.6rem;
}
.bb2-ul ul li:nth-of-type(1) p:nth-of-type(1){
    font-size:1.7rem;
    color: yellow;
}
.bb2-ul ul li:nth-of-type(2) p:nth-of-type(1){
    font-size:1.7rem;
    color: pink;
}
.bb2-ul ul li:nth-of-type(3) p:nth-of-type(1){
    font-size:1.7rem;
    color: rgb(0, 128, 85);
}
.bb2-ul ul li:nth-of-type(4) p:nth-of-type(1){
    font-size:1.7rem;
    color: pink;
}
</style>