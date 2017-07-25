const Merge = require('webpack-merge');
const Config = require('./webpack.config.shared.js');

module.exports = Merge(Config, {
  output: {
    publicPath: '/',
  },

  devServer: {
    historyApiFallback: true,
  },
});
