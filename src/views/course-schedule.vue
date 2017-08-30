<template>
  <section>
    <div class = "image"><img src = "../assets/complete-medal.png"></div>
    <div class = "title">{{title}}</div>
    <div class = "description">{{description}}</div>
    <div class = "line"></div>
    <div class = "schedule"><img src = "../assets/schedule-subscribe-title.png"></div>
    <div class = "card-container">
      <div class = "card disable">
        <div class = "time">今天 15：00</div>
        <div class = "desc"><img src = "../assets/schedule-disable.png"></div>
      </div>
      <div class = "card">
        <div class = "time">今天 15：00</div>
        <div class = "desc">已有1246人预约</div>
      </div>
      <div class = "card selected">
        <div class = "time">今天 15：00</div>
        <div class = "desc">已有1246人预约</div>
        <div class="checked"><img src = "../assets/scedule-check.png"></div>
      </div>
    </div>
  </section>
</template>

<script>
  import * as API from '../util/api';

  export default {
    components: {},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        title: '',
        description: ''
      }
    },
    mounted() {
      API.get("/course/list/0").then(res => {
        this.title = res.data[0].courseName;
        this.description = res.data[0].description;
      });
    }
  }
</script>

<style scoped lang = "scss">
  section {
    display: block;
    width: 100%;
    height: 100%;
    background: white;
  }

  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .title {
    margin: 12px auto 0 auto;
    font-size: 18px;
    color: #3A3434;
  }

  .description {
    margin: 12px auto 0 auto;
    width: calc(100% - 40px);
    font-size: 14px;
    color: #686B6D;
  }

  .schedule {
    img {
      width: 116px;
    }
  }

  .line {
    margin: 12px auto;
    height: 1px;
    width: 200px;
    background: #E7EAEC;
  }

  .card-container {
    width: 87%;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .card {
      width: 43%;
      height: 60px;
      border-radius: 3px;
      border: solid 1px #3A3434;
      margin-top: 30px;
      position: relative;
      .time {
        width: 86px;
        height: 20px;
        font-size: 14px;
        color: #E0B190;
        margin: 12px auto 2px auto;
      }
      .desc {
        height: 15px;
        margin: 0 auto;
        font-size: 9px;
        color: #34110B;
        img {
          width: 76px;
        }
      }
    }
    .card.disable{
      border: dashed 1px #3A3434;
    }
    .card.selected{
      .checked {
        img {
          position: absolute;
          top: -9px;
          right: -9px;
          z-index: 1;
          width: 18px;
        }
      }
    }
  }

</style>
