<template>
  <div>
    <bar-top
    :show-refesh-icon="false"
    :show-return-icon="false"
    :show-write-icon="true">
    </bar-top>
    <div class="pagethree-button">
        <contact-list></contact-list>
    </div>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
import barTop from '../components/barTopContactList.vue';
import contactlist from '../components/contactlist.vue';
import barBottom from '../components/barBottom.vue';
import alert from '../components/alert.vue';

export default {
  components: {
    'bar-top': barTop,
    'contact-list': contactlist,
    'alert': alert,
    'bar-bottom': barBottom,
  },
  methods: {

  }
}
</script>

<style>
.pagethree-button {
  margin-top: 80px;
}
</style>
