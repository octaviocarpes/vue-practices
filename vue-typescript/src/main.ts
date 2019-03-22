import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App)
});

Vue.use(VueAxios, axios);

app.$mount("#app");
