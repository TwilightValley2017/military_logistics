import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.js'
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

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
