import { Message } from 'element-ui'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import router from "./router"
// 需要登录才能访问的
let blackList = ['my']

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    NProgress.start()

    if (blackList.indexOf(to.name) != -1) {
        console.log(blackList.indexOf(to.name))
        if (sessionStorage.getItem('login') == '' || sessionStorage.getItem('login') == undefined || sessionStorage.getItem('login') == null) {
            if (to.path == '/login') {
                NProgress.done()
                next()
            } else {
                NProgress.done()
                next({ path: '/login' })
            }

        } else {
            NProgress.done()
            next()
        }
    } else {
        NProgress.done()
        next()
    }
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})

