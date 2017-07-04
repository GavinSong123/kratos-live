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
      <div v-if="message" class="message-container">
        <text-pod v-if="message.type == 'word'">{{message.resources}}</text-pod>
        <image-pod v-if="message.type == 'pic'" :src="message.resources"></image-pod>
        <audio-pod v-if="message.type == 'sound'" :src="message.resources"></audio-pod>
      </div>
      <div v-if="!message" class="message-container">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
  import TextPod from '../components/text-pod.vue';
  import AudioPod from '../components/audio-pod.vue';
  import ImagePod from '../components/image-pod.vue';
  import Message from '../components/message.vue';

  export default {
    components: {TextPod, AudioPod, ImagePod, Message},

    props: ['title', 'name', 'avatarUrl', 'message'],

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
