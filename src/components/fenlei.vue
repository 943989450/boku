<template>
    <main>
        <div class="header">
            <div class="header-left">
                <span class="iconfont icon-fanhui"></span>
            </div>
            <router-link to='/search'>
                <div class="header-search">
                    <div class="search">
                        <span class="iconfont icon-icon_search_line" @click="back()"></span>
                        <input type="text" placeholder="新课标">
                        <span class="close"><i>x</i></span>
                    </div>
                </div>
            </router-link>
        </div>
        <div>
            <ul class="left">
                <li class="add" @click="msg='fenlei1'">精选</li>
                <li @click="msg='fenlei2'">图书</li>
                <li @click="msg='fenlei3'">童书</li>
                <li @click="msg='fenlei4'">文具</li>
                <li @click="msg='fenlei5'">生活美学</li>
            </ul>
        </div>
        <aaa class="right" :is="msg"></aaa>
    </main>
</template>
<script>
import fenlei1 from '../components/fenlei1.vue'
import fenlei2 from '../components/fenlei2.vue'
import fenlei3 from '../components/fenlei3.vue'
import fenlei4 from '../components/fenlei4.vue'
import fenlei5 from '../components/fenlei5.vue'
export default {
    data(){
        return{
            msg:"fenlei1"
        }
    },
    components:{
       "fenlei1":fenlei1,
       "fenlei2":fenlei2,
       "fenlei3":fenlei3,
       "fenlei4":fenlei4,
       "fenlei5":fenlei5
    },
    methods:{
         back(){
            this.$router.go(-1)
        }
    },
    mounted(){
        $(".left li").click(function(){
            $(this).addClass("add").siblings("li").removeClass("add")
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
     .left{
         position: fixed;
         left: 0px;
         float: left;
         margin-left: 0.5rem;
         height: 100%;
         text-align: center;
         width: 20%;
         background-color: #f8f8f8;
     }
     .left li{
        width: 100%;
        font-size: 0.8rem;
        padding: 15px 0;
     }
     .add{
         color:#43baea;
         background-color: #fff;
     }
     .right{
         float:right;
         width: 77%;
     }
</style>