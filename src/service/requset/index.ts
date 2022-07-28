import axios from "axios"
import type { AxiosInstance } from "axios"
import type { useRequestConfig, useRequestInterceptors } from "./type"
import { ElLoading } from "element-plus"
// import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type"

const DEFAULT_LOADING = true

class useRequest {
  instance: AxiosInstance
  interceptors?: useRequestInterceptors
  loading?: any
  showLoading: boolean
  constructor(config: useRequestConfig) {
    // 1.创建axios实例
    this.instance = axios.create(config)
    // 2.保存基本信息
    // 默认显示
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    // 3.使用拦截器 -config拦截器
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
    // 3.使用拦截器 -添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有的实例都有的拦截器1：", config)
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据...",
            background: "rgba(0, 0, 0, 0.2)",
          })
        }

        return config
      },
      (err) => {
        console.log(err)
      },
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 移除loading
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        const data = res.data
        if (data.returnCode === "-1001") {
          console.log("请求失败")
        }
        return data
      },
      (err) => {
        this.loading?.close()
        if (err.response.status === 404) {
          // 不同的http显示不同的错误信息
          console.log("404")
        }
        console.log(err)
      },
    )
  }

  request<T>(config: useRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对数据的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 2.重置控制loading的状态
      if (!config.showLoading) {
        this.showLoading = config.showLoading ?? DEFAULT_LOADING
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.可以对单个请求做数据处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.不会影响下一个请求的showLoading状态
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: useRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }
  post<T>(config: useRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }
  patch<T>(config: useRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
  delete<T>(config: useRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }
}

export default useRequest
