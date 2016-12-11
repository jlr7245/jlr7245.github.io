/* jshint maxerr: 2000 */
///// APP.JS
console.log('game.js is connected');

class Game {
  constructor() {
    this.guesses = null;
    this.guessedLetters = null;
    this.currentWord = null;
  //Put attributes here!
  }
  //Go to town on those methods below!
  startGame(theWord) {
    this.guesses = 8;
    this.guessedLetters = [];
    this.currentWord = new Word(theWord);
  }
  
  guess(theGuess) {
    var guessMsg;
    if (this.guesses <= 8 && (this.guessedLetters.indexOf(theGuess) == -1)) {
      this.guessedLetters.push(theGuess);
      if (this.currentWord.try(theGuess) === true) {
        guessMsg = `Good guess! ${ theGuess } is in the phrase. You have ${ this.guesses } guesses left.`;
        } else {
          this.guesses--;
          guessMsg = `Oh no! ${ theGuess } is not in the phrase. You have ${ this.guesses } guesses left.`;
        }
    } else guessMsg = `You've already guessed ${ theGuess }!`;
    return guessMsg;
  }
  
  isOver() {
    let isItOver = false;
    if (this.guesses === 0) isItOver = true;
     else if (this.currentWord.isFound() === true) isItOver = true;
    return isItOver;
  }
  
  overMessage() {
    let theMessage;
    if (this.guesses === 0) {
      theMessage = 'Sorry, you lost!';
    } else if ((this.currentWord.isFound() === true) && (this.guesses !== 0)) theMessage = "YAY!! You won!!";
    return theMessage;
  }
  
}
