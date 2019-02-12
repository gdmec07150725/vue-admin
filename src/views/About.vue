<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{food}}
    <p>{{appName}}</p>
  </div>
</template>
<script>
export default {
  props:{
    food:{
      type: String,
      default: 'Apple'
    }
  },
  computed:{
    appName(){
      return this.$store.state.appName;
    }
  }
}
</script>

