<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="search" class="glyphicon glyphicon-search"></i>
    <i @click="envelope" class="glyphicon glyphicon-envelope"></i>
    <i @click="print" class="glyphicon glyphicon-print"></i>
    <i @click="history" class="glyphicon glyphicon-time"></i>
    <i @click="signal" class="glyphicon glyphicon-signal"></i>
    <i @click="callList" class="glyphicon glyphicon-th-list"></i>
    <i @click="play" class="glyphicon glyphicon-play-circle"></i>
    <i @click="off" class="glyphicon glyphicon-off"></i>   
     <i @click="pencil" class="glyphicon glyphicon-pencil"></i>   
    <i @click="download" class="glyphicon glyphicon-download-alt"></i>   
     <i @click="calendar" class="glyphicon glyphicon-calendar"></i>   
     <i @click="trash" class="glyphicon glyphicon-trash"></i>   
    <i @click="off" class="glyphicon glyphicon-volume-off"></i>   
     <i @click="book" class="glyphicon glyphicon-book"></i>             
     <i @click="phone" class="glyphicon glyphicon-phone"></i>          
     <i @click="phonealt" class="glyphicon glyphicon-phone-alt"></i>               
     <i @click="book" class="glyphicon glyphicon-facetime-video"></i>          
     <i @click="book" class="glyphicon glyphicon-map-marker"></i>          
    <i @click="toggleFavorite"
      class="glyphicon glyphicon-star"
      :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import { addNote, deleteNote, toggleFavorite } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      activeNote: state => state.activeNote
    },
    actions: {
      addNote,
      deleteNote,
      toggleFavorite
    }
  }
}
</script>
