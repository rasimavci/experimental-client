<template>
  <div id="toolbar">
   <modal v-show="openModal" :modalData='customData' @close='openModal = !openModal'></modal>    
  <modal3 v-show="openModal2" :modalData2='customData' @close='openModal2 = !openModal2'></modal3>       
  <modal2 v-show='showModal' :modalData='modalData3'></modal2>

<i @click="addNote" class="glyphicon glyphicon-user"></i>    
    <i @click="switchComponent('MainScreen')"
      :disabled="currentComp === 'notes-list'" class="glyphicon glyphicon-home"></i>      
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon glyphicon-star"
      :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>    
    <i @click="switchComponent('notes-list')"
      :disabled="currentComp === 'notes-list'" class="glyphicon glyphicon-search"></i>
    <i @click="switchComponent('ContactList')"
      :disabled="currentComp === 'contact-list'" class="glyphicon glyphicon-book"></i>    
    <i @click="switchComponent('MessageList')"
      :disabled="currentComp === 'contact-list'" class="glyphicon glyphicon-download-alt"></i>       
    <i @click="openModal2 = true"
      :disabled="currentComp === 'contact-list'" class="glyphicon glyphicon-envelope"></i>      
    <i @click="switchComponent('HistoryList')"
      :disabled="currentComp === 'notes-list'" class="glyphicon glyphicon-time"></i>          
    <i @click="openModal = !openModal"
      :disabled="currentComp === 'notes-list'" class="glyphicon glyphicon-earphone"></i>     
      <i @click="answer"
      :disabled="currentComp === 'notes-list'" class="glyphicon glyphicon-phone-alt"></i>      
    <i @click="refreshContacts"
      :disabled="currentComp === 'notes-list'" class="glyphicon glyphicon-print"></i>    
    <i @click="Connect(username, password)"
      :disabled="Connect === 'notes-list'" class="glyphicon glyphicon-signal"></i>   
    <i @click="switchComponent('CallList')"
      :disabled="Connect === 'notes-list'" class="glyphicon glyphicon-th-list"></i>                    
    <i @click="switchComponent('TestSliders')"
      :disabled="Connect === 'notes-list'" class="glyphicon glyphicon-play-circle"></i>  
    <i @click="logout"
      :disabled="Connect === 'notes-list'" class="glyphicon glyphicon-off"></i>     
    <i @click="listCalls"
     :disabled="currentComp === 'notes-list'" class="glyphicon glyphicon-pencil"></i>  
     <i @click="addNote" class="glyphicon glyphicon-calendar"></i>   
     <i @click="addNote" class="glyphicon glyphicon-trash"></i>

     <i @click="addNote" class="glyphicon glyphicon-volume-off"></i>   
         <i @click="switchComponent('Dialpad')"
     :disabled="currentComp === 'contact-list'" class="glyphicon glyphicon-phone"></i>  
     <i @click="addNote" class="glyphicon glyphicon-facetime-video"></i>          
     <i @click="addNote" class="glyphicon glyphicon-map-marker"></i>          

 

<div ref="container1"> class='video-box' </div>
<div ref="container2"> class='video-box' </div>
                         
  </div>

</template>

<script>

import { addNote, deleteNote, toggleFavorite, refreshContacts, disconnect, make, answer, listCalls } from '../vuex/actions'
import { bus } from '../main.js';
import Modal from './Modal2.vue'
import Modal3 from './Modal3.vue'
import Modal2 from './IncomingCall.vue'


   // var username = 'ravci@genband.com' //document.getElementById('username').value
   // var password = 'yjke9884' //document.getElementById('username').value
    var callee = '' //document.getElementById('callee').value

export default {
computed: {
  showModal () {
    return this.$store.state.showModal
  }
},
  data() {
    return {
      currentComp: 'ContactList',
      openModal: false,
      openModal2: false,
      openModal3: false,
      showModal: false,
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
      disconnect,
      make,
      answer,
      listCalls
    }
  },

  components: {
    Modal,
    Modal2,
Modal3
  },  
    props: {
        currentComp: {
            type: String,
            required: true
        }
    },
    methods: {
  switchComponent(comp) {
    if(comp === 'HistoryList'){
             // this.$store.dispatch('HISTORY_FETCH');
              this.$store.dispatch('HISTORY_GET');
}
            bus.$emit('switchComp', comp);
        },
        logout() {
        //  this.$store.dispatch('DISCONNECT');
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

