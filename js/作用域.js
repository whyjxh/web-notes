/*
 * @Author: your name
 * @Date: 2021-01-27 11:24:48
 * @LastEditTime: 2021-01-28 14:59:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-notes\js\作用域.js
 */
/**
 * 作用域：程序代码中定义变量的区域
 * js 采用的是词法作用域（也就是静态作用域）
 */
/**
 * 执行上下文：
 * 变量对象、作用域链、this
 */
var scope = 'global data';

function checkScope() {
    var scope2 = 'func scope';
    console.log(scope2);
}

checkScope();

function foo() {
    console.log(foo);
}

console.log(foo);

var foo = 1;

console.log(foo);

/**
 * 当碰到上面js代码时的执行流程；
 * 1、生成全局执行上下文，压入执行栈中；globalTask
 *    ECtask = [globalTask]
 * 2、开始分析全局代码，初始化全局执行上下文
 *    globalTask = {
 *      VO：{
 *          scope：undefined,
 *          foo: foo, 
 *          checkScope： function xxx，
 *      }
 *    }
 *    a、var变量声明提升到最顶端；变为scope：undefined、foo: undefined
 *    b、function 函数声明也提升；checkScope： fn；foo与变量声明名字一样，完全替换这个属性，foo就变为 foo: fn;
 * 3、执行全局代码, scope: global data,
 * 4、遇到checkScope()时，生成checkScopeTask，压入执行栈
 *    ECtask = [globalTask, checkScopeTask]
 * 5、初始化checkScopeTask
 *    checkScopeTask = {
 *      AO：{
 *          arguments: {},
 *          scope2: undefined,
 *      },
 *      scope: [globalTask.VO]
 *    }
 * 6、执行checkScope函数
 *    checkScopeTask = {
 *      AO：{
 *          arguments: {},
 *          scope2: func scope,
 *      },
 *      scope: [globalTask.VO, AO]
 *    }
 *    遇到打印scope2时，先在自己的变量对象中查找，如果有，就返回；如果没有，就查找父作用域。
 * 7、当checkScope执行完之后，checkScopeTask从执行栈中弹出；
 * 8、到输出foo代码时，在本作用域内查询，找到foo：fn；打印function
 * 9、到遇到foo = 1时，给全局变量foo重新赋值
 * 10、此时输出foo，foo的值为1；
 */

