import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueMaterial);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
