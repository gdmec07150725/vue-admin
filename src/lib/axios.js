import axios from 'axios'
import { baseURL } from '@/config'
import { getToken } from '@/lib/util'
class HttpRequest {
   constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
   }

   getInsideConfig () {
     const config = {
      //基础参数
      baseURL: this.baseUrl,//URL小写了，坑
      headers: {

      }
     }
     return config
   }

   interceptors (instance, url) {
    instance.interceptors.request.use(config=> {
      //添加全局loading
      if(!Object.keys(this.queue).length) {
        //Spin.show()
      }
      this.queue[url] = true
      config.headers['Authorization'] = getToken()
      return config
    },error=> {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res=> {
      //在queue队列中清除请求完成的url
      delete this.queue[url]
      const { data } = res
      return  data 
    },error=> {
      return Promise.reject(error)
    })
   }

   request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)//添加拦截器
    return instance(options)
   }
}
export default HttpRequest