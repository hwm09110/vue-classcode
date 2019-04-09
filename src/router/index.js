import Vue from 'vue'
import Router from 'vue-router'
import Business from '../views/Business'
import Businessbystep from '../views/Businessbystep'
import Letter from '../views/Letter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/business',
      name: 'business',
      component: Business
    },
    {
      path: '/businessbystep',
      name: 'businessbystep',
      component: Businessbystep
    },
    {
      path: '/letter',
      name: 'letter',
      component: Letter
    }
  ]
})
