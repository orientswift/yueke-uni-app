import Vue from 'vue'
import App from './App'

import store from './store/store'

Vue.config.productionTip = false
// 引入CSS图标库
import '@/static/font/iconfont.css'
//引入阿里普惠体
import '@/static/fontsize/fontsizea.css'
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
