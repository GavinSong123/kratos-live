<template>
  <section class="container">
    <div class="comments-scroll" v-if="ifShowComment">
      <div class="comment" v-for="comment in showedComments">
        <comment :avatarUrl="comment.avatar" :text="comment.content">
        </comment>
      </div>
    </div>
    <div class="action-sheet">
      <span class="info-bar" v-if="ifShowComment">{{commentCount}} 人气</span>
      <span class="action-button" v-if="ifShowComment" @click="ifShowComment = false">关</span>
      <span class="action-button" v-if="!ifShowComment" @click="ifShowComment = true">弹</span>
    </div>
  </section>
</template>

<script>
  import Comment from '../components/comment.vue';
  import mockComment from  "../mock/mock-comments.json"

  export default {
    components: {Comment},
    props: ['commentSource'],
    data () {
      return {
        comments: [],
        showedComments: [],
        commentCount: 3000,
        ifShowComment: true,
        durationTime: 0, //total time of script
        startTime: 0,
        curTime: 0,
      }
    },
    watch: {
      commentSource: function (val) {
        if (!!val && val.length) {
          this.durationTime = this.commentSource.reduce((acc, cur) => acc + cur.offset, 0);
          this.startTime = 0;
          this.curTime = 1000;
          this.step();
        }
      }
    },
    methods: {
      step(){
        // 1. load messages before curTime, lazy load manner
        this.loadMessages();
        // 2. if all loaded, if so, stop.
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
        //1. get unloaded comments
        let loadedOffest = this.comments.reduce((acc, cur) => acc + cur.offset, 0);
        let curOffset = this.curTime - this.startTime;
        let accOffset = 0;
        let needLoad = this.commentSource.filter(x => {
          accOffset += x.offset;
          return (loadedOffest < accOffset) && (accOffset <= curOffset);
        });

        //2 .add to comments to render view
        this.comments.push(...needLoad);
        this.commentCount += needLoad.length;
        //3. get showed
        this.getShowedComments();

      },

      getShowedComments(){
        if (this.comments.length > 6) {
          this.showedComments = this.comments.slice(this.comments.length - 6).reverse();
        } else {
          this.showedComments = this.comments.slice(0).reverse();
        }
      },

      getNextMessage(){
        //count user comment
        let userCount = this.comments.reduce((acc, cur) => {
          if (cur.type == "user") {
            return acc + 1;
          } else {
            return acc;
          }
        }, 0);
        return this.commentSource[this.comments.length - userCount];
      },

      submitComment(text){
        this.comments.push({
          "content": text,
          "offset": 0,
          "type": "user",
          "avatar": "http://img.mp.itc.cn/upload/20161008/e8fadf087de643e8862d2836d0a65bba_th.png"
        });
        this.commentCount += 1;
        this.getShowedComments();
      }

    },
    mounted(){
      //this tree variables are only wire once
//      this.commentSource = mockComment.comments;
    }
  }
</script>

<style lang="scss" scoped>
  section.container {
    display: block;
    position: relative;
    max-width: 152.5px;
    height: 252px;
  }

  div.comments-scroll {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    flex-wrap: nowrap;
    height: 205px;
    width: 152.5px;
    overflow: hidden;

    div.comment {
      display: block;
      margin-top: 5px;
    }
  }

  div.action-sheet {
    display: block;
    margin: 12px 0 0 16px;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 34px;
    max-width: 136px;
    border-radius: 17px;
    text-align: right;
    background: white;
    box-shadow: 0 0 4px 3px rgb(224, 226, 228);

    .info-bar {
      display: inline-block;
      /*margin: 0 5.5px 0 11.5px;*/
      margin-right: 5.5px;
      width: 85px;
      font-size: 16px;
      line-height: 34px;
      color: #686B6D;
    }

    .action-button {
      display: inline-block;
      height: 34px;
      width: 34px;
      border-radius: 17px;
      background: #3A3434;
      font-size: 16px;
      line-height: 34px;
      color: #E0B190;
      text-align: center;
    }
  }
</style>
