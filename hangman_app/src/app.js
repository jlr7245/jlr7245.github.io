/*jshint maxerr: 2000*/

console.log('app.js is connected!');

var renderPara = document.getElementById('renderp');
var guessMessage = document.getElementById('guessmessage');
let game = new Game();

let possiblePhrases = [
  "I have to change my approach, look at the world from a different perspective, with a different logic and with fresh methods of cognition and verification.",
  "Call me Ishmael. Some years ago, I thought I would sail about a little and see the watery part of the world.",
  "Does this Aleph exist in the heart of a stone?",
  "The city, however, does not tell its past, but contains it like the lines of a hand.",
  "O God, I could be bounded in a nut shell and count myself a king of infinite space, were it not that I have bad dreams.",
  "Though my soul may set in darkness, it will rise in perfect light / I have loved the stars too fondly to be fearful of the night.",
  "For most of us, this is the aim / Never here to be realized; / Who are only undefeated / Because we have gone on trying...",
  "Others have seen what is and asked why. I have seen what could be and asked why not?",
  "Who are we, who is each one of us, if not a combinatoria of experiences, information, books we have read, things imagined?",
  "Anyone could have the harmony if they would leave us the counterpoint."
  ];
  

  


function startTheHangman() {
  console.log('The game has been started!');
  let thePhrase = possiblePhrases[Math.floor(Math.random() * possiblePhrases.length)];
  game.startGame(thePhrase);
  renderPara.innerHTML = game.currentWord.render();
}

function guessButton() {
  let guessVal = document.getElementById('theguess').value;
  guessMessage.innerHTML = game.guess(guessVal);
  renderPara.innerHTML = game.currentWord.render();
}

window.onload = function() {
  startTheHangman();
};


