import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import HelloWorld from "@/view/HelloWorld";
Vue.use(VueRouter);
Vue.use(iView);
//Vue.config.productionTip = false
const routes = [
  { path: '/hello', component: HelloWorld }
];
const router = new VueRouter({
  routes ,// (缩写) 相当于 routes: routes
  mode:"history"
})
new Vue({
  el:"#app",
  router,
  render: h => h(App),
})
