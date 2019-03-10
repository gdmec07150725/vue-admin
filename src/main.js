import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import CountTo from '_c/count-to'
import iView  from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView);
// if (process.env.NODE_ENV !== 'production') require('./mock')//不是生产环境的时候，使用mock

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

const handleClick = event => {
  console.log(event)
  event.stopPropagation()
}
let list = [{ name: 'langNan' }, { name: 'lison' }]
const getLiEleArr = (h) => {
  return list.map((item, index) => h('li', {
    on: {
      'click': handleClick
    },
    key: `list_item_${index}`
  }, item.name))
}
new Vue({
  router,
  store,
  // render: h => {
  //   return h(CountTo, {
  //     'class': [],//类名
  //     attrs: {},//设置属性(id)
  //     props: {
  //       endVal: 100
  //     },
  //     // domProps: {
  //     //   innerHTML: '123'
  //     // },
  //     on: {
  //       'on-animation-end': (val) => {
  //         console.log('animation-end!')
  //       }
  //     },
  //     nativeOn: {//绑定原生事件
  //       'click': () => {
  //         console.log('click')
  //       }
  //     },
  //     directives: [], //指令
  //     scopedSlots: {},
  //     slot: 'default', //插槽
  //     key: '',
  //     ref: ''
  //   })
  // }
  // render: h => h('div', [
  //   h('ul', {
  //     on: {
  //       'click': handleClick
  //     }
  //   }, getLiEleArr(h))
  // ])
  render: h => h(App)
}).$mount('#app')
