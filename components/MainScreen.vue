<template>
  <div id="mainScreen">
                    <label class="form-label">
                        Welcome to new Smart Office !
                    <p>                  
                        Smart Office with vue framework
                    </p>                  
                    </label>              
  </div>

</template>

<script>


import { bus } from '../main.js';



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
            bus.$emit('switchComp', 'MessageList');
            bus.$emit('switchComp2', 'Toolbar');
        },
 showModal(){
   console.log('deneme')
      this.openModal = true
    }              
    },
     
}
</script>

