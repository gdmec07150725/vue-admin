<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <transition-group :name="routerTransite"> -->
      <router-view key="default"/>
      <router-view key="a" name="a"></router-view>
      <router-view key="b" name="b"></router-view>
    <!-- </transition-group> -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      routerTransite:''
    }
  },
  watch:{
    '$route' (to){
      to.query && to.query.transitionName && (this.routerTransite = to.query.transitionName)
    }
  }
}
</script>

<style lang="less">
html,body{
  height: 100%
}
body{
  margin: 0;
}
.router-enter{//组件进入之前
  opacity: 0;
}
.router-enter-active{//组件进入的时候
  transition: opacity 1s ease;
}
.router-enter-to{//组件进入之后
  opacity: 1;
}
.router-leave{
  opacity: 1;
}
.router-leave-active{
  transition: opacity 1s ease;
}
.router-leave-to{
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
