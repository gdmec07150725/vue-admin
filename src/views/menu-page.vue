<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-sub-menu>
        <div slot="title">333</div>
        <a-menu-item>333-11</a-menu-item>
         <a-sub-menu>
          <div slot="title">333-22</div>
          <a-menu-item>333-22-1</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="`menu-item_${index}`">{{ item.title }}</a-menu-item>
        <re-submenu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import menuComponents from '_c/menu'
import ReSubmenu from './re-submenu.vue'
export default {
  name: 'menu_page',
  components: {
    ...menuComponents,
    ReSubmenu
  },
  data () {
    return {
      list: [
        {
          title: '1111'
        },
        {
          title: '2222'
        },
        {
          title: '3333',
          children: [
            {
              title: '3333-1',
              children: [
                {
                  title: '3333-1-1'
                }
              ]
            },
            {
              title: '3333-2',
              children: [
                {
                  title: '3333-2-1'
                },
                {
                  title: '3333-2-2',
                  children: [
                    {
                      title: '3333-2-2-1',
                    },
                    {
                      title: '3333-2-2-2',
                    }
                  ]
                },
              ]
            },
          ]
        },
      ]
    }
  }
}
</script>
<style lang="less">
.menu-box{
  width: 300px;
  height: 400px;
}
</style>


