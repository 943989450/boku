<template id='all'>
    <main>
        <mt-swipe :auto="4000" class="banner">
            <mt-swipe-item><img src="../assets/img/wbanner1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/wbanner2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/wbanner3.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="ban">
            <img src="../assets/img/wbot.jpg" alt="">
        </div>
        <ul class="content-ul">
            <li>
                <router-link to='/pintuan'>
                    <img src="../assets/img/wxiao1.jpg" alt="">
                </router-link>
            </li>
            <li>
                <router-link to='/changxiao'>
                    <img src="../assets/img/wxiao2.jpg" alt="">
                </router-link>
            </li>
            <li>
                <router-link to='/goodbook'>
                    <img src="../assets/img/wxiao3.jpg" alt="">
                </router-link>
            </li>
            <li>
                <router-link to='/fenlei1'>
                    <img src="../assets/img/wxiao4.jpg" alt="">
                </router-link>
            </li>
            <li>
                <router-link to='/kaidian'>
                    <img src="../assets/img/wxiao5.jpg" alt="">
                </router-link>
            </li>
            <li>
                <router-link to='/pintuan'>
                    <img src="../assets/img/wxiao6.jpg" alt="">
                </router-link>
            </li>
            <li>
                <router-link to='/changxiao'>
                    <img src="../assets/img/wxiao7.jpg" alt="">
                </router-link>
            </li>
            <li>
                <router-link to='/goodbook'>
                    <img src="../assets/img/wxiao8.jpg" alt="">
                </router-link>
            </li>
            <li>
                <router-link to='/fenlei1'>
                    <img src="../assets/img/wxiao9.jpg" alt="">
                </router-link>
            </li>
            <li>
                <router-link to='/kaidian'>
                    <img src="../assets/img/wxiao10.jpg" alt="">
                </router-link>
            </li>
        </ul>
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
        <div class="content4">
            <div class="content4-box">
                <div class="con4-left"><img src="../assets/img/wcontent4-1.jpg" alt=""></div>
                <div class="con4-left"><img src="../assets/img/wcontent4-2.jpg" alt=""></div>
                <div class="con4-left"><img src="../assets/img/wcontent4-3.jpg" alt=""></div>
                <div class="con4-right">
                    <p><img src="../assets/img/wcontent4-4.jpg" alt=""></p>
                    <p><img src="../assets/img/wcontent4-5.jpg" alt=""></p>
                </div>
            </div>
        </div>
        <div class="content4-last">
            <mt-swipe :auto="4000" class="banner">
                <mt-swipe-item><img src="../assets/img/wbanner1.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/wbanner2.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/wbanner3.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
            <img src="../assets/img/hh.jpg" alt="">
        </div>
        <div class="content5">
             <ul>
                <li v-for="(item,index) in con5">
                    <img :src="item.image" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.price}}</span>
                    <del>{{item.del}}</del>
                </li>
            </ul>
        </div>
        <p class="al"></p>
        <div class="content6">
            <div class="con6-up">
                <p><span>|</span>精选书单</p>
            </div>
            <div><img src="../assets/img/content6.jpg" alt=""></div>
        </div>
        <div class="content5">
             <ul>
                <li v-for="(item,index) in jinxuan">
                    <img :src="item.image" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.price}}</span>
                    <del>{{item.del}}</del>
                </li>
            </ul>
        </div>
        <div class="content7">
            <div><img src="../assets/img/bcon6-1.jpg" alt=""></div>
            <div><img src="../assets/img/bcon6-2.jpg" alt=""></div>
            <ul>
                <li><img src="../assets/img/bcon6-3.jpg" alt=""></li>
                <li><img src="../assets/img/bcon6-4.jpg" alt=""></li>
                <li><img src="../assets/img/bcon6-5.jpg" alt=""></li>
                <li><img src="../assets/img/bcon6-6.jpg" alt=""></li>
            </ul>
        </div>
       <div class="content5">
           <div>
               <ul>
                   <li v-for="(item,index) in con6">
                        <img :src="item.image" alt="">
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                        <del>{{item.del}}</del>
                   </li>
               </ul>
           </div>
       </div>
       <div class="content8">
           <div><img src="../assets/img/wenxue1.jpg" alt=""></div>
           <div><img src="../assets/img/wenxue2.jpg" alt=""></div>
       </div>
       <div class="content5">
           <ul>
               <li><img src="../assets/img/wenxue3.jpg" alt=""></li>
               <li><img src="../assets/img/wenxue4.jpg" alt=""></li>
               <li><img src="../assets/img/wenxue5.jpg" alt=""></li>
               <li><img src="../assets/img/wenxue6.jpg" alt=""></li>
               <li><img src="../assets/img/wenxue7.jpg" alt=""></li>
               <li><img src="../assets/img/wenxue8.jpg" alt=""></li>
               <li><img src="../assets/img/wenxue9.jpg" alt=""></li>
               <li><img src="../assets/img/wenxue10.jpg" alt=""></li>
               <li><img src="../assets/img/wenxue11.jpg" alt=""></li>
           </ul>
       </div>
        <div class="content5">
            <ul>
                <li v-for="(item,index) in wenxue">
                    <img :src="item.image" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.price}}</span>
                    <del>{{item.del}}</del>
                </li>
            </ul>
        </div>


        <div class="content9">
           <div>
               <img src="../assets/img/jg1.jpg" alt="">
           </div>
           <div>
               <img src="../assets/img/jg2.jpg" alt="">
           </div>
        </div>
        <div class="content5">
            <ul>
                <li v-for="(item,index) in jinguan">
                    <img :src="item.image" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.price}}</span>
                    <del>{{item.del}}</del>
                </li>
             </ul>
        </div>

        <div class="content9">
           <div>
               <img src="../assets/img/ren1.jpg" alt="">
           </div>
           <div>
               <img src="../assets/img/ren2.jpg" alt="">
           </div>
        </div>
        <div class="content5">
            <ul>
                <li v-for="(item,index) in renwen">
                    <img :src="item.image" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.price}}</span>
                    <del>{{item.del}}</del>
                </li>
             </ul>
        </div>

        <div class="content9">
           <div>
               <img src="../assets/img/shi1.jpg" alt="">
           </div>
           <div>
               <img src="../assets/img/shi2.jpg" alt="">
           </div>
        </div>
        <div class="content5">
            <ul>
                <li v-for="(item,index) in shishang">
                    <img :src="item.image" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.price}}</span>
                    <del>{{item.del}}</del>
                </li>
             </ul>
        </div>

        <div class="content9">
           <div>
               <img src="../assets/img/ke1.jpg" alt="">
           </div>
           <div>
               <img src="../assets/img/ke2.jpg" alt="">
           </div>
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

        <p class="al"></p>
        <div class="content6">
            <div class="con6-up">
                <p><span>|</span>更多好书</p>
            </div>
            <div><img src="../assets/img/content6.jpg" alt=""></div>
        </div>
       <div class="content13">
           <div>
               <ul>
                   <li v-for="(item,index) in more">
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
            con5:[],
            jinxuan:[],
            con6:[],
            wenxue:[],
            jinguan:[],
            renwen:[],
            shishang:[],
            keji:[],
            more:[]
        }
    },
    mounted(){
    this.$http.get('./data/wen.json')
        .then((response)=>{
        console.log(response);
        console.log(this)
        this.list=response.data.list,
        this.con5=response.data.con5,
        this.jinxuan=response.data.jinxuan,
        this.con6=response.data.con6,
        this.wenxue=response.data.wenxue,
        this.jinguan=response.data.jinguan,
        this.renwenn=response.data.renwen,
        this.shishang=response.data.shishang,
        this.keji=response.data.keji,
        this.more=response.data.more
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
    .ban img{
        width: 100%
    }
      .content-ul{
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
        width:100%;
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
   .content4{
        width:100%;
   }
   .content4-box{
       padding: 0 10px;
       overflow: hidden;
   }
   .con4-left img{
        width:100%;
   }
   .con4-right{
       overflow: hidden;
   }
   .con4-right p{
       width: 50%;
       float: left;
   }
   .con4-right p img{
     width:100%;
   }
   .content4-last img{
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
   .al{
       height: 5px;
       width: 100%;
       background-color: #eee;
   }
   .content6{
       margin-top: 5px;
       width:100%;
   }
   .content6 .con6-up{
       height: 40px;
       line-height: 40px;
       font-size: 1rem;
   }
   .content6 .con6-up span{
       padding: 0.8rem;
       color: #2ab4e8;
   }
   .content6 img{
       width: 100%;
   }
   .content7{
       width: 100%;
   }
   .content7 img{
       width: 100%;
   }
   .content7 ul{
       overflow: hidden;
   }
   .content7 li{
       float: left;
       width: 50%;
   }
   .content8 img{
       width:100%;
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