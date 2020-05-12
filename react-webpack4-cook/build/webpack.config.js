const path = require('path');
const { cleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const purifyCss = require('purifycss-webpack');
const glob = require('glob-all');

const rootDir = path.join(__dirname, '..');
const env = process.env.NOOD_ENV === 'development';
module.exports = {
    mode: "development",
    entry: path.join(rootDir, 'src/index'),
    devtool: 'cheap-module-eval-source-map', // 开发环境 cheap-module-eval-source-map/ 线上环境：cheap-module-source-map
    output: {
        path: path.join(rootDir, 'dist/static/js'),
        filename: 'bundle.js',
        chunkFilename: '[name].js',
        publicPath: env ? '../dist/static/' : 'https://www.lgstatic.com/kw-web-fed/dist/static/'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    // "style-loader",
                    miniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: path.resolve(__dirname, "../dist/images/"),
                        limit: 10 * 1024
                    }
                }
            },
            {
                test: /\.(eot|woff2?|ttf|svg)/,
                options: {
                    outputPath: '../dist/fonts',
                    publicPath: 'fonts',
                    name: '[name]-[hash:5].min.[ext]'
                }
            }
        ]
    },
    resolve: {
        extension: ["", "js", "jsx"],
        alias: {
            "@": path.join(__dirname, "../src"),
            "path": path.join(__dirname, "../src/pages")
        }
    },
    plugins: [
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "../src/index.html")
        }),
        new webpack.HotModuleReplacementPlugin(),
        new miniCssExtractPlugin({
            filename: '[index].[hash:8].css',
            chunkFilename: '[id].[hash: 8].css'
        }),
        new purifyCss({
            paths: glob.sync([
                path.resolve(__dirname, '../src/*.html'),
                path.resolve(__dirname, '../src/*.js')
            ])
        })
    ],
    optimization: {
        splitChunks: {
            all: 'all'
        }
    },
    devServer: {
        contentbase: path.resolve(__dirname, "../dist"),
        hot: true,
        host: 'localhost', // '0.0.0.0' 可以使用手机访问
        port: 3000,
        historyApiFallback: true,
        proxy: {
            "/api": "http://localhost:3000"
        }
    }
}