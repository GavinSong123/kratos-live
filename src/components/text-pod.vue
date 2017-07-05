<template>
  <section>
    <div class="pod-container">
    <span>
      {{text}}
      <slot></slot>
    </span>
    </div>
  </section>
</template>

<script>
  export default {

    props: ['text'],

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
    max-width: 295px;
    padding: 0;
    text-align: left;
  }

  div.pod-container {
    display: inline-block;
    max-width: 295px;
    overflow-wrap: break-word;
    margin: 0 auto 0 0;
    padding: 12px;
    border: 1px solid #E7EAEC;
    border-radius: 3px;
    background: white;
    color: #686B6D;
    font-size: 14px;
  }

</style>
