<template>
  <section>
    <div class = "header-container">
      <img src = "../assets/complete-header.png" class = "title">
      <div class="id">
        <span>{{courseInfo.courseId}}</span>
      </div>
    </div>

    <div class = "content-container">
      <div class = "content-1">Zeo, 恭喜你已完成</div>
      <div class = "content-2">{{courseInfo.courseName}}</div>
      <div class = "content-3">课程完成时间：{{date}}</div>
      <div class = "notes">
        <img src = "../assets/complete-medal.png">
      </div>
    </div>

    <div class = "footer">
      <img src = "../assets/detail-footer.png">
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
        courseInfo: {},
        courseId: 1,
        date: ''
      }
    },
    mounted(){
      let date = new Date();
      this.date = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
      this.courseId = this.$route.query.courseId;
      if (!!this.courseId) {
        API.get("/course/info/0/" + this.courseId).then(res => {
          this.courseInfo = res.data;
        });
      }
    }
  }
</script>

<style scoped lang = "scss">
  section {
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
    padding-top: 80px;
    background: #3A3434;

    .header-container{
      display: block;
      position: absolute;
      top: 10px;
      left: calc(50% - 65px);
      img {
        width: 130px;
      }
      .id {
        position: absolute;
        top: 44px;
        width: 100px;
        left: calc(50% - 50px);
        span {
          display: block;
          margin: 0 auto;
          font-size: 40px;
          font-weight: bold;
          color: white;
        }
      }
    }


    .content-container {
      display: block;
      margin: 0 auto;
      width: 310px;
      background: white;
      border-radius: 8px 8px 0px 0px;
      overflow: auto;
      .content-1 {
        margin: 90px auto 0 auto;
        font-size: 14px;
        color: #E0B190;
      }
      .content-2 {
        margin: 15px 31px 0 31px;
        font-weight: bold;
        font-size: 18px;
        color: #3A3434;
      }
      .content-3 {
        margin: 6px auto;
        font-size: 12px;
        color: #C3C7C9;
      }
      .splitter {
        display: block;
        position: relative;
        width: 100%;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      .notes {
        margin: 40px auto 5px auto;
        img {
          width: 288px;
          margin: 0 auto;
        }
      }
    }

    .footer {
      margin: 0 auto;
      width: 311px;
      img {
        width: 100%;
      }
    }

  }
</style>
