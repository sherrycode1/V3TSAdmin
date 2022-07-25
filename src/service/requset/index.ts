import axios from "axios"
import type { AxiosInstance } from "axios"
import type { useRequestConfig, useRequestInterceptors } from "./type"
class useRequest {
  instance: AxiosInstance
  interceptors?: useRequestInterceptors

  constructor(config: useRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // req
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    // res
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有的实例都有的拦截器1：", config)
        return config
      },
      (err) => {
        console.log(err)
      },
    )
    this.instance.interceptors.response.use(
      (config) => {
        return config
      },
      (err) => {
        console.log(err)
      },
    )
  }

  request(config: useRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default useRequest
