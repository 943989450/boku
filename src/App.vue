<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
      window.onresize = function(){
        document.documentElement.style.fontSize = document.documentElement.offsetWidth / 20 +'px';
        }
    }

}
</script>

<style>
body,html{
  margin:0px;
  padding: 0px;
}
body{
    font-family: "微软雅黑", "黑体", "Microsoft YaHei", "SimSun", Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    line-height: 1.5;
    color: #333;
}
p,div,img{
  padding: 0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin:0;
}

li {
  display: inline-block;
}

a {
  color: #000;
  text-decoration: none;
}
html {
overflow-y: scroll;
}
:root {
overflow-y: auto;
overflow-x: hidden;
}
:root body {
position: absolute;
}
body {
width: 100vw;
overflow: hidden;
}
::-webkit-scrollbar {/*隐藏滚轮*/
        display: none;
    }
</style>
