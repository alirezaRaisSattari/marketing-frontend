import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notification: {
      title: '',
      type: '',
      isShow: false,
    },
  },
  mutations: {
    setNotification(state, value) {
      state.notification.title = value.title
      state.notification.type = value.type
      state.notification.isShow = value.isShow
    },
    removeNotification(state) {
      state.notification.title = ''
      state.notification.isShow = false
    },
  },
  actions: {},
  modules: {},
})
