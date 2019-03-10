<template>
  <div>
    <li class="a-menu-item"><slot></slot></li>
  </div>
</template>
<script>
export default {
  name: 'AMenuItem'
}
</script>
<style lang="less">
.a-menu-item{
  background: palevioletred;
  color: #fff;
}
</style>

