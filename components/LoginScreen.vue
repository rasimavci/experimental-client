<template>
  <div id="loginScreen">

                    <label class="form-label">
                        Username
                        <input v-model="username" class="form-control" value="ravci@genband.com">
                    </label>
                    <label class="form-label">
                        Password
                        <input type="password" v-model="password" class="login-input" value="yjke9884">
                    </label>  
        <button type="button" class="btn btn-default"
            @click="login(username, password)"
            :class="{active: show === 'all'}">
            Login
          </button>                     
           

  </div>

</template>

<script>

import { Connect } from '../vuex/actions'
import { bus } from '../main.js';
import Modal from './Modal2.vue'
import Modal2 from './Modal3.vue'


export default {
  data() {
    return {
      currentComp2: 'loginScreen',
      openModal: false,
      openModal2: false,
      customData: {
        title: 'Awesome title!',
        closeButtonText: 'Close me!'
      }      
    };
  },  
  vuex: {
    getters: {
      activeNote: state => state.activeNote
    }, 
    actions: {
      Connect
    }
  },

  components: {
    Modal,
    Modal2
  },  
    props: {
        currentComp: {
            type: String,
            required: true
        }
    },
    methods: {
        login(username, password) {
            console.log(username, password)
            //this.$store.dispatch('CONNECT', username, password);            
            bus.$emit('switchComp', 'MainScreen');
            bus.$emit('switchComp2', 'Toolbar');
        },
 showModal(){
   console.log('deneme')
      this.openModal = true
    }              
    },
     
}
</script>

