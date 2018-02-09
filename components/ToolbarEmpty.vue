<template>
  <div id="toolbar">
                         
  </div>

</template>

<script>

import { addNote, deleteNote, toggleFavorite, refreshContacts, Connect, disconnect, make, answer, listCalls } from '../vuex/actions'
import { bus } from '../main.js';
import Modal from './Modal2.vue'
import Modal2 from './Modal3.vue'

   // var username = 'ravci@genband.com' //document.getElementById('username').value
   // var password = 'yjke9884' //document.getElementById('username').value
    var callee = '' //document.getElementById('callee').value

export default {
  data() {
    return {
      currentComp: 'ContactList',
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
      addNote,
      deleteNote,
      toggleFavorite,
      refreshContacts,
      Connect,
      disconnect,
      make,
      answer,
      listCalls
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
        switchComponent(comp) {
            bus.$emit('switchComp', comp);
        },
        logout() {
          this.$store.dispatch('DISCONNECT');
            bus.$emit('switchComp', 'loginScreen');
            bus.$emit('switchComp2', 'loginScreen');
        },        
 showModal(){
   console.log('deneme')
      this.openModal = true
    }              
    },
     
}
</script>

