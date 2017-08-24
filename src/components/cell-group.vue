<template>
  <section class = "cell-group">
    <div class = "title-container" v-if = "title">
      <img src = "../assets/cell-title.svg">
      <span>{{title}}</span>
    </div>
    <div class = "title-container" v-if = "!title">
      <img src = "../assets/cell-title.svg">
      <slot name = "title"></slot>
    </div>
    <div class = "content-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['title'],
    data() {
      return {}
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style scoped lang = "scss">

  section.cell-group {
    position: relative;
    display: block;
    width: 100%;
    margin: 15px 0;
    background: white;
  }

  .title-container {
    display: block;
    width: 100%;
    height: 44px;
    text-align: left;
    box-shadow: 0 1px 0 0 #E7EAEC;
    position: relative;
    img {
      display: inline-block;
      margin: 13px 0 13px 17px;
      width: 5px;
      height: 18px;
      vertical-align: middle;
    }
    span {
      display: inline-block;
      font-size: 14px;
      margin: 13px 9px;
      color: #3A3434;
      height: 18px;
      vertical-align: middle;
      position: relative;
      top: 2px;
    }
  }

  .content-container {
    display: block;
    width: 100%;
    text-align: left;
    box-shadow: 0 1px 0 0 #E7EAEC;
  }

</style>
