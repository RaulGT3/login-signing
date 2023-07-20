
  // Event Listeners
  document.querySelector(".bpop").addEventListener("click", function() {
    document.querySelector(".signIn").classList.add("active");
  });
  
  document.querySelector(".exitb").addEventListener("click", function() {
    document.querySelector(".signIn").classList.remove("active");
  });
  
  document.querySelector(".exitbb").addEventListener("click", function() {
    document.querySelector(".reg").classList.remove("activee");
  });
  
  document.querySelector(".register").addEventListener("click", function() {
    document.querySelector(".signIn").classList.remove("active");
    document.querySelector(".reg").classList.add("activee");
  });
   const email = document.getElementById('email').value
   const password = document.getElementById('passwordreg').value
   const passwordcomf = document.getElementById('passwordcom').value
   const username = document.getElementById('username').value
  function register(){
    if(validate_email(email)==false){
      alert('your email is invalid')
    }
    if(validate_pass ==false){
      alert('your password is to short please make it longer')
    }
    if(validate_filed(username)== false|| validate_filed(email)== false ||validate_filed(passwordcomf)==false){
      alert('username is too short or one ore more filed is empty')
    }
  }
  function validate_pass(password){
    if(password.length<6){
      return false
    }else {
      return true
    }
  }
  function validate_email(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function validate_filed(username) {
    if (username == null || username.length < 3) {
      return false;
    } else {
      return true;
    }
  }
