t<template>
  <section>
    <div class="control-header">
      <div class="list">
        <span>课表</span>
      </div>
      <div class="group" v-on:click="isExpanded = !isExpanded">
        <span>更多</span>
      </div>
      <div class="expand" v-if="isExpanded" v-on:click="isExpanded = false">
        <div class="expand-button" @click="onRefresh()">
          <img src="../assets/icon.svg">
          <span>刷新</span>
        </div>
        <div class="expand-button" @click="onScrollTop()">
          <img src="../assets/icon.svg">
          <span>去往顶部</span>
        </div>
        <div class="expand-button" @click="onScrollBottom()">
          <img src="../assets/icon.svg">
          <span>去往底部</span>
        </div>
      </div>
    </div>
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
    <div class="comment-panel">
      <comment-panel ref="commentPanel"></comment-panel>
    </div>
    <div class="comment-input">
      <img class="pre-icon" src="../assets/icon.svg">
      <textarea class="input" rows="2" type="text" autofocus v-model="input"></textarea>
      <span class="submit-button" @click="onSubmitClick()">发送</span>
    </div>
  </section>
</template>

<script>
  import TextPod from '../components/text-pod.vue';
  import AudioPod from '../components/audio-pod.vue';
  import ImagePod from '../components/image-pod.vue';
  import Message from '../components/message.vue';
  import mockScripts from '../mock/mock-script.json'
  import CommentPanel from '../components/comment-panel.vue';

  export default {
    components: {TextPod, AudioPod, ImagePod, Message, CommentPanel},
    data () {
      return {
        scriptSource: {},
        messages: [],
        durationTime: 0,
        startTime: 0,
        curTime: 0,
        isLastMessageLoaded: false,
        isExpanded: false,
        input: ''
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
      },

      scrollToCurrent(){
        this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight + 60;
      },

      getNextMessage(){
        return this.scriptSource[this.messages.length];
      },

      onLastMessageLoaded(){
        this.isLastMessageLoaded = true;
      },

      onRefresh(){
        window.location.reload();
      },

      onScrollTop(){
        this.$refs.scroll.scrollTop = 0;
      },

      onScrollBottom(){
        this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight + 60;
      },

      onSubmitClick(){
        this.$refs.commentPanel.submitComment(this.input);
        this.input='';
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

  .control-header {
    width: 100%;
    height: 121px;
    padding: 12px 17px 0 17px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    .list {
      background: white;
      text-align: center;
      display: inline-block;
      width: 75px;
      height: 34px;
      border-radius: 2px;
      box-shadow: 0 0 4px 3px rgb(224, 226, 228);
      margin-right: 12px;
      span {
        line-height: 34px;
        font-size: 14px;
        color: #3A3434;
      }
    }
    .group {
      background: white;
      text-align: center;
      display: inline-block;
      width: calc(100% - 92px);
      height: 34px;
      border-radius: 2px;
      box-shadow: 0 0 4px 3px rgb(224, 226, 228);
      span {
        line-height: 34px;
        font-size: 14px;
        color: #3A3434;
      }
    }

    .expand {
      display: flex;
      position: relative;
      flex-direction: row;
      justify-content: space-around;
      height: 64px;
      width: calc(100% - 92px);
      background: white;
      border-radius: 2px;
      box-shadow: 0 0 4px 3px rgb(224, 226, 228);
      margin-left: 92px;
      margin-top: 10px;
      padding: 12.5px 10px;

      .expand-button {
        display: block;
        width: 35px;
        img {
          display: block;
          width: 30px;
          height: 30px;
          margin: 0 auto 2.5px auto;
        }
        span {
          display: block;
          font-size: 8px;
          color: #686B6D;
        }
      }

      &::before {
        content: '';
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        top: -5px;
        left: calc(50% - 2.5px);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid white;
      }
    }

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
    padding: 16px 17px 75px 17px;
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

  div.comment-panel {
    position: fixed;
    bottom: 71px;
    right: 12px;
  }

  div.comment-input {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 59px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    box-shadow: 0 0 4px 3px rgb(224, 226, 228);

    .input {
      display: block;
      border: none;
      overflow: auto;
      outline: none;
      font-size: 16px;
      width: calc(100% - 114px);
      height: 45px;
      color: #686B6D;
    }

    .pre-icon {
      display: block;
      width: 21px;
      height: 21px;
    }

    .submit-button {
      display: block;
      width: 45px;
      height: 35px;
      text-align: center;
      color: white;
      font-size: 12px;
      line-height: 35px;
      background: #3A3434;
      border-radius: 3px;
    }
  }

</style>
