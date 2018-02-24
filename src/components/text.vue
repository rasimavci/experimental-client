<template>
  <div class="easy-content">
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
      a easy example using the vue to implement easy web
    </p>    
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
    result: state => state.cardData[0],
    isloadingComplete: state => state.isloadingComplete,
    busy: state => state.busy,
  }),
  methods: {}
}
</script>

<style>
.easy-content {
  text-align: center;
  padding-top: 200px;
}
.easy-content p:first-child {
  color: #1abc9c;
  font-size: 25px;
}
.easy-content p:last-child {
  padding-top: 20px;
  color: #bbb;
}
</style>
