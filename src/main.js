import Vue from 'vue';
import { i18n } from './i18n-setup';
import vuetify from './plugins/vuetify';
import App from './App';
import router from './router';
import store from './store';

import('./styles/sass/main.scss');

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
