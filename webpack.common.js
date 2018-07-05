const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const Template = path.join(__dirname, 'public', 'index.html');
const OUT_PUT_PATH = path.join(__dirname, '/dist');
const APP_DIR = path.join(__dirname, 'src');
const libraryName = process.env.APP_NAME || 'app';

const common = {
  entry: path.join(APP_DIR, '/index.js'),
  output: {
    filename: 'bundle.[hash].js',
    path: OUT_PUT_PATH,
    library: [libraryName],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Template,
    })
  ],
};

module.exports = common;
