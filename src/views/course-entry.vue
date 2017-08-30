<template>
  <section>
    <div class="container">
      <div class="avatar-group">
        <avatar-img class="avatar" src="/static/logo.png"></avatar-img>
        <span>Zeo</span>
      </div>
      <div class="course-image">
        <img src="/static/course.png">
      </div>
      <div class="course-name">
        <span>ZeoZeoZeoZeoZeoZeo</span>
      </div>
      <div class="dash-line">
        <img src="../assets/dash-line.svg">
      </div>
      <div class="input-title">
        <span>输入您的专属兑换码</span>
      </div>
      <div class="input-group" ref="inputs">
        <div class="input-cell">
          <input type="number" v-model="inputs[0]">
        </div>
        <div class="input-cell">
          <input type="number" v-model="inputs[1]">
        </div>
        <div class="input-cell">
          <input type="number" v-model="inputs[2]">
        </div>
        <div class="input-cell">
          <input type="number" v-model="inputs[3]">
        </div>
      </div>
      <div class="confirm-group">
        <div class="confirm-button" @click=""><span>立即兑换</span></div>
      </div>
    </div>
    <img src="../assets/entry-envelop-back.svg" class="envelop-back">
    <img src="../assets/entry-envelop.svg" class="envelop-front">
  </section>
</template>

<script>
  import AvatarImg from "../components/avatar-img.vue";
  import Vue from "vue";

  export default {
    components: {AvatarImg},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        inputs: [null, null, null, null]
      }
    },
    mounted() {

      var watchIndex = function (index) {
        this.$watch(
          function () {
            return this.inputs[index]
          },
          function (val, oldVal) {
            if (val && val != oldVal && 0 <= parseInt(val) <= 9) {
              switchFocus.call(this, index);
            }
          })
      };

      var switchFocus = function (index) {
        if (0 <= index < 3) {
          this.$refs.inputs.querySelectorAll(".input-cell input").item(index + 1).focus();
        }
        if (index === 3) {
          this.$refs.inputs.querySelectorAll(".input-cell input").item(3).blur();
        }
      };

      watchIndex.call(this, 0);
      watchIndex.call(this, 1);
      watchIndex.call(this, 2);

    },
  }
</script>

<style scoped lang="scss">

  section {
    position: relative;
    top: 0;
    display: block;
    width: 100%;
    height: 100vh;
    background: rgb(243, 243, 244);

    .container {
      display: block;
      margin: 0 27.5px 0 27.5px;
      position: relative;
      top: 33.5px;
      width: calc(100% - 55px);
      height: calc(100vh - 33.5px);
      background: white;
      border-radius: 3px;
      z-index: 2;
    }
  }

  .avatar-group {
    display: block;
    position: relative;
    top: 16.5px;
    height: 24px;

    .avatar {
      display: inline-block;
      width: 24px;
      height: 24px;
      line-height: normal;
    }
    span {
      display: inline-block;
      position: relative;
      top: -5px;
      margin-left: 6px;
      font-size: 18px;
      height: 24px;
      font-weight: 800;
    }
  }

  .course-image {
    margin: 36.5px 35px 8px 35px;
    width: calc(100% - 70px);
    img {
      display: inline-block;
      width: 100%;
    }
  }

  .course-name {
    font-size: 18px;
    font-weight: 800;
  }

  .dash-line {
    margin-top: 42px;
    margin-bottom: 24px;
    img {
      width: 100%;
    }
  }

  .input-title {
    font-size: 14px;
    color: #C3C7C9;
  }

  .input-group {
    display: flex;
    margin: 12px 40px 35px 40px;
    width: calc(100% - 80px);
    height: 45px;
    flex-direction: row;
    justify-content: space-between;
    .input-cell {
      display: block;
      border: 2px solid #3A3434;
      width: 45px;
      height: 45px;
      input {
        display: block;
        position: relative;
        top: calc(50% - 15px);
        left: 6px;
        border: none;
        overflow: auto;
        outline: none;
        font-size: 18px;
        font-weight: 800;
        width: 10px;
        height: 25px;
        color: #3A3434;
      }
    }
  }

  .confirm-group {
    width: 100px;
    margin: 0 auto;
    .confirm-button {
      background: #3A3434;
      width: 100px;
      height: 35px;
      text-align: center;
      border-radius: 3px;
      span {
        display: inline-block;
        font-size: 12px;
        line-height: 35px;
        color: white;
      }

    }

  }

  .envelop-back {
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  .envelop-front {
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 3;
  }

</style>
