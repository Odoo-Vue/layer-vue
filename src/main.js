import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios"
// import VueAxios from "vue-axios";

Vue.config.productionTip = false;

const response = axios.post('/jsonrpc', {
  jsonrpc: "2.0",
  model: "product.product",
  method: "search",
  args: [],
  // params: {  //args
  //   domain: []
  // },
}, {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
});

    //   self._rpc({
    //     model: 'ir.model.data',
    //     method: 'search',
    //     args: [domain],
    // })
console.log(response.data.result.address)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
