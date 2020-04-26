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