<template>
  <div>
    <count-to ref="countTo" :start-val="50" :end-val="endVal" :duration="1" @on-animation-end="animationEnd">
      <span slot="left">总金额：</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="getNumber">获取数据</button>
    <button @click="up">更新值</button>
  </div>
</template>
<script>
import CountTo from '@/components/count-to'
export default {
  name: 'count_to',//名称不能跟使用组件时的名称相同,否则会报 Maximum call stack size exceeded
  components: {
    CountTo
  },
  data() {
    return{
      endVal: 100
    }
  },
  methods: {
    getNumber () {
      this.$refs.countTo.getNumber()
    },
    up () {
      this.endVal += Math.random() * 100
    },
    animationEnd (val) {
      console.log(val)
    }
  }
}
</script>
