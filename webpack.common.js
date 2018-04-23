const path = require('path');

const BUILD_DIR = path.join(__dirname, 'public');
const APP_DIR = path.join(__dirname, 'src');

const common = {
  entry: path.join(APP_DIR, '/index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
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
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = common;
