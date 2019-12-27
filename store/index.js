import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common.js'
import user from './modules/user.js'

import { SET_GLOBAL_ERROR_MESSAGE } from './mutation_types.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common: {
      // 公共模块
      namespaced: true,
      ...common,
    },
    user: {
      // 用户模块
      namespaced: true,
      ...user
    }
  },
  state: {},
  actions: {
    showGlobalErrorMessage(context, payload) {
      uni.showToast({
          title: payload || '出错了',
          icon: 'none',
          duration: 2000
      });
    }
  }
})

export default store
