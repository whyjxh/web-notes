/**
 * 执行上下文：
 * js代码执行环境的抽象
 * 
 * 类型：
 * 全局执行上下文、函数执行上下文
 * 
 * 内容：
 * 变量对象、作用域链、this
 * 
 * 创建执行上下文：
 * 创建阶段 -> 执行阶段
 * 创建阶段：this绑定、创建作用域、创建变量对象；
 * 
 * 变量对象：
 * 函数的形参、函数声明、变量声明；
 */
/**
 * 执行栈：
 * 是一种拥有先进后出数据结构的栈，被用来存储代码运行时创建的执行上下文
 */
/**
 * 作用域 js代码定义变量的区域  静态作用域
 * 动态作用域：在函数调用的时候才决定；
 */
/**
 * 作用域链
 * 当前作用域 -> 父作用域 -> 祖父作用域 -> ...
 * 当访问一个变量时，当前作用域没有，就会查找父作用域，一直到全局作用；这样由多个执行上下文构成的链表就是作用域链；
 */
/**
 * 闭包
 * 可以访问自由变量的函数
 */
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, 1000)
}
console.log(i);
// 5 -> 5,5,5,5,5

/**
 * 想要得到5 -> 0,1,2,3,4
 */
for (var i = 0; i < 5; i++) {
    setTimeout(function(j) {
        console.log(j)
    }, 1000, i)
}
console.log(i);
/**
 * 如果想要得到0 -> 1 -> 2 -> 3 -> 4 -> 5
 */
let task = [];
let output = i => new Promise(res => {
    setTimeout(function() {
        console.log(i)
        res();
    }, 1000 * i)
})
for (var i = 0; i < 5; i++) {
    task.push(output(i));
}
Promise.all(task).then(() => {
    setTimeout(() => {
        console.log(i);
    }, 1000)
})
/**
 * async/await
 */
let seelp = timer => new Promise(res => {
    setTimeout(res, timer)
})
(async () => {
    for (var i = 0; i < 5; i++) {
        if (i > 0) {
            await sleep(1000);
        }
        console.log(i);
    }
})() 

