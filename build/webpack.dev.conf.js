const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf.js')

module.exports = merge(baseConf, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
  },
  plugins:[
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),    
  ],
  mode: 'development',
})