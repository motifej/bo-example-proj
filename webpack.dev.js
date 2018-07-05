const path = require('path');
const merge = require('webpack-merge');
const BUILD_DIR = path.join(__dirname, 'public');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  watchOptions: {
      ignored: /node_modules/
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    historyApiFallback: true,
    stats: {
      colors: true,
    },
    port: 8080,
  },
});
