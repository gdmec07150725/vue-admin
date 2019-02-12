<template>
  <div class="email">
    <button @click="handleEvent">点我</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    handleEvent(){
      this.$bus.$emit('sendMsg','Hello')
    }
  }
}
</script>
<style>
.email{
  border:1px solid #FF0000;
}
</style>

