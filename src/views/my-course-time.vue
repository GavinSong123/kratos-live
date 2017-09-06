<template>
  <section>
    <div class="header-container">
      <span class="title">10天进阶PPT超级无敌高手</span>
      <button class="view-detail">查看详情</button>
      <span class="progress">完成进度：</span>
      <div class="progress-bar">
        <div class="progress-bar-rate"></div>
      </div>
      <span class="rate">3/10</span>
    </div>

    <div class="start-time">
      <div class="hint">距第 3 堂课程开始还有</div>
      <div class="time">0天2小时30分钟</div>
      <button class="edit">修改</button>
    </div>

    <ul class="course-list">
      <li class="course">
        <div class="img">
          <img src="../assets/my-course-1.svg"/>
        </div>
        <div class="detail">
          <div class="title">
            <span>PPT突破第 1 堂课：爱的抱抱</span>
            <div class="order-btn order">未预约</div>
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
            <div class="order-btn finish">已完成</div>
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
            <div class="order-btn end">已结束</div>
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
        data() {
        }
    }
</script>

<style scoped lang="scss">

  .header-container {
    display: block;
    height: 150px;
    width: 100%;
    color: #fff;
    background-image: url("../assets/my-course.svg");
    background-size: cover;

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
      top: 106px;
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

  .start-time {
    height: 109px;
    width: 100%;
    text-align: center;
    padding-top: 5px;

    > .hint {
      font-size: 12px;
      color: #9b9b9b;
      padding: 5px;
    }

    > .time {
      font-size: 24px;
      color: #3a3434;
      padding: 5px;
    }

    > .edit {
      height: 24px;
      border: 2px #e0b190 solid;
      color: #e0b190;
      font-size: 12px;
      border-radius: 12px;
      background: transparent;
      outline: none;
    }
  }

  .order-btn {
    height: 12px;
    color: #fff;
    font-size: 7px;
    border-radius: 3px;
    text-align: center;
    padding-top: 4px;
    margin-left: 3px;
    margin-right: 12px;
  }

  .course-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    background: #fff;
    height: 345px;
    width: 100%;

    .course {
      height: 75px;
      border-bottom: 2px #e7eaec solid;
      .img {
        position: absolute;
        transform: scale(0.6);
      }
      .detail {
        padding-left: 60px;
        padding-top: 15px;
        text-align: left;
        display: inline-block;
        .title {
          color: #686b6d;
          float: left;
          font-size: 16px;
          display: inline-flex;
          > .order {
            background: #e0b190;
          }

          > .finish {
            background: #d8d8d8;
          }

          > .end {
            background: #f53149;
          }
        }
        .time {
          color: #9b9b9b;
          font-size: 14px;
        }
      }
    }
  }
</style>