import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import './styles/element-variables.scss' // 引入自定义主题文件
// @use 'xxx.scss' as *
import 'element-plus/dist/index.css' // 引入 Element Plus 的默认样式
// 如果只想导入css变量
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'
// import './styles/element/index.scss'
import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import { ThemeServiceInit, infinityTheme } from 'devui-theme';

ThemeServiceInit({ infinityTheme }, 'infinityTheme');

const app = createApp(App)

app.use(router)
app.use(DevUI)
// 完整引入 Element Plus
app.use(ElementPlus, { 
  size: 'small', // size 用于设置表单组件的默认尺寸
  zIndex: 3000, // zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000
  locale: zhCn, // locale 用于设置语言
})  
app.mount('#app')