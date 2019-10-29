import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    console.log("Start");
    this.$store.dispatch("loadPosts")
  }
}).$mount("#app");
