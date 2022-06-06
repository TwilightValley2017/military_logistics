import Vue from 'vue'
import App from './App.vue'
import '@filez/filez-design/dist/antd.css'
import { DatePicker } from '@filez/filez-design';
Vue.use(DatePicker)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
