const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // 定义客户端代码中的全局变量
  }),
  new ExtractTextPlugin({
    filename: '[name].min.css',
    allChunks: false // allChunks必须指明为false。否则会包括异步加载的 CSS！
  })
];

module.exports = plugins;
