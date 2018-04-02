<template>

  <ul class="content table-view easy-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <li class="table-view-cell media" v-for="result in results">
      <router-link class="navigate-right" to="/chat">
        <img class="media-object pull-left" :src="result.photoUrl">
        <div class="media-body">
          {{result.parts[0].text}} <p>{{result.parts[0].text }}</p>
        </div>
      </router-link>
    </li>
    <div class="nsr-card-loading">
      <nsr-loading :hide-loading="isloadingComplete" :is-end-text="endText">
      </nsr-loading>
    </div>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({}),
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
    }
  },
  computed: mapState({
    results: state => state.messages,
    isloadingComplete: state => state.isloadingComplete,
    busy: state => state.busy,
  }),
  getResults(){
    return state.messages
  }
}
</script>

<style scoped>
.easy-list img {
  width: 42px;
}

chat{
  position:relative;
  display:inline-block;
  box-shadow: 2px 2px 5px black;
  width:100%;
  height:360px;
  background-color:#eee;
  border: 1px solid #fff;
}
/* End Chat TAG */

/* Start Conversation TAG */
conversation{
  display:block;
  width:100%;
  height:310px;
  overflow:auto;
  background-color:#eee;
}
/* End Conversation TAG */

/* Start Texting TAG */
texting{
  display:block;
  text-align:center;
  padding:10px;
}
/* End Texting TAG */

/* Start message TAG */
message-line{
  position:relative;
  display:block;
  width:100%;
  min-height:40px;
}

message{
  display:block;
  float:left;
  max-width:80%;
  padding:5px 10px;
  margin:5px;
  color:#fff;
  background-color:#00c6da;
  border-radius:10px;
}

message.me{
  float:right;
  background-color:white;
  background-color:#ee591f;
}

.dialpad-button {
    width: 84px;
    height: 72px;
    border-bottom: 1px solid $dialpad-border;
    float: left;
    @extend .cursorpointer;
}

.modal-container {
  width: 350px;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.messages-container {
  height: calc(100vh - 50px);
  overflow-y: scroll;
}

.messages-container ul {
  width: 400px;
}

.bottombar {
  height: 50px;
  width: 100vw;
  margin-left: 80px;
  background-color: #465A69;
}

.md-dialog ul {
  list-style-type: none;
  overflow-y: scroll;
  padding: 10px;
}

.md-dialog ul li {
  padding-bottom: 5px;
}

.selected-contact {
  background: lightsteelblue;
}

/* End message TAG */
</style>
