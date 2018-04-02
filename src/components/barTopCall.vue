<template>
  <header class="bar bar-nav bar-easy-vue">
    <a class="icon icon-refresh pull-left" v-if="showRefeshIcon" @click="refresh"></a>
    <a class="icon icon-left-nav pull-left" v-if="showReturnIcon" @click="goBack"></a>
    <a class="icon icon-gear pull-right" v-if="showWriteIcon" @click="goOption"></a>
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
      this.$store.commit('isShowAlert', true);
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
    goOption: function() {
    this.$router.push('option')      
    // this.$router.push('contacttocall')
    }    
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
