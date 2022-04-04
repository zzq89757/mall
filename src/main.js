import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Col,
  Row,
  Toast
} from 'vant';
import 'vant/lib/index.css';
Vue.use(Button).use(Row).use(Col).use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')