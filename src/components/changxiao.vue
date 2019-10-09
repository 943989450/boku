<template>
    <main>
        <div class="buy-header">
            <ul>
                <li @click="back()"><span class="iconfont icon-fanhui"></span></li>
                <li><span>排行榜</span></li>
                <li><span class="iconfont icon-shouye"></span></li>
            </ul>
        </div>
        <div class="cx">
            <span>图书畅销榜</span>
            <span>更多<i class="iconfont icon-fanhui_you"></i></span>
        </div>
        <div class="cx-deta">
            <ul>
                <li v-for="(item,index) in cx">
                    <router-link to="/details">
                        <img :src="item.image" alt="">
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                        <del>{{item.del}}</del>
                        <div class="rank">
                            <p>{{item.num}}</p>
                        </div>
                    </router-link>
                    
                </li>
            </ul>
        </div>

        <div class="wc">
            <span>文创畅销榜</span>
            <span>更多<i class="iconfont icon-fanhui_you"></i></span>
        </div>
        <div class="cx-deta">
            <ul>
                <li v-for="(item,index) in wc">
                    <router-link to="/details">
                        <img :src="item.image" alt="">
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                        <del>{{item.del}}</del>
                        <div class="rank">
                            <p>{{item.num}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="sh">
            <span>生活美学畅销榜</span>
            <span>更多<i class="iconfont icon-fanhui_you"></i></span>
        </div>
        <div class="cx-deta">
            <ul>
                <li v-for="(item,index) in sh">
                    <router-link to="/details">
                        <img :src="item.image" alt="">
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                        <del>{{item.del}}</del>
                        <div class="rank">
                            <p>{{item.num}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            cx:[],
            wc:[],
            sh:[]
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
    mounted(){
    this.$http.get('./data/changxiao.json')
        .then((response)=>{
        console.log(response);
        console.log(this)
        this.cx=response.data.cx,
        this.wc=response.data.wc,
        this.sh=response.data.sh
        })
        .catch(function (error) {
        console.log(error);
        })
        .then(function () {
        // always executed
        }); 
    }
}
</script>
<style scoped>
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
    color: #333;
    margin-right: -1.5rem;
}
.cx{
    overflow: hidden;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 0.8rem;
    position: absolute;
    top: 3rem;
    border-bottom: 1px solid #eee;
}
.wc,.sh{
    margin-top: 1rem;
    overflow: hidden;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 0.8rem;
    border-bottom: 1px solid #eee;
}
.cx span:nth-of-type(1),.wc span:nth-of-type(1),.sh span:nth-of-type(1){
    color:#2ab4e8;
    padding-left: 1.5rem; 
}
.wc span:nth-of-type(1){
    color:#c8a742; 
}
.sh span:nth-of-type(1){
    color:#72a74b; 
}
.cx span:nth-of-type(2),.wc span:nth-of-type(2),.sh span:nth-of-type(2){
    float: right;
    padding-right: 1rem;
}
.cx-deta{
       width:100%;
   }
   .cx-deta ul{
       display: flex;
       justify-content: space-around;
       flex-wrap: wrap;
   }
   .cx-deta ul li{
       position: relative;
       width: 28%;
       font-size: 0.7rem;
       color: #666;
   }
   .cx-deta li p{
       height: 25px;
       padding-left: 0.5rem;
       white-space: nowrap;
       text-overflow: ellipsis;
        overflow: hidden;
   }
   .cx-deta li span{
        padding: 0 0.5rem;
        color:red;
   }
   .cx-deta li del{
       color:#aaa;
   }
   .cx-deta img{
       padding:0.5rem 0;
       width: 100%;
       border: 1px solid #eee;
   }
   .rank{
        position: absolute;
        left: -18px;
        top: 18px;
        z-index: 1;
        width: 0;
        height: 0;
        border-right: 25px solid transparent;
        border-left: 25px solid transparent;
        border-top: none;
        border-bottom: 25px solid #ef6262;
        transform-origin: top left;
        transform: rotate(-45deg);
   }
   .rank p{
        width: 25px;
        position: absolute;
        top: 1px;
        left: -19px;
        text-align: center;
        font-size: 14px;
        line-height: 25px;
        color: #fff;
        transform: rotate(45deg);
   }
</style>