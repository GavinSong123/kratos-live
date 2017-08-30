<template>
  <section>
    <div class="header-container">
      <img src="../assets/my-course.svg" alt=""/>
      <span class="title">10天进阶PPT超级无敌高手</span>
      <button class="view-detail">查看详情</button>
      <span class="progress">完成进度：</span>
      <div class="progress-bar">
        <div class="progress-bar-rate"></div>
      </div>
      <span class="rate">3/10</span>
    </div>

    <div class="customize-container">
      <div class="customize-message">
        <div class="circle-icon"></div>
        你可预约定制第3节课课程时间
      </div>

      <button class="customization">定制</button>
    </div>

    <ul class="course-list">
      <li class="course">
        <div class="img">
          <img src="../assets/my-course-1.svg"/>
        </div>
        <div class="detail">
          <div class="title">
            <span>PPT突破第 1 堂课：爱的抱抱</span>
            <div>未预约</div>
          </div>
          <div class="time">课程开始时间：3月29日 20：00</div>
        </div>
      </li>
      <li class="course">
        <div class="img">
          <img src="../assets/my-course-1.svg"/>
        </div>
        <div class="detail">
          <div class="title">
            <span>PPT突破第 1 堂课：爱的抱抱</span>
            <div>未预约</div>
          </div>
          <div class="time">课程开始时间：3月29日 20：00</div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    components: {},
    data () {}
  }
</script>

<style scoped lang="scss">
  section {
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
    padding-top: 80px;

    .header-container {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      color: #fff;
      img {
        width: 100%;
        height: 20%;
      }

      .title {
        position: absolute;
        left: 16px;
        top: 30px;
        font-size: 18px;
      }

      .view-detail {
        height: 18px;
        position: absolute;
        right: 16px;
        top: 30px;
        border: 1px #979797 solid;
        color: #d8d8d8;
        font-size: 9px;
        background: transparent;
        border-radius: 5px;
        outline: none;
      }

      .progress {
        position: absolute;
        left: 16px;
        top: 103px;
        font-size: 12px;
      }

      .progress-bar {
        width: 236px;
        height: 6px;
        position: absolute;
        top: 109px;
        left: 78px;
        background: #fff;
        border-radius: 3px;

        .progress-bar-rate {
          background: #e0b190;
          width: calc(236px * 0.3);
          height: 6px;
          border-radius: 3px;
        }
      }

      .rate {
        position: absolute;
        top: 103px;
        left: 331px;
        font-size: 12px;
      }
    }

    .customize-container {
      position: absolute;
<<<<<<< HEAD
      top: 22.5%;
=======
      top: 20%;
>>>>>>> 6846f8a... add my-course page
      width: 100%;
    }
    .customize-message {
      position: absolute;
      left: 16px;
      width: 199px;
      height: 24px;
      border: 2px #000 solid;
      border-radius: 12px;
      font-size: 12px;
      line-height: 24px;

      .circle-icon {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #000;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .customization {
      position: absolute;
      right: 16px;
      width: 49px;
      height: 24px;
      border: 2px #e0b190 solid;
      color: #e0b190;
      font-size: 12px;
      border-radius: 12px;
      background: transparent;
      outline: none;
    }

    .course-list {
      position: absolute;
<<<<<<< HEAD
      top: 25%;
=======
      top: 22.5%;
>>>>>>> 6846f8a... add my-course page
      list-style: none;
      padding-left: 0;
      background: #fff;
      width: 100%;

      .course {
        height: 75px;
        border-bottom: 2px #e7eaec solid;
        .img {
          position: absolute;
          transform: scale(0.6);
        }
        .detail {
<<<<<<< HEAD
          padding-left: 60px;
=======
          padding-left: 40px;
>>>>>>> 6846f8a... add my-course page
          padding-top: 15px;
          text-align: left;
          display: inline-block;
          .title {
            color: #686b6d;
            float: left;
            font-size: 16px;
            display: inline-flex;
            > div {
              width: 40px;
              height: 20px;
              background: #e0b190;
              color: #fff;
              font-size: 12px;
              border-radius: 5px;
              text-align: center;
              padding-top: 4px;
              margin-left: 3px;
              margin-right: 12px;
            }
          }
          .time {
            color: #9b9b9b;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>