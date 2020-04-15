import { login, logout, getInfo } from '@/api/login'
import * as myaxios from "../../api/usermanage"
import { Message, MessageBox } from 'element-ui'

const user = {
  state: {
    name: '',
    userId: '',
    username: '',
    login: false,
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.username = name
    },
    SET_USERID: (state, id) => {
      state.userId = id
    },
    SET_LOGIN: (state, login) => {
      state.login = login
    },
    // 前端 登出
    FedLogOut:(state)=> {
      let list = []
      console.log("登出")
      Message.success("退出登录")
      localStorage.setItem('tags',JSON.stringify(list))
      state.login =false
      state.username = ''
      state.userId = ''
      sessionStorage.remove()
      // localStorage.clear()
      // localStorage.removeItem('tags')
      // commit('SET_MENUS', [])
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      console.log("调用")
      return new Promise((resolve, reject) => {
        myaxios.login(userInfo).then(res => {
          if(res.success){
            commit("SET_USERID",res.userinfo.userid)
            commit("SET_LOGIN",true)
            commit("SET_NAME",res.userinfo.username)
            sessionStorage.setItem('login',true)
            Message.success(res.msg)
            resolve(true)
          }else{
            Message.error(res.msg)
            reject(false)
          }
         
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(response => {
            const data = response.data
            commit('SET_PERMISSIONS', data)
            commit('SET_MENUS', data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.enable)
          .then(() => {
            commit('SET_ENABLE', 0)
            commit('SET_PERMISSIONS', [])
            sessionStorage.removeItem('login')
            sessionStorage.removeItem('name')
            commit('SET_MENUS', [])
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },


  }
}

export default user
