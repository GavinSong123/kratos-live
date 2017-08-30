<template>
  <section>
    <div class="title-container">
      <span>{{title}}</span>
      <div v-if="isExpandable" class="button">
        <img v-if="!isExpanded" src="../assets/cell-expand-show.svg">
        <img v-if="isExpanded" src="../assets/cell-expand-hide.svg">
      </div>
    </div>
    <div class="content-container" v-if="isExpanded">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['title', "isExpandable"],
    data() {
      return {
        isExpanded: false
      }
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style scoped lang="scss">

  section {
    position: relative;
    display: block;
    width: 100%;
    margin: 15px 0;
    background: white;
  }

  .title-container {
    display: block;
    position: relative;
    width: 100%;
    height: 44px;
    text-align: left;
    box-shadow: 0 1px 0 0 #E7EAEC;

    span {
      display: inline-block;
      font-size: 14px;
      margin: 13px 9px;
      color: #3A3434;
      height: 18px;
      vertical-align: middle;
    }

    .button {
      display: inline-block;
      width: 5px;
      height: 18px;
      vertical-align: middle;
    }
  }

  .content-container {
    display: block;
    width: 100%;
    text-align: left;
    box-shadow: 0 1px 0 0 #E7EAEC;
  }

</style>
