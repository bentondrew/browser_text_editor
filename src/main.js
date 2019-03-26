import Vue from "vue";
import VueFlashMessage from "vue-flash-message";
import VuejsDialog from "vuejs-dialog";
import App from "./components/App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueFlashMessage);
Vue.use(VuejsDialog);

require("vue-flash-message/dist/vue-flash-message.min.css");
require("vuejs-dialog/dist/vuejs-dialog.min.css");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
