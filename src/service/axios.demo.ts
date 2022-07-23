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
axios
  .get("/get", {
    params: {
      name: "coderwhy",
      age: 18,
    },
  })
  .then((res) => console.log(res))
axios
  .post("/post", {
    params: {
      name: "coderwhy",
      age: 18,
    },
  })
  .then((res) => console.log(res))
// 5.axios.all
