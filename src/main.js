import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import { i18n } from './i18n'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('./pages/index.vue'), meta: { title: i18n.t('greeting') } },
    { path: '/about', component: () => import('./pages/about.vue') },
  ],
})

Vue.use(VueRouter)
new Vue({ el: '#app', router, render: h => h(App) })
