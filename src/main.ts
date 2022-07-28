import { createApp } from "vue"
import App from "./App.vue"

// import "./service/axios.demo"
import myRequest from "./service"

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
myRequest
  .request<DataType>({
    url: "/home/multidata",
    showLoading: false,
  })
  .then((res) => {
    console.log("main ts", res)
  })

import router from "./router"
import store from "./store"
import { registerApp } from "./global/index"
import "element-plus/dist/index.css"
const app = createApp(App)
registerApp(app)
app.use(store).use(router).mount("#app")
