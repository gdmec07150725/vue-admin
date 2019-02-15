import { getAppName } from '@/api/app'
const action = {
  // updateAppName ({ commit }) {
  //   getAppName().then(res => {
  //     const { info: {appName} } = res
  //     commit('CHANGE_APP_NAME', appName)
  //   }).catch(error=>{
  //     console.log(error)
  //   })
  // }
  async updateAppName ({ commit }) {
    try{
      const { info: {appName} } = await getAppName()
      commit('CHANGE_APP_NAME', appName)
    }catch(error){
      console.log(error);
    }
  }
}
export default action