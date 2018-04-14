import Vue from 'vue'
import Router from 'vue-router'
import Cont from '@/components/Cont'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'cont' }
    },
		{
  		path: '/cont',
  		name: 'cont',
  		component: Cont,
  	},
  ]
})
