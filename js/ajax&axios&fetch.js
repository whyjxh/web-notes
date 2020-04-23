/**
 * ajax
 * 基于xmlHttpRequest封装；
 * 缺点：可以形成回调地狱；
 * 优点：兼容性好；
 */
/**
 * axios
 * 是基于XmlHttpRequest、promise的封装；
 * 优点：解决了回调地狱；兼容性好;是目前流行的请求方法；
 */
/**
 * fetch
 * 和XmlHttpRequest一样，属于原生js，基于promise实现；
 * 缺点：底层api，使用时需要封装；兼容性不是很好，需要垫片polyfill；
 * 优点：写法简单；符合关注分离；脱离XHR；
 */