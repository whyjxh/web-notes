/**
 * webpack是一个模块打包机，它做的事情是，分析你的项目结构，找到javascript模块以及其它一些浏览器不能直接运行的语言(less\ts)，
 * 并将其打包为合适浏览器使用的文件
 */
/**
 * 配置项
 * entry: webpack执行构建的第一步；
 * output
 * module: 模块，在webpack里一切皆模块，一个模块对应一个文件。从entry开始找依赖的模块；
 * chunk：代码块，一个chunk由多个模块组成，用于代码合并与分割；
 * loader：模块转化器，用于把模块原内容转化为新的内容；
 * plugin：扩展插件，在webpack构建流程中在特定的时机注入扩展逻辑来构建结果或做你想要的事情；
 */
/**
 * 初始化项目
 * webpackChunkName: "Home" 懒加载组件命名；
 * 1、npm install webpack webpack-cli webpack-dev-server -D
 * 2、配置webpack.config.js
 * 3、配置开发服务器
 * 4、打包js
 * 5、支持es6、react、vue
 *   npm install @babel/core babel-loader @babel/preset-env @babel/preset-react -D
 *   按需加载polyfill  npm i core-js@2 @babel/runtime-corejs2 -S
 *   {
 *      "presets": [{"useBuiltIns": "usage"}]
 *   }
 * 6、处理css、scss，以及css3属性前缀
 *   处理css npm install style-loader css-loader postcss-loader autoprefixer -D
 * 7、动态加载和卸载css
 *   style-loader为css对象提供了use()和unuse()两种方法可以用来加载和卸载css
 *   import index from './xxx/index.css';
 *   flag ? index.use() : index.unuse();
 * 8、处理sass
 *   npm install sass-loader node-sass css-loader style-loader autoprefixer -D
 * 9、提取css文件
 *   mini-css-extract-plugin  webpack 4.0以上 
 *   npm install extract-text-webpack-plugin@next -D  webpack 4.0
 *   extract-text-webpack-plugin webpack 4.0以下；
 * 10、输出html
 *   npm install html-webpack-plugin -D
 * 11、处理第三方库，暴露全局变量
 *   webpack.ProvidePlugin    以jquery为例；
 * 12、code splitting、懒加载（按需加载）
 *   import(\/\*webpackChunkName:'name' \*\/'./index.js')
 * 13、js tree shaking
 *   webpack 4.0之前 npm install uglifyjs-webpack-plugin -D;
 *   webpack 4.0以上 --mode production
 * 14、图片处理
 *   npm install file-loader url-loader -D
 *   file-loader 解决css等文件引入图片路径的问题
 *   url-loader 当图片较小时会把图片转为base64编码，大雨limit参数时，使用过file-loader处理
 * 15、clean Plugin and Watch Mode
 *   清空文件 npm install clean-webpack-plugin -D
 *   watch mode  webpack --watch
 * 16、区分环境变量
 *   webpack.DefinePlugin({
 *      NOOD_ENV: JSON.stringify(process.env.NOOD_ENV)
 *   })
 * 17、开发模式与webpack-dev-server、proxy
 * 
 * 18、使用HotModuleReplacement(热模块替换HMR)；需要react-hot-loader
 *      npm install react-hot-loader -D
 *      1、在主文件中写；
 *          import { AppContainer } from 'react-hot-loader';
 *          render(Router);
 *          if(module.hot) {
 *              module.hot.accept("./router/index.js", () => {
 *                  const Router = require("./router/index.js");
 *                  render(Router);
 *              })
 *          }
 *      devServer: {
 *          hot: true    
 *      }
 *      plugins: [
 *          new webpack.HotModuleReplacementPlugin()
 *      ]
 */
/**
 * webpack优化
 */
/**
 * 1、配置别名&指定扩展名
 * resolve: {
 *      extension: ["", "js", "jsx"], 文件扩展名；
 *      alias: {
 *          "@": path.join(__dirname, "src"),
 *          pages: path.join(__dirname, "src/pages"),
 *          router: path.join(__dirname, "src/router")
 *      }
 * }
 */
/**
 * 使用静态资源路径 publicPath (CDN)
 * output: {
 *      publicPath: "https://www.lagoustatic.com/kw-web-fed/dist/static"
 * }
 */
/**
 * min-css-extract-plugin 抽取css文件；把css单独打包成一个文件；可以和js并行下载；
 * npm install mini-css-extract-plugin -D
 * const miniCssExtractPlugin = require('mini-css-extract-plugin');
 * use: [
 *      miniCssExtractPlugin.loader,
 *      ...
 * ]
 * 
 * new miniCssExtractPlugin({
 *      filename: '[name].css',
 *      chunkFilename: '[id].css'
 * })
 */
/**
 * 代码分割按需加载，提取公共代码
 * optimization: {
 *      splitChunks: {
 *          chunks: 'all',  // 所有的chunks代码公共部分分离出来成为一个单独的文件；
 *      }
 * }
 */
/**
 * 文件压缩
 * webpack 4.0 只要在生产环境下，自动压缩代码；
 */
/**
 * 暴露全局变量
 * new webpack.providePlugin({
 *      $: 'jquery',  // npm
 *      jQuery: 'jQuery' // 本地jquery
 * })
 */
/**
 * 指定环境，定义环境变量
 * new webpack.DefinePlugin({
 *      NOOD_ENV: JSON.stringify(process.env.NOOD_ENV)
 * })
 */
