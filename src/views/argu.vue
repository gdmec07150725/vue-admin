<template>
  <div>
    {{id}}
  </div>
</template>
<<script>
export default {
  name:'argu',
  props:{
    id:{
      type: String,
      default: '123',
    }
  },
  beforeRouteUpdate(to,from,next){
    //可以访问this
    console.log(to.name,from.name)
    next();
  } 
}
</script>