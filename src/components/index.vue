<template>
    <main>     
        <div class="footer">
            <ul class="footer-nav">
				<li>
					<router-link to="/home">
						<p class="iconfont icon-shouye"></p>
						<p class="wz">首页</p>
					</router-link>
				</li>
				<li>
					<router-link to="/fenlei">
						<p class="iconfont icon-leimupinleifenleileibie"></p>
						<p class="wz">分类</p>
					</router-link>
				</li>
				<li>
					<router-link to="/find">
						<p class="iconfont icon-faxian"></p>
						<p class="wz">发现</p>
					</router-link>
				</li>
				<li>
					<router-link to="/buy">
						<p class="iconfont icon-gouwuche"></p>
						<p class="wz">购物车</p>
					</router-link>
				</li>
                <li>
					<router-link to="/my">
						<p class="iconfont icon-wode"></p>
						<p class="wz">我的博库</p>
					</router-link>
				</li>
			</ul>
        </div>
        <router-view></router-view>
    </main>
</template>

<script>

</script>

<style scoped>
   .footer-nav{
        position: fixed;
        bottom: 0px;
        left: 0;
        z-index: 999;
        width: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-around; 

    }
    .icon-shouye,.icon-leimupinleifenleileibie,.icon-faxian,.icon-gouwuche,.icon-wode{
        color: #333;
        font-size: 25px;
        text-align: center;
    }
    .wz{
        font-size: 12px;
        color: #333;
    }
    .router-link-active p{
        color: #2ab4e8;
    }
</style>