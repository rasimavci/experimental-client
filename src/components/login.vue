<template>
<div class="wrapper">
	<img class="media-object pull-center" src='/images/kandylogo.png'>		
	<div class="container">
		<h1>Kandy Client</h1>
    
		<form class="form">
			<input type="text" v-model="username" placeholder="Username">
			<input type="password" v-model="password" placeholder="Password">
			<button type="submit" id="login-button" @click="Connect">Login</button>
		</form>
	</div>

</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    count () {
      return this.$store.state.isConnected
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    }

    // ...mapGetters({
    //   myState: 'getMyState'
    // })
    //   ...mapState({
  //     isConnected: state => this.$store.state.isConnected,
  //   })
  },  
//   const store = this.$store

//   store.watch(// getter here, () => {
//   // Callback here
// })  
  // not worked
  watch: {
  count (newCount, oldCount) {
      // Our fancy notification (2).
    if(newCount === true) {
      this.$router.push('lists')
    console.log('isconected ' + newCount)
    console.log(`We have ${newCount} fruits now, yaay!`)
    }
  }
  },
  data: () => ({
        username: '',
        password: ''
  }),	
   methods: {
       //...mapActions(['hold','unhold','mute','unmute','call','join','directTransfer','end','updateActiveCall', 'toggleActiveVideoCall', 'toggleActiveCall', 'setIncomingCall']),
	   
    Connect () {
      let mystate = this.$store.state.isConnected
      this.$store.dispatch('connect', {
        username: this.username,
        password: this.password
      });
    },

   }
}

 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});

</script>
<style scoped>@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300);
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: 300;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: 300;
}
body ::-webkit-input-placeholder {
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: 300;
}
body :-moz-placeholder {
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
body ::-moz-placeholder {
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
body :-ms-input-placeholder {
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: 300;
}
.wrapper {
  background: #50a3a2;
  background: -webkit-linear-gradient(top left,#50a3a2 0%,#53e3a6 100%);
  background: -moz-linear-gradient(top left,#50a3a2 0%,#53e3a6 100%);
  background: -o-linear-gradient(top left,#50a3a2 0%,#53e3a6 100%);
  background: linear-gradient(to bottom right,#50a3a2 0%,#53e3a6 100%);
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1000px;
  margin-top: -200px;
  overflow: hidden;
}
.wrapper.form-success .container h1 {
  transform: translateY(85px);
}
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 0;
  height: 400px;
  text-align: center;
}
.container h1 {
  font-size: 40px;
  transition-duration: 1s;
  transition-timing-function: ease-in-put;
  font-weight: 200;
}
form {
  padding: 20px 0;
  position: relative;
  z-index: 2;
}
form input {
  display: block;
  appearance: none;
  outline: 0;
  border: 1px solid rgba(255,255,255,0.4);
  background-color: rgba(255,255,255,0.2);
  width: 250px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  text-align: center;
  font-size: 18px;
  color: white;
  transition-duration: 0.25s;
  font-weight: 300;
}
form input:hover {
  background-color: rgba(255,255,255,0.4);
}
form input:focus {
  background-color: white;
  width: 300px;
  color: #53e3a6;
}
form button {
  appearance: none;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #53e3a6;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
}
form button:hover {
  background-color: #f5f7f9;
}
@-webkit-keyframes square {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
  }
}
@keyframes square {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
  }
}

</style>