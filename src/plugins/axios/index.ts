import axios from 'axios'
import { RequestDataGenerator } from 'qmwts'
import { type ResponseCode } from '@/interfaces/response-code.ts'

const { $message } = api

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ?
    'http://localhost:9000' :
    'http://localhost:9000'
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
axios.defaults.timeout = 10000

axios.interceptors.request.use(
    request => {
      request.headers.token = localStorage.token
      request.data = RequestDataGenerator.generate(request.data, new FormData())
      return request
    },
    error => {
      return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    async response => {

      if (response.config.responseType === 'blob') {
        const { data } = response
        if (data.type === 'application/x-download') { // 不是json说明下载成功
          const file = new File([ data ], decodeURI(response.headers['content-disposition'].split('filename=')[1]))
          const a = document.createElement('a')
          a.href = URL.createObjectURL(file)
          a.download = file.name
          a.click()
          // 释放
          URL.revokeObjectURL(a.href)
          a.remove()
          return Promise.resolve()
        } else if (data.type === 'application/json') { // 是json说明有报错
          response.data = JSON.parse(await new Response(data).text())
        }
      }

      const {
        data: { code, msg, data },
        headers: { token }
      } = response

      if (token)
        localStorage.token = token
      switch (code as ResponseCode) {
        case 1:
          return Promise.resolve(data || {})
        case 0:
          $message.error(msg)
          return Promise.reject(msg)
        case 1000:
          $message.error(msg)
          return Promise.reject(msg)
        case 1001:
          $message.error(msg)
          return Promise.reject(msg)
        case 1002:
          $message.error(msg)
          return Promise.reject(msg)
        default:
          $message.error('系统错误code=' + code)
          return Promise.reject(msg)
      }
    },
    error => {
      const { code, message } = error
      $message.error(code + " " + message)
      return Promise.reject(error)
    }
)

export default axios