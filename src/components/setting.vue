<template>
  <div class="content easy-button">
    <ul class="table-view">
      <li class="table-view-cell media" @click="disconnect">
        <router-link class="navigate-right" to="/">
          <span class="media-object pull-left icon icon-person"></span>
          <div class="media-body">
            Logout
          </div>
        </router-link>
      </li>      
      <li class="table-view-cell media">
        <router-link class="navigate-right" to="/addcontact">
          <span class="media-object pull-left icon icon-person"></span>
          <div class="media-body">
            Add Contact
          </div>
        </router-link>
      </li>
      <li class="table-view-cell media">
        <router-link class="navigate-right" to="/detail">
          <span class="media-object pull-left icon icon-gear"></span>
          <div class="media-body">
            Set fix settings
          </div>
        </router-link>
      </li>
      <li class="table-view-cell media">
        <router-link class="navigate-right" to="/detail">
          <span class="media-object pull-left icon icon-pages"></span>
          <div class="media-body">
            Arrange sessions page
          </div>
        </router-link>
      </li>
      <li class="table-view-cell media">
        <router-link class="navigate-right" to="/detail">
          <span class="media-object pull-left icon icon-trash"></span>
          <div class="media-body">
            Delete Contacts
          </div>
        </router-link>
      </li>
      <li class="table-view-cell media">
        <router-link class="navigate-right" to="/detail">
          <span class="media-object pull-left icon icon-search"></span>
          <div class="media-body">
            Search Settings
          </div>
        </router-link>
      </li>
      <li class="table-view-cell media">
        <router-link class="navigate-right" to="/detail">
          <span class="media-object pull-left icon icon-more"></span>
          <div class="media-body">
            More settings
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data: () => ({}),
  mounted: function () {
    this.$nextTick(function() {});
  },
  methods: {
    hideAlert: function() {},
    disconnect: function() {
      this.$store.dispatch('disconnect');
    }
  },
  computed: mapState({}),
}
</script>

<style>
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
