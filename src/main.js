import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import odooLayer from '@/lib/odoo'

Vue.config.productionTip = false

odooLayer.init('rzu')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
