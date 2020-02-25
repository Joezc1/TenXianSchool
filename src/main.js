import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import './assets/css/btns.css'



Vue.config.productionTip = false

// Vue.prototype.$http=http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
