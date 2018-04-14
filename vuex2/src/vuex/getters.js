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
export default getters