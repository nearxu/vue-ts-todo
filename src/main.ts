import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import { Component } from 'vue-property-decorator';
Vue.config.productionTip = false;
Component.registerHooks([
  'beforeRouteEnter', //进入路由之前
  'beforeRouteLeave', //离开路由之前
  'beforeRouteUpdate',
]);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
