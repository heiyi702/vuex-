<template>
  <div class="hello">
  	
  	<div class="con getter">
  		<h2>展示getter处理后的state</h2>
  		<nav>
  			<router-link tag="div" :to="{name:'getter1'}">方法1</router-link>
  			<router-link tag="div" :to="{name:'getter2'}">方法2</router-link>
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
    }
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
	}
}
span{
	padding: 10px 20px;
}
button{
	padding: 10px 15px;
}
</style>
