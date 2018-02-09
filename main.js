import Vue from 'vue';
import store from './vuex/store';
import App from './components/App.vue';

export const bus = new Vue ();

new Vue ({
  store, // inject store to all children
  el: 'body',
  components: {App},
});
