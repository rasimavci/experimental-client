<template>
  <nav class="bar bar-tab easy-bottom-bar" v-if="checkConnected">
    <router-link class="tab-item" to="/message">
      <span class="icon fa fa-weixin" :class="{'easy-fa-color': isHome}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isHome}">chat</span>
    </router-link>
    <router-link class="tab-item" to="/lists">
      <span class="icon fa fa-phone" :class="{'easy-fa-color': isList}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isList}">call</span>
    </router-link>
    <router-link class="tab-item" to="/contact">
      <span class="icon icon-person" :class="{'easy-fa-color': isOption}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isOption}">contacts</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  computed: {
    checkConnected () {
      return this.$store.state.isConnected
    }
  },    
  data: () => ({
    isHome: true,
    isList: false,
    isOption: false,
  }),
  mounted: function() {
    this.$nextTick(function() {
      const uri = this.$route.path;
      if (uri === '/') {
        this.isHome = true;
        this.isList = false;
        this.isOption = false;
      }
      if (uri === '/lists') {
        this.isHome = false;
        this.isList = true;
        this.isOption = false;
      }
      if (uri === '/option') {
        this.isHome = false;
        this.isList = false;
        this.isOption = true;
      }
    });
  },
  methods: {

  }
}
</script>

<style>
.easy-bottom-bar {
  background-color: #1abc9c;
  color: #fff;
  border: none;
}
.easy-bottom-bar a {
  color: #cdd !important;
}
.easy-fa-color {
  color: #fff !important;
}
</style>
