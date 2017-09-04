<template>
  <section>
    <div class="header-container">
      <img src = "../assets/complete-header.png" alt = "" class = "title">
    </div>

    <div class="content-container">
      <div class="content-1">Zeo, 恭喜你已完成</div>
      <div class="content-2">PPT突破第 01 堂课：爱的抱一抱，抱着妹妹上花轿</div>
      <div class="splitter">
        <div>获得 <strong>新人红包</strong></div>
        <img src = "../assets/detail-split-line.png" >
      </div>
      <div class="red-package">
        <img src = "../assets/complete-red-package.png">
        <div>*红包已下发至你的账户，可用于购买付费课程</div>
      </div>
      <div class="button" @click="onClick()">
        立刻预约第 2 节课上课时间
      </div>
    </div>

    <div class="footer">
      <img src = "../assets/detail-footer.png">
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
    },
    methods: {
      onClick() {
        this.$router.push('/pay-start');
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
        margin: 35px auto 0 auto;
        div {
          font-size: 14px;
          color: #686B6D;
          strong {
            color: #E0B190;
          }
        }
        img {
          position: absolute;
          top: 5px;
          left: calc(50% - 135px);
          width: 270px;
        }
      }
      .red-package {
        display: block;
        margin: 12px auto 0 auto;
        width: 200px;
        img {
          width: 150px;
          margin: 0 auto;
        }
        div {
          margin: 0 auto;
          font-size: 9px;
          color: #C3C7C9;
        }
      }
      .button {
        display: block;
        width: 185px;
        margin: 50px auto 30px auto;
        padding: 10px;
        height: 35px;
        border-radius: 3px;
        border: 1px #E0B190 solid;
        font-size: 12px;
        color: #E0B190;
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
