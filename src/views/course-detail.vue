<template>
  <section class = "host">
    <div class = "course-container">
      <img src = "../assets/detail-header.png">
      <h1>咖啡LIVE-10天PPT大神养成计划（一共10天，每天30分钟）</h1>
      <span>累计报名：23589人</span>
    </div>

    <cell-group class = "teacher-group" title = "导师介绍">
      <div class = "teacher-container">
        <avatar-img class = "img" src = "/static/logo.png"></avatar-img>
        <div class = "desc">
          <p>{{teacherDesc}}</p>
        </div>
      </div>
    </cell-group>

    <cell-group class = "detail-group" title = "课程介绍">
      <div class = "content">
        <p>本课程由BAT高级培训官耗时11个月倾力编写，结合大表姐及数十个同行对过往PPT经验的提炼，从基础培训到思维拓展，适用于职场菜鸟以及急需技能提升人群，用丰富经验指引职人避坑。</p>
        <br>
        <p>① 精心打磨的课程计划：</p>
        <p>科学易懂的教学大纲，由浅入深，从ppt基础知识到案例分析，不仅传授技巧，更启发ppt思维。用工作中的实战经验教授ppt速成秘诀。授人以鱼更授人以渔。</p>
        <img src = "../assets/detail-1.png">
        <p>② 及时方便的课堂体验：</p>
        <p>实时直播，一天多节，根据自己计划合理安排学习时间。</p>
        <p>职人社群，完备的知识分享系统，强大的人脉拓展工具。</p>
        <p>精华讲义，支持回看，易于保存精华知识，在工作中随学随用。</p>
        <img src = "../assets/detail-2.png">
        <p>半小时，10天，</p>
        <p>一杯咖啡的时间，</p>
        <p>和你一起玩转PPT！</p>
      </div>
    </cell-group>

    <cell-group class = "class-group" title = "课程安排">
      <div class = "cell" v-for = "course in courses">
        <cell isExpandable="true" :title="course.courseName">
          <div class="desc">
            {{course.description}}
          </div>
        </cell>
      </div>
    </cell-group>

    <cell-group class = "note-group" title = "课程须知">
      <div class = "content">
        <p class = "content">1.此课程为线上课程，不支持转让、退款。</p>
        <p class = "content">2.所有课程可及时预约、支持回放。</p>
        <p class = "content">3.第一节课程为免费试听课，喜欢的话，记得学习要持续哦！</p>
        <p class = "content">4.即刻购买课程可立即享xx元红包返现！优惠仅限推广期，不要错过哦！</p>
        <p class = "content">5.关注大表姐的咖啡live同名公众号，随时随地获取独家职场秘籍、课程干货，精彩的停不下来！</p>
      </div>
    </cell-group>

    <cell-group class = "count-group">
      <span slot = "title">已有<strong>23589</strong>人加入课程</span>
      <div class = "avatar-container">
        <div class = "avatar-img" v-for = "url in avatarImageUrlsSource">
          <avatar-img :src = "url"></avatar-img>
        </div>
      </div>
    </cell-group>

    <div class = "button-group">
      <div class = "button" @click="onFootButtonClick()">
        <span>立刻学习</span>
        <img src = "../assets/cell-expand-go.svg">
      </div>
    </div>

  </section>
</template>

<script>
  import AvatarImg from "../components/avatar-img.vue";
  import CellGroup from '../components/cell-group.vue'
  import Cell from '../components/cell.vue'
  import * as API from '../util/api';

  export default {
    components: {AvatarImg, CellGroup, Cell},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        "teacherDesc": "大表姐（Sis）\n" + " ·非重点院校毕业的职场小白到BAT高级培训官\n" + " ·职场摸爬滚打5年\n" + " ·苦练ppt成为职场竞争中的杀手锏\n" + " ·坚信工具的力量，希望能让更多人，把ppt踩在脚下",
        avatarImageUrlsSource: [],
        courses: []
      }
    },
    methods: {
      onFootButtonClick() {
        this.$router.push({
          path: '/course-schedule',
          query: {
            courseId: 1
          }
        });
      }
    },
    mounted() {
      for (let i = 0; i < 18; i++) {
        this.avatarImageUrlsSource.push('https://unsplash.it/' + (100 + i));
      }
      API.get('/course/list/0').then(d => {
        this.courses = d.data;
      })
    }
  }
</script>

<style scoped lang = "scss">

  section.host {
    display: block;
    background: rgb(243, 243, 244);
  }

  .content {
    padding: 12px 20px;
    p {
      font-size: 14px;
      line-height: 20px;
      width: 100%;
      color: #686B6D;
      display: block;
      padding: 0 0;
      margin: 0 2px;
      word-wrap: break-word;
    }
    img {
      display: block;
      width: 335px;
      margin: 18px auto;
    }
  }

  .course-container {
    width: 100%;
    position: relative;
    padding-bottom: 28px;
    background: white;
    box-shadow: 0 1px 0 0 #E7EAEC;
    > * {
      display: block;
      width: 100%;
    }
    img {
      width: 100%;
    }
    h1 {
      width: calc(100% - 32px);
      font-size: 18px;
      color: #3A3434;
      font-weight: 600;
      margin: 12px 16px;
    }
    span {
      font-size: 12px;
      color: #686B6D;
      position: absolute;
      bottom: 13.5px;
      right: 15.5px;
      text-align: right;
    }
  }

  .teacher-group {
    display: block;
    width: 100%;
    .teacher-container {
      margin-top: 12px;
      .img {
        display: inline-block;
        vertical-align: top;
        margin-left: 15px;
        width: 46px;
        height: 46px;
      }
      .desc {
        display: inline-block;
        vertical-align: top;
        width: calc(100% - 93px);
        margin-left: 15px;
        margin-right: 10px;
        font-size: 12px;
        color: #3A3434;
        p {
          display: inline-block;
          word-break: break-all;
          white-space: pre;
        }
      }
    }
  }

  .count-group {
    display: block;
    margin-bottom: 60px !important;
    .avatar-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;

      div.avatar-img {
        width: 40px;
        height: 40px;
        margin: 8px;
      }
    }
  }

  .class-group {
    strong {
      color: #ED5566;
    }
    .desc {
      margin: 11px 22px;
      font-size: 14px;
      line-height: 20px;
      color: #686B6D;
      display: block;
      padding: 0 0;
      word-wrap: break-word;
    }
  }

  .note-group {
    width: 100%;
  }

  .button-group {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #ED5566;
    .button {
      display: block;
      width: 120px;
      height: 60px;
      position: relative;
      top: 22px;
      vertical-align: middle;
      span {
        font-size: 18px;
        line-height: 18px;
        color: #F3F3F4;
        vertical-align: top;
      }
      img {
        display: inline-block;
        position: relative;
        top: -4px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        vertical-align: top;
      }
    }
  }
</style>
