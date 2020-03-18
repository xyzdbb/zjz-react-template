const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    stats: 'errors-only'
  },
  devtool: 'cheap-source-map'
};

module.exports = merge(baseConfig, devConfig);
