<template>
  <section>
    <img src = "../assets/pay-complete-header.png" class = "header">
    <img src = "../assets/pay-complete-footer.png" class = "footer" @click = "onClick()">
  </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      onClick() {
        this.$router.push({
          path: '/course-schedule',
          query: {
            courseId: 2
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
  }
  .footer {
    width: calc(100% - 60px);
    margin: 24px auto;
  }
</style>