/**
 * css Tree Shaking 清楚无用的css代码
 * npm install glob-all purify-css purifycss-webpack -S;
 * const PurifyCss = require('purifycss-webpack);
 * const glob = require('glob-all);
 * plugins: [
 *      // 清楚无用css
 *      new PurifyCss({
 *          paths: glob.sync([
 *              // 要做css tree shaking的文案
 *              path.resolve(__dirname, './src/*.html'),
 *              path.resolve(__dirname, './src/*.js')
 *          ])
 *      })
 * ]
 */
/**
 * js tree shaking 清楚无用的js代码；只支持import引入，不支持commonjs引入；
 * 只要在生产环境就会生效；
 * optimizition: {
 *      useExports: true
 * }
 */
/**
 * DLLPlugin插件打包第三方类库；
 * 项目中基本不会更新的库放到dll中来提高打包速度；当需要某个模块时，且在这个模块在dll文件中，就不会在打包，会去dll文件中查找；
 * webpack.DllPlugin
 * npm install add-asset-html-webpack-plugin -D
 * new addAssetHtmlWebpackPlugin({
 *      filepath: path.resolve(__dirname, '../dll/jquery.dll.js') // 将打包好的dll.js 注入到html中；
 * })
 * webpack.DllReferencePlugin({
 *      manifest: path.resolve(__dirname, '..', 'dll/xxx-manifest.json')
 * })
 */
/**
 * 使用happypack并发执行任务 多线程执行；
 * npm install happypack -D;
 * rules: [
 *      {
 *          test: /\.jsx?$/,
 *          use: [
 *              loader: "happypack/loader?id=busongBabel" // 一个loader对应一个id
 *          ]
 *      }
 * ]
 * 
 * new happyPack({
 *      id: 'busongBabel',
 *      loaders:['babel-loader?cacheDirectory'],
 *      threadPool: HappyPackThreadPool,
 * })
 */
/**
 * PWA优化策略
 * npm install workbox-webpack-plugin -D
 * 
 * const WorkboxPlugin = require('workbox-webpack-plugin'); // 引入pwa插件
 * const prodConfig = {
 *      plugins: [
 *          new WorkboxPlugin.GenerateSW({
 *              clientsClaim: true,
 *              skipWaiting: true
 *          })
 *      ]
 * }
 * 
 * 在入口文件加上
 * 
 * // 判断该浏览器支不支持 serviceWorker
 * if ('serviceWorker' in navigator) {
 *      window.addEventListener('load', () => {
 *          navigator.serviceWorker
 *          .register('/service-worker.js')
 *          .then(registration => {
 *              console.log('service-worker registed')
 *          })
 *          .catch(error => {
 *              console.log('service-worker registed error')
 *          })
 *      })
 *   }
 */
/**
 * 合并提取webpack公共配置
 * webpack-merge
 */
/**
 * 分离配置文件
 */

/**
 * 打包优化：
 * 1、loader固定文件范围；
 * 2、happypack多进程打包； loader 解析
 * 3、DllPlugin; add-asset-html-webpack-plugin 搭载add-asset-html-plugin 可以把dll文件链如html
 * 4、加缓存；
 */
/**
 * 加载优化
 * 1、cdn服务器
 * 2、minicssextractplugin 提取css文件；加载css文件
 * 3、代码分割，按需加载；
 * 4、文件压缩
 * 5、css tree shaking、js tree shaking；
 * 6、DllPlugin
 * 7、sideEffects: false,
 */

 /**
  * css
  * OptimizeCSSAssetsPlugin 对css进行代码压缩合并；
  * css-hot-loader css热更新；
  */

 /**
  * 代码分割
  * code split js
  * 4.0以上
  * webpack-parallel-uglify-plugin 多进程压缩js；
  * const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
  * optimization: {
  *     minimizer: [
  *         new ParallelUglifyPlugin({
  *             cacheDir: '.cache/',
  *             uglifyJS: {
  *                 output: {
  *                     comments: false,
  *                     beautify: false
  *                 },
  *                 compress: {
  *                     warnings: false,
  *                     drop_console: true,
  *                     collapse_vars: true,
  *                     reduce_vars: true
  *                 }
  *             }
  *         })
  *     ], // 压缩
  *     splitChunk: {
  *         chunks: 'async', // all:所有模块 、 initial:对同步模块 、 async: 对异步模块
  *         minSize: 3000, // 合并前模块文件的体积
  *         minChunks: 2, //最少被引用的次数
  *         maxAsyncRequests: 5,
  *         maxInitialRequests: 3,
  *         automaticNameDelimiter: '~',
  *         cacheGroup: {
  *             vendors: {
  *                 test: /[\\/]node_modules[\\/]/,
  *                 minChunks: 1,
  *                 priority: -10 // 优先级最高
  *             },
  *             default: {
  *                 test: /[\\/]src[\\/]js[\\/]]/,
  *                 minChunks: 2, // 非第三方公共模块
  *                 priority: -20,
  *             }
  *         },
  *     },
  *     runtimeChunk: {
  *         name: 'manifest'
  *     }
  * }
  * 4.0一下
  * new webpack.optimize.CommonsChunkPlugin({
  *     name: 'vender',
  *     minChunks: ({resource}) => {
  *         resource && resource.indexOf('node_modules') >= 0 && resource.match(/\.js/)
  *     }
  * })
  * new webpack.optimize.CommonsChunkPlugin({
        async: 'common-in-lazy',
        minChunks: ({ resource } = {}) => (
            resource &&
            resource.includes('node_modules') &&
            /axios/.test(resource)
        ),
    })
    new webpack.optimize.CommonsChunkPlugin({
        async: 'used-twice',
        minChunks: (module, count) => (
            count >= 2
        ),
    })
  */

/**
 * 代码分割是为了分离出三方依赖的库；
 */
