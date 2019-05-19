<template>
  <div class="side-menu-wrapper">
    <slot>放置logo</slot>
    <Menu ref="menu" :active-name="$route.name" :open-names="openNames" v-show="!collapsed" width="auto" theme="dark" @on-select="handleSelect">
      <template v-for="item in list">
        <re-submenu
          v-if="item.children"
          :key="`menu_${item.name}`"
          :parent="item">
        </re-submenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
          <Icon :type="item.icon"></Icon>
          {{ item.meta.title }}
          </menu-item>
      </template>
    </Menu>
    <div v-show="collapsed" class="drop-wrapper">
      <template v-for="item in list">
        <re-dropdown @on-select="handleSelect" v-if="item.children" :key="`drop_${item.name}`" :parent="item" :iconColor="'#FFF'" :showTitle="false"></re-dropdown>
        <Tooltip v-else transfer :content="item.meta.title" placement="right" :key="`drop_${item.name}`">
          <span @click="handleClick(item.name)" class="drop-menu-span">
            <Icon :type="item.icon" color="#fff" size="20"></Icon>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import ReSubmenu from './re-submenu.vue'
import ReDropdown from './re-dropdown.vue'
import { mapState } from 'vuex'
import { getOpenArrByName } from '@/lib/util'
export default {
  name: 'SideMenu',
  components: {
    ReSubmenu,
    ReDropdown
  },
  props: {
    collapsed:{
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState({
      routers: state => state.router.routers
    }),
    openNames () {
      // console.log(getOpenArrByName(this.$route.name, this.routers))
      return getOpenArrByName(this.$route.name, this.routers)
    }
  },
  watch: {
    openNames () {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  },
  methods: {
    handleSelect (name) {
      // console.log(name)
      this.$router.push({
        name
      })
    },
    handleClick (name) {
      console.log(name)
    }
  },
}
</script>

<style lang="less">
.side-menu-wrapper{
  width: 100%;
}
.ivu-tooltip, .drop-menu-span{
  width: 100%;
  display: block;
  text-align: center;
  padding: 5px 0;
}
.drop-wrapper > .ivu-dropdown{
  display: block;
  padding: 5px;
  margin: 0 auto;
}
</style>

