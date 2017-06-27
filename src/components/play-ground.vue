<template>
  <section>
    <text-pod text="hello"></text-pod>
    <text-pod text="hellohellohellohellohellohellohellohellohello"></text-pod>
    <text-pod text="hellohellohellohellohellohellohellohellohellohellohellohello"></text-pod>
    <text-pod>worldworldworldworldworldworldworldworldworldworldworld</text-pod>
    <audio-pod src="https://esonderegger.github.io/html5-audio-controls/audio/hello.mp3"></audio-pod>
  </section>
</template>

<script>
  import TextPod from './text-pod.vue';
  import AudioPod from './audio-pod.vue';

  export default {
    components: {TextPod, AudioPod},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  h {
    background: yellow;
  }
</style>
