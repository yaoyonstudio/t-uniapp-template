import AJAX from '../libs/Ajax/index'

import { API_URL } from '../constants/index'

export default {
  /**
   * login service
   * @param {Object} params - login params ({ username: String, password: String })
   */
  async loginService(params) {
    return await AJAX.call(this, `${API_URL}/user`, 'GET', params)
  },
}
