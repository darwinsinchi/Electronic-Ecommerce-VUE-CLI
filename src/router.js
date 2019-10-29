import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Individual from "./views/Individual";
import Phones from "./views/Phones.vue";
import TV from "./views/TV.vue";
import Drones from "./views/Drones.vue";
import Computers from "./views/Computers.vue";
import Cameras from "./views/Cameras.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Individual/:id",
      props: true,
      name: "Individual",
      component: Individual
    },
    {
      path: "/Phones",
      name: "Phones",
      component: Phones
    },
    {
      path: "/TV",
      name: "TV",
      component: TV
    },
    {
      path: "/Drones",
      name: "Drones",
      component: Drones
    },
    {
      path: "/Computers",
      name: "Computers",
      component: Computers
    },
    {
      path: "/Cameras",
      name: "Cameras",
      component: Cameras
    }
  ]
});
