const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    port: 8888,
    host: 'localhost',
    hot: true,
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    quiet: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/web/index.html')
    })
  ]
};