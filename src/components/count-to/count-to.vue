<template>
  <div>
    <slot name="left"></slot><span :class="classCount" :id="eleId" ref="number"></span><slot name="right"></slot>
  </div>
</template>

<script>
import countUp from 'countup'
import './count-to.less'
export default {
  name: 'CountTo',
  props:{
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 结束值
     */
    endVal: {
      type: Number,
      default: 100,
      required: true
    },
    /**
     * @description 小数点后保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 渐变时长
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * @description 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否使用分组(三个数为一组)
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 分组符号
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * @description 整数和小数分隔符号
     */
    decimal: {
      type: String,
      default: '.'
    },
    /**
     * @description 动画延迟开始时间
     */
    delay: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      counter: {}
    }
  },
  computed:{
    eleId () {
      return `count_to_${this._uid}`
    },
    classCount () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new countUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
    })
    setTimeout(() => {
      this.counter.start()
      this.emitEndEvent()
    }, this.delay)
  },
  watch: {
    endVal(newVal, oldVal) {
      this.counter.update( newVal )//更新值
      this.emitEndEvent()
    }
  },
  methods: {
    getNumber() {
      return this.$refs.number.innerText
    },
    emitEndEvent () {
      setTimeout (() => {
        this.$nextTick(() => {
          this.$emit('on-animation-end', Number(this.getNumber()) )
        })
      }, this.duration*1000 + 10)
    }
  }
}
</script>

<style>

</style>
