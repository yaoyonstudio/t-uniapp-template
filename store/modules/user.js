import { LOGIN, LOGOUT } from '../mutation_types'

import userService from '../../services/user'

export default {
  state: {
		isLogin: uni.getStorageSync('token') ? true : false,
    user: {
      username: uni.getStorageSync('username') || '',
      token: uni.getStorageSync('token') || '',
    }
	},
  mutations: {
    /**
     * login mutation
     * @param {VuexState} state
     * @param {Object} payload - login payload({ username: String, token: String })
     */
    [LOGIN](state, payload) {
      const { username, token } = payload

      state.isLogin = true
      state.user = {
        username,
        token,
      }

      uni.setStorageSync('username', username)
      uni.setStorageSync('token', token)
    },

    /**
     * logout mutation
     * @param {VuexSate} state
     */
    [LOGOUT](state) {
      state.isLogin = false
      state.user = {
        username: '',
        token: '',
      }

      uni.clearStorageSync()
    },
  },
  actions: {
    /**
     * login action
     * @param {VuexContext} context
     * @param {Object} payload - payload({ username: String, password: String })
     */
    async loginAction(context, payload) {
      const response = await userService.loginService(payload)
      
      if (response) {
        const { username, password } = payload
        if (username === response.username && password === response.password) {
          context.commit(LOGIN, response)
        } else {
          context.dispatch('showGlobalErrorMessage', '用户名或密码错误', { root: true })
        }
        return
      }
      context.dispatch('showGlobalErrorMessage', '出错了', { root: true })
    },
    /**
     * logout action
     * @param {VuexContext} context
     */
    logoutAction(context) {
      context.commit(LOGOUT)
    },
  }
}