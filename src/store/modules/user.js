import { login, logout, getInfo } from '@/api/login'
import { Message, MessageBox } from 'element-ui'

const user = {
  state: {
    userid: sessionStorage.getItem('userid'),
    username: sessionStorage.getItem('username') ,
    login: sessionStorage.getItem('login'),
    token: sessionStorage.getItem('token'),
    level: localStorage.getItem('level')
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.username = name
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_LEVEL: (state, token) => {
      state.level = token
    },
    // 前端 登出
    FedLogOut({ commit }) {
      sessionStorage.removeItem('login')
      localStorage.removeItem('username')
      sessionStorage.removeItem('menuindex')
      sessionStorage.removeItem('userid')
      sessionStorage.removeItem('level')
      let list = []
      // localStorage.clear()
      // localStorage.removeItem('tags')
      // commit('SET_MENUS', [])
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve,reject) => {
        login(userInfo.username,userInfo.password).then(response =>{  //相当于jquery调接口  $.post('user/login',name,res=>{}),                                                     // 这是vue调接口的方式，是对ajax请求的封装
            if(response.success){
              console.log("进行登录")
              console.log(response)
              // const data = response.data
              commit('SET_NAME', response.userinfo.username)
              commit('SET_TOKEN', response.token)
              commit('SET_LEVEL', response.userinfo.level)
              sessionStorage.setItem('login', true)
              sessionStorage.setItem( 'token',response.token)
              sessionStorage.setItem( 'level',response.userinfo.level)
              sessionStorage.setItem( 'userid',response.userinfo.id)
              localStorage.setItem( 'username',response.userinfo.username)
              // sessionStorage.setItem('name', data.name)
              Message.success(response.msg)
              resolve(true)
            }else{
              Message.error(response.msg)
              resolve(false)
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
