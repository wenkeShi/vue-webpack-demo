const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },{
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({title:'vue-webpack-demo'})
  ]
}