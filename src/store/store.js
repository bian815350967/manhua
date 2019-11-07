import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    avatar: ''
  },
  getters: {
    avatar: state => state.avatar
  },
  actions: {
    getUserInfo () {}
  },
  mutations: {
    AVATAR (state, data) {
      state.avatar = data
    }
  }
})

export default store
