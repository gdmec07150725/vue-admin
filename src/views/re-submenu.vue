<template>
  <a-sub-menu>
    <div slot="title">{{parent.title}}</div>
    <template v-for="(item, i) in parent.children">
      <a-menu-item v-if="!item.children" :key="`menu_item_${i}_${index}`">{{item.title}}</a-menu-item>
      <re-submenu v-else :key="`menu_item_${i}_${index}`" :parent="item"></re-submenu>
    </template>
  </a-sub-menu>
</template>

<script>
import menuComponents from '_c/menu'
const { AMenuItem, ASubMenu} = menuComponents
export default {
  name: 'ReSubmenu', //递归组件，必须有个name值
  components: {
    AMenuItem,
    ASubMenu
  },
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    index: Number
  }
}
</script>

<style>

</style>

