import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home.vue';
import signup from './views/signup.vue';
import dashboard from './views/dashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
  ],
});
