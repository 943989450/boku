<template>
    <main>
        <div class="pt-logo">
            <img src="../assets/img/product1.jpg" alt="">
            <p>所有失去的都会以另一种方式归来</p>
            <p>岁月不曾慈悲过，愿你始终不移真心。给所有年轻人爱的正能量和信心。</p>
            <div class="pt-pri">
                <span>26.03</span>
                <del>市场价：￥39.80</del>
            </div>
            <span class="s1">销量：646259件</span>
            <span class="s2">库存：1582件</span>
        </div>
        <div class="all">
            <div class="juan">
                <span>优惠劵</span>
                <span>有两张券可领取</span>
                <span>领券<i class="iconfont icon-fanhui_you"></i></span>
            </div>
            <div class="is">
                <span>IBSN</span>
                <span>9787510842344</span>
                <span class="iconfont icon-fanhui_you"></span>
            </div>
            <div class="is">
                <span>作者</span>
                <span>耿帅</span>
                <span class="iconfont icon-fanhui_you"></span>
            </div>
            <div class="is">
                <span>出版</span>
                <span>九州</span>
                <span class="iconfont icon-fanhui_you"></span>
            </div>
            <div class="bb">
                <ul>
                    <li>
                        <span class="iconfont icon-zantong-fill"></span>
                        <span>正品保障</span>
                    </li>
                    <li>
                        <span class="iconfont icon-zantong-fill"></span>
                        <span>7天无理由退款</span>
                    </li>
                    <li>
                        <span class="iconfont icon-zantong-fill"></span>
                        <span>赠送积分</span>
                    </li>
                </ul>
            </div>
            <div class="banner">
                <img src="../assets/img/banner1.jpg" alt="">
            </div>
            <div class="gou">
                <div><p>购买此书的用户还买了</p></div>
                <ul>
                    <li v-for='(item,index) in list'>
                        <img :src="item.image" alt="">
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                        <del>{{item.del}}</del>
                    </li>
                </ul>
            </div>
             <div class="content5">
                <ul>
                    <li v-for="(item,index) in keji">
                        <img :src="item.image" alt="">
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                        <del>{{item.del}}</del>
                    </li>
                </ul>
        </div>
        </div>
        <div class="foot">
            <ul>
                <li>
                    <span class="iconfont icon-kefu"></span>
                    <p>客服</p>
                </li>
                <li>
                    <span class="iconfont icon-shoucang"></span>
                    <p>收藏</p>
                </li>
                <li>
                    <span class="iconfont icon-gouwuche"></span>
                    <p>购物车</p>
                </li>
            </ul>
            <span class=" span span1" @click="add()">加入购物车</span>
            <span class="span span2">立即购买</span>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            keji:[]
        }
    },
    methods:{
        add(){
            this.$toast({
                message: '添加购物车成功',
                iconClass: 'iconfont icon-success',
                duration: 2000
            });
        }
    },
     mounted(){
    this.$http.get('./data/books.json')
        .then((response)=>{
        console.log(response);
        console.log(this)
        this.list=response.data.list,
        this.keji=response.data.keji
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
.pt-logo{
    width: 100%;
    overflow: hidden;
    text-align: center;
    border-bottom: 1px solid #eee;
}
.pt-logo img{
    width: 80%;
}
.pt-logo p{
    text-align: left;
}
.pt-logo p:nth-of-type(1){
    font-size: 1rem;
}
.pt-logo p:nth-of-type(2){
    color: #757575;
    font-size: 0.7rem;
}
.pt-pri{
    text-align: left;
}
.pt-pri span{
   font-size:1rem;
   color:red; 
}
.pt-pri del{
    font-size: 0.7rem;
    color: #757575;
}
.s1,.s2{
    font-size: 0.7rem;
    color: #333;
    padding: 2rem;
}
.all{
    background-color: #eee;
}
.juan{
    margin-bottom: 1rem;
    overflow: hidden;
    background-color: #fff;
}
.juan span:nth-of-type(1){
    margin:0 1.2rem;
    color: #fff;
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    background-color:#e71d36; 
}
.juan span:nth-of-type(2){
    font-size: 0.7rem;
}
.juan span:nth-of-type(3){
    line-height: 40px;
    font-size: 0.7rem;
    float: right;
    padding-right: 1rem;
}
.juan span:nth-of-type(3) i{
    font-size: 0.7rem;
}
.is{
    overflow: hidden;
    margin-bottom: 1rem;
    background-color: #fff;
}
.is span:nth-of-type(1){
    margin: 0 0.5rem;
    font-size: 1rem;
}
.is span:nth-of-type(2){
    font-size: 0.7rem;
    color: #757575;
}
.is span:nth-of-type(3){
    padding-right: 1rem;
    float: right;
    font-size: 0.9rem;
    line-height: 40px;
}
.bb{
    margin-bottom: 1rem;
    background-color: #fff;
}
.bb ul{
    padding: 0.5rem 0;
    font-size: 0.8rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
}
.banner{
    margin-bottom: 1rem;
}
.banner img{
    width: 100%;
}
.gou div{
    height: 30px;
    line-height: 30px;
    background-color: #fff;
    font-size: 0.8rem;
}
.gou ul{
       border-top: 1px solid #ccc;
       overflow: hidden;
       overflow-x: auto;
       width:100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
}
.gou li{
       font-size: 0.8rem;
        width: 107.143px;
}
 .gou li p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
   }
   .gou li span{
       color:red;
   }
   .gou li img{
       width: 100%;
   }
   .content5{
       width:100%;
   }
   .content5 ul{
       overflow: hidden;
   }
   .content5 ul li{
       float: left;
       width: 32.78%;
       font-size: 0.8rem;
       border: 1px solid #eee;
   }
   .content5 li p{
       height: 38px;
       padding-left: 0.5rem;
        word-break: break-all;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 2; /** 显示的行数 **/
        overflow: hidden;
   }
   .content5 li span{
        padding: 0 0.5rem;
        color:red;
   }
   .content5 img{
       padding:0.5rem 0;
       width: 100%;
   }
   .foot{
       height: 50px;
       line-height: 50px;
       overflow: hidden;
       width: 100%;
       background-color: #fff;
       position:fixed;
       bottom: 0;
   }
   .span{
       padding: 0 3px;
       text-align: center;
       display: inline-block;
       width: 90px;
       font-size: 1rem;
       float: left;
       color: #fff;
   }
   .span1{
       background-color: #2ab4e8; 
   }
   .span2{
       background-color: #f76c6c; 
   }
   .foot ul{
       height: 100%;
       line-height: 100%;
       float: left;
       overflow: hidden;
   }
   .foot ul li{
       float: left;
       padding: 0 0.6rem;
       text-align: center;
   }
    .foot ul li p{
        font-size: 0.8rem;
    }
    .foot ul li span{
        font-size: 1rem;
    }
    .foot ul li:nth-of-type(1) span:nth-of-type(1){
        font-size: 1.2rem;
    }
    .foot ul li:nth-of-type(2) span:nth-of-type(1){
        font-size: 1.3rem;
    }
    .foot ul li:nth-of-type(3) span:nth-of-type(1){
        font-size: 1.7rem;
    }
    .foot ul li:nth-of-type(4) span{
        text-align: center;
        width:80px;
        padding: 0 3px; 
        line-height: 65px;
        display: inline-block;
        height: 65px;
        background-color: #2ab4e8;
        color: #fff;
    }
    .foot ul li:nth-of-type(5) span{
        background-color: #f76c6c;
        color: #fff;
         text-align: center;
        line-height: 65px;
        display: inline-block;
        height: 65px;
        width:80px;
        padding: 0 3px; 
    }
</style>