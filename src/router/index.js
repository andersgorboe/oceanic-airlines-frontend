import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';
import scrollBehavior from '@/router/scroll-behavior';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  scrollBehavior,
  routes
});

export default router;
