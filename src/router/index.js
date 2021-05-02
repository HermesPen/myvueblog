import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    }, {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/index',
          name: 'index',
          component: resolve => require(['@/pages/home'], resolve)
        }, {
          path: '/code',
          name: 'code',
          component: resolve => require(['@/pages/code'], resolve)
        }, {
          path: '/life',
          name: 'life',
          component: resolve => require(['@/pages/life'], resolve)
        }, {
          path: '/author',
          name: 'author',
          component: resolve => require(['@/pages/author'], resolve)
        },{
          path: '/aboutme',
          name: 'aboutme',
          component: resolve => require(['@/pages/aboutme'], resolve)
        }
      ]
    }
  ]
})
