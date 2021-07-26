import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
});

new Vue({
  store,
  el: '#app',
  render: h => h(App),
  router: router
})
