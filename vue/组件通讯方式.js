/**
 * 父子组件通信；
 */
/**
 * props / $emit
 * 父子组件通讯；父组件通过props给子组件通讯；
 * 子组件触发$emit通知父组件；
 */
/**
 * $children / $parent
 * 父子组件通信；
 * $parent子组件可以访问父组件实例；
 * $children 父组件可以获取子组件实例；
 */
/**
 * ref / refs
 * 在组件上绑定ref；之后可以通过 this.$refs.xxx 可以获取到该组件的实例；访问组件中的方法/属性；
 */


/**
 * 父子组件、父与孙组件；
 */
/**
 * provide / inject;   2.2.0中提供的api； 不是响应式的；
 * 在父组件中通过provide提供变量，然后在子组件中通过inject来注入变量；
 * 注意：这里不论子组件嵌套有多深，只要调用了inject那么就可以注入provide中的数据，而不局限于只从当前父组件的props属性中取回数据；
 * 
 * 想要实现响应式
 * 1、provide传入this实例
 * provide() {
    return {
      theme: this//方法一：提供祖先组件的实例
    };
  },
 * 2、使用Vue.observable 来优化；
 provide() {
  //   this.theme = Vue.observable({
  //     color: "blue"
  //   });
  //   return {
  //     theme: this.theme
  //   };
  // },*/
// 父组件
export default {
    name: "A",
    provide: {
        for: "demo",
    },
    components: {
        B,
    }
}
// 子组件
export default {
    name: "B",
    inject: ['for'],
    data () {
        return {
            demo: this.for,
        }
    },
    components: {
        C,
    }
}
// 孙子组件
export default {
    name: "C",
    inject: ['for'],
    data () {
        return {
            demo: this.for,
        }
    }
}

/**
 * 兄弟组件、父子组件...
 */
/**
 * eventBus
 * eventBus 事件，在vue中可以作为组件间的沟通桥梁，所有组件共用相同的事件中心；可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。
 * 流程
 */
// 初始化， 首先需要创建一个事件总线并导出；
import Vue from 'vue';
export const EventBus = new Vue();
// 发送事件/触发事件
import { EventBus } from './event-bus.js';
EventBus.$emit('aaa', {
    num: '111',
})
// 监听事件 / 添加回调
import { EventBus } from './event-bus.js';
EventBus.$on('aaa', (val) => {
    console.log(val);
})
// 移除
import { EventBus } from './event-bus.js';
EventBus.$off('aaa', {})

/**
 * vuex
 */

/**
 * loaclStorage / sessionStorage   2.4.0
 */
/**
 * $attrs/$listeners
 * $attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。
 * 当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。
 * 通常配合 inheritAttrs 选项一起使用。 inheritAttrs: false;
 * $listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件
 */