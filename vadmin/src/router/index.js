import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '../components/About.vue'
import Vadmin from '../components/Vadmin.vue'
import Add from '../components/Add.vue'
import Details from '../components/Detalls.vue'
import Edit from '../components/Edit.vue'




Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Vadmin',
      component: Vadmin
    },
    {
      path: '/ab',
      name: 'About',
      component: About
    },
    {
      path: '/ad',
      component: Add
    }
    ,
    {
      path: '/de/:id',
      component: Details
    }
    ,
    {
      path: '/edit/:id',
      component: Edit
    }
  ]
})
