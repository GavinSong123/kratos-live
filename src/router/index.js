import Vue from 'vue'
import Router from 'vue-router'
import PlayGround from "../views/play-ground.vue";
import TestMessagePanel from '../views/message-panel-test.vue';
import CourseEntry from "../views/course-entry.vue";
import CourseDetail from "../views/course-detail.vue";
import CourseCompleteFirst from "../views/course-complete-first.vue";
import CourseCompleteOthers from "../views/course-complete-others.vue";
import CourseCompleteShare from "../views/course-complete-share.vue";
import PayStart from "../views/pay-start.vue";
import PayComplete from "../views/pay-complete.vue";
import CourseSchedule from "../views/course-schedule.vue";
import MyCourse from "../views/my-course.vue";

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
    },
    {
      path: '/course-entry',
      component: CourseEntry
    },
    {
      path: '/course-detail',
      component: CourseDetail
    },
    {
      path: '/course-complete-others',
      component: CourseCompleteOthers
    },
    {
      path: '/course-complete-first',
      component: CourseCompleteFirst
    },
    {
      path: '/course-complete-share',
      component: CourseCompleteShare
    },
    {
      path: '/pay-start',
      component: PayStart
    },
    {
      path: '/pay-complete',
      component: PayComplete
    },
    {
      path: '/course-schedule',
      component: CourseSchedule
    },
    {
      path: '/my-course',
      component: MyCourse
    }
  ]
})
