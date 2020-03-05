import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.isLogin,
    userInfo: {
      userName: localStorage.username,
      userId:localStorage.userId
    }
  },
  mutations: {
    getUserInfo (state, data) {
      state.isLogin = true
      state.userInfo.userName = data[0]
      state.userInfo.userId = data[1]
      console.log(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
