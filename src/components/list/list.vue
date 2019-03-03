<template>
  <div>
    <ul>
      <li @mousemove.prevent="handleMove" v-for="(item,index) in val" :key="index">
        <!-- <span v-if="!render">{{item.number}}</span>
        <render-dom v-else :render-func="render" :number="item.number"></render-dom> -->
        <slot :number="item.number"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
import RenderDom from '_c/render-dom'
export default {
  name: 'list',
  components: {
    RenderDom
  },
  props: {
    val: {
      type: Array,
      default: () => {
        return []
      }
    },
    render: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleMove () {
      //
    }
  }
}
</script>

