<template>
  <div>
    <ul class="a-submenu">
      <div class="a-submenu-title" @click="handleClick">
        <slot name="title"></slot>
        <span class="shrink-icon" :style="{transform: `rotateZ(${showChild ? 0 : 180}deg)`}">^</span>
      </div>
      <div v-show="showChild" class="a-submenu-child-box"><slot></slot></div>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ASubmenu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>
<style lang="less">
.a-submenu{
  &-title{
    background: palegreen;
    color: #fff;
    position: relative;
    .shrink-icon{
      position:absolute;
      color: #000;
      right: 10px;
      top: 2px;
    }
  }
  &-child-box{
    overflow: hidden;
    padding-left: 20px;
  }
}
</style>

