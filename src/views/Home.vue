<template>
  <div class="home">
    {{food}}
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  props: {
    food:{
      type:String,
      default:'purple'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm =>{
      //可以访问到this
      console.log(vm);
    })
  },
  // beforeRouteLeave(to, from, next) {
  //   //可以访问this
  //   const leave = confirm('确定要离开吗？');
  //   if(leave) next();
  //   else next(false);
  // },
  components: {
    HelloWorld
  }
}
</script>
