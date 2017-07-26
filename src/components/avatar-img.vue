<template>
  <section>
    <img :src="src">
  </section>
</template>

<script>
  export default {

    props: ['src'],

    data() {
      return {}
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style scoped lang="scss">

  section {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #E7EAEC;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

</style>
