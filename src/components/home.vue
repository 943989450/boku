<template>
    <main>
        <div class="header">
            <div class="header-logo">
                <img src="../assets/img/logo_shop.png" alt="">
            </div>
            <router-link to='/search'>
                <div class="header-search">
                    <div class="search"><span class="iconfont icon-icon_search_line"></span></div>
                    <div class="input">
                        <input type="text" placeholder="在店铺 博库体验店 搜索商品">
                    </div>
                </div>
            </router-link>
        </div>
        <div class="header-nav">
            <ul>
                <li class="add" @click="msg='all'">全部</li>
                <li @click="msg='books'">图书</li>
                <li @click="msg='wen'">文创</li>
                <li @click="msg='life'">生活美学</li>
            </ul>
        </div>
        <component :is="msg"></component>
    </main>
</template>
<script>
import all from './all.vue'
import books from './books.vue'
import wen from './wen.vue'
import life from './life.vue'
export default {
    data(){
        return{
            msg:"all"
        }
    },
    components:{
       "all":all,
       "books":books,
       "wen":wen,
       "life":life
    },
    mounted(){
        $(".header-nav li").click(function(){
            $(this).addClass("add").siblings("li").removeClass("add")
        })
    }
}
</script>
<style scoped>
.add{
    color: #2ab4e8 !important;
    border-bottom:1px solid #2ab4e8;
}
    .header{
        position: fixed;
        top: 0;
        z-index: 9999;
        width: 100%;
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size: 17px;
        color: #333;
        background-color: #fff;
        border-bottom: 1px #e8e8e8 solid;
    }
    .header-logo{
        position: relative;
        top:0.35rem;
        display: inline-block;
        width: 35px;
        line-height: 35px;
        height: 25px;
    }
    .header-logo img{
        width:25px;
        height: 100%;
        border-radius: 50%;
    }
    .header-search{
        display: inline-block;
        position: relative;
        height: 28px;
        line-height: 28px;
        width: 85%;
        text-align: left;
        margin-right: 10px;
        border-radius: 20px;
        background-color:#f1f1f1;
    }
    .search{
        display: inline-block;
    }
    .input{
        display: inline-block;
        width: 50%;
    }
    input{
        background-color: #f1f1f1;
        border: none;
        outline: none;
    }
    .header-nav{
        position: fixed;
        top:45px;
        z-index: 999;
        text-align: center;
        margin-bottom: 5px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        border:none;
        background-color: #fff;
        box-shadow: 1px -1px 10px rgba(0,0,0,.1);
        }
    .header-nav ul{
        display: flex;
        justify-content: space-around
    } 
    .header-nav li{
        display: block;
        height: 100%;
        color:#333;
        font-size: 14px;
        text-decoration: none;
    }
    .header-nav .router-link-exact-active{
        color: #2ab4e8;
        border-bottom: 1px solid #2ab4e8;
    }
</style>