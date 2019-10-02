import Vue from 'vue'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/assets/icon/iconfont.css'
// import '@/permission' // permission control
// import '@/breadcrumb' // breadcrumb store

import echarts from 'echarts'

process.env.MOCK && require('./mock/index.js')
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import 'iview/dist/styles'

Vue.use(iView)
Vue.use(echarts)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
