import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router.js'
import axios from 'axios'
import qs from 'qs'

//设置跨域请求
axios.defaults.baseURL = "/api"

Vue.config.productionTip = false
Vue.prototype.$axios = axios //全局导入
//参数转换,让服务器可以接收到post请求参数
Vue.prototype.$qs = qs //全局导入

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
