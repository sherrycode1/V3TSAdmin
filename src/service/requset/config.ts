// 1.手动改（不
const BASE_URL = "http://123.207.32.32:8000"
let TIME_OUT = 5000
// 2.根据process.env.NODE_ENV进行区分
if (process.env.NODE_ENV === "development") {
  TIME_OUT = 6000
} else if (process.env.NODE_ENV === "production") {
  TIME_OUT = 7000
}
// 3.直接在.env.development 和production文件里面写入
// 官方文档有

export { BASE_URL, TIME_OUT }
