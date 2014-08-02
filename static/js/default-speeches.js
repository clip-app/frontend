var speeches = [
  {speaker: 'Paul Graham', sayings: ['You won the hackathon!', 'That was actually your YC Interview']},
  {speaker: 'Steve Jobs', sayings: ['Stay hungry.', 'Think Different.']}
];

var randomElem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

$(document).ready(function() {
  var $speakerInput = $('#speaker');
  var $textInput    = $('#text');

  var speech  = randomElem(speeches);
  var saying = randomElem(speech.sayings);

  $speakerInput.attr('placeholder', speech.speaker);
  $textInput.attr('placeholder', saying);
});
