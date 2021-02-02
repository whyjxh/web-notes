/*
 * @Author: your name
 * @Date: 2021-01-25 15:00:38
 * @LastEditTime: 2021-01-26 17:36:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-notes\js\prototype&__proto__.js
 */
// 构造函数
function Person() {};

// 实例
var person1 = new Person();

// 每个对象都会有一个__proto__ 属性；就是原型。此属性不是一个标准的属性；obj.__proto__等价于Object.getPrototypeOf();
person1.__proto__ === Person.prototype;
// 每个函数都会有一个prototype原型属性；此属性指向一个对象；
Person.prototype.constructor === Person;
// 构造函数的原型是一个对象；而对象是通过构造函数Object 实例化来的，所以Person.prototype.__proto__ === Object.prototype;
Person.prototype.__proto__ === Object.prototype;

// 原型当中的属性是每个实例共享的；


