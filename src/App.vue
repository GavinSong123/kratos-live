<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import "normalize.css"
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 63px;*/
  }
  div {
    box-sizing: border-box;
  }

  #app {
    display: block;
    width: 100%;
    height: 100vh;
    background: rgb(243, 243, 244);
  }

</style>
