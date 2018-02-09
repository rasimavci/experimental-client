  <template>
        <div class="modal-mask" v-show="show">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>New Call</h3>
                </div>
                <div class="modal-body">
                    <label id="status1" class="form-label">
                    </label>                        
                        <input v-model="callee" class="form-control" value="bkocak@genband.com">
                    <label class="form-label">
                        Body
                    <p>    
                    <button class="btn btn-defult" @click="make(callee)">
                        1
                    </button>                
                    <button class="btn btn-defult" @click="make(callee)">
                        2
                    </button>    
                    <button class="btn btn-defult" @click="make(callee)">
                        3
                    </button>    
</p>
                    <p>    
                    <button class="btn btn-defult" @click="make(callee)">
                        4
                    </button>                
                    <button class="btn btn-defult" @click="make(callee)">
                        5
                    </button>    
                    <button class="btn btn-defult" @click="make(callee)">
                        6
                    </button>    
</p>
                    <p>    
                    <button class="btn btn-defult" @click="make(callee)">
                        7
                    </button>                
                    <button class="btn btn-defult" @click="make(callee)">
                        8
                    </button>    
                    <button class="btn btn-defult" @click="make(callee)">
                        9
                    </button>    
</p>

                    <p>    
                    <button class="btn btn-defult" @click="make(callee)">
                        *
                    </button>                
                    <button class="btn btn-defult" @click="make(callee)">
                        0
                    </button>    
                    <button class="btn btn-defult" @click="make(callee)">
                        #
                    </button>    
</p>

                        <textarea rows="5" class="form-control"></textarea>
                    </label>
                </div>
                <div class="modal-footer text-right">
                    <button class="btn btn-defult" @click="make(callee)">
                        Call
                    </button>                
                    <button class="btn btn-warning" @click="close()">
                        Close
                    </button>
                    <button class="btn btn-danger" @click="changeStatus()">
                        End
                    </button>
                </div>
            </div>
        </div>
    </template>

<script>
import { make } from '../vuex/actions'
export default {
computed: {
  showCallState () {
      console.log('heyo heyo heyo heyo heyo heyo heyo heyo heyo')
    return this.$store.state.calls[0].state
  }
},    
  data() {
    return {
      message: '',
      status1: ''
    };
  },      
  vuex: {
    getters: {
      activeNote: state => state.activeNote
    }, 
    actions: {
    make
    }
  },    
  props: {
    modalData: {
      type: Object,
      required: true
    }
  },
  methods: {
    close (){
      this.$emit('close')
    },
    call (callee){
console.log('aradiniz: ' + callee)
      //this.$emit('close')
    },
changeStatus() {
console.log('you call method changeStatus')    
    document.getElementById("status1").innerHTML  = "current state: " + this.$store.state.calls[0].state;
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