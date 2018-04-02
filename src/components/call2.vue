
<template>
<div id="app" class="phone">
<div class="frame">
  
<div class="bar topbar">
<div class="grid">
    <i class="icon ion-ios-circle-filled"></i>
    <i class="icon ion-ios-circle-filled"></i>
    <i class="icon ion-ios-circle-filled"></i>
    <i class="icon ion-ios-circle-filled"></i>
    <i class="icon ion-ios-circle-outline"></i>
    <span class="toptxt">HT HR</span>
    <i class="icon ion-wifi"></i>
</div>
<div class="grid txtcenter">
    <span class="toptxt">19:93</span>
</div>
<div class="grid txtright">
    <span class="toptxt">100%</span> <i class="icon ion-battery-full iconbig"></i> 
</div> 
</div>  
                   
<div class="numbers-cont">
    <div class="bar">
       
        <div class="grid">
        <div class="number-circle">
        <div class="num">1</div>
        <div class="abc"></div>
        </div>
        </div>
        
        <div class="grid">
        <div class="number-circle">
        <div class="num">2</div>
        <div class="abc">abc</div>
        </div>
        </div>
        
        <div class="grid">
        <div class="number-circle">
        <div class="num">3</div>
        <div class="abc">def</div>
        </div>
        </div>
        
        <div class="grid">
        <div class="number-circle">
        <div class="num">4</div>
        <div class="abc">ghi</div>
        </div>
        </div>
        
        <div class="grid">
        <div class="number-circle">
        <div class="num">5</div>
        <div class="abc">jkl</div>
        </div>
        </div>
        
        <div class="grid">
        <div class="number-circle">
        <div class="num">6</div>
        <div class="abc">mno</div>
        </div>
        </div>
        
        <div class="grid">
        <div class="number-circle">
        <div class="num">7</div>
        <div class="abc">pqrs</div>
        </div>
        </div>
        
        <div class="grid">
        <div class="number-circle">
        <div class="num">8</div>
        <div class="abc">tuv</div>
        </div>
        </div>
        
        <div class="grid">
        <div class="number-circle">
        <div class="num">9</div>
        <div class="abc">wxyz</div>
        </div>
        </div>
        
        <div class="grid">
        <div class="number-circle-star">
        <div class="num">*</div>
        </div>
        </div>
        
        <div class="grid">
        <div class="number-circle">
        <div class="num">0</div>
        <div class="abc">+</div>
        </div>
        </div>
        
        <div class="grid">
        <div class="number-circle-ladd">
        <div class="num">#</div>
        </div>
        </div>

           <button class="button" @click="connect()">
              Login
            </button>
           <button class="button" @click="sendMessage()">
              Send
            </button>     
           <button class="button" @click="sendMessage2()">
              Send2
            </button>     
           <button class="button" @click="getPresence()">
              Presence
            </button> 
           <button class="button" @click="presenceSubscribe()">
              Subs
            </button>   
                    
        
    </div>
    
</div>                         
                               
<div class="call-cont">
<div class="call-circle">
<i class="icon ion-ios-telephone"></i>   
</div>
</div>                                           

                    
<div class="bottom">
    <div class="grid">
        <i class="icon ion-ios-star-outline"></i>
        <div class="txt">Favorites</div>
    </div>
    <div class="grid">
        <i class="icon ion-ios-clock-outline"></i>
        <div class="txt">Recents</div>
    </div>
    <div class="grid">
        <i class="ficon ion-ios-contact-outline"></i>
        <div class="txt">Contacts</div>
    </div>
    <div class="grid active">
        <i class="icon ion-ios-keypad"></i>
        <div class="txt">Keypad</div>
    </div>
    <div class="grid">
        <i class="icon ion-android-microphone"></i>
        <div class="txt">Voicemail</div>
    </div>
</div>                                
                                                                                
</div>
</div>

</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300);

