var speakers = speeches.map(function(item) {
  return item.speaker;
});

$('#speaker').typeahead({
  source: speakers,
  matcher: function(current_item) {
    speakers.forEach(function(current_speaker_item) {
      return current_speaker_item.toLowerCase()
             .indexOf(current_item.toLowerCase()) > -1;
    });
  }
});
