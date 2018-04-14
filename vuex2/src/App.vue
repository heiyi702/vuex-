<template>
  <div id="app">
  	<nav>
  		<router-link tag='div' :to='{name:"state1"}'>state</router-link>
  		<router-link tag='div' :to='{name:"mutation1"}'>mutation</router-link>
  		<router-link tag='div' :to='{name:"action1"}'>action</router-link>
  		<router-link tag='div' :to='{name:"getter1"}'>getter</router-link>
  		<router-link tag='div' :to='{name:"type"}'>mutation-type</router-link>
  	</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav{
	width: 80%;
	margin: 50px auto;
	display: flex;
	>div{
		padding: 10px 0;
		flex: 1;
		text-align: center;
		background: #ccc;
	}
	.active{
		background: #abcdef;
	}
}
</style>
