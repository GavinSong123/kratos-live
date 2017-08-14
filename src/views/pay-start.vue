<template>
  <section>
    <img src = "../assets/pay-start-header.png" class = "header">
    <img src = "../assets/pay-start-split.png" alt = "" class = "split">
    <div class="footer" @click="onClick()">
      <img v-if="payStep===0" src = "../assets/pay-start-footer-1.png">
      <img v-if="payStep===1" src = "../assets/pay-start-footer-2.png">
      <img v-if="payStep===2" src = "../assets/pay-start-footer-3.png">
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        payStep: 0
      }
    },
    methods: {
      onClick(){
        this.payStep++;
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
    padding-top: 10px;
    background: #3A3434;

    .header {
      display: block;
      margin: 0 auto;
      width: 307px;
      margin: 0 auto;
    }

    .split {
      position: fixed;
      width: 100%;
      bottom: 110px;
      left: 0;
      margin: 20px auto 0 auto;
    }

    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      img {
        width: 307px;
        margin: 0 auto;
      }
    }
  }
</style>
