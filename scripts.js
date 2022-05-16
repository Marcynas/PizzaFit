
  window.onload = function(){ 
  
  document.getElementById("RegisterButton").onclick = function () {
        location.href = "/Prisijungimas/registruotis.html";
    };
    document.getElementById("LoginButton").onclick = function () {
        location.href = "/Prisijungimas/prisijungti.html";
    };
  };

  function susideti() {
    window.location.href = "/PicosSusidėjimas/picosdejimas.html";
  }
  function susidetiSvec(){
    window.location.href = "/PicosSusidėjimas/picosdejimaSvecias.html";
  }
  function pasiulymas(){
    alert("Norint tęsti, turite būti prisijungęs");
    window.location.href = "/Prisijungimas/prisijungti.html";
  }

  function pasiulymasMok(){
    window.location.href = "/PicosSusidėjimas/pratimopasirinkimas.html";
  }