html {
    overflow-y: scroll;
    overflow: -moz-scrollbars-vertical;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    min-height: 100%;
    height: 100%;
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    height: 100%;
    background-color: #333;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #333;
    font-smooth: always;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
}
.txtright {
    text-align: right;
}

.txtcenter {
    text-align: center;
}

.phone {
    width: 300px;
    height: auto;
    background: #fff;
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #333;
}

.frame {
    width: 100%;
    height: 100%;
}

.topbar {
    font-size: 8px;
}

.toptxt {
    font-size: 11px;
    font-weight: bold;
}
.iconbig{
  font-size: 12px;
}

.bar {
    margin: 0 auto;
    padding: 2px 5px;
    width: 100%;
    display: table;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.grid {
    width: 33.333333333333%;
    margin: 0;
    float: left;
    display: inline;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.numbers-cont {
    width: 100%;
    padding: 0px 35px;
    margin-top: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.number-circle {
    -webkit-border-radius: 999px;
    -moz-border-radius: 999px;
    border-radius: 999px;
    border: 1px solid #333;
    border: 1px solid #ccc;
    width: 60px;
    height: 60px;
    line-height: 20px;
    padding-top: 10px;
    text-align: center;
    margin: 5px auto;
    background-color: transparent;
    transition-property: all .2s ease-in 0s;
    -moz-transition: all .2s ease-in 0s;
    -webkit-transition: all .2s ease-in 0s;
    -o-transition: all .2s ease-in 0s;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.number-circle .num {
    font-size: 30px;
}

.number-circle .abc {
    font-size: 10px;
    text-transform: uppercase;
}

.number-circle-star {
    -webkit-border-radius: 999px;
    -moz-border-radius: 999px;
    border-radius: 999px;
    border: 1px solid #ccc;
    width: 60px;
    height: 60px;
    line-height: 18px;
    padding-top: 24px;
    text-align: center;
    margin: 5px auto;
    background-color: transparent;
    transition-property: all .2s ease-in 0s;
    -moz-transition: all .2s ease-in 0s;
    -webkit-transition: all .2s ease-in 0s;
    -o-transition: all .2s ease-in 0s;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.number-circle-star .num {
    font-size: 30px;
}

.number-circle-ladd {
    -webkit-border-radius: 999px;
    -moz-border-radius: 999px;
    border-radius: 999px;
    border: 1px solid #ccc;
    width: 60px;
    height: 60px;
    line-height: 18px;
    padding-top: 20px;
    text-align: center;
    margin: 5px auto;
    background-color: transparent;
    transition-property: all .2s ease-in 0s;
    -moz-transition: all .2s ease-in 0s;
    -webkit-transition: all .2s ease-in 0s;
    -o-transition: all .2s ease-in 0s;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.number-circle-ladd .num {
    font-size: 30px;
}

.number-circle:hover,
.number-circle-ladd:hover,
.number-circle-star:hover {
    background: #D6CEC3;
    color: #fff;
}

.call-cont {
    width: 100%;
    text-align: center;
}

.call-circle {
    -webkit-border-radius: 999px;
    -moz-border-radius: 999px;
    border-radius: 999px;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    font-size: 40px;
    padding-top: 3px;
    color: #fff;
    background: #4CD964;
    transition-property: all .2s ease-in 0s;
    -moz-transition: all .2s ease-in 0s;
    -webkit-transition: all .2s ease-in 0s;
    -o-transition: all .2s ease-in 0s;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.call-circle:hover {
    background: #257533;
    color: #ccc;
}

.bottom {
    margin: 0 auto;
    padding: 2px 5px;
    width: 100%;
    display: table;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    margin-top: 5px;
    font-size: 23px;
    line-height: 15px;
}

.bottom .grid {
    width: 20%;
    margin: 0;
    float: left;
    display: inline;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.bottom .grid.active {
    color: #1D62F0;
}

.bottom .txt {
    font-size: 11px;
}
</style>