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
 * 数组去重
 */
function unique(arr) {
    let newArr = [];
    for(var i = 0; i < arr.length; i++) {
        var flag = false;
        for(var j = 0; j < newArr.length; j++) {
            if(arr[i] === arr[j]) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function unique(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}
function unique(arr) {
    return arr.sort().reduce((prev, next) => {
        if (prev.length === 0 || prev[prev.length - 1] !== next) {
            prev.push(next);
        }
        return prev;
    }, [])
}
function unique(arr) {
    const newArr = [];
    const tmp = {};
    for(var i = 0; i < arr.length; i++) {
        if (!tmp[typeof arr[i] + JSON.stringify(arr[i])]) {
            tmp[typeof arr[i] + JSON.stringify(arr[i])] = true;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function unique(arr) {
    const newArr = [];
    const map = new Map();
    for(var i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true);
            newArr.push(arr[i])
        }
    }
    return arr;
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