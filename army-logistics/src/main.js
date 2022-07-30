import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import '@filez/filez-design/dist/antd.css'
import { 
  DatePicker,
  Form,
  Input,
  Button,
} from '@filez/filez-design'
Vue.use(DatePicker)
Vue.use(Form)
Vue.use(Input)
Vue.use(Button)

Vue.use(VueRouter)

Vue.config.productionTip = false

// 模拟用户角色与增值模块
localStorage.setItem('ADMIN', 'TRUE')
localStorage.setItem('EXCHANGE', 'TRUE')

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
