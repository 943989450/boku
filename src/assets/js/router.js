import VueRouter from 'vue-router'
import index from '../../components/index.vue'
import home from '../../components/home.vue'
import fenlei from '../../components/fenlei.vue'
import search from '../../components/search.vue'
import fenlei1 from '../../components/fenlei.vue'
import find from '../../components/find.vue'
import buy from '../../components/buy.vue'
import my from '../../components/my.vue'
import changxiao from '../../components/changxiao.vue'
import details from '../../components/details.vue'
export default new VueRouter({
    routes:[
        {
            path:'/',component:index,
            children:[
                {
                    path:'/home',component:home
                },
                {
                    path:'/find',component:find
                },
                {
                    path:'/my',component:my
                }
             ],
             redirect:'/home'
        },
        {
            path:'/search',component:search,  
        },
        {
            path:'/fenlei',component:fenlei,
        },
        {
            path:'/fenlei1',component:fenlei1,
        },
        {
            path:'/buy',component:buy
        },
        {
            path:'/changxiao',component:changxiao
        },
        {
            path:'/details',component:details
        }
    ]
})