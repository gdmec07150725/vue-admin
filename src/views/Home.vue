<template>
  <div class="home">
    {{food}}
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="getInfo" :style="{background: bgColor}">获取数据</button>
    <br>
    <img :src="url">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user' 
export default {
  name: 'home',
  props: {
    food:{
      type:String,
      default:'purple'
    }
  },
  data(){
    return{
      url: '',
      bgColor: ''
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
  },
  methods:{
    getInfo () {
      getUserInfo({ userId: 123 }).then(res=> {
        console.log('res',res.data);
        this.url = res.data && res.data.img;
        this.bgColor = res.data && res.data.color;
      })
    }
  }
}
</script>
