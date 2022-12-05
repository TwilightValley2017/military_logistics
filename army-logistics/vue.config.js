const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      hashFunction: 'xxhash64',
      filename: 'js/army.[contenthash:8].js',
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkFilename: 'js/army.[contenthash:8].js',
    },
  },
  outputDir: '../dist/army-logistics/',
})
