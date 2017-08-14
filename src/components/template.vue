<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    props: [''],
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
    position: relative;
    display: block;
  }
</style>
