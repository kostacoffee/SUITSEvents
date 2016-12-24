import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './routes'
import config from './config'

Vue.use(VueMaterial);
Vue.use(VueRouter);

let $http = axios.create({
	baseURL: config.apiURL
});

Vue.prototype.$http = $http;

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
