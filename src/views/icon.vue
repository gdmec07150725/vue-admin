<template>
  <div>
    <!-- Unicode的使用 -->
    <i class="iconfont smile">&#xeb88;</i>
    <i class="iconfont">&#xeb69;</i>
    <!-- font class的用法 -->
    <i class="iconfont icon-yingyongguanli"></i>
    <icon-font icon='jinggao' :size="50" color="blue"></icon-font>
    <icon-svg icon="guaichiyao" :size="60"></icon-svg>
  </div>
</template>

<script>
export default {
  name:'Icon',
  data () {
    return {

    }
  } 
}
</script>

<style>
.smile {
  color: red;
}
</style>
