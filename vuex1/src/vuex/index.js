import Vue from 'vue'
import Vuex from 'vuex'
//调试插件  控制台打印
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const state={
	info:'我是state中的info',
	nub:1000
}

const mutations={
	JIA(state,payload){
		state.nub+=payload;
	},
	JIAN(state,payload){
		state.nub-=payload.n;
	}
}

const actions={
	JIA_ACT({commit},payload){
		commit('JIA',payload)
	},
	JIAN_ACT({commit},payload){
		commit('JIAN',payload)
	}
}

const getters={
	STATE_GET(state){
		return `====get====${JSON.stringify(state)}`
	},
	NUB_GET(state){
		return `====get====${state.nub}`
	},
	INFO_GET(state){
		return `====get====${state.info}`
	}
}

export default new Vuex.Store({
	//严格模式
	strict:true,
	//调试插件
	plugins: [createLogger()],
	state,
	mutations,
	getters,
	actions
});
