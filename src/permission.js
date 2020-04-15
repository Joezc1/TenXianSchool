import { Message } from 'element-ui'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import router from "./router"
// 需要登录才能访问的


router.beforeEach((to, from, next) => {
    document.title = to.meta.title
  
    NProgress.start()

    if (sessionStorage.getItem('login') != true || sessionStorage.getItem('login') == undefined || sessionStorage.getItem('login') == null) {
        if(to.path == "/"){
            NProgress.done()
            next()
        }else{
            NProgress.done()
            next("/")
        }
       
    } else {
        next()
        NProgress.done()
    }
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})

