/**
 * 原型
 * 给其它对象提供共享属性的对象；
 * 每一个对象都拥有原型对象；
 * prototype属性是构造函数独有的；
 */
/**
 * 
 */
/**
 * instanceof 
 * constructor.prototype 是否在对象的__proto__/原型链上；
 */
/**
 * 原型链继承
 * 缺点：原型中的属性都共享给子实例、无法向父类传递参数；
 */
function A() {};
function B() {};
B.prototype = new A();
var b = new B();
/**
 * 构造函数继承
 * 优点：解决了给父类传递参数和所有方法都被共享的问题；
 * 缺点：私有的、共享的方法都放在了构造函数内部；
 */
function A() {};
function B() {
  A.call(this, 'xxx');
};
var b = new B();
/**
 * 组合式继承
 * 优点：解决原型链和构造函数的问题
 * 缺点：父类会执行两次
 */
function A() {};
function B() {
  A.call(this, 'xxx');
};
B.prototype = new A();
var b = new B();
/**
 * 原型继承
 * 还是存在子实例共享的情况；
 * Object.create(o);
 */
function inheritObject(o) {
  function F() {};
  F.prototype = o;
  return new F();
}
/**
 * 寄生式继承
 * 对原型继承的扩展；
 */
function C(obj) {
  var o = new inheritObject(obj);
  o.getName = function() {};
  return o;
}
/**
 * 寄生组合式继承
 */
function A() {};
function B() {
  A.call(this, 'xxx');
};
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
var b = new B();
/*** */
function A() {};
function B() {
  A.call(this, 'xxx');
};
B.prototype = C(A.prototype);
B.prototype.constructor = B;
var b = new B();

/**
 * es6 class
 * supper parent.call(this);
 * constructor 构造函数；
 */

/**
 * 创建对象的方式
 */
