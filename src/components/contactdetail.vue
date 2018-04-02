<template>
  <div class="easy-content">
  <div class="center" id="main" style="width: 320px; height: 400px;background-position:center;background-repeat:no-repeat;">
    <img class="media-object pull-center" :src="result.photoUrl">
  </div>

    <p>
      {{result.firstName}} {{result.lastName}}
    </p>
    <p>
      {{result.workPhone}}
    </p>
                
    <p>
      {{result.emailAddress}}
    </p>    
    <p>
      {{result.primaryContact}}
    </p>     
    <p>      
      Show Presence Status
    </p> 
    <ul class="table-view">
      <li class="table-view-cell media">
        <router-link class="navigate-right" to="/addcontact">
          <span class="media-object pull-left icon icon-person"></span>
          <div class="media-body">
            Add to Favorites
          </div>
        </router-link>
      </li>
      <li class="table-view-cell media">
        <router-link class="navigate-right" to="/detail">
          <span class="media-object pull-left icon icon-trash"></span>
          <div class="media-body">
            Delete Contact
          </div>
        </router-link>
      </li>
    </ul>


<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">Friend</label>    

    <div class="modal-container" display="none">
      <div class="keypad">
        <div class="keypad-container" :class="[activeCall? 'hide-keypad': '']">
        <div class="keypad-menu">   
        <button class="button" @click="makeCall(false)">
        <i class="material-icons">{{!activeCall?  "local_phone" : "phone_in_talk" }}</i>
        </button>
        <button class='button' style='margin-left: 10px;' @click="makeCall(true)">
        <i class="material-icons">{{!activeVideoCall ? "videocam" : "videocam_off"}}</i>
        </button>
        <button class="button" style='margin-left: 10px;' @click="goChat()">
        <i class="material-icons">{{!activeCall?  "chat" : "phone_in_talk" }}</i>
        </button>        
      </div>   
      </div>   
</div>   
</div>   
  </div>

</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({}),
  mounted: function () {
    this.$nextTick(function() {});
  },
  computed: mapState({
    checked: state => state.user.primaryContact,
    result: state => state.user,
    isloadingComplete: state => state.isloadingComplete,
    busy: state => state.busy,
  }),
  methods: {
    makeCall (mode) {
      if (!mode){
       this.$store.dispatch('call', this.$store.state.user.primaryContact)
      } else {
         this.$store.dispatch('callVideo', this.$store.state.user.primaryContact)
      }
      console.log('make call')
            this.$router.push('lists')
    },
    goCall(call){
       this.$store.dispatch('call', 'saynaci@genband.com')      
      console.log('selected session ' + call.to)
      console.log('selected session photoUrl ' + call.photoUrl)
      this.$store.commit('SET_ACTIVE_CALL', call); 
      this.$router.push('lists')
    },
    goChat(){
      const messageObject = {
        participant: this.$store.state.user.primaryContact,
        message: '' //this.callee
      }
        this.$store.dispatch('send', messageObject)  

      console.log('selected contact to send message ' + this.$store.state.user.primaryContact)
      this.$store.commit('SET_CHAT_PARTICIPANT', this.$store.state.user.primaryContact); 
      this.$router.push('chat')
    },    
    deleteContact() {
       this.$store.dispatch('call', 'saynaci@genband.com')      
      console.log('selected session ' + call.to)
      console.log('selected session photoUrl ' + call.photoUrl)
      this.$store.commit('SET_ACTIVE_CALL', call); 
      this.$router.push('lists')
    },  
    addFavorites() {
       this.$store.dispatch('call', 'saynaci@genband.com')      
      console.log('selected session ' + call.to)
      console.log('selected session photoUrl ' + call.photoUrl)
      this.$store.commit('SET_ACTIVE_CALL', call); 
      this.$router.push('lists')
    },         
  }
}
</script>

<style>
.divider{
  margin: 5px;
    width:5px;
    height:auto;
    display:inline-block;
}

.center {
    margin: auto;
    width: 50%;
    border: 0px solid green;
    padding: 10px;
}

.easy-content {
  text-align: center;
  padding-top: 100px;
}
.easy-content p:first-child {
  color: #1abc9c;
  font-size: 25px;
}
.easy-content p:last-child {
  padding-top: 20px;
  color: #bbb;
  border: 0px
}

.modal-container {
  width: 300px;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.keypad{
  text-align: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.input-number{
  width: 100%;
  margin: 0 auto;
  /* margin-top: 5px; */
  border: 0;
  background-color: #eceff0;
  height: 50px;
  font-size: 1.5em;
  text-align: center;
}
.keypad-container {
  overflow: hidden;
}
.keypad-container div{
  width: 100%;
}
.keypad-container div button{
  width: 30.33%;
  padding: 0;
  margin: 0;
  display: block;
  float: left;
  height: 50px;
  border: 1px solid gray;
  background: white;
  color: rgba(0,0,0,.8);
  border-radius: 5px;
  font-size: 1.5em;
  margin: 5px 0;
}
.keypad-container div button:hover{
  background-color:#1abc9c;
}

.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  height: 50px;
  width: 10px;
}

.dialpad-button {
  width: 84px;
  height: 72px;
  border-bottom: 1px solid ;
  float: left;
}

.keypad-menu{
  text-align: center;
}

.easy-button {
  background-color: #eee;
}
.easy-button ul {
  border: none !important;
  margin-top: 100px !important;
}
.easy-button span {
  color: #1abc9c;
}
.easy-button li {
  border-bottom: 1px solid #eee;
  background: #fff;
}
</style>
