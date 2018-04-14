<template>
  <div class="hello">
  	
  	<div class="con mutation">
  		<h2>使用store中的mutations更改state</h2>
  		
  		<button @click="pageJian">-</button>
  		<span>{{state.nub}}</span>
  		<button @click="pageJia">+</button>
  		
	  	<div class="item border0">
	  		<p>方法2：</p>
				<p>1 先引入mutations</p>
				<p>2 映射出所需方法</p>
				<p>3 事件中调用</p>
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
  computed:{
  	...mapState({
			state:state => state,  		
  		stateInfo:state => state.info,
  	}),
  },
  methods:{
  	/*
  	 * 方法2.mutation映射
  	 * 映射写法分三种
  	 * 第二种有时报错 原因不明慎用
		 * ...mapMutations(['JIA','JIAN']),
		 * ...mapMutations([{add:'JIA'},'JIAN']),
		 * ...mapMutations({add:'JIA',JIAN:'JIAN'}),
		*/
		...mapMutations({add:'JIA',JIAN:'JIAN'}),
//		...mapMutations([{add:'JIA'},'JIAN']),
  	pageJia(){
			this.add(3)
  	},
  	pageJian(){
			this.JIAN(this.jianPayload)
  	},
  	
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
