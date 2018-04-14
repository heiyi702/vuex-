<template>
  <div class="hello">
  	<div class="con state">
  		<h2>state.js文件内容</h2>
  		<img :src="stateImg"/>
  		<h2>显示store中的state</h2>
  		<nav>
  			<router-link tag="div" :to="{name:'state1'}">方法1</router-link>
  			<router-link tag="div" :to="{name:'state2'}">方法2</router-link>
  		</nav>
  		<router-view></router-view>
	  	
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
    	stateImg:'../static/img1.png'
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
nav{
	width: 60%;
	margin: 20px auto 10px;
}
span{
	padding: 10px 20px;
}
button{
	padding: 10px 15px;
}
</style>
