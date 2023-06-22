import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: false,
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#0055C7',
        secondary: '#F2C94C',
        accent: '#AD0192',
        error: '#b71c1c',
        background: '#F2F6FA'
      }
    }
  }
});
