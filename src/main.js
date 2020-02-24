import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

import ApiService from './services/api-service';

ApiService.init('http://localhost:8000/api')
ApiService.mountInterceptors();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
