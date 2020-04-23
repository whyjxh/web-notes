/**
 * promise
 * promise是异步编程的一种解决方案；
 * 可以获取异步操作的消息；
 * 有三种状态：
 * pending
 * fulfiled
 * rejected
 * 状态一旦改变就不会在变。
 * 创建promise实例之后，它会立即执行；
 */
// 当参数a大于10且参数fn2是一个方法时 执行fn2
function fn1(a, fn2) {
    if (a > 10 && typeof fn2 == 'function') {
        fn2()
    }
}
fn1(11, function() {
    console.log('this is a callback')
})
// 用promise实现
function fn1(a) {
    return new Promise((res, rej) => {
        if (a > 10) {
            res();
        } else {
            rej();
        }
    })
}
fn1(11).then(res => {
    console.log('执行fn2')
}, err => {
    console.log(111)
})
/**
 * promise可以解决的问题：
 * 1、解决回调地狱的问题；（第一个函数的输出是第二个函数的输入）
 * 2、可以支持多个并发的请求，并获取请求中的数据；
 */
/**
 * catch可以捕获失败状态；也可以捕获.then()中的错误代码；
 */
fn1(4).then(res => {
    console.log(abc)
}).catch(err => {
    console.log(err);
})
/**
 * Promise.all([promise1, promise2,...]);
 * 提供了并行执行的能力；
 * 全部成功走res；只要有一个失败就走到失败状态
 */
var p1 = new Promise((res, rej) => {res()});
var p2 = new Promise((res, rej) => {res()});
var p3 = new Promise((res, rej) => {res()});
var p = Promise.all([p1,p2,p3]).then(res => {
    console.log('success')
}, err => {
    console.log('error')
})
/**
 * promise.race([p1,p2])
 * 最先执行完的优先返回；
 */
// 例如为某个请求设置超时时间；
function request() {
    return axios.get('xxx');
}
function timer() {
    return new Promise((res) => {
        setTimeout(rej, 1000);
    });
}
Promise.race([request(), timer()]).then(res => {
    console.log(xxx);
}).cache(err => {
    console.log('超时之后的操作');
})
/**
 * 模拟promise
 * 有三个状态；
 * 成功/失败回调
 */
// 实现成功/失败的回调；
function Promise(fn) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResCallbacks = [];
    this.onRejCallbacks = [];
    let res = (data) => {
        if (this.status === 'pending') {
            this.status = 'resolved';
            this.value = data;
            this.onResCallbacks.forEach(item => item());
        }
    }
    let rej = (data) => {
        if (this.status === 'pending') {
            this.status = 'rejected';
            this.reason = data;
            this.onRejCallbacks.forEach(item => item());
        }
    }
    try {
        fn(res, rej);
    } catch (err) {
        rej(err)
    }
}
Promise.prototype.then = function(fulfiled, rejected) {
    if (this.status === 'resolved') {
        fulfiled(this.value);
    }
    if (this.status === 'rejected') {
        rejected(this.reason);
    }
    if (this.status === 'pending') {
        this.onResCallbacks.push(() => {
            fulfiled(this.value);
        })
        this.onRejCallbacks.push(() => {
            rejected(this.reason);
        })
    }
}

/**
 * class 模拟promise
 */
new Promise((resolve, reject) => {
    resolve();
});
// 1、promise的声明；
// 2、promise状态问题；
// 3、then方法里注册的回调；
// 4、解决链式调用；
/**
 * 创建一个新的promise，用来在then里返回
 * 如果是普通值；直接resolve();
 * 如果是对象，并且没有then属性也直接返回；
 * 如果有对象有then属性；就执行拿到的then；获取结果，返回；
 */
class Promise {
    constructor(executor) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolveCallbacks = [];
        this.onRejectCallbacks = [];
        let resolve = data => {
            if (this.status === 'pending') {
                this.status === 'fulfilled';
                this.value === data;
                this.onResolveCallbacks.forEach(fn => fn());
            }
        }
        let reject = data => {
            if (this.status === 'pending') {
                this.status === 'rejected';
                this.reason === data;
                this.onRejectCallbacks.forEach(fn => fn());
            }
        }
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    
    then(onFulfilled, onRejected) {
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === 'fulfilled') {
                let x = onFulfilled(this.value);
                resolvePromise(promise2, x, resolve, reject);
            }
            if (this.status === 'rejected') {
                let x = onRejected(this.reason);
                resolvePromise(promise2, x, resolve, reject);
            }
            if (this.status === 'pending') {
                this.onResolveCallbacks.push(() => {
                    let x = onFulfilled(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                })
                this.onRejectCallbacks.push(() => {
                    let x = onRejected(this.reason);
                    resolvePromise(promise2, x, resolve, reject);
                })
            }
        })
        return promise2;
    }
}
function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject('xxxx');
    }
    let called;
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, err => {
                    if (called) return;
                    called = true;
                    reject(err);
                })
            } else {
                resolve(x);
            }
        } catch (err) {
            reject(err);
        }
    } else {
        resolve(x);
    }
}