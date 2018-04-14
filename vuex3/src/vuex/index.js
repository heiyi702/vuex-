import Vue from 'vue'
import Vuex from 'vuex'


import store1 from './store1'
import store2 from './store2'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		store1,
		store2
	}
});