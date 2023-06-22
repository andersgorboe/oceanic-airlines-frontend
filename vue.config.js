module.exports = {
  devServer: {
    proxy: {
      '/ADD-SOME-api': {
        target: 'http://localhost:8081/',
        pathRewrite: { '^/ADD-SOME-api': '' }
      }
    }
  },

  publicPath: process.env.NODE_ENV === "production" ? "/oceanic-airlines-frontend/" : "/",

  transpileDependencies: ['vuetify'],

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  }
};
