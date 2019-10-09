<template>
    <main>
        <div class="header">
           <div class="cen">
               社区
               <span class="iconfont icon-fanhui2 span"></span>
           </div>
        </div>
        <div class="nav">
            <div class="nav-a">
                <a href="#">搜索社区文章、圈子和作者</a>
            </div>
        </div>
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../assets/img/banner01.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner02.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner03.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner04.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="all">
            <div class="fxiao">
                <ul>
                    <li><img src="../assets/img/250.jpg" alt=""><p>书单来了</p></li>
                    <li><img src="../assets/img/251.jpg" alt=""><p>店主专栏</p></li>
                    <li><img src="../assets/img/252.jpg" alt=""><p>博库小课堂</p></li>
                    <li><img src="../assets/img/253.jpg" alt=""><p>晚安故事</p></li>
                    <li><img src="../assets/img/254.jpg" alt=""><p>美学生活</p></li>
                    <li><img src="../assets/img/255.jpg" alt=""><p>精彩活动</p></li>
                    <li><img src="../assets/img/256.jpg" alt=""><p>教子有方</p></li>
                    <li><img src="../assets/img/257.jpg" alt=""><p>好物种草机</p></li>
                </ul>
            </div>
            <div class="content1">
                <p class="p">精选内容</p>
                <div class="speak">
                    <div class="tou">
                        <img src="../assets/img/find01.jpg" alt="">
                        <span>玲珑</span>
                    </div>
                    <div class="about">
                        <p>库爱 · 书｜一部行走的茶席，茶叶舒卷记录下光阴的故事</p>
                    </div>
                    <ul>
                        <li><img src="../assets/img/find001.png" alt=""></li>
                        <li><img src="../assets/img/find004.png" alt=""></li>
                        <li><img src="../assets/img/find003.png" alt=""></li>
                    </ul>
                    <div class="bottom">
                        <span>美学生活</span>
                        <span class="iconfont icon-liulan">3344</span>
                        <span class="iconfont icon-zantong-fill">66</span>
                        <span>2019-09-29</span>
                    </div>
                </div>
            </div>
            <div class="content1">
                <div class="speak">
                    <div class="tou">
                        <img src="../assets/img/find01.jpg" alt="">
                        <span>玲珑</span>
                    </div>
                    <div class="about">
                        <p>库爱 · 书｜一部行走的茶席，茶叶舒卷记录下光阴的故事</p>
                    </div>
                    <ul>
                        <li><img src="../assets/img/find001.png" alt=""></li>
                        <li><img src="../assets/img/find004.png" alt=""></li>
                        <li><img src="../assets/img/find003.png" alt=""></li>
                    </ul>
                    <div class="bottom">
                        <span>美学生活</span>
                        <span class="iconfont icon-liulan">3344</span>
                        <span class="iconfont icon-zantong-fill">66</span>
                        <span>2019-09-29</span>
                    </div>
                </div>
            </div>
            <div class="content1">
                <div class="speak">
                    <div class="tou">
                        <img src="../assets/img/find01.jpg" alt="">
                        <span>玲珑</span>
                    </div>
                    <div class="about">
                        <p>库爱 · 书｜一部行走的茶席，茶叶舒卷记录下光阴的故事</p>
                    </div>
                    <ul>
                        <li><img src="../assets/img/find001.png" alt=""></li>
                        <li><img src="../assets/img/find004.png" alt=""></li>
                        <li><img src="../assets/img/find003.png" alt=""></li>
                    </ul>
                    <div class="bottom">
                        <span>美学生活</span>
                        <span class="iconfont icon-liulan">3344</span>
                        <span class="iconfont icon-zantong-fill">66</span>
                        <span>2019-09-29</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header{
        text-align: center;
        overflow: hidden;
        position: absolute;
        top:0;
        width: 100%;
        font-size: 1.2rem;
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size: 17px;
        color: #333;
        background-color: #fff;
        box-shadow: 1px 1px 10px rgba(0,0,0,.1);
        border-bottom: 1px #e8e8e8 solid;
    }
    .span{
        float: right;
        width: 40px;
        height: 45px;
        display: block;
        color: #666;
        
    }
    .nav{
        margin-left: 2%;
        width: 95%;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        border: 1px #eee solid;
    }
    .nav a{
        text-align: center;
        color: #666;
        font-size: 0.8rem;
        display: block;

    }
    .mint-swipe{
        margin-top: 1rem;
        width: 100%;
        height: 160px;
    }
    .mint-swipe-items-wrap img{
        width: 100%;
        height: 100%;
    }
    .all{
        margin-bottom: 4rem;
        background-color: #eee;
    }
    .fxiao{
        margin-bottom: 0.5rem;
        background-color: #fff;
    }
    .fxiao ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .fxiao ul li{
        padding: 0.5rem;
        text-align: center;
        width: 20%;
    }
    .fxiao ul li img{
        width: 100%;
    }
    .fxiao ul li p{
        font-size: 0.8rem;
    }
    .content1{
        margin-bottom: 0.5rem;
        background-color: #fff;
    }
    .content1 .p{
        font-size: 1rem;
        padding: 0.5rem 0;
        text-align: center;
    }
    .tou{
        overflow: hidden;
    }
    .tou img{
        padding: 1rem;
        border-radius: 50%;
        float: left;
        width: 40px;
        height: 40px;
    }
    .tou span{
        position: relative;
        top:2rem;
        color:blue; 
        font-size: 0.8rem;
        float: left;
    }
    .about p{
        padding: 0.5rem;
        font-size: 1rem;
    }
    .speak ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
    }
    .speak ul li{
        width: 28%;
    }
    .speak ul li img{
        width: 100%;
    }
    .bottom{
        overflow: hidden;
    }
    .bottom span:nth-of-type(1){
        display: inline-block;
        font-size: 0.8rem;
        color: #2ab4e8;
        border:1px solid #2ab4e8;
        padding: 0 0.2rem;
        margin-left: 0.3rem;
    }
    .bottom span:nth-of-type(2),.bottom span:nth-of-type(3){
        font-size: 0.8rem;
        color: #666
    }
    .bottom span:nth-of-type(4){
        line-height: 30px;
        float: right;
        color: #666;
        font-size: 0.8rem;
        margin-right: 0.5rem;
    }
</style>