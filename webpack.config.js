const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    devServer: {
      open: true
    }
  }
};
