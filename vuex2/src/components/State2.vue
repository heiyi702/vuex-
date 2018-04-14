<template>
  <div class="hello">
  	<div class="con state">
	  	<div class="item border0">
	  		<p>方法2：computed中映射出mapState---->
	  			<img :src="fun2"/>
	  		</p>
	  		<!--3 template中调用-->
	  		<p>完整state---->{{state}}</p>
	  		<p>state.info---->{{stateInfo}}</p>
	  		<p>state.nub---->{{state.nub}}</p>
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
    	fun1:'{{$store.state}}',
    	fun2:'../static/state1.png',
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
	padding: 5px 0 10px;
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
