<template>
	<div>
		<div class="con">
			<h2>模块一(mutation) 初始值：0</h2>
			<button @click="jian">-</button>
			<p>numb1&nbsp;&nbsp;&nbsp; -----&nbsp;&nbsp;&nbsp; {{numb1}}</p>
			<p>$store.state.store1.nub&nbsp;&nbsp;&nbsp; ------&nbsp;&nbsp;&nbsp; {{$store.state.store1.nub}}</p>
			<p>getN1&nbsp;&nbsp;&nbsp; -----&nbsp;&nbsp;&nbsp; {{getN1}}</p>
			<p>this.$store.getters['store1/getnub']&nbsp;&nbsp;&nbsp; -----&nbsp;&nbsp;&nbsp; {{this.$store.getters['store1/getnub']}}</p>
			<button @click="jia">+</button>
		</div>
		<hr />
		<div class="con">
			<h2>模块二(mutation) 初始值：1000</h2>
			<button @click="jian2">-</button>
			<p>numb2&nbsp;&nbsp;&nbsp; ----&nbsp;&nbsp;&nbsp; {{numb2}}</p>
			<p>$store.state.store2.nub&nbsp;&nbsp;&nbsp; -------&nbsp;&nbsp;&nbsp; {{$store.state.store2.nub}}</p>
			<p>getN2&nbsp;&nbsp;&nbsp; -----&nbsp;&nbsp;&nbsp; {{getN2}}</p>
			<p>this.$store.getters['store2/getnub']&nbsp;&nbsp;&nbsp; -----&nbsp;&nbsp;&nbsp; {{this.$store.getters['store2/getnub']}}</p>
			<button @click="jia2">+</button>
		</div>
		<div class="con">
			<h2>模块三(action) 初始值：0</h2>
			<button @click="jian3">-</button>
			<p>numb1&nbsp;&nbsp;&nbsp; -----&nbsp;&nbsp;&nbsp; {{numb1}}</p>
			<p>$store.state.store1.nub&nbsp;&nbsp;&nbsp; ------&nbsp;&nbsp;&nbsp; {{$store.state.store1.nub}}</p>
			<p>getN1&nbsp;&nbsp;&nbsp; -----&nbsp;&nbsp;&nbsp; {{getN1}}</p>
			<p>this.$store.getters['store1/getnub']&nbsp;&nbsp;&nbsp; -----&nbsp;&nbsp;&nbsp; {{this.$store.getters['store1/getnub']}}</p>
			<button @click="jia3">+</button>
		</div>
		<hr />
		<div class="con">
			<h2>模块四(action) 初始值：1000</h2>
			<button @click="jian4">-</button>
			<p>numb2&nbsp;&nbsp;&nbsp; ----&nbsp;&nbsp;&nbsp; {{numb2}}</p>
			<p>$store.state.store2.nub&nbsp;&nbsp;&nbsp; -------&nbsp;&nbsp;&nbsp; {{$store.state.store2.nub}}</p>
			<p>getN2&nbsp;&nbsp;&nbsp; -----&nbsp;&nbsp;&nbsp; {{getN2}}</p>
			<p>this.$store.getters['store2/getnub']&nbsp;&nbsp;&nbsp; -----&nbsp;&nbsp;&nbsp; {{this.$store.getters['store2/getnub']}}</p>
			<button @click="jia4">+</button>
		</div>
		<hr />
		<div class="con">
			<h2>state、getters使用方法</h2>
			<h3>不映射直接使用</h3>
			<p>state：{{fun1}}</p>
			<p>getters：{{fun2}}</p>
			<h3>mapState、mapGetters映射方法</h3>
			<img :src="mg"/>
		</div>
		<div class="con">
			<h2>Mutations使用方法</h2>
			<img :src="mu"/>
		</div>
		<div class="con">
			<h2>Actions使用方法</h2>
			<img :src="mu"/>
		</div>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const mapActions2 = createNamespacedHelpers('store2').mapActions
const mapActions1 = createNamespacedHelpers('store1').mapActions

import {mapState,mapMutations,mapGetters} from 'vuex'
import * as Types1 from '../vuex/store1/mutation-types'
import * as Types2 from '../vuex/store2/mutation-types'

export default{
	data(){
		return {
			mg:'../static/mg.png',
			mu:'../static/mu.png',
			act:'../static/act.png',
			fun1:`{{$store.state.模块名称.state中的key}}`,
			fun2:`{{this.$store.getters['模块名称/方法名']}}`,
		}
	},
	computed:{
		...mapState({
			numb1:state=>state.store1.nub,
			numb2:state=>state.store2.nub
		}),
		...mapGetters({
			getN1:'store1/getnub',
			getN2:'store2/getnub',
		})
	},
	created(){
	},
	methods:{
	  	//mutation映射
	  	...mapMutations([Types1.JIA,Types1.JIAN,Types2.JIA,Types2.JIAN]),
	  	jia(){
	  		this[Types1.JIA](1)
	  	},
	  	jian(){
	  		this[Types1.JIAN](1)
	  	},
	  	jia2(){
	  		this[Types2.JIA](20)
	  	},
	  	jian2(){
	  		this[Types2.JIAN](20)
	  	},
	  	//action映射 
	  	...mapActions1({addAct1:'JIA_ACT',minusAct1:'JIAN_ACT'}),
	  	...mapActions2({addAct2:'JIA_ACT',minusAct2:'JIAN_ACT'}),
	  	jia3(){
	  		this.addAct1(3)
	  	},
	  	jian3(){
	  		this.minusAct1(33)
	  	},
	  	jia4(){
	  		this.addAct2(10)
	  	},
	  	jian4(){
	  		this.minusAct2(30)
	  	},
	}
}
</script>

<style scoped lang="less">
	.back{
		background: #ccc;
	}
	.con{
		margin-top: 50px;
	}
	span{
		padding: 0 50px;
	}
	button{
		padding: 0 15px;
	}
</style>