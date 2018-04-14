<template>
  <div class="hello">
  	
  	<div class="con action">
  		<h2>action.js文件内容</h2>
  		<img :src="actionImg"/>
  		<h2>使用action更改state</h2>
  		<nav>
  			<router-link tag="div" :to="{name:'action1'}">方法1</router-link>
  			<router-link tag="div" :to="{name:'action2'}">方法2</router-link>
  		</nav>
  		<router-view></router-view>
  		
  	</div>
  	
  </div>
</template>

<script>
//1.引入store中的各项 名字均为默认名称 一般不做更改
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
	
export default {
  name: 'action',
  data () {
    return {
    	actionImg:'../static/img3.png',
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
