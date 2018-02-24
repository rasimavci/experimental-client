<template>
  <div>
    <call></call>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
import call from '../components/call.vue';
import barBottom from '../components/barBottom2.vue';
import alert from '../components/alert.vue';

export default {
  components: {
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
