const path = require('path');
const devServer = require('webpack-dev-server');

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    publicPath: __dirname + 'dist', // js的引用路径，也可以是cnd地址
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: '[name].[hash].js' // 输出name名
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true // 处理为单个style标签
            }
          }, {
            loader: "css-loader"
          }, {
            loader: "postcss-loader"
          }
        ],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-style" // 将css转为commonjs 模块
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // 静态文件根目录
    port: 9999,
    host: 'localhost',
    overlay: true,
    compress: true // 服务器返回浏览器的时候是否启动gzip压缩
  }
}