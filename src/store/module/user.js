const state = {
  userName: 'LN'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  updateUserName({ commit, state, rootState, dispatch }){
    // rootState.appName
    //dispatch可以触发当前user module中actions里面定义的其他方法
  }
}
export default {
  // namespaced: true,
  getters,
  state,
  mutations,
  actions
}
