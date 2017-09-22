import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ppc from '@/components/PPC'

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