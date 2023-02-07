import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/HomeView.vue'),
  },
  {
    path: '/appication',
    name: 'appication',
    component: () => import(/* webpackChunkName: "about" */ '@/views/HomeView.vue'),
    // redirect: '/appversion' ,
    children: [
      {
        path: 'version',
        name: 'version',
        meta: {
          isshow_appication: true, 
          title: '应用版本'
        },
        component: ()=> import('@/views/ApplicationManger/AppVersion.vue')
      },
      {
        path: 'config',
        name: 'config',
        meta: {
          isshow_appication: true,
          title: '应用配置',
        },
        component: ()=> import('@/views/ApplicationManger/AppConfig.vue')
      },
      {
        path: 'operate',
        name: 'operate',
        meta: {
          isshow_appication: true,
          title: '应用操作',
        },
        component: ()=> import('@/views/ApplicationManger/AppOperate.vue')
      },
      {
        path: 'build',
        name: 'build',
        meta: {
          isshow_appication: true,
          title: '应用构建',
        },
        component: ()=> import('@/views/ApplicationManger/AppBuild.vue')
      },



    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
 