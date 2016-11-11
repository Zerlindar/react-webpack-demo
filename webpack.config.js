//webpack中的配置
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/* 入口配置
 * devtool: 生成source-map
 * entyr: _dirname代表当前目录，后跟入口文件名称
 * output: 路径和生成的文件名称
 * module：lorder{
     test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
     loader：loader的名称（必须）
     include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
     query：为loaders提供额外的设置选项（可选）
 }
 * devServer: {
     contentBase: "./public",//本地服务器所加载的页面所在的目录
     colors: true,//终端中输出结果为彩色
     historyApiFallback: true,//不跳转
     inline: true//实时刷新
 }
 */
module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css")
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}