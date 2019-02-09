import Vue from 'vue';
import Router from 'vue-router';
import MainCore from './views/MainCore.vue';
import Contact from './views/Contact.vue';
import UserProfile from './views/UserProfile.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:id',
      name: 'home',
      component: MainCore,
      children: [
        { path: '/profile', component: UserProfile }
      ],
    },
    {
      path: '/contact',
      name: 'home',
      component: Contact,
    }
  ]
});
