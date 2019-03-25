import Vue from "vue";
import VueFlashMessage from "vue-flash-message";
import App from "./components/App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueFlashMessage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
