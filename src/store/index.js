import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import saveInLocal from './plugin/saveInLocal'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development', //开发环境下使用严格模式
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [ saveInLocal ]
})
