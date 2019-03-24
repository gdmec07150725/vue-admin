import Mock from 'mockjs'
import { getUserInfo } from './response/user'
import { getTableData } from './response/table'

const Random = Mock.Random 
//自定义方法
Random.extend({
  fruit () {
    const fruit = ['apple', 'banana', 'lemon']
    return this.pick(fruit)
  }
})
// Mock.mock('http://localhost:3000/getUserInfo', getUserInfo)
// Mock.mock(/\/getUserInfo/, getUserInfo)
Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
Mock.mock(/\/getTableData/, 'get', getTableData)

// Mock.setup({ //请求响应拦截时间
//   timeout: 500
// })

export default Mock
