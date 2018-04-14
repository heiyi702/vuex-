<template>
  <div class="hello">
  	
  	<div class="con action">
  		<button @click="actionJian">-</button>
  		<span>{{state.nub}}</span>
  		<button @click="actionJia">+</button>
	  	
	  	<div class="item border0">
	  		<p>方法2：</p>
				<p>1 先引入action</p>
				<p>2 映射出所需方法</p>
				<p>3 事件中调用</p>
				<img :src="fun6"/>
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
    	fun5:'../static/act1.png',
    	fun6:'../static/act2.png',
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
  	 * 方法2.映射Actions
  	 * 映射写法分三种
  	 * 第二种有时报错 原因不明慎用
		 * ...mapActions(['JIA_ACT','JIAN_ACT']),
		 * ...mapActions([{add:'JIA_ACT'},'JIAN_ACT']),
		 * ...mapActions({add:'JIA_ACT',JIAN_ACT:'JIAN_ACT'}),
		*/
		...mapActions({add:'JIA_ACT',JIAN_ACT:'JIAN_ACT'}),
  	actionJia(){
			this.add(3)
  	},
  	actionJian(){
			this.JIAN_ACT(this.jianPayload)
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
