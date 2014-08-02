$(function(){
  if(window.location.hash) {
    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    alert(hash);
    $.get("/server", function( data ) {
      // video data here
    });
  } else {
    location.href="/"
  }
});