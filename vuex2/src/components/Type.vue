<template>
	<div class="hello">
  	<div class="con type">
  		<h2>type.js文件内容</h2>
  		<img :src="typeImg"/>
  		<h2>type用法</h2>
  		<div>
  			<button @click="typeJian">-</button>
  			<span>{{state.nub}}</span>
  			<button @click="typeJia">+</button>
  		</div>
	  	<img :src="type2"/>
  	</div>
  	
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
import * as Types from '../vuex/mutation-types'

export default {
	data () {
		return {
	    	typeImg:'../static/img5.png',
	    	type2:'../static/type.png',
	    	jianPayload:{
	    		msg:'这是减少的function',
	  			n:55
	    	}
	    }
	},
	computed:{
		...mapState({
			state:state=>state,
			nub:state=>state.nub
		})
	},
	methods:{
		...mapMutations([Types.JIA,Types.JIAN]),
		typeJia(){
			this[Types.JIA](5)
		},
		typeJian(){
			this[Types.JIAN](this.jianPayload)
		}
		
	}
}
</script>

<style scoped lang="less">
.border0{
	border: 0 !important;
}
.hello{
	padding-bottom: 50px;
}
.con{
	padding: 30px 0 15px;
	.item{
		width: 90%;
		margin: 0 auto;
		margin-top: 20px;
	}
}
span{
	padding: 10px 20px;
}
button{
	padding: 10px 15px;
}
</style>