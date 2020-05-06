const path = require('path');
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

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
          // {
          //   loader: "style-loader",
          //   options: {
          //     singleton: true // 处理为单个style标签
          //   }
          // },
          ExtractTextWebpackPlugin.loader,
          {
            loader: "css-loader"
          },
          {
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
          // {
          //   loader: "style-loader"
          // },
          miniCssExtractPlugin.loader,
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
      },
      {
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/i,
          loader: 'file-loader',
          query: {
              name: '[hash:8].[ext]'
          }
      },
      {
          test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            output: 'images/', // 图片输出的路径
            limit: 10000
          }
      },
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: "[name].[index].[hash].js"
    }),
    new miniCssExtractPlugin({
      filename: 'focus.index.[contenthash:8].css'
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'), // 模版
      filename: 'index.html',
      hash: true, // 防止缓存
      minify: {
        removeAttributeQuotes: true // 压缩，去掉引号
      }
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery'
    }),
    new cleanWebpackPlugin(),
    new webpack.DefinePlugin({
      NOOD_ENV: JSON.stringify(process.env.NOOD_ENV)
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // 静态文件根目录
    port: 9999,
    host: 'localhost',
    hot: true, // 热重载
    overlay: true, // 代码出错弹出浮动层
    compress: true, // 服务器返回浏览器的时候是否启动gzip压缩
    proxy: {
      // 跨域代理转发
      "/comments": {
        target: "https://xxx.xxx.com",
        changeOrign: true,
        logLevel: "debug",
        headers: {
          Cookie: ""
        }
      }
    },
    historyApiFallback: {
      // html5 history模式
      rewrites: [{ from: /.*/, to: "/index.html" }]
    }
  }
}