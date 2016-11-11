/*package.json中的脚本部分已经默认在命令前添加了node_modules/.bin路径，
 *所以无论是全局还是局部安装的Webpack，你都不需要写前面那指明详细的路径了。
 */
/*
 *babel-preset-es2015：解析Es6
 *babel-preset-react：解析JSX
 *css-loader：类似@import 和 url(...)的方法实现 require()的功能
 *style-loader：将所有的计算后的样式加入页面中   注：感叹号的作用在于使同一文件能够使用不同类型的loader
 *PostCSS：CSS的处理平台，它可以帮助你的CSS实现更多的功能
 *HtmlWebpackPlugin：依据模板生成最终的Html5文件，文件中自动引用打包的JS。在文件名中插入一个不同的哈希值。
 *HMR：允许你在修改组件代码后，自动刷新实时预览修改后的效果。
 */