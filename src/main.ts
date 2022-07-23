import { createApp } from "vue"
import App from "./App.vue"

import "./service/axios.demo"
import router from "./router"
import store from "./store"
import { registerApp } from "./global/index"
import "element-plus/dist/index.css"
const app = createApp(App)
registerApp(app)
app.use(store).use(router).mount("#app")
