import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

let router = new Router({
  routes
})

const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (!HAS_LOGINED) next({ name: 'login' })
    else next()
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})
export default router
