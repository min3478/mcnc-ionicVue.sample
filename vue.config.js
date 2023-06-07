const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: process.env.NODE_ENV === 'production' ?
  path.resolve(__dirname, "./dist/prd") : path.resolve(__dirname, "./dist/dev"),
  devServer: {
    port: process.env.VUE_APP_PORT || 8000
  }
})