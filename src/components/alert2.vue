<template>
  <div class="easy-alert" v-show="isShow2">
    <div class="animated tada">
      <p>
      <input type="text" class="form-control" v-model="participant" placeholder="receiver...">
        receive
      </p>
      <p>
      <input type="text" class="form-control" v-model="message" placeholder="message...">
        your message
      </p>      
      <p @click="goChat">
       Send
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    // isShow: false
    participant: '',
    message: ''
  }),
  mounted: function () {
    this.$nextTick(function () { });
  },
  methods: {
    hideAlert: function () {
      this.$store.commit('isShowAlert2', false);
    },
    goChat(){
      const messageObject = {
        participant: this.participant,
        message: this.message
      }
   //   this.$store.dispatch('send', messageObject) 
      this.$store.commit('SET_CHAT_PARTICIPANT', this.participant); // this can be also in senMessage action
      this.$store.commit('isShowAlert2', false);
   //   this.$router.push('chat')
    },    
  },
  computed: mapState({
    isShow2: state => state.isShow2,
  }),
}
</script>

<style>
.easy-alert {}

.easy-alert-hidden {
  display: none;
}

.easy-alert > div {
  width: 240px;
  height: 120px;
  background-color: #fff;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 10px;
  box-shadow: 1px 1px 20px #bbb;
}

.easy-alert > div > p {
  text-align: center;
  margin-bottom: 0;
  border-radius: 0 0 10px 10px;
}

.easy-alert > div > p:first-child {
  font-size: 20px;
  line-height: 80px;
  color: #1abc9c;
}

.easy-alert > div > p:last-child {
  border-top: 1px solid #ddd;
  line-height: 22px;
  padding: 9px 0;
  color: #fff;
  background-color: #1abc9c;
}
</style>
