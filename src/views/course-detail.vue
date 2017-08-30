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
        <div class = "content">
          <p>{{teacherDesc}}</p>
        </div>
      </div>
    </cell-group>

    <cell-group class = "detail-group" title = "课程介绍">

    </cell-group>

    <cell-group class = "class-group" title = "课程安排">
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
      <div class = "button">
        <span>立刻学习</span> <img src = "../assets/cell-expand-go.svg">
      </div>
    </div>

  </section>
</template>

<script>
  import AvatarImg from "../components/avatar-img.vue";
  import CellGroup from '../components/cell-group.vue'

  export default {
    components: {AvatarImg, CellGroup},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        "teacherDesc": "大表姐（Sis）\n" + " ·非重点院校毕业的职场小白到BAT高级培训官\n" + " ·职场摸爬滚打5年\n" + " ·苦练ppt成为职场竞争中的杀手锏\n" + " ·坚信工具的力量，希望能让更多人，把ppt踩在脚下",
        avatarImageUrlsSource: []
      }
    }
    , mounted() {
      for (let i = 0; i < 18; i++) {
        this.avatarImageUrlsSource.push('/static/logo.png');
      }
    }
  }
</script>

<style scoped lang = "scss">

  section.host {
    display: block;
    background: rgb(243, 243, 244);
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
      .content {
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
  }

  .note-group {
    width: 100%;
    .content {
      padding: 12px 20px;
      p {
        font-size: 14px;
        width: 100%;
        color: #686B6D;
        display: block;
        padding: 0 0;
        margin: 0 2px;
        word-wrap: break-word;
      }
    }
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
