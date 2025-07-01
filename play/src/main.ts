import { createApp } from 'vue'
import App from './App.vue'
import HIcon from '@hsy/components/icon'
import HText from '@hsy/components/text'
import '@hsy/theme-chalk/src/index.scss'

// import 'element-plus/dist/index.css'

const plugins = [HIcon, HText]

// 注册全局组件
const app = createApp(App)
plugins.forEach((comp) => app.use(comp))
console.log(app._context.components)
app.mount('#app')
