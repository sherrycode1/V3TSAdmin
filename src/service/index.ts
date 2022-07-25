import useRequest from "./requset"
import { BASE_URL, TIME_OUT } from "./requset/config"

const myRequest = new useRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("success")
      return config
    },
    requestInterceptorCatch: (error) => {
      //   console.log("err")
      return error
    },
    responseInterceptor: (config) => {
      console.log("success res")
      return config
    },
    responseInterceptorCatch(error) {
      return error
    },
  },
})

export default myRequest
