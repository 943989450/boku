<template>
    <main>
        <div class="all">
            <div class="top">
                <img src="../assets/img/banner04.jpg" alt="">
            </div>
            <div class="jingxuan">
                <div class="li1">
                    <p>精选</p>
                </div>
                <ul>
                    <li v-for="(item,index) in jingxuanlist1">
                        <img :src="item.img" alt="">
                        <p>{{item.des}}</p>
                    </li>
                </ul>
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
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            jingxuanlist1:[],
            jingxuanlist2:[]
        }
    },
     mounted(){
        this.$http.get('./data/fenlei.json')
            .then((response)=>{
            console.log(response);
            console.log(this)
            this.jingxuanlist1=response.data.jingxuanlist1,
             this.jingxuanlist2=response.data.jingxuanlist2
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
    .li1 p{
        margin: 0.5rem 0;
        text-align: left;
        font-size: 0.9rem;
    }
    .jingxuan ul{
        display: flex;
        justify-content: space-around;
    }
    .jingxuan ul li{
        width: 32%;
    }
    .jingxuan ul li img{
        width: 100%;
    }
    .jingxuan ul li p{
        text-align: center;
        font-size: 0.9rem;
    }
    .li2 p{
         margin-top: 2rem;
        text-align: left;
        font-size: 0.9rem;
    }
    .jingxuan .ul2{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

</style>