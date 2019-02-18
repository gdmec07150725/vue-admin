import axios from 'axios'
import { baseURL } from '@/config'

class HttpRequest {
   constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
   }

   getInsideConfig () {
     const config = {
      //基础参数
      baseUrl: this.baseUrl,
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
      return config
    },error=> {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res=> {
      //在queue队列中清除请求完成的url
      delete this.queue[url]
      const { data, status } = res
      return { data, status }
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