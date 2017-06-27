import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PlayGround from "../views/play-ground.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: PlayGround
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
