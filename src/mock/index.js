import Mock from 'mockjs'
import { getUserInfo } from './response/user'

// Mock.mock('http://localhost:3000/getUserInfo', getUserInfo)
// Mock.mock(/\/getUserInfo/, getUserInfo)
Mock.mock(/\/getUserInfo/, 'post', getUserInfo)

Mock.setup({ //请求响应拦截时间
  timeout: 500
})

export default Mock
