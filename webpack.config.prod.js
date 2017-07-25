const Config = require('./webpack.config.shared.js');
const Merge = require('webpack-merge');
const SymlinkWebpackPlugin = require('symlink-webpack-plugin');
const webpack = require('webpack');

module.exports = Merge(Config, {
  plugins: [
    new SymlinkWebpackPlugin({
      origin: 'index.html',
      symlink: '200.html',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.jsx?$/i,
    }),
  ],
});
