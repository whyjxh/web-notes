/**
 * babel 转译代码
 * babel 就是在操作AST来完成转译工作；
 * 
 * parse 解析：将源代码转换成更加抽象的表示方法（抽象语法树）；词法分析、语法分析；
 * transform 转换：对（抽象语法树）做一些特俗处理，让它更符合编译器期望；
 * generate 代码生成：见抽象语法树生成新的代码；
 */
/**
 * babel-loader
 * @babel/core
 * @babel/preset-env
 * [
 *    [
 *        "@babel/preset-env",
 *        {
 *          "useBuiltIns": "usage",
 *          "corejs": 3
 *        }
 *    ]
 * ]
 * @babel-polyfill
 * 
 * @babel/plugin-transform-runtime -D
 * @babel/runtime -S
 */