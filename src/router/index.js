import Vue from 'vue'
import Router from 'vue-router'
import Frist from '@/components/Frist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Frist
    }
  ]
})
