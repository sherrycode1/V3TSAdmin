import axios from "axios"
// 1.模拟get
// axios
//   .get("http://123.207.32.32:8000/home/multidata")
//   .then((res) => console.log(res))
// // 2.get请求带参数
// axios
//   .get("http://httpbin.org/get", {
//     params: {
//       name: "coderwhy",
//       age: 18,
//     },
//   })
//   .then((res) => console.log(res))
// // 3.模拟post
// axios
//   .post("http://httpbin.org/post", {
//     params: {
//       name: "coderwhy",n
//       age: 18,
//     },
//   })
//   .then((res) => console.log(res))
// 4.axios配置选项
axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 3000
// axios
//   .get("/get", {
//     params: {
//       name: "coderwhy",
//       age: 18,
//     },
//   })
//   .then((res) => console.log(res))
// axios
//   .post("/post", {
//     params: {
//       name: "coderwhy",
//       age: 18,
//     },
//   })
//   .then((res) => console.log(res))
// 5.axios.all

// axios
//   .all([
//     axios.get("/get", {
//       params: {
//         name: "coderwhy",
//         age: 18,
//       },
//     }),
//     axios.post("/post", {
//       params: {
//         name: "coderwhy",
//         age: 18,
//       },
//     }),
//   ])
//   .then((res) => {
//     res.map((i) => console.log(i.data))
//   })
// 6.axios的拦截器
// fn1:请求发送成功会执行， 失败
axios.interceptors.request.use(
  (config) => {
    // 操作
    // 1.给请求加token
    // 2.isLoading动画
    console.log("send success")
    return config
  },
  (err) => console.log("failed"),
)
axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    console.log(err)
    return err
  },
)

axios
  .all([
    axios.get("/get", {
      params: {
        name: "coderwhy",
        age: 18,
      },
    }),
    axios.post("/post", {
      params: {
        name: "coderwhy",
        age: 18,
      },
    }),
  ])
  .then((res) => {
    res.map((i) => console.log(i))
  })
