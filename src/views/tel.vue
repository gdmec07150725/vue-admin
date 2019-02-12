<template>
  <div>
    {{message}}
  </div>
</template>
<script>
export default {
  data(){
    return{
      message:''
    }
  },
  mounted () {
    this.$bus.$on('sendMsg',msg=>{
      this.message = msg;
    })
  }
}
</script>

