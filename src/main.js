import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import { guest } from "./plugins/axios";

Vue.config.productionTip = false

new Vue({
  guest,
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
