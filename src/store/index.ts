import { createStore } from 'vuex'

export default createStore({
  state: {
    collapse: false
  },
  getters: {
  },
  mutations: {
    handleCollapse (state, data) {
      state.collapse = data
    }
  },
  actions: {
  },
  modules: {
  }
})
