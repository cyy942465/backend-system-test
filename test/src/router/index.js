import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'

Vue.use(VueRouter)//安装路由

const routes = [
  {
    path: '/',//路由默认加载斜杠
    name: 'Login',
    component: Login,//路由要跳转的组件
    hidden: true
  },
  {
    path: '/Home',//路由默认加载斜杠
    name: '导航一',
    component: Home,//路由要跳转的组件
    children: [
      {
        path: '/Test1',//路由默认加载斜杠
        name: '选项一',
        component: Test1//路由要跳转的组件
      },
      {
        path: '/Test2',//路由默认加载斜杠
        name: '选项二',
        component: Test2//路由要跳转的组件
      }
    ] 
  }
  
]

const router = new VueRouter({
  routes
})

export default router
