// https://github.com/vuejs/vue-router/blob/dev/examples/scroll-behavior/app.js

const scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    const position = {};

    if (to.hash) {
      position.selector = to.hash;

      if (to.hash === '#about' || to.hash === '#projects') {
        position.offset = { y: 100 };
      }

      // scroll to anchor if given hash is found
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        return position;
      }

      // will retain current scroll position.
      return false;
    }

    return new Promise(resolve => {
      // set meta in routes.js
      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0;
        position.y = 0;
      }
      resolve(position);
    });
  }
};

export default scrollBehavior;
