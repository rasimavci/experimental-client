<template>
  <div>
    <bar-top
    :show-refesh-icon="true"
    :show-return-icon="false"
    :show-write-icon="true"></bar-top>
    <call></call>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
import barTop from '../components/barTopCall.vue';
import call from '../components/call.vue';
import barBottom from '../components/barBottom2.vue';
import alert from '../components/alert.vue';

export default {
  components: {
    'bar-top': barTop,
    'call': call,
    'alert': alert,
    'bar-bottom': barBottom,
  },
  methods: {

  }
}
</script>

<style>

</style>
