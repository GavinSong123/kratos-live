<template>
  <section>
    <div class="header-container">
      <img src = "../assets/complete-header.png" class = "title">
    </div>

    <div class="content-container">
      <div class="content-1">Zeo, 恭喜你已完成</div>
      <div class="content-2">PPT突破第 01 堂课：爱的抱一抱，抱着妹妹上花轿</div>
      <div class="splitter">
        <img src = "../assets/complete-split-line.svg" >
      </div>
      <div class="notes">
        <img src = "../assets/complete-notes.png">
      </div>
    </div>

    <div class="footer">
      <img src = "../assets/detail-footer.png">
    </div>
    <div class="footer-button">
      <u>我的课表</u>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped lang="scss">
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
    }

    .content-container {
      display: block;
      margin: 0 auto;
      width: 310px;
      background: white;
      border-radius: 8px 8px 0px 0px;
      overflow:auto;
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
      .splitter{
        display: block;
        position: relative;
        width: 100%;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      .notes {
        margin: 5px auto;
        img {
          width: 265px;
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
    .footer-button {
      width: 52px;
      height: 16px;
      margin: 32px auto 0 auto;
      font-size: 12px;
      color: #F3F3F4;

    }
  }
</style>
