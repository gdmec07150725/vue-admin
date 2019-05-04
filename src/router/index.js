import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'
import { setTitle, getToken, setToken } from '../lib/util'
import store from '@/store'
import clonedeep from 'clonedeep'
Vue.use(Router)

let router = new Router({
  routes
})

const HAS_LOGINED = false

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  // if (to.name !== 'login') {
  //   if (!HAS_LOGINED) next({ name: 'login' })
  //   else next()
  // } else {
  //   if (HAS_LOGINED) next({ name: 'home' })
  //   else next()
  // }

  // const token = getToken()
  // if (token) {
  //   // 判断token是否有效
  //   store.dispatch('authorization', token).then(() => {
  //     if (to.name === 'login') next({ name: 'home' })
  //     else next()
  //   }).catch(() => {
  //     setToken('')
  //     next({ name: 'login' })
  //   })
  // } else {
  //   if (to.name === 'login') {
  //     next()
  //   } else {
  //     next({ name: 'login' })
  //   }
  // }
  const token = getToken()
  console.log('token', token)
  if (token) {
    console.log('hasGetRules', store.state.router.hasGetRules)
    if (!store.state.router.hasGetRules) {
      store.dispatch('authorization').then(rules => {
        store.dispatch('concatRoutes', rules).then(routers => {
          router.addRoutes(routers) // 挂载路由, 注意：需要将vuex的严格模式改为false,否则会报错
          next({ ...to, replace: true })
        }).catch(() => {
          next({ name: 'login' })
        })
      })
    } else {
      next()
    }
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
})

// 完整的路由解析流程
/**
 * 1.导航被触发
 * 2.在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3.调用全局的前置守卫 beforeEach
 * 4.在重用的组件里调用 beforeRouteUpdate
 * 5.调用路由独享守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件 （即将进入的页面组件）里调用beforeRouteEnter
 * 8.调用全局的解析守卫 beforeResolve
 * 9.导航被确认
 * 10.调用全局的后置守卫 afterEach
 * 11.触发DOM更新
 * 12.用创建好的实例调用beforeRouteEnter守卫里传给next的回调函数
 */
export default router
