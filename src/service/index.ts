import useRequest from "./requset"
import { BASE_URL, TIME_OUT } from "./requset/config"

const myRequest = new useRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token拦截
      // const token = "a"
      // if (token) {
      //   config.headers?.Authorization = `bearer${token}`
      // }
      return config
    },
    requestInterceptorCatch: (error) => {
      //   console.log("err")
      return error
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch(error) {
      return error
    },
  },
})

export default myRequest
