<template>
  <section>
    <div class="pod-container">
    <span>
      {{text}}
      <slot></slot>
    </span>
    </div>
    <div class="avatar-container">
      <img :src="avatarUrl">
    </div>
  </section>
</template>

<script>
  export default {

    props: ['text', 'avatarUrl'],

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
    padding: 0;
    text-align: right;
  }

  div.pod-container {
    display: inline-block;
    max-width: 127px;
    overflow-wrap: break-word;
    margin: 0 6px 0 auto;
    padding: 6px;
    border-radius: 4px;
    background: rgba(52, 52, 52, 0.6);
    color: white;
    font-size: 12px;
    text-align: left;
  }

  div.avatar-container {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
    margin: auto 0 -6px -5px;
    img {
      width: 20px;
      height: 20px;
    }
  }

</style>
