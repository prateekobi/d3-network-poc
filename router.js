import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/index';
import DeeThree from '@/pages/dee-three';

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { name: 'home-page', path: '/', component: HomePage },
      { name: 'd3-poc', path: '/d3', component: DeeThree}
    ]
  })
}