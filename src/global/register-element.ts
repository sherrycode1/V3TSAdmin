import { App } from "vue"
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
} from "element-plus"
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
]
export function registerElement(app: App) {
  for (const cp of components) {
    app.component(cp.name, cp)
  }
}
