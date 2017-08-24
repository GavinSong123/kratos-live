<template>
  <section>
    <div class = "image"><img src = "../assets/complete-medal.png"></div>
    <div class = "title">{{courseInfo.courseName}}</div>
    <div class = "description">{{courseInfo.description}}</div>
    <div class = "line"></div>
    <div class = "schedule"><img src = "../assets/schedule-subscribe-title.png"></div>
    <div class = "card-container">
      <div v-for="(v, i) in courseInfo.openTime"
           @click="onSelect(i)"
           v-bind:class="[{'disable': courseInfo.states[i]==='disable'}, {'available': courseInfo.states[i]==='available'}, {'selected': courseInfo.states[i]==='selected'}, 'card']">
        <div class = "time">今天 {{v}}</div>
        <div class = "desc" v-if="courseInfo.states[i]!=='disable'">已有1246人预约</div>
        <div class = "desc" v-if="courseInfo.states[i]==='disable'" @click="onLookBack()"><img src = "../assets/schedule-disable.png"></div>
        <div class="checked" v-if="courseInfo.states[i]==='selected'">
          <img src = "../assets/scedule-check.png">
        </div>
      </div>
      <div v-for="(v, i) in courseInfo.openTime"
           v-bind:class="['available', {'selected': courseInfo.states[courseInfo.openTime.length + i]==='selected'}, 'card']"
           @click="onSelect(courseInfo.openTime.length + i)">
        <div class = "time">明天 {{v}}</div>
        <div class = "desc">已有1246人预约</div>
        <div class="checked" v-if="courseInfo.states[courseInfo.openTime.length + i]==='selected'">
          <img src = "../assets/scedule-check.png">
        </div>
      </div>
    </div>
    <img v-if="isSelect" src = "../assets/scedule-button.png" class="button" @click="onConfirm()">
    <img src = "../assets/schedule-toast.png" class="toast" v-if="isConfirm">
  </section>
</template>

<script>
  import * as API from '../util/api';

  export default {
    components: {},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        courseInfo: {},
        title: '',
        description: '',
        isConfirm: false,
        isSelect: false
      }
    },
    methods: {
      refreshCourseState(){
        this.courseInfo.states = [];
        this.courseInfo.openTime.forEach((x, i) =>{
          let date = new Date();
          let curTime = date.getHours() * 60 + date.getMinutes();
          let openTime = parseInt(x.split(":")[0]) * 60 + parseInt(x.split(":")[1]);
          console.log(curTime, openTime);
          if (curTime > openTime) {
            this.courseInfo.states[i] = 'disable';
          }else {
            this.courseInfo.states[i] = 'available';
          }
        })
      },
      onConfirm(){
        this.isConfirm = true;
        setTimeout(()=>{
//          this.$router.push('/course-detail');
        }, 2000);
      },
      onSelect(i){
        // tomorrow class can have higher index to present the state
        if (this.courseInfo.states[i] === 'available' || i > this.courseInfo.openTime.length - 1){
          //reset selected first
          this.courseInfo.states.map( (x, i) => {
            if(x === 'selected') {
              return i;
            }else {
              return -1;
            }
          }).forEach(x => {
            if (x!== -1){
              this.courseInfo.states[x] = 'available';
            }
          });
          this.courseInfo.states[i] = 'selected';
          this.isSelect = true;
        }
        this.$forceUpdate();
      },
      onLookBack(){
        this.$router.push({
          path: '/test-panel',
          query: {
            courseId: this.courseId
          }
        })
      }
    },
    mounted() {
      let courseId = this.$route.query.courseId;
      if (!!courseId) {
        API.get("/course/info/0/" + courseId).then(res => {
          this.courseInfo = res.data;
          //TODO: backend typo
          this.courseInfo.openTime = this.courseInfo.oepnTime;
          this.courseInfo.openTime = this.courseInfo.openTime.replace(/"/g, '');
          this.courseInfo.openTime = this.courseInfo.openTime.slice(1, -1).split(',');
//          console.log(this.courseInfo.openTime);
          this.refreshCourseState();
        });
      }
    }
  }
</script>

<style scoped lang = "scss">
  section {
    display: block;
    width: 100%;
    height: 100%;
    background: white;
  }

  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .title {
    margin: 12px auto 0 auto;
    font-size: 18px;
    color: #3A3434;
  }

  .description {
    margin: 12px auto 0 auto;
    width: calc(100% - 40px);
    font-size: 14px;
    color: #686B6D;
  }

  .schedule {
    img {
      width: 116px;
    }
  }

  .line {
    margin: 12px auto;
    height: 1px;
    width: 200px;
    background: #E7EAEC;
  }

  .card-container {
    width: 87%;
    display: flex;
    margin: 0 auto 90px auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .card {
      width: 43%;
      height: 60px;
      border-radius: 3px;
      border: solid 1px #3A3434;
      margin-top: 30px;
      position: relative;
      .time {
        width: 86px;
        height: 20px;
        font-size: 14px;
        color: #E0B190;
        margin: 12px auto 2px auto;
      }
      .desc {
        height: 15px;
        margin: 0 auto;
        font-size: 9px;
        color: #34110B;
        img {
          width: 76px;
        }
      }
    }
    .card.disable{
      border: dashed 1px #3A3434;
    }
    .card.selected{
      .checked {
        img {
          position: absolute;
          top: -9px;
          right: -9px;
          z-index: 1;
          width: 18px;
        }
      }
    }
  }

  .button {
    display: block;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
  }

  .toast {
    position: fixed;
    display: block;
    width: 120px;
    height: 120px;
    z-index: 3;
    left: calc(50% - 60px);
    top: calc(50vh - 60px);
    margin: 0 auto;
  }

</style>
