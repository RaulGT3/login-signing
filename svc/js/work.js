
  // Event Listeners

  
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

document.querySelector(".register").addEventListener("click", function() {
  document.querySelector(".signIn").classList.remove("active");
  document.querySelector(".reg").classList.add("activee");
});

document.querySelector(".bpop").addEventListener("click", function() {
  var regElement = document.querySelector(".reg");
  
  if (regElement.classList.contains("activee")) {
      regElement.classList.remove("activee");
      document.querySelector(".signIn").classList.add("active");
  } else {
      document.querySelector(".signIn").classList.add("active");
  }
});

