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
 */
