<template>
  <section>
    <div class="messages-scroll" ref="scroll">
      <div class="message" v-for="message in messages">
        <message :title="message.title" :name="message.name"
                 :avatarUrl="message.teacher.avatar" :message="message"></message>
      </div>
    </div>
  </section>
</template>

<script>
  import TextPod from '../components/text-pod.vue';
  import AudioPod from '../components/audio-pod.vue';
  import ImagePod from '../components/image-pod.vue';
  import Message from '../components/message.vue';
  import mockScripts from '../mock/mock-script.json'

  export default {
    components: {TextPod, AudioPod, ImagePod, Message},
    data () {
      return {
        scriptSource: {},
        messages: [],
        durationTime: 0,
        startTime: 0,
        curTime: 0,
      }
    },
    methods: {
      step(){
        // 1. load messages before curTime, lazy load manner
        this.loadMessages();
        // 2. get next , if null , return
        let nextMessage = this.getNextMessage();
        if (!nextMessage) {
          return;
        }
        //3. put next step
        this.curTime += nextMessage.offset;
        setTimeout(this.step, nextMessage.offset);
        return;
      },

      loadMessages(){
        //1. get unloaded messages
        let loadedOffest = this.messages.reduce((acc, cur) => acc + cur.offset, 0);
        let curOffset = this.curTime - this.startTime;
        let accOffset = 0;
        let needLoad = this.scriptSource.filter(x => {
          accOffset += x.offset;
          return (loadedOffest < accOffset) && (accOffset <= curOffset);
        });

        //2 .add to messages to render view
        if(needLoad.length > 0) {
          this.scrollToCurrent();
        }
        this.messages.push(...needLoad);

      },

      scrollToCurrent(){
        console.log(this.$refs.scroll.scrollTop);
        console.log(this.$refs.scroll.scrollHeight);
        this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight;
      },

      getNextMessage(){
        return this.scriptSource[this.messages.length];
      }
    },
    mounted(){
      //this tree variables are only wire once
      this.scriptSource = mockScripts.messages.map(x => {
        x.teacher = mockScripts.teachers.find(y => y.id === x.teacherId);
        return x;
      });
      this.durationTime = this.scriptSource.reduce((acc, cur) => acc + cur.offset, 0);
      this.startTime = 0;

      this.curTime = 1000;
      this.step();
    }
  }
</script>

<style lang="scss">
  h {
    background: yellow;
  }
  .messages-scroll {
    display: block;
    overflow: scroll;
    height: 667px;
  }
</style>
