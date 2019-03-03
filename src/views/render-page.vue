<template>
  <div>
    <!-- <list :val="listVal" :render="renderFunc"></list> -->
    <!-- 作用域插槽的使用 -->
    <list :val="listVal">
      <count-to slot-scope="count" :end-val="count.number"></count-to>
    </list>
  </div>
</template>
<script>
import List from '_c/list'
import CountTo from '_c/count-to'
export default {
  name: 'render_page',
  components: {
    List,
    CountTo
  },
  data () {
    return {
      listVal: [
        {
          number: 100,
        },
        {
          number: 120,
        }
      ]
    }
  },
  methods: {
    renderFunc (h, number) {
      //1.渲染函数的写法(h的名字可以改)
      // return h('i',{
      //   style: {
      //     color: 'pink'
      //   }
      // }, name)
      // 2.jsx语法(h的名字不能改)
      return (
        // <i on-click={this.handleClick} style={{color: 'green'}}>{name}</i>
        <CountTo nativeOn-click={this.handleClick} on-on-animation-end={this.handleEnd} endVal={number} style={{color: 'green'}}></CountTo>
      )
    },
    handleClick (event) {
      console.log(event)
    },
    handleEnd () {
      console.log('end!')
    }
  }
}
</script>
