<template>
  <section>
    <div class="avatar-container">
      <img :src="avatarUrl">
    </div>
    <div class="content-container">
      <div class="title-container">
        <span class="name">{{name}} </span>
        <span class="title">{{title}}</span>
      </div>
      <div class="message-container">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

    props: ['title', 'name', 'avatarUrl'],

    data(){
      return {}
    },
    methods: {},
    mounted(){

    }
  }
</script>

<style scoped lang="scss">

  section {
    position: relative;
    display: block;
    /*max-width: 343px;*/
    padding: 0;
    text-align: left;
    & > * {
      vertical-align: top;
    }
  }

  .avatar-container {
    display: inline-block;
    width: 38px;
    height: 38px;
    border-radius: 19px;
    overflow: hidden;
    img {
      width: 38px;
      height: 38px;
    }
  }

  .content-container {
    display: inline-block;
    margin-left: 8px;

  }

  .title-container {
    display: block;
    font-size: 11px;
    .name {
      color: #686B6D;
    }
    .title {
      color: #E0B190;
    }
  }

  div.message-container {
    display: block;
    max-width: 100%;
    margin: 7px auto 0 0;
  }

</style>
