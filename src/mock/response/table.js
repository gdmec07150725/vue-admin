import Mock from 'mockjs'
import { doCustomTimes } from '@/lib/tools'

export const getTableData = () => {
  const template = {
    name: '@cname',
    'age|18-25': 0,
    email: '@email'
  }
  let arr = []
  doCustomTimes(5, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
