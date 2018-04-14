<template>
  <div class="hello">
  	
  	<div class="con action">
  		
  		<button @click="actionJian">-</button>
  		<span>{{state.nub}}</span>
  		<button @click="actionJia">+</button>
  		
	  	<div class="item">
	  		<p>方法1：不映射action中的function 直接调用 ------>this.$store.dispatch('方法名','参数')
	</p>
				<img :src="fun5"/>
	  	</div>	
	  	
  	</div>
  	
  </div>
</template>

<script>
//1.引入store中的各项 名字均为默认名称 一般不做更改
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
	
export default {
  name: 'act1',
  data () {
    return {
    	fun5:'static/act1.png',
    	fun6:'static/act2.png',
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
  },
  methods:{
  	/*
  	 * Actions
  	 * 方法1.不映射出actions
  	 * 在cick事件中 直接调用mutations中定义的‘JIA/JIAN’;
  	 * Actions中定义的function名 一般为大写
  	 */
  	actionJia(){
  		this.$store.dispatch('JIA_ACT',3)
  	},
  	actionJian(){
			this.$store.dispatch('JIAN_ACT',this.jianPayload)
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
	}
}
span{
	padding: 10px 20px;
}
button{
	padding: 10px 15px;
}
</style>
