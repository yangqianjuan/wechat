import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
// import Layout from '../views/layout/index.vue'

export const constantRouterMap = [
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path*',
  //       component: () => import('@/views/redirect/index')
  //     }
  //   ]
  // },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('@/views/chart/chart'),
    hidden: true
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('@/views/shop/shop'),
    hidden: true
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/detail/detail'),
    hidden: true
  },
  {
    path: '/reminder',
    name: 'Reminder',
    component: () => import('@/views/reminder/reminder'),
    hidden: true
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/', component: () => import('@/views/index') }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
