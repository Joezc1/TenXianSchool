import router from '@/router'

const admin = {
  state: {
    routes : router.options.routes,
    tags: JSON.parse(localStorage.getItem('tags')),
    menuindex: sessionStorage.getItem('menuindex'),
    topoption: {}
  },

  mutations: {
    SET_TAGS: (state, name) => {
      state.tags = name
    },
    SET_LIST: (state, name) => {
      state.list = name
    }
  },

 
}

export default admin
