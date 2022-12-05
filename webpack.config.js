const path = require('path');

module.exports = {
    entry: './src/webpack/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'military.bundle.js'
      },
    // mode: 'production',
    mode: 'development',
  }