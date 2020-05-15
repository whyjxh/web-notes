/**
 * http是不保存状态的协议，因此链接双方不能知晓当前的身份和状态；所以就会用cookie来保存用户状态；
 */
/**
 * TCP/IP 协议是internet最基本的协议，http协议是它的一个子集。tcp/ip 安层次分为四层（应用层、传输层、网络层、链路层）；
 */
/**
 * 应用层：应用层规定了向用户提供应用服务时通信的协议；如DNS域名系统提供的域名到ip地址之间的解析服务；
 * 传输层：传输层对接上层应用层，提供处于网络连接中两台计算机之间的数据传输所使用的协议；tcp协议
 * 网络层：网络层规定了数据通过怎样的传输路线到达对方计算机传送给对方；ip协议；
 * 链路层：用来处理连接网络的硬件部分；
 */
/**
 * 反向代理
 * 本地服务在浏览器向本地服务发起请求 -> 本地代理转发 -> 目标服务器 -> 响应数据后通过代理服务器返回值 -> 浏览器接收返回值；
 */
/**
 * web 安全防范
 * 1、XSS 攻击
 * 全称跨站脚本攻击，利用html可以执行<script></script>的特性，想办法将脚本注入页面中的攻击手段。地址输入、输入框输入
 * 2、CSRF攻击
 * 跨站请求伪造；
 * 防范：
 * 1、get请求不用于对数据进行修改；
 * 2、cookie 设置http only；
 * 3、接口设置禁止跨域；
 * 4、请求时附带验证信息，比如验证码或者token；
 */

/**
 * keep-live 是持久连接，避免了tcp的连接和断开；节省了开销；
 */
/**
 * http头字段
 * accept
 * accept-charset
 * age
 * cache-control
 * connection
 * content-length
 * content-encoding
 * etag
 * expired
 * host
 * last-modified
 * if-modified-since
 * if-none-match
 */