// node common.js es6

const path = require('path')
module.exports = {
  // 入口
  entry: './src/main.js',
  output: {
    // 打包
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.')
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader'
        },
        exclude: '/node_modules/'
      }
    ]
  },

  resolve: {
    extensions: ['.js']
  },

  devServer: {
    contentBase: '.'
  }

}