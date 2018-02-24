<template>
  <header class="bar bar-nav bar-easy-vue">
    <a class="icon icon-refresh pull-left" v-if="showRefeshIcon" @click="refresh"></a>
    <a class="icon icon-left-nav pull-left" v-if="showReturnIcon" @click="goBack"></a>
    <a class="icon icon-plus pull-right" v-if="showWriteIcon" @click="goContactDetail"></a>
    <h1 class="title">Smart Office</h1>
  </header>
</template>

<script>
export default {
  props: {
    showRefeshIcon: {
      default: true
    },
    showReturnIcon: {
      default: false
    },
    showWriteIcon: {
      default: true
    },
  },
  methods:{
    writeSome: function() {
      this.$store.commit('isShowAlert3', true);
    },
    refresh: function() {
      this.$store.dispatch('getData', {
        progress: this,
        refresh: true
      });
    },
    goBack: function() {
      this.$router.back();
    },
    goContactDetail(){
     // this.$store.commit('SAVE_USER', contact); 
      this.$router.push('contactdetail')
    },      
  }
}
</script>

<style>
  .bar-easy-vue {
    background-color: #1abc9c;
  }
  .bar-easy-vue a, h1 {
    color: #fff !important;
  }
</style>
