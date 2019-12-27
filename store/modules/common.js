import { GET_COMMON_DATA } from '../mutation_types'

import commonService from '../../services/common'

export default {
  state: {
		title: '',
    description: ''
	},
  mutations: {
    [GET_COMMON_DATA](state, payload) {
      const { appTitle, appDescription } = payload
      state.title = appTitle
      state.description = appDescription
    }
  },
  actions: {
    async getCommonDataAction(context) {
      const response = await commonService.getCommonDataService()
      context.commit(GET_COMMON_DATA, response)
    }
  }
}