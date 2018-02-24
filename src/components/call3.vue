<template>
<div clas="modal-container">
<div id="keypad">
  <div class="key" id="k7">7</div>
  <div class="key" id="k8">8</div>
  <div class="key" id="k9">9</div>
  <br>
  <div class="key" id="k4">4</div>
  <div class="key" id="k5">5</div>
  <div class="key" id="k6">6</div>
  <br>
  <div class="key" id="k1">1</div>
  <div class="key" id="k2">2</div>
  <div class="key" id="k3">3</div>
  <br>
  <div class="key" id="k0">*</div>
  <div class="key" id="k0">0</div> 
  <div class="key" id="k0">#</div>  
</div>
</div>
</template>
<script>
 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});

</script>
<style scoped>
body {
 font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
 font-weight: 300;
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

.keypad{
  text-align: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

div.key {
  display: flex;
  font-size: 12vw;
  width: 15vw;
  height: 15vw;
  display: inline-block;
  border: 3px solid rgba(0, 80, 0, 0.5);
  border-radius: 10px;
  margin: 1vw 0.3vw 1vw 0.3vw;
  text-align: center;
  line-height: 15vw;
  color: rgba(0, 80, 0, 0.5);
  background-color: rgba(0, 100, 0, 0.15);
  -webkit-transition: all 1s;
}

div.key:hover {
	color: rgba(0, 50, 0, 1);
  border: 3px solid rgba(0, 50, 0, 1);
  background-color: rgba(0, 100, 0, 0.5);
  cursor: pointer;
}
</style>