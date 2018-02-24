<template>
  <div>
    <bar-top
    :show-refesh-icon="true"
    :show-return-icon="false"
    :show-write-icon="true"></bar-top>
    <list></list>
    <bar-bottom></bar-bottom>
    <alert3></alert3>
  </div>
</template>

<script>
import barTop from '../components/barTopChat.vue';
import list from '../components/chat2.vue';
import barBottom from '../components/barBottom.vue';
import alert3 from '../components/alert3.vue';

export default {
  components: {
    'bar-top': barTop,
    'list': list,
    'alert3': alert3,
    'bar-bottom': barBottom,
  },
  methods: {

  }
}
</script>

<style>

</style>
