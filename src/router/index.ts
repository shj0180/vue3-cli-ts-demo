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
        path: 'appversion',
        name: 'appversion',
        meta: {
          isshow_appication: true, 
          title: '应用版本'
        },
        component: ()=> import('@/views/ApplicationManage/AppVersion.vue')
      },
      {
        path: 'appconfig',
        name: 'appconfig',
        meta: {
          isshow_appication: true,
          title: '应用配置',
        },
        component: ()=> import('@/views/ApplicationManage/AppConfig.vue')
      },
      {
        path: 'appoperate',
        name: 'appoperate',
        meta: {
          isshow_appication: true,
          title: '应用操作',
        },
        component: ()=> import('@/views/ApplicationManage/AppOperate.vue')
      },
      {
        path: 'appbuild',
        name: 'appbuild',
        meta: {
          isshow_appication: true,
          title: '应用构建',
        },
        component: ()=> import('@/views/ApplicationManage/AppBuild.vue')
      },
    ]
  },
  {
    path: '/db',
    name: 'db',
    component: () => import(/* webpackChunkName: "about" */ '@/views/HomeView.vue'),
    // redirect: '/appversion' ,
    children: [
      {
        path: 'dbversion',
        name: 'dbversion',
        meta: {
          isshow_db: true, 
          title: '版本管理'
        },
        component: ()=> import('@/views/DBManage/DBVersion.vue')
      },
    ]
  },
  {
    path: '/prometheus',
    name: 'prometheus',
    component: () => import(/* webpackChunkName: "about" */ '@/views/HomeView.vue'),
    // redirect: '/appversion' ,
    children: [
      {
        path: 'prometheusconfig',
        name: 'prometheusconfig',
        meta: {
          isshow_prometheus: true, 
          title: '一键配置'
        },
        component: ()=> import('@/views/PrometheusManage/PrometheusConfig.vue')
      },
      {
        path: 'prometheusdata',
        name: 'prometheusdata',
        meta: {
          isshow_prometheus: true, 
          title: '监控数据'
        },
        component: ()=> import('@/views/PrometheusManage/PrometheusData.vue')
      },
    ]
  },
  {
    path: '/myabout',
    name: 'myabout',
    component: () => import(/* webpackChunkName: "about" */ '@/views/HomeView.vue'),
    // redirect: '/appversion' ,
    children: [
      {
        path: 'test1',
        name: 'test1',
        meta: {
          isshow_about: true, 
          title: 'learn'
        },
        component: ()=> import('@/views/MyAbout/MyAbout.vue')
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
 