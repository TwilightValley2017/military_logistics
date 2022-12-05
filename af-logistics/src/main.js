// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

registerMicroApps([
  {
    name: 'army', // app name registered
    entry: '/army-logistics/',
    container: '#monday',
    activeRule: '#/army',
  },
]);

start();
