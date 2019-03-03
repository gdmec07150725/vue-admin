<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width: leftOffsetPercent, paddingRight: `${triggerWidth / 2}px`}">
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" :style="{left: triggerLeft, width: `${triggerWidth}px`}" @mousedown="handleMousedown"></div>
    <div class="pane pane-right" :style="{left: leftOffsetPercent, paddingLeft: `${triggerWidth / 2}px`}">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth:{
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data () {
    return {
      leftOffset: 0.3,
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100 }%`
    },
    triggerLeft () {
      console.log(`calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`)
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)` //计算
    }
  },
  methods: {
    handleMousedown (event) {
      this.canMove = true
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
    },
    handleMousemove (event) {
      if(!this.canMove) return
      const outerReact = this.$refs.outer.getBoundingClientRect() //获取元素距离浏览器的各项距离，兼容IE9及以上
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2 -  outerReact.left) / outerReact.width //？不是很懂
      if (offsetPercent < this.min ) offsetPercent = this.min
      if (offsetPercent > this.max ) offsetPercent = this.max 
      // this.leftOffset = offsetPercent
      this.$emit('input', offsetPercent) //当使用方式1和3的时候需要这样抛出事件
      //this.$emit('update:value', offsetPercent)//当使用方式2的时候需要这样抛出事件
    },
    handleMouseup () {
      this.canMove = false
    }
  }
}
</script>
<style scoped lang="less">
  .split-pane-wrapper{
    height: 100%;
    width: 100%;
    position: relative;
    .pane{
      position: absolute;
      top: 0;
      height: 100%;
      &-left{
        // width: 30%;
        background: palevioletred;
      }
      &-right{
        right: 0;
        bottom: 0;
        // left: 30%;
        background: paleturquoise;
      }
      &-trigger-con{
        height: 100%;
        top: 0;
        background: red;
        position: absolute;
        z-index: 2;
        user-select: none; //取消鼠标拖拽效果
        cursor: col-resize;
      }
    }
  }
</style>

