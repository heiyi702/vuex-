const mutations={
	JIA(state,payload){
		state.nub+=payload;
	},
	JIAN(state,payload){
		state.nub-=payload.n;
	}
}

export default mutations