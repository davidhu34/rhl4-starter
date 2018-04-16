var path = require('path');
var webpack = require('webpack');
var PORT = require('./configs').PORT;

module.exports = {
  // mode: 'development',
  devtool: 'eval',// 'cheap-module-eval-source-map',
  entry: [
    // 'webpack-hot-middleware/',
    'webpack-dev-server/client?http://localhost:'+PORT,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, 'src'),
      loader: require.resolve('babel-loader'),
      options: {
        cacheDirectory: true,
        plugins: ['react-hot-loader/babel'],
      },
    }]
  }
};