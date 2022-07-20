var path = require('path')
console.log({ dirname: __dirname, filename: __filename })
module.exports = {
    // context在Webpack中表示资源入口entry是从哪个目录为起点的。context的值是一个字符串，表示一个绝对路径
    context: path.resolve(__dirname, './src'),
    entry: {
        bundle: './main.js',
        vendor: './vendor/index.js',
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name]-[chunkhash:8].js'
    },
    module: {
        rules: [{
            test: /\.css/,
            use: ['style-loader', 'css-loader']
        }]
    },
    mode: 'none'
}