import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// 能够使用功能normalize.css重置项目中的样式，normalize.css 是 CSS 重置的现代替代方法
import 'normalize.css'


createApp(App)
  .use(router)
  .mount('#app')
