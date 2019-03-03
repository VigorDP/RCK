const resolve = require('path').resolve;
const { WebPlugin, AutoWebPlugin } = require('web-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const webpack = require('webpack');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // 定义客户端代码中的全局变量
  }),
  new WebPlugin({
    template: resolve('doc/index.html'),
    filename: resolve('dist/index.html'),
    requires: ['app']
  }),
  // new ExtractTextPlugin({
  //   filename: '[name].[hash:8].min.css',
  //   allChunks: false // allChunks必须指明为false。否则会包括异步加载的 CSS！
  // }),
  new webpack.HotModuleReplacementPlugin()
  // new CopyWebpackPlugin([{ context: 'src/assets', from: '**/*', to: 'assets' }])
];

process.env.NODE_ENV === 'production' &&
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  );

module.exports = plugins;
