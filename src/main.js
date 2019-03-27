// es6中标准的导入模块语法 node.js  let Vue = require('vue')
import Vue from 'vue'
// 导入App.vue 单文件组件
import App from './App.vue'
//全局引入样式
import  './assets/statics/site/css/style.css'
// 导入路由
import VueRouter from 'vue-router'
// 必须要Use一下
Vue.use(VueRouter)

// 导入组件组件
import index from "./components/index.vue"
import cart from "./components/cart.vue"



// 写路由规则
let routes = [
 {
   path:'/',
   component : index
 },
 {
   path : '/index',
   component : index
 },
 {
   path:"/cart",
   component : cart
 },
 
]
//cat
// 实例化路由对象
let router = new VueRouter({
  routes: routes
})

new Vue({
  // 渲染到了 public/index.html 中的 #app元素上
  // 不建议把代码写在 public/index.html页面
  el: '#app',
  // 把App渲染到 #app这个元素中
  // 把App组件填充到 #app这个元素中
  render: h => h(App),
  // 设置路由对象
  router: router
})
