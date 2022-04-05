
  window.onload = function(){ 
  
  document.getElementById("RegisterButton").onclick = function () {
        location.href = "/Prisijungimas/registruotis.html";
    };
    document.getElementById("LoginButton").onclick = function () {
        location.href = "/Prisijungimas/prisijungti.html";
    };
    document.getElementById("BackHomeButton").onclick = function () {
        console.log("BackHomeButton");
    };

  };