import { App } from "vue"
import { ElButton, ElForm, ElFormItem, ElInput, ElRadio } from "element-plus"
const components = [ElButton, ElForm, ElFormItem, ElInput, ElRadio]
export function registerElement(app: App) {
  for (const cp of components) {
    app.component(cp.name, cp)
  }
}
