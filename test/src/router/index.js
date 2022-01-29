import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'
import Test3 from '../views/Test3.vue'
import Test4 from '../views/Test4.vue'

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
    name: 'Home',
    component: Home,//路由要跳转的组件
    children: [
      {
        path: '/Test1',//路由默认加载斜杠
        name: '系统用户管理',
        component: Test1//路由要跳转的组件
      },
      {
        path: '/Test2',//路由默认加载斜杠
        name: '统计数据管理',
        component: Test2//路由要跳转的组件
      },
      {
        path: '/Test3',
        name: '接种记录管理',
        component: Test3
      },
      {
        path: '/Test4',
        name: '通知信息查询',
        component: Test4
      }
    ] 
  }
  
]

const router = new VueRouter({
  routes
})

export default router
