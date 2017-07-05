<template>
  <section>
    <div class="main-scroll" ref="scroll">
      <div class="course-info-header">
        <div class="title">PPT突破第 1 堂课：爱的抱抱</div>
        <div class="info">距开播： <span class="time">2小时30分</span></div>
      </div>
      <div class="messages-scroll">
        <div class="message" v-for="message in messages">
          <message :title="message.teacher.title" :name="message.teacher.name"
                   :avatarUrl="message.teacher.avatar" :message="message" v-on:mounted="scrollToCurrent"></message>
        </div>
        <div class="bottom-hint" v-if="isLastMessageLoaded">直播结束</div>
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
        isLastMessageLoaded: false
      }
    },

    methods: {
      step(){
        // 1. load messages before curTime, lazy load manner
        this.loadMessages();
        // 2. get next , if null , return
        let nextMessage = this.getNextMessage();
        if (!nextMessage) {
          this.onLastMessageLoaded();
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
        this.messages.push(...needLoad);
//        if (needLoad.length > 0) {
//          this.scrollToCurrent();
//        }
      },

      scrollToCurrent(){
        console.log(this.$refs.scroll.scrollTop);
        console.log(this.$refs.scroll.scrollHeight);
        this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight + 20;
      },

      getNextMessage(){
        return this.scriptSource[this.messages.length];
      },

      onLastMessageLoaded(){
        this.isLastMessageLoaded = true;
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

  .main-scroll {
    display: block;
    overflow: scroll;
    height: 667px;
  }

  .course-info-header {
    background: white;
    height: 144px;
    padding-top: 62px;
    .title {
      color: #3A3434;
      font-size: 18px;
      font-weight: 500;
    }
    .info {
      width: 165px;
      margin: 12px auto;
      color: #3A3434;
      font-size: 14px;
      font-weight: 500;
      padding: 4px;
      border-radius: 18px;
      border: solid 1px #3A3434;
    }
    .time {
      color: #E0B190;
      font-weight: 500;
    }
  }

  .messages-scroll {
    padding: 16px 17px;
    background: rgb(240, 240, 241);
    min-height: 523px;
    .message {
      margin: 16px 0;
    }
    .message:first-child {
      margin: 0 0 16px 0;
    }

    .bottom-hint {
      text-align: center;
      height: 25px;
      width: 100%;
      background: #E7EAEC;
      color: #686B6D;
      font-size: 12px;
      line-height: 25px;
    }
  }

</style>
