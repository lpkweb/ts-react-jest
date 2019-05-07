const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./webpack.${_mode}.js`);

const resolve = dir => {
  return path.join(__dirname, '..', dir);
}

const webpackBaseConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: resolve('src/web/index.tsx')
  },
  output: {
    filename: 'static/js/[name].[hash].js',
    path: resolve('dist'),
    publicPath: ''
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader'
    }, {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      }]
    }]
  },
  resolve: {
    alias: {
      '@': resolve('src/web')
    },
    modules: ['node_modules', resolve('src')],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash].css'
    }),
    new CleanWebpackPlugin()
  ]
};


module.exports = merge(webpackBaseConfig, _mergeConfig);