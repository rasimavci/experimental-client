<template>
  <div id="contact-list">
    <div id="list-header">
      <h2>Contacts</h2>
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
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
          class="list-group-item" 
          :class="glyphicon glyphicon-download-alt" href="#"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import { updateActiveNote, refreshContacts } from '../vuex/actions'

export default {
  data () {
    return {
      show: 'all'
    }
  },
  vuex: {
    getters: {
      contacts: state => state.contacts,
      activeNote: state => state.activeNote
    },
    actions: {
      updateActiveNote, refreshContacts
    }
  },
  computed: {
    filteredNotes () {
      if (this.show === 'all'){
        return this.contacts
      } else if (this.show === 'favorites') {
        return this.contacts.filter(contact => contact.favorite)
      }
    }
  }
}
</script>
