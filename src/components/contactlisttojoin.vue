<template>
  <ul class="content table-view easy-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <li class="table-view-cell media" v-for="result in results" v-on:click="goCallWithJoin(result)">
        <img class="media-object pull-left" :src="result.photoUrl">
        <div class="media-body">
          {{result.firstName}} {{result.lastName}}<p>{{result.workPhone}}</p>
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
    created: function () {
      this.$store.dispatch('getContacts', {
      });
  },
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
      this.$store.dispatch('getContacts', {
        progress: progress,
        refresh: false
      });
    },
    loadMore: function() {
      this.fetchData(this);
    },
    goCallWithJoin(contact){
      
      this.$store.dispatch('join', contact.primaryContact) // this.$store.state.user.primaryContact)      
     // this.$store.commit('SET_USER', contact); 
      this.$router.push('lists')
      
    },     
  },
  computed: mapState({
    results: state => state.cardData,
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
