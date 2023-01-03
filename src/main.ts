import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Element Plus
import 'element-plus/dist/index.css'
import { components, plugins } from './plugins/element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 按需导入Element Plus组件和插件
components.forEach(components => {
  app.component(components.name)
})
plugins.forEach(plugin => {
  app.use(plugin)
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store)
app.use(router)
app.mount('#app')
