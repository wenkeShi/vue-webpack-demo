const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf.js')

module.exports = merge(baseConf, {
  plugins:[
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..')   // root must be this
    }),
    new BundleAnalyzerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'base.[chunkhash:8].js',
    })
  ],
  // devtool: '#source-map',
  mode: 'production'
})