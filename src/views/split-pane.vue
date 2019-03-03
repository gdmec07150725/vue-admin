<template>
  <div class="split-pane-con">
    <split-pane :value="offset" @input="handleInput">
      <span slot="left">实现双向绑定方式1</span>
      <span slot="right">lison</span>
    </split-pane>
    <br>
    <split-pane :value.sync="offset">
      <span>实现双向绑定方式2</span>
    </split-pane>
    <br>
    <split-pane v-model="offset">
      <span>实现双向绑定方式3</span>
    </split-pane>
  </div>
</template>
<script>
import SplitPane from '_c/split-pane'
export default {
  name: 'split_pane',
  components: {
    SplitPane
  },
  data () {
    return {
      offset: 0.3
    }
  },
  methods: {
    handleInput (value) {
      this.offset = value
    }
  }
}
</script>

<style lang='less' scoped>
  .split-pane-con{
    width: 400px;
    height: 200px;
    background:papayawhip;
  }
</style>

