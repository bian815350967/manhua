import axios from 'axios'

let ax = axios.create({
  baseURL: 'https://www.vue-js.com/api/v1'
})

export default {
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      ax({
        method: 'get',
        url,
        params: params
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post: (url, params) => {
    return new Promise((resolve, reject) => {
      ax({
        method: 'post',
        url,
        data: params
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
