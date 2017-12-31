import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import ppc from '@/pages/PPC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    }, {
      path: '/ppc',
      component: ppc
    }
  ]
})
