<template>
  <div>
    <bar-top
    :show-refesh-icon="true"
    :show-return-icon="false"
    :show-write-icon="true"></bar-top>
    <session></session>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
import barTop from '../components/barTopSession.vue';
import session from '../components/history.vue';
import barBottom from '../components/barBottom.vue';
import alert from '../components/alert.vue';

export default {
  components: {
    'bar-top': barTop,
    'session': session,
    'alert': alert,
    'bar-bottom': barBottom,
  },
  methods: {

  }
}
</script>

<style>

</style>
