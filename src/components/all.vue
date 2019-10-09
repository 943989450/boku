<template id='all'>
    <main>
        <mt-swipe :auto="4000" class="banner">
            <mt-swipe-item><img src="../assets/img/banner1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner2.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner4.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner5.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner6.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner7.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner8.png" alt=""></mt-swipe-item> 
        </mt-swipe>
        <ul class="content-ul">
            <li>
                <router-link to='/pintuan'>
                    <img src="../assets/img/xiao1.jpg" alt="">
                    <p>拼团</p>
                </router-link>
            </li>
            <li>
                <router-link to='/changxiao'>
                    <img src="../assets/img/xiao2.jpg" alt="">
                    <p>畅销榜</p>
                </router-link>
            </li>
            <li>
                <router-link to='/goodbook'>
                    <img src="../assets/img/xiao3.jpg" alt="">
                    <p>好书共读</p>
                </router-link>
            </li>
            <li>
                <router-link to='/fenlei1'>
                    <img src="../assets/img/xiao4.jpg" alt="">
                    <p>分类</p>
                </router-link>
            </li>
            <li>
                <router-link to='/kaidian'>
                    <img src="../assets/img/xiao5.jpg" alt="">
                    <p>开店</p>
                </router-link>
            </li>
        </ul>
        <div>
            <div class="slidup">
                <div class="slidup-all">
                    <div class="slidup-left"><span>快报</span></div>
                    <div class="l">|</div>
                    <div class="slidup-right">
                        <p>关于博库网下沙、西湖文化广场自取点撤销通知</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content2">
            <div class="content2-up">
                <div class="content2-img">
                    <img src="../assets/img/buy.png" alt="" width="110px">
                    <span>14:00开场</span>
                    <span class="more">更多></span>
                </div>
                <div class="content2-list">
                    <ul class="list-ul">
                        <li v-for='(item,index) in list'>
                            <img :src="item.image" alt="">
                            <p>{{item.title}}</p>
                            <span>{{item.price}}</span>
                            <del>{{item.del}}</del>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content3">
            <img src="../assets/img/content3.png" alt="">
        </div>
        <div class="content4">
            <div class="content4-box">
                <div class="con4-left"><img src="../assets/img/content4-1.png" alt=""></div>
                <div class="con4-right">
                    <p><img src="../assets/img/content4-2.jpg" alt=""></p>
                    <p><img src="../assets/img/content4-3.jpg" alt=""></p>
                </div>
            </div>
        </div>
        <div class="content5">
            <img src="../assets/img/content5.jpg" alt="">
        </div>
        <div class="content6">
            <ul class="con6-ul">
                <li v-for="(item,index) in con6">
                    <div class="con6-box">
                        <div class="con6-left">
                            <img :src="item.image" alt="">
                        </div>
                        <div class="con6-right">
                            <p class="title">{{item.title}}</p>
                            <p class="des">{{item.des}}</p>
                            <span class="act">{{item.act}}</span>
                            <span class="price">{{item.price}}</span>
                            <del class="del">{{item.shan}}</del>
                            <p class="red">{{item.red}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="content7">
            <div class="con7-box1">
                <img src="../assets/img/content7.jpg" alt="">
            </div>
            <div class="con7-box1">
                <img src="../assets/img/content7-1.jpg" alt="">
            </div>
            <div class="con7-box1">
                <img src="../assets/img/content7-2.jpg" alt="">
            </div>
            <div class="con7-box1">
                <img src="../assets/img/content7-3.jpg" alt="">
            </div>
        </div>
        <div class="content8">
            <div class="con8-box">
                <ul>
                    <li v-for="(item,index) in con8">
                        <div class="con8-img">
                            <img :src="item.image" alt="">
                        </div>
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                        <del>{{item.del}}</del>
                    </li>
                    <li class="con8-more">
                        <div>
                            <a href="#"><img src="../assets/img/more-product.jpg" alt="" width="115px"></a>
                        </div>
                    </li>
                </ul>
             </div>
       </div>
       <div class="content9">
           <div>
               <img src="../assets/img/con9-1.jpg" alt="">
           </div>
           <div>
               <img src="../assets/img/con9-2.jpg" alt="">
           </div>
       </div>
       <div class="content10">
           <div>
               <ul>
                   <li v-for="(item,index) in con10">
                        <img :src="item.image" alt="">
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                        <del>{{item.del}}</del>
                   </li>
               </ul>
           </div>
       </div>
        <div class="content9">
           <div>
               <img src="../assets/img/con11-1.jpg" alt="">
           </div>
           <div>
               <img src="../assets/img/con11-2.jpg" alt="">
           </div>
       </div>
       <div class="content10">
           <div>
               <ul>
                   <li v-for="(item,index) in con11">
                        <img :src="item.image" alt="">
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                        <del>{{item.del}}</del>
                   </li>
               </ul>
           </div>
       </div>
       <div class="content9">
           <div>
               <img src="../assets/img/con12-1.jpg" alt="">
           </div>
           <div>
               <img src="../assets/img/con12-2.jpg" alt="">
           </div>
       </div>
        <div class="content10">
           <div>
               <ul>
                   <li v-for="(item,index) in con12">
                        <img :src="item.image" alt="">
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                        <del>{{item.del}}</del>
                   </li>
               </ul>
           </div>
       </div>
       <div class="content9">
           <div>
               <img src="../assets/img/con13.jpg" alt="">
           </div>
       </div>
       <div class="content13">
           <div>
               <ul>
                   <li v-for="(item,index) in con13">
                        <img :src="item.image" alt="">
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                        <del>{{item.del}}</del>
                        <img id='img' :src="item.img" alt="">
                   </li>
               </ul>
           </div>
       </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            con6:[],
            con8:[],
            con10:[],
            con11:[],
            con12:[],
            con13:[]
        }
    },
    mounted(){
    this.$http.get('./data/all.json')
        .then((response)=>{
        console.log(response);
        console.log(this)
        this.list=response.data.list,
        this.con6=response.data.con6,
        this.con8=response.data.con8,
        this.con10=response.data.con10,
        this.con11=response.data.con11,
        this.con12=response.data.con12,
        this.con13=response.data.con13
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
<style>
main{
    margin-bottom: 4rem;
}
    .banner img{
		width:100%;
	}
	.banner .mint-swipe-items-wrap{
		padding-bottom:45.31%;
	}
</style>
<style scoped>
    ::-webkit-scrollbar {/*隐藏滚轮*/
        display: none;
    }
      .content-ul{
        margin: 10px auto;
        padding:0px 10px;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
    }
    .content-ul li{
        float: left;
        width: 20%;
        margin: 0%;
        text-align: center;
    }
    .content-ul li a{
        text-decoration: none;
        color: #333;
        font-size: 0.8rem;
    }
    .content-ul li p{
        margin-top: -0.14rem;
    }
    .content-ul li img{
        width: 75%;
    }
    .slidup{
        overflow: hidden;
        font-size: 0.8rem;
        height: 40px;
        line-height: 40px;
        width: 100%;
        margin-bottom: 4%;
    }
    .slidup-all{
        overflow: hidden;
        height: 90%;
        margin: 0 10px;
        border:1px solid #aaa;
        border-radius: 10px;
    }
    .slidup-left{
        float: left; 
    }
    .l{
        padding:0 1rem;
        float: left;
    }
    .slidup-left span{
        display: block;
        padding-left:15px; 
        color: #2ab4e8;
    }
    .slidup-right{
        text-align: left;
    }
    .content2-up{
        width:100%;
        position: relative;
        display: inline-block;
        margin: 0px 10px;
    }
    .content2-img span{
        font-size: 1.1rem;
    }
    .content2-img .more{
        font-size: 12px;
        position: absolute;
        right: 25px;
        top:10px;
    }
   .content2-list{
       padding: 1rem 0;
       border-top: 1px solid #ccc;
       overflow: hidden;
       overflow-x: auto;
       width:100%;
   }
   .content2-list .list-ul{
       display: flex;
   }
   .content2-list li{
       font-size: 0.8rem;
        width: 107.143px;
   }
   .content2-list li p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
   }
   .content2-list li span{
       color:red;
   }
   .content2-list li img{
       width: 100%;
   }
   .content3{
       background-color: #eee;
       text-align:center;
       width:100%;
   }
   .content3 img{
       width:95%;
   }
   .content4{
        width:100%;
   }
   .content4-box{
       background-color: #fff;
      padding: 0 10px;
       overflow: hidden;
   }
   .content4-box img{
       width:100%;
   }
   .con4-left,.con4-right{
       width:50%;
       float: left;
   }
   .con4-right p img{
     width:95%;
   }
   .content5{
       text-align:center;
       width:100%;
   }
   .content5 img{
       width: 100%;
   }
   .content6{
       width:100%;
   }
   .con6-ul{
       overflow: hidden;
   }
    .con6-ul li{
         border-bottom:1px solid #eee;
        width:100%;
        padding: 0 10px;
        margin:0px;
    }
    .con6-left,.con6-right{
        float: left;
    }
    .con6-left{
        line-height: 60px;
        text-align: center;
        width: 30%;
        margin-right: 10px;
        border:1px solid #eee;
    }
    .con6-left img{
        position: relative;
        top: 10px;
        width:100%;
       
    }
    .con6-right{
        width:65%;
    }
    .title{
        white-space: nowrap;
        overflow: hidden;
        font-size: 0.95rem;
    }
    .des,.act,.del{
        color: #666;
        font-size: 0.7rem;
    }
    .des{
        /* height: 50px; */
        word-break: break-all;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 3; /** 显示的行数 **/
        overflow: hidden;
    }
    .act{
        font-weight: 600;
    }
    .price{
        font-size: 0.9rem;
        color: red;
    }
    .red{
        width: 30%;
        font-size: 0.8rem;
        color:#fff;
        padding: 4px 10px;
        border-radius: 4px;
        background-color: #ed5c6d;
    }
    .con6-box{
        overflow: hidden;
        margin-bottom: 30px;
    }
    .content7{
       text-align:center;
       width:100%;
   }
   .content7 img{
       width: 100%;
   }
   .content8{
       width: 100%;
   }
   .con8-box{
       width: 100%;
       overflow: hidden;
       overflow-x: auto;
   }
   .con8-box ul{
       font-size: 0.8rem;
       display: flex;
   }
   .con8-box li{
       margin:0 0.5rem;
       width: 30%;
   }
   .con8-box li .con8-img{
       width: 100%;
       border:1px solid #eee;
   }
   .con8-box li .con8-img img{
       padding: 7.5px 0px;
       width: 100%;
   }
   .con8-box li p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
   }
   .con8-box li span{
       color:red;
   }
   .content9{
       text-align: center;
       width: 100%;
   }
   .content9 img{
       width: 100%;
   }
   .content10{
       width: 100%;
   }
   .content10 ul{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
   }
   .content10 li{
       font-size: 0.7rem;
        width: 32%;
        border: 1px solid #eee;
   }
   .content10 li p{
        word-break: break-all;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 2; /** 显示的行数 **/
        overflow: hidden;
   }
   .content10 li span{
       color:red;
   }
   .content10 li img{
       width: 100%;
   }
    .content13{
       width: 100%;
   }
   .content13 ul{
       display: flex;
       flex-wrap: wrap;
       /* justify-content: space-between; */
   }
   .content13 li{
       position: relative;
       font-size: 0.7rem;
        width: 49%;
        border: 1px solid #eee;
   }
   #img{
       position: absolute;
       top: 0;
       left: 0;
       width: 23%;
   }
   .content13 li p{
       width: 85%;
       font-size: 0.8rem;
       padding-left: 0.5rem;
       padding-right: 0.5rem;
       padding-bottom: 1rem;
       white-space: nowrap;
       overflow: hidden;
   }
   .content13 li span{
       padding: 0.5rem;
       color:red;
   }
   .content13 li img{
       padding-top: 0.5rem;
       width: 96%;
   }

  

</style>