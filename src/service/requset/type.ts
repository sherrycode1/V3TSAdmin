import type { AxiosRequestConfig, AxiosResponse } from "axios"

// 定义请求发出和响应拦截的接口
export interface useRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}
// 往axios的config类型中添加拦截器
export interface useRequestConfig extends AxiosRequestConfig {
  interceptors?: useRequestInterceptors
  showLoading?: boolean
}
