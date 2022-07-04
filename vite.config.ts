import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 这个插件，给插件名字用的，script 上面加name属性，这样就不用在export default {name：xxx}
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3030,
    // 页面不会显示报错提示，看控制台就行了
    // hmr: {
    //   overlay: false
    // }

  },
  plugins: [vue(), vueSetupExtend()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 样式处理-自动导入
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
          @import "@/assets/styles/common.less";
        `
      }
    }
  }

})
