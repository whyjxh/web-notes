/**
 * vue和react的区别
 * 共同点
 * 都是用了vnode；
 * 提供了响应式和组件化的视图组件；
 * 将注意力都集中在核心库，而将其他功能如路由和状态管理交给了相关的库；
 * 运行时：
 * react在组件状态发生变化时，会以发生变化的组件为根，重新渲染整个子组件树；
 * vue在数据发生变化时，因为在渲染时进行依赖收集，所以在数据发生变化时，就已经知道时哪个组件需要重新渲染；
 * 
 * html
 * react中使用jsx的语法；
 * vue推荐template；也支持渲染函数；
 * 
 * css
 * vue将css做为组件的一部分，可以支持作用域；
 * react中css作用域是通过css-in-js方案实现；比如styled-components
 * 
 * 规模生态
 * vue路由库和状态管理库都是官方维护支持且与核心库同步更新；
 * react把这些是交给了社区，因此创建了一个更加分散的生态系统。但相对的react的生态更繁荣；
 */

/**
 * proxy和Object.definePrototype的区别
 * Object.definePrototype 监听对象是单个属性监听，一整个对象需要遍历；
 * proxy是可以监听到一整个对象；
 * 
 * Object.definePrototype 对数组监听不是很好，vue中重写了数组的八个方法，放弃了对下标变化的支持；
 * proxy可以监听数组；
 * 
 * Object.definePrototype 不能监听到新增的属性；
 * proxy 可以监听到新增的属性；
 * 
 * proxy 还有新增有多大13中拦截方法；apply、ownKeys、has等等；兼容性不好；
 * Object.definePrototype自持到ie8；
 */

/**
 * 状态管理的思想
 * 把组件共享的状态放到一个全局的对象中集中管理；
 * 约定修改数据不可以直接修改；需要有专门的修改state的方法；
 * 用户触发事件改变state；
 * state数据改变时需要触发视图更新；观察者模式；
 * 
 * vue中时vuex；
 * react中的redux；
 */