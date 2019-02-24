import vue from 'vue'
const mutations = {
  //修改appName
  CHANGE_APP_NAME (state, params) {
    // state.appName = params;
    state.appName = params
  },
  //当需要添加一个state的新属性的时候
  VERSION (state, params) {
    //第一个参数为需要添加属性的对象，第二个参数为属性名称，第三个参数为属性的值
    vue.set(state, 'Version', params)
  },
  SET_STATE_VALUE (state, params) {
    state.stateValue = params
  }
}
export default mutations
