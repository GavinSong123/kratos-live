<template>
  <section>
    <div class="pod-container">
      <span @click="!!totalSecond && onClick()">
        <img v-if="pristine || paused" src="../assets/play.svg">
        <img v-if="!paused && !pristine" src="../assets/pause.svg">
      </span>
      <img class="pristine-dot" v-show="pristine" src="../assets/red-dot.svg">
    </div>
    <div class="progress-indicator">
      {{leftSecond}}"
    </div>
    <audio ref="audio" controls="controls"
           @ended="onEnded" @durationchange="onDurationChange" @timeupdate="onTimeUpdate">
      <source :src="src" type="audio/mp3">
    </audio>
  </section>
</template>

<script>
  /**
   * reference: https://github.com/esonderegger/html5-audio-controls
   */
  export default {

    props: ['src'],

    data(){
      return {
        paused: true,
        pristine: true,
        curSecond: 0,
        totalSecond: 0,
        leftSecond: 0
      };
    },
    methods: {
      onClick(){
        console.log(this.$refs.audio.duration)
        this.pristine = false;
        this.paused = !this.paused;
        if (this.paused) {
          this.$refs.audio.pause();
        } else {
          this.$refs.audio.play();
        }
      },
      onEnded(){
        this.curSecond = 0;
        this.paused = true;
        this.leftSecond = Math.ceil(this.totalSecond);
      },
      onDurationChange(){
        if (!!this.$refs.audio.duration) {
          this.totalSecond = this.$refs.audio.duration;
          this.leftSecond = Math.ceil(this.totalSecond);
        }
      },
      onTimeUpdate(){
        this.curSecond = this.$refs.audio.currentTime;
        this.leftSecond = Math.ceil(this.totalSecond - this.curSecond)
      }
    },
    mounted(){
    }
  }
</script>

<style scoped lang="scss">

  section {
    position: relative;
    display: block;
    max-width: 295px;
    padding: 0;
    text-align: left;
  }

  div.pod-container {
    display: inline-block;
    position: relative;
    width: 100px;
    max-width: 100%;
    overflow-wrap: break-word;
    margin: 0 auto 0 0;
    padding: 12px;
    border: 1px solid #E7EAEC;
    border-radius: 3px;

    span img {
      width: 9px;
    }

    .pristine-dot {
      display: inline-block;
      position: absolute;
      width: 8px;
      top: 0;
      right: -20px;

    }
  }

  .progress-indicator {
    display: inline-block;
    font-size: 12px;
    position: relative;
    top: 0;
    left: 8px;

  }



  audio {
    display: none;
    source {
      display: none;
    }
  }

</style>
