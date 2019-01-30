<template>
  <div>
    {{name}}
  </div>
</template>
<<script>
export default {
  name:'argu',
  props:{
    name:{
      type: String,
      default: 'LN',
    }
  },
  beforeRouteUpdate(to,from,next){
    //可以访问this
    console.log(to.name,from.name)
    next();
  } 
}
</script>