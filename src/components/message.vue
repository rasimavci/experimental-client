<template>
  <ul class="content table-view easy-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <li class="table-view-cell media" v-for="result in results" v-on:click="goChat(result)">
        <img class="media-object pull-left" :src="result.photoUrl"> 
        <div class="media-body">
          {{result.firstName}}  {{result.lastName}} <p>{{result.lastMessage }}</p>
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
      this.$store.dispatch('getConversations', {
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
    goChat(participant){
      console.log('selected result ' + participant.firstName)
      console.log('selected img ' + participant.photoUrl)
      this.$store.commit('SET_CHAT_PARTICIPANT', participant.destination); 
      this.$router.push('chat')
    },
    loadMore: function() {
      this.fetchData(this);
    }
  },
  computed: mapState({
    results: state => state.conversations,
    user: state => state.user,
    isloadingComplete: state => state.isloadingComplete,
    busy: state => state.busy,
  })
}
</script>

<style>
.easy-list img {
  width: 42px;
}
</style>
