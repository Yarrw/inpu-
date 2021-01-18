import Vue from "vue";
import VueRouter from "vue-router";
const index = r => require.ensure([],()=>r(require('../views/Index')));

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  }
];

const router = new VueRouter({
  routes
});

export default router;
