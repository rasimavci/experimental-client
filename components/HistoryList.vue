<template>
  <div id="contact-list">
    <div id="list-header">
      <h2>History</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Contacts button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
            All Contacts
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'favorites'"
            :class="{active: show === 'favorites'}">
            Favorites
          </button>
        </div>
      </div>
    </div>

        <!-- Fetch  Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="retrieveCallLogs"
            :class="{active: show === 'favorites'}">
            Fetch
          </button>

          <button type="button" class="btn btn-default"
            @click="getCallLogs"
            :class="{active: show === 'favorites'}">
            Get
          </button>

    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
          class="list-group-item" 
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.callerName}} {{note.startTime.trim ().substring (0, 4)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import { updateActiveNote, refreshContacts, retrieveCallLogs, getCallLogs } from '../vuex/actions'

export default {
  data () {
    return {
      show: 'all'
    }
  },
  vuex: {
    getters: {
      calllogs: state => state.calllogs,
      activeNote: state => state.activeNote
    },
    actions: {
      updateActiveNote, refreshContacts, retrieveCallLogs, getCallLogs
    }
  },
  computed: {
    filteredNotes () {
      if (this.show === 'all'){
        return this.calllogs
      } else if (this.show === 'favorites') {
        return this.calllogs.filter(contact => contact.favorite)
      }
    }
  }
}
</script>
