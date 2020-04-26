/**
 * iterator
 */
function createIterator(items) {
    var i = 0;
    return {
        next: function() {
            var done = i >= items.length;
            var value = items[i++];
            return {
                value,
                done,
            }
        }
    }
}
/**
 * 函数柯里化
 */
function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function() {
        var argument = [...args, ...arguments];
        if (argument.length >= length) {
            return fn.apply(this, argument);
        } else {
            return curry.apply(this, fn, argument);
        }
    }
}
/**
 * 函数组合
 */
function compose(...args) {
    return (val) => {
        args.reduce((prev, next) => {
            next(prev);
        }, val)
    }
}
/**
 * var\let\const的区别
 * var存在变量提升、let/const不存在；
 * var全局定义附在window上、let/const不会；
 * var在声明之前使用不会报错、let/const会报错，存在暂时性死区；
 * 
 * let 在定义时或者使用时赋值；
 * const在定义时必须赋值；
 * 
 * let 可以改变/const 不可以改变（引用类型不可改变指向）；
 */