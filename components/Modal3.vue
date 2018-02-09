  <template>
        <div class="modal-mask" v-show="show">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>New Message</h3>
                </div>
                <div class="modal-body">
                    <label class="form-label">
                        Participant
                        <input v-model="participant" class="form-control">
                    </label>
                    <label class="form-label">
                        Message
                        <textarea v-model="message" rows="5" class="form-control"></textarea>
                    </label>
                </div>
                <div class="modal-footer text-right">
                    <button class="btn btn-success" @click="send(participant, message)">
                        Send
                    </button>                
                    <button class="btn btn-warning" @click="close()">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </template>

<script>
import { send } from '../vuex/actions'
export default {
  data() {
    return {
      message: ''
    };
  },      
  vuex: {
    getters: {
      activeNote: state => state.activeNote
    }, 
    actions: {
    send
    }
  },    
  props: {
    modalData2: {
      type: Object,
      required: true
    }
  },
  methods: {
    close (){
      this.$emit('close')
    },
    send (participant, message){
console.log(participant + ' a mesaj attiniz: ' + message)
      //this.$emit('close')
    }    
  }
}
</script>

<style scoped>

    .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}

.modal-container {
    width: 300px;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}