<template>
  <div class="hello">
  	
  	<div class="con mutation">
  		<h2>使用store中的mutations更改state</h2>
  		
  		<button @click="pageJian">-</button>
  		<span>{{state.nub}}</span>
  		<button @click="pageJia">+</button>
  		
	  	<div class="item">
	  		<p>方法1：不映射mutation中的function 直接调用 ------>this.$store.commit（‘方法名’,‘参数’） 
	</p>
				<img :src="fun3"/>
	  	</div>	
	  	
  	</div>
  	
  </div>
</template>

<script>
//1.引入store中的各项 名字均为默认名称 一般不做更改
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
	
export default {
  name: 'home',
  data () {
    return {
    	fun3:'static/mutation1.png',
    	fun4:'static/mutation2.png',
    	jianPayload:{
    		msg:'这是减少的function',
  			n:33
    	}
    }
  },
  /*
   * 2.组件的compute中映射出所需数据
  */
  computed:{
  	...mapState({
			state:state => state,  		
  		stateInfo:state => state.info,
  	}),
	/*	
	 * 映射getter 混合写法慎用 
 	 * ...mapGetters(['STATE_GET','NUB_GET','INFO_GET'])
	 * ...mapGetters([{getState:'STATE_GET'}, 'NUB_GET', 'INFO_GET'])
	*/
		...mapGetters({getState:'STATE_GET',INFO_GET:'INFO_GET',NUB_GET:'NUB_GET'})
  },
  methods:{
  	/*
  	 * mutation
  	 * 方法1.不映射出mutation中的function
  	 * 在cick事件中 直接调用mutations中定义的‘JIA/JIAN’;
  	 * mutations中定义的function名 一般为大写
  	 */
  	pageJia(){
  		this.$store.commit('JIA',3)
  	},
  	pageJian(){
		this.$store.commit('JIAN',this.jianPayload)
  	}
  },
  created(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
		border-bottom: 1px dashed #abcdef;
	}
}
span{
	padding: 10px 20px;
}
button{
	padding: 10px 15px;
}
</style>
