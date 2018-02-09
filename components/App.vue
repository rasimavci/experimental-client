<template>
  <div id="app">
    
<component :is="currentLeftComp"></component>    
    <component :is="currentComp"></component>
<footer-menu @footerClicked="openModal = true"></footer-menu>
    </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import NotesList from './NotesList.vue'
import Editor from './Editor.vue'
import CallList from './CallList.vue'
import LoginScreen from './LoginScreen.vue'
import MainScreen from './MainScreen.vue'
import ContactList from './ContactList.vue'
import MessageList from './MessageList.vue'
import HistoryList from './HistoryList.vue'
import Dialpad from './Dialpad.vue'
import { bus } from '../main.js';
import FooterMenu from './FooterMenu.vue'
import IncomingCall from './IncomingCall.vue'


export default {
  data() {
    return {
      currentComp: 'LoginScreen',
      currentLeftComp: 'ToolbarEmpty',
      openModal: false,
      customData: {
        title: 'Awesome title!',
        closeButtonText: 'Close me!'
      }      
    };
  },
  created() {
      bus.$on('switchComp', comp => {
           this.currentComp = comp;
      }),
      bus.$on('switchComp2', comp => {
           this.currentLeftComp = comp;
      })      
  },  
  components: {
    Toolbar,
    Editor,
    ContactList,
    NotesList,
    CallList,
    MessageList,
    HistoryList,
    Dialpad,
    LoginScreen,
    IncomingCall,
    MainScreen,
    footerMenu: FooterMenu,
  },
  methods: {
    switchComponent1(nameit) {
      this.currentComp = nameit
    },
showModal(){
      this.openModal = true
    }    
  }
}
</script>



