<template>
<div class="chat">
  <div class="chat-header">
    <h1>Interviewr</h1>
  </div>
    <div class="content table-view easy-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">

  <div class="chat-history" v-for="result in results">
<ul> 
      <li class="chat-item chat-item--me" >
            <img :src="currentConv.photoUrl || noImg">
        <div class="message">
          <span class="message__user-name">{{result.sender}}</span>
          <time class="message__time">
            <i class="fa fa-clock-o"></i>
            {{result.timestamp}}
          </time>
          <p class="message__text">{{result.parts[0].text}}</p>
        </div>
</li>  
</ul>
</div>
    </div>

<div class="footer">  
  <div class="footer chat-controls">
    <textarea class="chat-controls__textarea" rows="2" placeholder="Type your message" v-model="message"></textarea>
    <div class="btns-row">
      <a href="#" class="chat-controls__btn" @click="sendMessage">Send</a>
      <a href="#" class="attach-file"><i class="fa fa-paperclip"></i></a>
    </div>   
  </div>
    </div>

</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({message:''}),
  components: {
    'nsr-loading': require('../components/loading.vue'),
  },
  created: function () {
      this.$store.dispatch('getMessages', {
      });
  },
  mounted: function() {
    this.$nextTick(function() {
      this.fetchData(this);
    });
  },
  methods: {
    fetchData: function(progress) {
      this.$store.dispatch('getConversations', {
        //progress: progress,
        //refresh: false
      });
    },
    loadMore: function() {
      this.fetchData(this);
    },
    sendMessage(){
      const messageObject = {
        participant: this.$store.state.user.primaryContact,
        message: this.message //this.callee
      }
        this.$store.dispatch('send', messageObject)        
    }
  },
  computed: mapState({
    results: state => state.messages,
    currentConv: state => state.currentConv,
    isloadingComplete: state => state.isloadingComplete,
    busy: state => state.busy,
  }),
  getResults(){
    return state.messages
  }
}
</script>

<style scoped>

.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: white;
   text-align: center;
}

@import url(https://fonts.googleapis.com/css?family=Lato:400,700);

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  background: #C5DDEB;
  font: 14px/20px "Lato", Arial, sans-serif;
  margin: 20px;
}

.chat {
  width: 320px;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
}

.chat-header {
  background: #42A7A1;
  padding: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  
  h1 {
    color: #fff;
    text-transform: uppercase;
  }
}

.chat-history {
  height: 350px;
  overflow-y: auto;
  padding: 20px;
}

.chat-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  
  img {
    width: 36px;
    border-radius: 50%;
  }
}

.chat-item--me {
  .message {
    margin-left: 15px;
    background: #f6f6f6;
    
    &::before {
      right: 100%;
      border: solid transparent;
      border-right-color: #f6f6f6;
      content: '';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-width: 10px;
      top: 10px;
    }
  }
}

.chat-item--other {
  .message {
    margin-right: 15px;
    background: #f6f6f6;
    
    &::after {
      left: 100%;
      border: solid transparent;
      border-left-color: #f6f6f6;
      content: '';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-width: 10px;
      top: 10px;
    }
  }
}

.message {
  padding: 10px;
  border-radius: 5px;
  position: relative;
}

.message__user-name {
  font-size: 13px;
  font-weight: bold;
  color: #000;
}

.message__time {
  font-size: 11px;
  color: #999;
}

.message__text {
  font-size: 13px;
  color: #777777;
}

.btns-row {
  margin-top: 5px;
}

.chat-controls {
  margin-top: 10px;
  border-top: 1px solid #f6f6f6;
  padding: 20px;
  padding-top: 10px;
}

.chat-controls__textarea {
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 5px;
  resize: none;
  outline: none;
}

.chat-controls__btn {
  padding: 0 15px;
  background: #75b1e8;
  line-height: 25px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
}

.attach-file {
  color: #999;
  float: right;
}

// scroll
// Let's get this party started
::-webkit-scrollbar {
  width: 5px;
}

// Track
::-webkit-scrollbar-track {
  border-radius: 0;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, .3);
}

// Handle
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, .2);
  border-radius: 0;
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, .3);
}
<style>