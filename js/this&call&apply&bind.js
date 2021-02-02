/*
 * @Author: your name
 * @Date: 2021-01-25 14:50:46
 * @LastEditTime: 2021-02-02 16:45:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-notes\js\this&call&apply&bind.js
 */
/**
 * this指向问题
 * 1、全局调用；this -> window
 * 2、对象调用；this -> 当前对象
 * 3、new 调用构造函数；this -> 新创建的实例
 * 4、call、apply、bind调用；this -> 传入的this
 */
/**
 * 箭头函数
 * 没有this、supper、arguments、new.target
 * 不能用new 调用
 * 没有原型
 */
/**
 * call、applay实现
 * 把函数设为对象的属性；
 * 执行对象下的该方法；
 * 删除该方法；
 */
// call实现的方法
Function.prototype.call2 = function() {
    let [context, ...arg] = [...arguments];
    context = context || window;
    context.fn = this;
    let result = context.fn(...arg);
    delete context.fn;
    return result || undefined;
}
// apply实现方法
Function.prototype.apply2 = function() {
    let [context, arg] = [...arguments];
    context.fn = this;
    let result = context.fn(...arg);
    delete context.fn;
    return  result || undefined;
}
// bind 实现方法
Function.prototype.bind2 = function(context) {
    let _this = this;
    let arg = Array.prototype.slice.call(arguments, 1);
    let fn = function(){};
    let fBound = function() {
        return _this.apply(this instanceof fn ? this : context, arg.concat([...arguments]));
        // let self = this instanceof fn ? this : context;
        // let args = arg.concat([...arguments]);
        // this.fn = _this;
        // this.fn(...args);
        // delete this.fn
    }
    fn.prototype = _this.prototype;
    fBound.prototype = new fn();
    return fBound;
}