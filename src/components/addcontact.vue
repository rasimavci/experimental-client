<template>
<div class="container">
  <div class="ct-header">
    <i class="ion-ios-person"></i>
    <h1>New Account</h1>
  </div>
  <div class="body">
    <div class="control">
      <label for="name">Name</label>
      <input type="text" id="name" />
    </div>
    <div class="control">
      <label for="email">E-mail</label>
      <input type="text" id="email" />
    </div>
    <div class="control">
      <label for="password">Password</label>
      <input type="password" id="password" />
    </div>
  </div>
    <button class="btn-account">
      <i class="ion-ios-checkmark-outline"></i>
      Create Account
    </button>
  </div>
</div>
</template>
<script>
//https://codepen.io/thiagoz/pen/EwOavG
//uses  jquery.min.js
//https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js
$("#showMenu, #close").on("click", () => {
  $(".menu").toggleClass("open");
});
</script>
<style scoped>
* {
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

body {
  margin: 0;
  background: #f7f7f7;
}

a {
  text-decoration: none;
}

.header {
  background: #fff;
  display: flex;
  justify-content: space-between;
  
  .tog-menu {
    a {
      color: #5C4B51;
      font-size: 26px;
      padding: 15px;
      display: flex;
      align-items: center;

      &:hover {
        background: #5C4B51;
        color: #fff;
      }
    }
  }
}

.actions {
  display: flex;
  align-items: center;
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;    
    display: flex;
    align-items: center;
    
    li {
      .separator {
        height: 20px;
        border-left: 1px solid rgba(191, 191, 191, 0.29);
        box-shadow: 1px 0 #fff;
      }
      
      a {
        color: #5C4B51;
        font-size: 13px;
        display: flex;
        align-items: center;
        position: relative;
        
        &:hover {
          color: #8CBEB2;
        }
        
        .badge {
          position: absolute;
          background: #F06060;
          color: #fff;
          font-size: 10px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 0;
          right: 0;
        }
        
        i {
          font-size: 25px;
          margin: 0 10px;
        }
      }
    }
  }
}

.container {
  width: 500px;
  margin: 50px auto;
  box-shadow: 0px 0px 18px #ccc;
  border-radius: 8px;
  background: #fff;
  
  .ct-header {
    padding: 10px;
    background: #f7f7f7;
    display: flex;
    align-items: center;
    border-radius: 8px 8px 0 0;
    justify-content: center;
    
    i {
      font-size: 35px;
      margin-right: 10px;
      color: #868686;
    }
    
    h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 400;
      color: #868686;
    }
  }
  
  .body {
    padding: 20px;
    
    .control {
      margin-bottom: 10px;
      
      label {
        display: block;
        margin-bottom: 5px;
        color: #9a9a9a;
      }
      
      input {
        width: 100%;
        padding: 12px;
        border: 2px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: border ease-in .5s;
        
        &:focus {
          border: 2px solid #097146;
        }
      }
    }
  }
  
  .actions {
    padding: 20px;
  }
}

.btn-account {
  padding: 5px;
  border: 0;
  font-size: 16px;
  background: linear-gradient(to bottom right, #5baf9b 0%, #8CBEB2 70%);
  border-radius: 5px;
  color: #fff;
  font-weight: 300;
  display: flex;
  align-items: center;
  outline: none;
  width: 100%;
  justify-content: center;
  transition: all ease-in .3s;
  
  &:hover {
    box-shadow: 0px 0px 0px 4px rgba(21, 241, 68, 0.17);
  }
  
  i {
    font-size: 30px;
    margin-right: 10px;
  }
}

.menu {
  background: #f7f7f7;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  box-shadow: 0px 0px 13px #ccc;
  transform: translate3d(-110%, 0, 0);
  transition: transform ease-in .3s;
  
  &.open {
    transform: translate3d(0,0,0);
  }
  
  .header-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #5C4B51;
    color: #fff;
    padding: 15px;
    
    a {
      color: #fff;
    }
    
    h4 {
      margin:0;
      font-weight: 400;
    }
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      
      a {
        padding: 5px 15px;
        font-size: 13px;
        display: block;
        text-decoration: none;
        color: #868686;
        display: flex;
        align-items: center;
        
        i {
          font-size: 27px;
          margin-right: 10px;
          color: #F16F61;
        }
        
        &:hover {
          background: #efefef;
        }
        
        &.active {
          background: #efefef;
          border-right: 3px solid #5C4B51;
        }
      }
    }
  }
}
<style>