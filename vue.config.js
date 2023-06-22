module.exports = {
  devServer: {
    proxy: {
      '/ADD-SOME-api': {
        target: 'http://localhost:8081/',
        pathRewrite: { '^/ADD-SOME-api': '' }
      }
    }
  },

  publicPath: '/',

  transpileDependencies: ['vuetify'],

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  }
};
