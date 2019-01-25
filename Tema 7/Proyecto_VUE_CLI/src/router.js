import Vue from 'vue'
import Router from 'vue-router'
import Notas from './views/Notas.vue'
import ElTiempo from './views/ElTiempo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Notas
    },
    {
      path: '/tiempo',
      name: 'tiempo',
      component: ElTiempo
    }
  ]
})
