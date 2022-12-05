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

// new Vue({
//   render: h => h(App),
//   router,
//   store,
// }).$mount('#app')

// let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  // console.log({
  //   ele: container.querySelector("#app")
  // })
  // router = new VueRouter({
  //   // 注意这里的name,最好不要写死，直接使用主应用传过来的name
  //   base: window.__POWERED_BY_QIANKUN__ ? `${props.name}` : "/",
  //   mode: "history",
  //   routes,
  // });
  // Vue.use(VueRouter);
  // instance = new Vue({
  //   router,
  //   render: (h) => h(App),
  // }).$mount(container ? container.querySelector("#app") : "#app");
  instance = new Vue({
  render: h => h(App),
  router,
  store,
}).$mount(container ? container.querySelector("#app") : "#app")
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue2] vue app bootstraped");
}

export async function mount(props) {
  console.log(props)
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  // routes = null;
}