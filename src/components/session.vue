<template>
  <ul class="content table-view easy-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <li class="table-view-cell media" v-for="result in results" v-on:click="goCall(result)">
        <img class="media-object pull-left" :src="result.photoUrl">
        <div class="media-body">
          {{result.firstName}}  {{result.lastName}}<p>{{result.startTime.trim().substring(0, 5)}}, {{result.state}}</p>   
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
  mounted: function() {
    this.$nextTick(function() {
      this.fetchData(this);
    });
  },
  methods: {
    fetchData: function(progress) {
      this.$store.dispatch('getData', {
        progress: progress,
        refresh: false
      });
    },
    goCall(call){
      console.log('selected session ' + call.to)
      console.log('selected session photoUrl ' + call.photoUrl)
      this.$store.commit('SET_ACTIVE_CALL', call); 
      this.$router.push('lists')
    },    
    loadMore: function() {
      this.fetchData(this);
    }
  },
  computed: mapState({
    results: state => state.calls,
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
