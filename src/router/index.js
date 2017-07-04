import Vue from 'vue'
import Router from 'vue-router'
import PlayGround from "../views/play-ground.vue";
import TestMessagePanel from '../views/message-panel-test.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: TestMessagePanel
    },
    {
      path: '/hello',
      name: 'Hello',
      component: PlayGround
    },
    {
      path: '/test-panel',
      name: 'TestPanel',
      component: TestMessagePanel
    }
  ]
})
