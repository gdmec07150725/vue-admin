import { routes, routerMap } from '@/router/router'

const state = {
  routers: routes,
  hasGetRules: false
}

const mutations = {
  CONCAT_ROUTES (state, routerList) {
    state.routers = routerList.concat(routes) // 注意合并的先后顺序
    state.hasGetRules = true
  }
}

const getAccesRouterList = (routers, rules) => {
  return routers.filter(item => {
    if (rules[item.name]) {
      if (item.children) item.children = getAccesRouterList(item.children, rules)
      return true
    } else return false
  })
}

const actions = {
  concatRoutes ({ commit }, rules) {
    return new Promise((resolve, reject) => {
      console.log('rules', rules)
      try {
        let routerList = []
        if (Object.entries(rules).every(item => item[1])) { // 所有都为true
          routerList = routerMap
        } else {
          routerList = getAccesRouterList(routerMap, rules)
        }
        commit('CONCAT_ROUTES', routerList)
        resolve(routerList)
      } catch (err) {
        reject(err)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
