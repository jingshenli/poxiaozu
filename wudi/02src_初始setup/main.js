//引入的不再是vue构造函数,引入的是一个名为createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
// 创建应用实例对象 类似于vue2的vm.但是app比vm更轻
createApp(App).mount('#app')

// const vm = new vue({
//     render: h => h(App)
// })
// vm.$mount('#app')
