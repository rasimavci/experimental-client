<template>
  <div>
    <bar-top
    :show-refesh-icon="true"
    :show-return-icon="false"
    :show-write-icon="false"></bar-top>
    <login></login>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
import barTop from '../components/barTop.vue';
import login from '../components/login.vue';
import barBottom from '../components/barBottom.vue';
import alert from '../components/alert.vue';

export default {
  components: {
    'bar-top': barTop,
    'login': login,
    'alert': alert,
    'bar-bottom': barBottom,
  },
  methods: {

  }
}
</script>

<style>

</style>
