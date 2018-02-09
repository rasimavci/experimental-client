<template>
  <div id="dialpad">

    <div id="list-header">
      <h2>Dialpad</h2>
      <div class="btn-group btn-group-justified" role="group">

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Contact's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-primary" type="button">Search</button>
  </div>
</div>

  <div id="toolbar2">
    <i @click="show = 'all' class="glyphicon glyphicon-facetime-video"></i>
          <button type="button" class="glyphicon glyphicon-facetime-video"
                    </button>
          
      </div>

        <!-- Search History button -->
        <div class="input-group-prepend" role="group">
        <input class="form-control"
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
            Search
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="glyphicon glyphicon-facetime-video"
                    </button>
          <button type="button" class="glyphicon glyphicon-facetime-video"
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import { updateActiveNote } from '../vuex/actions'

export default {
  data () {
    return {
      show: 'all'
    }
  },
  vuex: {
    getters: {
      notes: state => state.notes,
      activeNote: state => state.activeNote
    },
    actions: {
      updateActiveNote
    }
  },
  computed: {
    filteredNotes () {
      if (this.show === 'all'){
        return this.notes
      } else if (this.show === 'favorites') {
        return this.notes.filter(note => note.favorite)
      }
    }
  }
}
</script>
