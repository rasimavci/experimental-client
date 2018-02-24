<template>
  <div>
    <bar-top
    :show-refesh-icon="true"
    :show-return-icon="false"
    :show-write-icon="true"></bar-top>
    <list></list>
    <bar-bottom></bar-bottom>
    <alert2></alert2>
  </div>
</template>

<script>
import barTop from '../components/barTopMessage.vue';
import list from '../components/message.vue';
import barBottom from '../components/barBottom.vue';
import alert2 from '../components/alert2.vue';

export default {
  components: {
    'bar-top': barTop,
    'list': list,
    'alert2': alert2,
    'bar-bottom': barBottom,
  },
  methods: {

  }
}
</script>

<style>

</style>
