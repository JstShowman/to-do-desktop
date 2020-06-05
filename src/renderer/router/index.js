import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Theory',
      component: require('@/components/Theory').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
