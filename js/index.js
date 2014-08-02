$(function(){
  $("#generate").click(function(){
    var entity = $("#entity").val();
    var content = $("#content").val();
    $.get('/server', function( data ) {
      location.href="video.html#"+data;
    });
  });
});
