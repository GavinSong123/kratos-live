<template>
  <section>
    <comment-panel></comment-panel>
    <hr>
    <!--<comment avatarUrl="http://s.amazeui.org/media/i/demos/pure-1.jpg">-->
      <!--66666666666666666666666666666666666666666666666666666666666666666666666666666-->
    <!--</comment>-->
    <!--<comment avatarUrl="http://s.amazeui.org/media/i/demos/pure-1.jpg">-->
      <!--66666666-->
    <!--</comment>-->
    <!--<hr>-->
    <!--<message avatarUrl="http://47.92.148.177:8080/v1/img/group_qrcode/LUDXBugs/jpg" name="ZZB" title="牛逼">-->
      <!--<image-pod src="http://s.amazeui.org/media/i/demos/pure-1.jpg"></image-pod>-->
    <!--</message>-->
    <!--<hr>-->
    <!--<message avatarUrl="http://47.92.148.177:8080/v1/img/group_qrcode/LUDXBugs/jpg" name="ZZB" title="牛逼">-->
      <!--<audio-pod src="https://esonderegger.github.io/html5-audio-controls/audio/hello.mp3"></audio-pod>-->
    <!--</message>-->
    <!--<hr>-->
    <!--<message avatarUrl="http://47.92.148.177:8080/v1/img/group_qrcode/LUDXBugs/jpg" name="ZZB" title="牛逼">-->
      <!--<text-pod text="hellohellohellohellohellohellohellohellohellohellohellohello"></text-pod>-->
    <!--</message>-->
    <!--<hr>-->
    <!--<text-pod text="hello"></text-pod>-->
    <!--<text-pod text="hellohellohellohellohellohellohellohellohello"></text-pod>-->
    <!--<text-pod text="hellohellohellohellohellohellohellohellohellohellohellohello"></text-pod>-->
    <!--<text-pod>worldworldworldworldworldworldworldworldworldworldworld</text-pod>-->
    <!--<hr>-->
    <!--<audio-pod src="https://esonderegger.github.io/html5-audio-controls/audio/hello.mp3"></audio-pod>-->
    <!--<hr>-->
    <!--<image-pod src="http://s.amazeui.org/media/i/demos/pure-1.jpg"></image-pod>-->
  </section>
</template>

<script>
  import TextPod from '../components/text-pod.vue';
  import AudioPod from '../components/audio-pod.vue';
  import ImagePod from '../components/image-pod.vue';
  import Message from '../components/message.vue';
  import Comment from '../components/comment.vue';
  import CommentPanel from '../components/comment-panel.vue';

  export default {
    components: {TextPod, AudioPod, ImagePod, Message, Comment, CommentPanel},
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
