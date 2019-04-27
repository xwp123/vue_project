import Vue from 'vue'
import Router from 'vue-router'
//import Index from './components/Index1/index.vue'
//import Sousuo from './components/Sousuo/Sousuo.vue'
//import Market from './components/Market/Market.vue'
//import Video from './components/Video/Video.vue'
//import My from './components/My/My.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component:() => import("./components/Index1/index.vue")
    },
     {
      path: '/index',
      component:() => import("./components/Index1/index.vue")
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component:() => import("./components/Sousuo/Sousuo.vue")
    },
    {
      path: '/market',
      name: 'market',
      component:() => import("./components/Market/Market.vue")
    },
    {
      path: '/video',
      name: 'video',
      component:() => import("./components/Video/Video.vue")
    },
    {
      path: '/my',
      name: 'my',
      component:() => {
      	return import("./components/My/My.vue")
      }
    }
    
    
    
  ]
})
