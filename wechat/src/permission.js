import router from './router'
// import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权
// import { log } from '@/utils/index'
// import store from '@/store/index'
// import { getUserName } from '@/utils/auth'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // if (store.getters.roles.length === 0) {
      //   store.dispatch('GetInfo').then(res => { // 拉取用户信息
      //     next()
      //   }).catch(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       Message.error('验证失败,请重新登录')
      //       next({ path: '/login' })
      //     })
      //   })
      // } else {
      next()
      // }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
  // 在login跳转前保存name到sessionStorage
  // const name = window.sessionStorage.getItem('username')
  // const name = getUserName()
  // 如果有coocike 判断store 是否有 name 没有就赋值
  // log('debug router', name, `(${store.state.user.name})`)
  // if (name) {
  //   store.state.user.name = name
  // }
})
