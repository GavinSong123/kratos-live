<template>
  <section>
    <div class="pod-container">
    <img :src="src"/>
    </div>
  </section>
</template>

<script>
  export default {

    props: ['src'],

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
    max-width: 100%;
    overflow-wrap: break-word;
    margin: 0 auto 0 0;
    padding: 12px;
    border: 1px solid #E7EAEC;
    border-radius: 3px;

    img {
      max-width: 100%;
    }
  }

</style>
