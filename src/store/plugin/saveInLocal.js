import mutations from "../mutations";

export default store => {
  console.log('store初始化')
  // 用本地的state替换掉store中的state(模拟持久化存储)
  // if(localStorage.state) store.replaceState(JSON.parse(localStorage.state));
  // 当store提交了mutations会触发这个方法
  store.subscribe((mutations, state) => {
    console.log('提交了mutations')
    localStorage.state = JSON.stringify(state)
  })
}
