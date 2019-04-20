import axios from './index'

export const sentFormData = ({ url, data }) => {
  return axios.request({
    url,
    data,
    method: 'post'
  })
}
