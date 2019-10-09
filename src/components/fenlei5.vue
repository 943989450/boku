<template>
   <main>
        <div class="all">
            <div class="top">
                <img src="../assets/img/banner3.jpg" alt="">
            </div>
            <div class="jingxuan">
                <div class="li2">
                    <p>精选</p>
                </div>
                <ul class="ul2">
                    <li v-for="(item,index) in jingxuanlist2">
                        <img :src="item.img" alt="">
                        <p>{{item.des}}</p>
                    </li>
                </ul>
            </div>
            <div class="list">
                <div class="child">
                    <div class="list-top">
                        <span>童书</span>
                        <span class="iconfont icon-bar-chart-outline1"></span>
                    </div>
                    <ul>
                        <li v-for="(item,index) in tushuchild">
                           <span>{{item.msg}}</span> 
                        </li>
                    </ul>
                </div>

                 <div class="child">
                    <div class="list-top">
                        <span>诗歌散文</span>
                        <span class="iconfont icon-bar-chart-outline1"></span>
                    </div>
                    <ul>
                        <li v-for="(item,index) in tushushige">
                           <span>{{item.msg}}</span> 
                        </li>
                    </ul>
                </div>

                 <div class="child">
                    <div class="list-top">
                        <span>小说</span>
                        <span class="iconfont icon-bar-chart-outline1"></span>
                    </div>
                    <ul>
                        <li v-for="(item,index) in tushuxiaoshuo">
                           <span>{{item.msg}}</span> 
                        </li>
                    </ul>
                </div>

                 <div class="child">
                    <div class="list-top">
                        <span>青春文学</span>
                        <span class="iconfont icon-bar-chart-outline1"></span>
                    </div>
                    <ul>
                        <li v-for="(item,index) in tushuqc">
                           <span>{{item.msg}}</span> 
                        </li>
                    </ul>
                </div>

                 <div class="child">
                    <div class="list-top">
                        <span>艺术</span>
                        <span class="iconfont icon-bar-chart-outline1"></span>
                    </div>
                    <ul>
                        <li v-for="(item,index) in tushuyishu">
                           <span>{{item.msg}}</span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
   </main>
</template>
<script>
export default {
    data(){
        return{
            jingxuanlist2:[],
            tushuchild:[],
            tushushige:[],
            tushuxiaoshuo:[],
            tushuqc:[],
            tushuyishu:[]
        }
    },
     mounted(){
        this.$http.get('./data/fenlei.json')
            .then((response)=>{
            console.log(response);
            console.log(this)
            this.jingxuanlist2=response.data.jingxuanlist2,
            this.tushuchild=response.data.tushuchild,
            this.tushushige=response.data.tushushige,
            this.tushuxiaoshuo=response.data.tushuxiaoshuo,
            this.tushuqc=response.data.tushuqc,
            this.tushuyishu=response.data.tushuyishu
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
    .all{
        width: 95%;
    }
    .top img{
        width: 100%;
    }
    .li2 p{
        text-align: left;
        font-size: 0.9rem;
    }
    .jingxuan .ul2 li{
        width: 27%;
    }
    .jingxuan .ul2 li img{
        width: 100%;
    }
    .jingxuan .ul2 li p{
        text-align: center;
        font-size: 0.9rem;
    }
    .jingxuan .ul2{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .list{
        margin-top: 2rem;
    }
    .child{
        border-top: 1px solid #ccc;
    }
    .list-top{
        overflow: hidden;
        margin-top: 1rem;
    }
    .list-top span:nth-of-type(1){
        font-size: 0.9rem;
        float: left;
    }
    .list-top span:nth-of-type(2){
        float: right;
    }
    .child ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .child ul li{
        margin: 2% 2%;
        text-align: center;
        background-color:#f1f1f1;
        width:29%;
    }
    .child ul li span{
        display: inline-block;
        width: 100%;
        font-size: 0.9rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>