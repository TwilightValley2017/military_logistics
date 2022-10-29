import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import store from './store.js'
import patchPlugin from '@filez/test-script-attributes-generator'
import '@filez/filez-design/dist/antd.css'
import { 
  DatePicker,
  Form,
  Input,
  Button,
  Select,
  Dropdown,
  Icon,
  Menu,
  Checkbox,
  Switch,
  List,
} from '@filez/filez-design'
Vue.use(DatePicker)
Vue.use(Form)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Dropdown)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Checkbox)
Vue.use(Switch)
Vue.use(List)

Vue.use(VueRouter)
Vue.use(patchPlugin, { module: 'web-mantis', printable: true })

Vue.config.productionTip = false

// 模拟用户角色与增值模块
localStorage.setItem('ADMIN', 'FALSE')
localStorage.setItem('EXCHANGE', 'TRUE')

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
