var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var PORT = require('./configs').PORT;

new WebpackDevServer( webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen( PORT, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening on port '+PORT);
});
