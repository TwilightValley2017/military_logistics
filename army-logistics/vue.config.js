const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      hashFunction: 'xxhash64',
      // path: 'D:\\Repository\\github\\military_logistics\\army-logistics\\dist',
      filename: 'js/army.[contenthash:8].js',
      publicPath: '/',
      chunkFilename: 'js/army.[contenthash:8].js',
    },
  },
  indexPath: 'army.html',
})
