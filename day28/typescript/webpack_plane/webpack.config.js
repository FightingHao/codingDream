const path = require('path')

module.exports = {
  entry: './src/main.ts',
  devServer: {
    contentBase: '.'
  },
  module: {
    // .ts .stylus .vue .jsx
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.')
  }
}