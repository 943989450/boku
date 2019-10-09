<template>
    <main>
        <div class="buy-header">
            <ul>
                <li @click="back()"><span class="iconfont icon-fanhui"></span></li>
                <li class="add" @click="msg='product'">商品</li>
                <li @click="msg='detail'">详情</li>
                <li @click="msg='pingjia'">评价</li>
                <li><span class="iconfont icon-shouye"></span></li>
                <li><span class="iconfont icon-return2fanhuiyou"></span></li>
            </ul>
        </div>
        <component :is="msg"></component>
    </main>
</template>
<script>
import product from './product.vue'
import detail from './detail.vue'
import pingjia from './pingjia.vue'
export default {
    data(){
        return{
             msg:"product"
        }
    },
    components:{
        "product":product,
       "detail":detail,
       "pingjia":pingjia,
    },
    methods:{
         back(){
            this.$router.go(-1)
        }
    },
     mounted(){
        $(".buy-header li").click(function(){
            $(this).addClass("add").siblings("li").removeClass("add")
        })
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
.buy-header ul li{
    font-size: 0.8rem;
}
.buy-header ul li:nth-of-type(5) span{
    font-size: 1rem;
}
.add{
    color: #2ab4e8;
}
</style>