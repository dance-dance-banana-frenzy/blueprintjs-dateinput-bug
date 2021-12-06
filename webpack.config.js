const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
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
