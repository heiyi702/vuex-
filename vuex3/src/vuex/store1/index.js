import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

/*export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
});*/
const store1 = {
  	state,
	mutations,
	getters,
	actions,
	namespaced: true
}

export default store1