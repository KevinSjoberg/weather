const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: 'src/index.html' }),
  ],
};
