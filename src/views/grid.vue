<template>
  <div>
    <Row>
      <i-col></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="12">{{rules}}</i-col>
      <i-col span="12"></i-col>
    </Row>
     <Row :gutter="10" class="blue">
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
    </Row>
    <Button v-if="rules.edit_button">编辑</Button>
    <Button v-if="rules.publish_button">发布</Button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'grid',
  computed: {
    ...mapState({
      rules: state => state.user.rules
    })
  }
}
</script>

<style lang="less">
.ivu-col{
  height: 50px;
  margin-top: 10px;
  background: pink;
  background-clip: content-box;
}
.blue{
  .ivu-col{
    background: blue;
    background-clip: content-box;
  }
}
</style>
