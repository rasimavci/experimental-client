<template>
  <div class="easy-content">
    <p>
      {{result.firstName}} {{result.lastName}}
    </p>
    <p>
      <input type="text" class="form-control" v-model="firstName" placeholder="receiver...">    
      <input type="text" class="form-control" v-model="lastName" placeholder="receiver...">    
      <input type="text" class="form-control" v-model="workPhone" placeholder="receiver...">    
      <input type="text" class="form-control" v-model="userName" placeholder="receiver...">   
      <input type="text" class="form-control" v-model="homePhone" placeholder="receiver...">    
      <input type="text" class="form-control" v-model="email" placeholder="receiver...">                    
    </p>  
    <p>      
      Pleae click check butto after you finish with editing.
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
    firstName: state => state.user.firstName,
    lastName: state => state.user.lastName,
    workPhone: state => state.user.workPhone,  
    userName: state => state.user.userName,
    email: state => state.user.email,
    homePhone: state => state.user.homePhone,     

    result: state => state.user,
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
