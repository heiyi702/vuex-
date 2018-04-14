import Vue from 'vue'
import Router from 'vue-router'

import State from '@/components/State'
import State1 from '@/components/State1'
import State2 from '@/components/State2'

import Mutation from '@/components/Mutation'
import Mutation1 from '@/components/Mutation1'
import Mutation2 from '@/components/Mutation2'

import Action from '@/components/Action'
import Action1 from '@/components/Action1'
import Action2 from '@/components/Action2'

import Getter from '@/components/Getter'
import Getter1 from '@/components/Getter1'
import Getter2 from '@/components/Getter2'

import Type from '@/components/Type'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect: { name: 'state1' }
  	},
  	{
  		path: '/type',
  		name: 'type',
      component: Type,
  	},
    {
      path: '/state',
      name: 'state',
      component: State,
      children:[
      	{
      		path:'state1',
      		name:'state1',
      		component: State1,
      	},
      	{
      		path:'state2',
      		name:'state2',
      		component: State2,
      	}
      ]
    },
    {
      path: '/mutation',
      name: 'mutation',
      component: Mutation,
      children:[
      	{
      		path:'mutation1',
      		name:'mutation1',
      		component: Mutation1,
      	},
      	{
      		path:'mutation2',
      		name:'mutation2',
      		component: Mutation2,
      	}
      ]
    },
    {
      path: '/action',
      name: 'action',
      component: Action,
      children:[
      	{
      		path:'action1',
      		name:'action1',
      		component: Action1,
      	},
      	{
      		path:'action2',
      		name:'action2',
      		component: Action2,
      	}
      ]
    },
    {
      path: '/getter',
      name: 'getter',
      component: Getter,
      children:[
      	{
      		path:'getter1',
      		name:'getter1',
      		component: Getter1,
      	},
      	{
      		path:'getter2',
      		name:'getter2',
      		component: Getter2,
      	}
      ]
    },
  ],
  linkActiveClass:'active',
  mode:'history'
})
