$(function(){
  $("#generate").click(function(){
    var entity = $("#entity").value();
    var content = $("#content").value();
    $.get('/server', function( data ) {
      location.href="video.html#"+data;
    });
  });
});
