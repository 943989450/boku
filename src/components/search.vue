<template>
    <main>
        <div class="header">
            <div class="header-left">
                <span class="iconfont icon-fanhui"></span>
            </div>
            <div class="header-search">
                <div class="search">
                    <span class="iconfont icon-icon_search_line" @click="back()"></span>
                    <input type="text" placeholder="新课标" v-model="msg" @keydown.enter="add()">
                    <span class="close"><i>x</i></span>
                </div>
            </div>
            <div class="header-right"><p @click="add()">搜索</p></div>
        </div>
        <div class="zuijin">
            <div class="zui">
                <span>最近搜索</span>
                <span @click="del()">清除</span>
            </div>
            <div class="jilu">
                <ul>
                    <li v-for="(item,index) in list">
                        <p>{{item.des}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="remen">
            <div class="re">
                <span>热门搜索</span>
            </div>
            <div class="jilu2">
                <div class="p1">
                    <p>现代汉语词典</p>
                    <p>快乐读书吧</p>
                    <p>必背古诗词</p>
                    <p>夏洛特的网</p>
                    <p>三体</p>
                </div>
            </div>
        </div>
        <div class="remen">
            <div class="re">
                <span>热门分类</span>
            </div>
            <div class="jilu2">
                <div class="p2">
                    <p>中小学教辅</p>
                    <p>工具书</p>
                    <p>世界名著</p>
                    <p>绘本/动画</p>
                    <p>艺术</p>
                    <p>哲学宗教</p>
                </div>
            </div>
        </div>
        
    </main>
</template>
<script>
export default {
    data(){
        return{
            msg:'aydgc',
            list:[
                {
                    des:""
                }
            ]
        }
    },
    methods:{
        add(){
            this.list.unshift({
                des:this.msg
            })
        },
        del(a){
            this.list.splice(a)
        },
        back(){
            this.$router.go(-1)
        }
    },
    mounted(){
        $(".close").click(function(){
            $(".search input").val('');
        })
    }
}
</script>
<style scoped>
       .header{
        overflow: hidden;
        position: fixed;
        top: 0;
        z-index: 9999;
        width: 100%;
        height: 45px;
        line-height: 45px;
        text-align: center;
        color: #333;
        background-color: #fff;
        border-bottom: 1px #e8e8e8 solid;
    }
    .header-left,.header-search,.header-right{
        float: left;
    }
    .header-left span{
        padding-left: 0.5rem;
        font-size: 1.3rem;
    }
    .header-search{
        text-align: left;
        width: 78%;
        height: 100%;
        line-height: 40px;
    }
    .search{
        width: 100%;
        position: relative;
        top:0.65rem;
        height: 25px;
        line-height: 25px;
        border: 1px solid #f1f1f1;
        border-radius: 30px;
        background-color: #f1f1f1;
    }
    .icon-icon_search_line{
        font-size: 1.2rem;
        color:#aaa;
    }
    .search span{
        padding-left: 0.5rem;
    }
     .search input{
         position: relative;
         top:-2px;
         background-color: #f1f1f1;
         border: none;
         outline: none;
     }
     .search .close{
         position: relative;
         top:-2px;
         margin-left: 3rem;
         text-align: center;
         font-size: 0.8rem;
         background-color: #aaa;
         color: #eee;
         border-radius: 50%;
     }
     .search .close i{
         position: relative;
         right: 4px;
     }
     .header-right p{
         font-size: 0.95rem;
         padding-left: 0.5rem;
     }
     .zui{
         color: #aaa;
         font-size: 0.9rem;
         overflow: hidden;
     }
     .zuijin span:nth-of-type(1){
         overflow: hidden;
         float: left;
         padding-left: 1rem;
     }
      .zuijin span:nth-of-type(2){
          overflow: hidden;
         float: right;
         padding-right: 1rem;
     }
     .jilu{
         border-bottom: 1px #e8e8e8 solid;
     }
     .jilu ul li{
          height: 25px;
          line-height: 25px;
          text-align: center;
     }
     .jilu p{
         padding: 5px;
         border:1px solid #aaa;
         text-align: center;
         font-size: 0.8rem;
         color: #000;
         border-radius: 5px;
         max-width: 95%;
         overflow: hidden;
         white-space: nowrap;
         text-overflow: ellipsis;
     }
     .re span{
        color: #aaa;
        font-size: 0.9rem;
        padding-left: 1rem;
     }
     .p1{
         overflow: hidden;
     }
     .p1 p{
       float: left;
       font-size: 0.9rem;
       color: #2db4ea;
       padding: 0 0.5rem;
       height: 30px;
       line-height: 30px;
       border-radius: 5px;
       margin: 5px;
       border:1px solid #2db4ea;  
     }
     .jilu2 .p2{
         overflow: hidden;
     }
     .jilu2 .p2 p{
        float: left;
        font-size: 0.9rem;
        color: #333;
        padding: 0 0.5rem;
        height: 30px;
        line-height: 30px;
        margin: 5px;
        background-color: #eee; 
     }
</style>