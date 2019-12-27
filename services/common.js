import AJAX from '../libs/Ajax/index'

import { API_URL } from '../constants/index'

export default {
  /**
   * get common data service
   */
  async getCommonDataService() {
     return await AJAX.call(this, `${API_URL}/common`, null, 'GET')
  }
}
