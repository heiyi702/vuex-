<template>
  <div class="hello">
  	
  	<div class="con getter">
  		<div class="item">
	  		<p>方法1：template中直接写入---->{{fun7}}</p>
	  		<p>get处理后的state---->{{$store.getters.STATE_GET}}</p>
	  		<p>get处理后的state.info---->{{$store.getters.NUB_GET}}</p>
	  		<p>get处理后的state.nub---->{{$store.getters.INFO_GET}}</p>
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
    	fun7:'{{$store.getters.STATE_GET}}',
    }
  },
  computed:{
	/*	
	 * 映射getter 混合写法慎用 
 	 * ...mapGetters(['STATE_GET','NUB_GET','INFO_GET'])
	 * ...mapGetters([{getState:'STATE_GET'}, 'NUB_GET', 'INFO_GET'])
	*/
		...mapGetters({getState:'STATE_GET',INFO_GET:'INFO_GET',NUB_GET:'NUB_GET'})
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
