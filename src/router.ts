import Vue from 'vue';
import Router from 'vue-router';
import MainCore from './views/MainCore.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainCore,
    }
  ]
});
